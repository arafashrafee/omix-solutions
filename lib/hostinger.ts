const HOSTINGER_API_BASE = "https://developers.hostinger.com";

export interface DomainAvailability {
  domain: string;
  is_available: boolean;
  is_alternative?: boolean;
  restriction?: string | null;
}

export interface CatalogPrice {
  id: string;
  name: string;
  currency: string;
  price: number;
  first_period_price: number;
  period: number;
  period_unit: string;
}

export interface CatalogItem {
  id: string;
  name: string;
  category: string;
  prices: CatalogPrice[];
}

function getApiToken(): string | undefined {
  return process.env.HOSTINGER_API_TOKEN;
}

async function hostingerFetch<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const token = getApiToken();
  if (!token) {
    throw new Error("HOSTINGER_API_TOKEN is not configured");
  }

  const response = await fetch(`${HOSTINGER_API_BASE}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...options?.headers,
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Hostinger API error (${response.status}): ${body}`);
  }

  return response.json() as Promise<T>;
}

export async function checkDomainAvailability(
  domain: string,
  tlds: string[],
  withAlternatives = false
): Promise<DomainAvailability[]> {
  return hostingerFetch<DomainAvailability[]>("/api/domains/v1/availability", {
    method: "POST",
    body: JSON.stringify({
      domain,
      tlds,
      with_alternatives: withAlternatives,
    }),
  });
}

export async function getDomainCatalog(
  tld: string
): Promise<CatalogItem | null> {
  const name = `.${tld.toUpperCase()}*`;
  const items = await hostingerFetch<CatalogItem[]>(
    `/api/billing/v1/catalog?category=DOMAIN&name=${encodeURIComponent(name)}`
  );

  const exact = items.find((item) =>
    item.name.toLowerCase().startsWith(`.${tld.toLowerCase()} domain`)
  );

  return exact ?? items[0] ?? null;
}

export function getFirstYearDomainUsd(item: CatalogItem): number | null {
  const yearly = item.prices.find(
    (p) => p.period === 1 && p.period_unit === "year"
  );
  if (!yearly) return null;
  const cents = yearly.first_period_price || yearly.price;
  return cents / 100;
}

/** Fallback USD prices when Hostinger API is unavailable. */
export const DOMAIN_USD_FALLBACK: Record<string, number> = {
  com: 9.99,
  net: 12.99,
  org: 11.99,
  io: 39.99,
  co: 9.99,
  info: 3.99,
  biz: 15.99,
};
