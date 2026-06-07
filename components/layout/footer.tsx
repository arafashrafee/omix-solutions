import Link from "next/link";
import Image from "next/image";
import { siteConfig, services } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";

const footerServices = services.slice(0, 6);

export default function Footer() {
  return (
    <footer className="bg-[#050d1a] text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt={siteConfig.name}
              width={160}
              height={40}
              className="h-10 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              {siteConfig.tagline}. We craft digital experiences that drive
              growth and transform businesses.
            </p>
            <div className="mt-6 flex gap-3">
              {Object.entries(siteConfig.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-500 transition-all hover:bg-cyan-500/10 hover:text-cyan-400"
                  aria-label={`Follow us on ${platform}`}
                >
                  <span className="text-xs font-semibold uppercase">
                    {platform[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-slate-500 transition-colors hover:text-cyan-400"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/portfolio", label: "Our Work" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-cyan-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[\s-]/g, "")}`}
                  className="flex items-start gap-3 text-sm text-slate-500 transition-colors hover:text-cyan-400"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-3 text-sm text-slate-500 transition-colors hover:text-cyan-400"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {siteConfig.contact.address}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-8">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-slate-600 transition-colors hover:text-slate-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-slate-600 transition-colors hover:text-slate-400"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
