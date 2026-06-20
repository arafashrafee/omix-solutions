import { NextResponse } from "next/server";
import {
  checkDomainAvailability,
  DOMAIN_USD_FALLBACK,
  getDomainCatalog,
  getFirstYearDomainUsd,
} from "@/lib/hostinger";
import { BDT_RATE, DEFAULT_DOMAIN_TLDS } from "@/lib/pricing";

export interface DomainSearchResult {
  domain: string;
  tld: string;
  available: boolean;
  usdPrice: number;
  bdtPrice: number;
  source: "hostinger" | "estimate";
}

function normalizeDomainInput(input: string): { name: string; tld?: string } {
  const cleaned = input.trim().toLowerCase().replace(/^https?:\/\//, "");
  const withoutWww = cleaned.replace(/^www\./, "");
  const parts = withoutWww.split(".").filter(Boolean);

  if (parts.length >= 2) {
    return {
      name: parts.slice(0, -1).join("."),
      tld: parts[parts.length - 1],
    };
  }

  return { name: parts[0] ?? "" };
}

async function getDomainPrice(
  tld: string
): Promise<{ usd: number; source: "hostinger" | "estimate" }> {
  try {
    const catalog = await getDomainCatalog(tld);
    if (catalog) {
      const usd = getFirstYearDomainUsd(catalog);
      if (usd !== null) {
        return { usd, source: "hostinger" };
      }
    }
  } catch {
    // Fall through to static estimates.
  }

  return {
    usd: DOMAIN_USD_FALLBACK[tld] ?? 12.99,
    source: "estimate",
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim() ?? "";
  const tldsParam = searchParams.get("tlds");

  if (!query) {
    return NextResponse.json(
      { error: "Domain name is required." },
      { status: 400 }
    );
  }

  const { name, tld: inlineTld } = normalizeDomainInput(query);
  if (!name || !/^[a-z0-9-]+$/i.test(name.replace(/\./g, ""))) {
    return NextResponse.json(
      { error: "Please enter a valid domain name." },
      { status: 400 }
    );
  }

  const tlds = tldsParam
    ? tldsParam.split(",").map((t) => t.trim().replace(/^\./, ""))
    : inlineTld
      ? [inlineTld]
      : DEFAULT_DOMAIN_TLDS;

  let availability: Array<{
    domain: string;
    is_available: boolean;
  }> = [];

  try {
    const results = await checkDomainAvailability(name, tlds);
    availability = results.map((r) => ({
      domain: r.domain,
      is_available: r.is_available,
    }));
  } catch {
    availability = tlds.map((tld) => ({
      domain: `${name}.${tld}`,
      is_available: true,
    }));
  }

  const results: DomainSearchResult[] = await Promise.all(
    availability.map(async (item) => {
      const tld = item.domain.split(".").pop() ?? "com";
      const { usd, source } = await getDomainPrice(tld);
      const bdtPrice = Math.round(usd * BDT_RATE);

      return {
        domain: item.domain,
        tld,
        available: item.is_available,
        usdPrice: usd,
        bdtPrice,
        source,
      };
    })
  );

  return NextResponse.json({ results, rate: BDT_RATE });
}
