export const BDT_RATE = 129;

export const DEVELOPMENT_FEE_MIN = 20_000;

export type HostingType = "shared" | "personal";
export type HostingPeriod = "6m" | "1y" | "2y" | "3y";

export const HOSTING_TYPE_LABELS: Record<HostingType, string> = {
  shared: "Shared Cloud",
  personal: "Personal (Hostinger)",
};

export const SHARED_HOSTING_PRICES: Record<
  HostingPeriod,
  { label: string; price: number }
> = {
  "6m": { label: "6 months (Shared)", price: 4_000 },
  "1y": { label: "1 year (Shared)", price: 7_500 },
  "2y": { label: "2 years (Shared)", price: 14_500 },
  "3y": { label: "3 years (Shared)", price: 21_000 },
};

/** Hostinger Premium web hosting USD prices (fallback when API has no hosting catalog). */
export const PERSONAL_HOSTING_USD: Record<HostingPeriod, number> = {
  "6m": 17.94,
  "1y": 35.88,
  "2y": 59.76,
  "3y": 89.64,
};

export const DEFAULT_DOMAIN_TLDS = ["com", "net", "org", "io", "co"];

export function usdToBdt(usd: number): number {
  return Math.round(usd * BDT_RATE);
}

export function centsToUsd(cents: number): number {
  return cents / 100;
}

export function formatBdt(amount: number): string {
  return `৳${amount.toLocaleString("en-BD")}`;
}

export function personalHostingBdt(period: HostingPeriod): number {
  return usdToBdt(PERSONAL_HOSTING_USD[period]);
}
