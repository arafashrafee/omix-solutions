"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Calculator,
  ChevronDown,
  Cloud,
  Globe,
  Loader2,
  Search,
  Server,
  Code2,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/motion";
import { cn } from "@/lib/utils";
import {
  DEVELOPMENT_FEE_MIN,
  formatBdt,
  HOSTING_TYPE_LABELS,
  personalHostingBdt,
  SHARED_HOSTING_PRICES,
  type HostingPeriod,
  type HostingType,
} from "@/lib/pricing";

interface DomainSearchResult {
  domain: string;
  tld: string;
  available: boolean;
  usdPrice: number;
  bdtPrice: number;
  source: "hostinger" | "estimate";
}

const HOSTING_PERIODS: HostingPeriod[] = ["6m", "1y", "2y", "3y"];

const selectClassName =
  "mt-2 block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-colors focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 focus:outline-none appearance-none";

const inputClassName =
  "mt-2 block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 focus:outline-none";

export default function CloudStartupCalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [hostingType, setHostingType] = useState<HostingType>("shared");
  const [hostingPeriod, setHostingPeriod] = useState<HostingPeriod>("1y");
  const [includeDomain, setIncludeDomain] = useState(false);
  const [domainQuery, setDomainQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState<DomainSearchResult | null>(
    null
  );
  const [domainResults, setDomainResults] = useState<DomainSearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  const hostingPrice = useMemo(() => {
    if (hostingType === "shared") {
      return SHARED_HOSTING_PRICES[hostingPeriod].price;
    }
    return personalHostingBdt(hostingPeriod);
  }, [hostingType, hostingPeriod]);

  const domainPrice = includeDomain && selectedDomain ? selectedDomain.bdtPrice : 0;

  const total = hostingPrice + domainPrice + DEVELOPMENT_FEE_MIN;

  const searchDomains = useCallback(async (query: string) => {
    const trimmed = query.trim();
    if (!trimmed) {
      setDomainResults([]);
      setSearchError(null);
      return;
    }

    setIsSearching(true);
    setSearchError(null);

    try {
      const response = await fetch(
        `/api/domains/search?q=${encodeURIComponent(trimmed)}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Domain search failed.");
      }

      setDomainResults(data.results ?? []);
      const firstAvailable = (data.results as DomainSearchResult[]).find(
        (r) => r.available
      );
      if (firstAvailable) {
        setSelectedDomain(firstAvailable);
      }
    } catch (error) {
      setSearchError(
        error instanceof Error ? error.message : "Could not search domains."
      );
      setDomainResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  useEffect(() => {
    if (!includeDomain || !domainQuery.trim()) {
      setDomainResults([]);
      setSelectedDomain(null);
      return;
    }

    const timer = setTimeout(() => {
      searchDomains(domainQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [domainQuery, includeDomain, searchDomains]);

  return (
    <section className="bg-[#111827] py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#151c2b]">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-white/[0.02] sm:p-8"
              aria-expanded={isOpen}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                  <Calculator className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                    Pricing Calculator
                  </span>
                  <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl font-heading">
                    Shared Cloud Startup
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
                    20X more power for your websites with Cloud hosting
                  </p>
                </div>
              </div>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>

            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="border-t border-white/5 px-6 pb-8 pt-6 sm:px-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Hosting */}
                    <div className="rounded-xl border border-white/5 bg-[#111827]/60 p-5">
                      <div className="flex items-center gap-2 text-cyan-400">
                        <Server className="h-4 w-4" />
                        <span className="text-sm font-medium">Hosting</span>
                      </div>

                      <label htmlFor="hosting-type" className="mt-4 block text-sm font-medium text-slate-300">
                        Plan type
                      </label>
                      <select
                        id="hosting-type"
                        value={hostingType}
                        onChange={(e) => setHostingType(e.target.value as HostingType)}
                        className={selectClassName}
                      >
                        {Object.entries(HOSTING_TYPE_LABELS).map(([value, label]) => (
                          <option key={value} value={value} className="bg-[#111827]">
                            {label}
                          </option>
                        ))}
                      </select>

                      <label htmlFor="hosting-period" className="mt-4 block text-sm font-medium text-slate-300">
                        Duration
                      </label>
                      <select
                        id="hosting-period"
                        value={hostingPeriod}
                        onChange={(e) => setHostingPeriod(e.target.value as HostingPeriod)}
                        className={selectClassName}
                      >
                        {HOSTING_PERIODS.map((period) => {
                          const shared = SHARED_HOSTING_PRICES[period];
                          const price =
                            hostingType === "shared"
                              ? shared.price
                              : personalHostingBdt(period);
                          return (
                            <option key={period} value={period} className="bg-[#111827]">
                              {shared.label.replace(" (Shared)", "")} — {formatBdt(price)}
                            </option>
                          );
                        })}
                      </select>

                      <p className="mt-3 text-xs text-slate-500">
                        {hostingType === "personal"
                          ? "Personal hosting priced at Hostinger rate × ৳129"
                          : "Shared cloud hosting with fixed OMIX pricing"}
                      </p>
                    </div>

                    {/* Domain */}
                    <div className="rounded-xl border border-white/5 bg-[#111827]/60 p-5">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 text-cyan-400">
                          <Globe className="h-4 w-4" />
                          <span className="text-sm font-medium">Domain</span>
                        </div>
                        <label className="flex cursor-pointer items-center gap-2 text-xs text-slate-400">
                          <input
                            type="checkbox"
                            checked={includeDomain}
                            onChange={(e) => {
                              setIncludeDomain(e.target.checked);
                              if (!e.target.checked) {
                                setSelectedDomain(null);
                                setDomainResults([]);
                              }
                            }}
                            className="rounded border-white/20 bg-white/5 text-cyan-500 focus:ring-cyan-500/20"
                          />
                          Include domain
                        </label>
                      </div>

                      {includeDomain && (
                        <>
                          <label htmlFor="domain-search" className="mt-4 block text-sm font-medium text-slate-300">
                            Search domain
                          </label>
                          <div className="relative">
                            <Search className="pointer-events-none absolute left-3 top-1/2 mt-1 h-4 w-4 -translate-y-1/2 text-slate-500" />
                            <input
                              id="domain-search"
                              type="text"
                              value={domainQuery}
                              onChange={(e) => setDomainQuery(e.target.value)}
                              placeholder="e.g. mybusiness or mybusiness.com"
                              className={cn(inputClassName, "pl-10")}
                            />
                            {isSearching && (
                              <Loader2 className="absolute right-3 top-1/2 mt-1 h-4 w-4 -translate-y-1/2 animate-spin text-cyan-400" />
                            )}
                          </div>

                          {searchError && (
                            <p className="mt-2 text-xs text-red-400">{searchError}</p>
                          )}

                          {domainResults.length > 0 && (
                            <div className="mt-3 max-h-40 space-y-1 overflow-y-auto rounded-lg border border-white/5 bg-[#0a0f1a]/80 p-1">
                              {domainResults.map((result) => (
                                <button
                                  key={result.domain}
                                  type="button"
                                  onClick={() => setSelectedDomain(result)}
                                  className={cn(
                                    "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-xs transition-colors",
                                    selectedDomain?.domain === result.domain
                                      ? "bg-cyan-500/10 text-cyan-300"
                                      : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                                  )}
                                >
                                  <span>
                                    {result.domain}{" "}
                                    <span
                                      className={
                                        result.available
                                          ? "text-emerald-400"
                                          : "text-red-400"
                                      }
                                    >
                                      {result.available ? "available" : "taken"}
                                    </span>
                                  </span>
                                  <span className="font-medium text-white">
                                    {formatBdt(result.bdtPrice)}
                                  </span>
                                </button>
                              ))}
                            </div>
                          )}

                          <p className="mt-3 text-xs text-slate-500">
                            Domain pricing from Hostinger × ৳129
                            {selectedDomain?.source === "estimate" && " (estimated)"}
                          </p>
                        </>
                      )}

                      {!includeDomain && (
                        <p className="mt-4 text-sm text-slate-500">
                          Already have a domain? Leave this unchecked.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Development fee */}
                  <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/5 bg-[#111827]/60 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                      <Code2 className="h-4 w-4 text-slate-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">Development fee</p>
                      <p className="text-xs text-slate-500">Website design & development</p>
                    </div>
                    <p className="text-sm font-semibold text-cyan-400">
                      from {formatBdt(DEVELOPMENT_FEE_MIN)}
                    </p>
                  </div>

                  {/* Total */}
                  <div className="mt-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-6">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <Cloud className="h-4 w-4" />
                      <span className="text-sm font-medium">Estimated total</span>
                    </div>

                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between text-slate-400">
                        <span>
                          Hosting ({hostingType === "shared" ? "Shared" : "Personal"},{" "}
                          {SHARED_HOSTING_PRICES[hostingPeriod].label.replace(" (Shared)", "")})
                        </span>
                        <span className="text-white">{formatBdt(hostingPrice)}</span>
                      </div>
                      {includeDomain && selectedDomain && (
                        <div className="flex justify-between text-slate-400">
                          <span>Domain ({selectedDomain.domain})</span>
                          <span className="text-white">{formatBdt(domainPrice)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-slate-400">
                        <span>Development (starting)</span>
                        <span className="text-white">{formatBdt(DEVELOPMENT_FEE_MIN)}</span>
                      </div>
                      <div className="border-t border-white/10 pt-3">
                        <div className="flex justify-between">
                          <span className="font-semibold text-white">Total estimate</span>
                          <span className="text-2xl font-bold text-cyan-400">
                            {formatBdt(total)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-xs text-slate-500">
                      Final pricing may vary based on project scope. Personal hosting and
                      domain prices are calculated from Hostinger rates at ৳129 per USD.
                    </p>

                    <Link
                      href="/contact"
                      className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-900 transition-all hover:bg-cyan-400 sm:w-auto"
                    >
                      Get a custom quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
