import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { SITE, NAV_LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-800 text-navy-100">
      <div className="container-content py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block" aria-label="EBenergy home">
              <Logo className="h-12 w-auto" variant="white" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-200/80">
              {SITE.description}
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-navy-100 transition-colors hover:text-white">
                <Mail className="h-4 w-4 text-brand-400" />
                {SITE.email}
              </a>
              <a href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-3 text-navy-100 transition-colors hover:text-white">
                <Phone className="h-4 w-4 text-brand-400" />
                {SITE.phone}
              </a>
              <p className="flex items-start gap-3 text-navy-100">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>
                  {SITE.address.line1}<br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-200/60">Explore</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-navy-100 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-200/60">Get started</h3>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300">
              Contact us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-navy-700 pt-8 text-xs text-navy-300/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} EBenergy, Inc. All rights reserved.</p>
          <p className="text-navy-300/50">Engineering energy security for a renewable grid.</p>
        </div>
      </div>
    </footer>
  );
}
