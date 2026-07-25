import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useSeo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { SpecTable } from "@/components/SpecTable";
import { PRODUCTS } from "@/lib/data";

const ACCENT_MAP = {
  brand: { bg: "bg-brand-50", text: "text-brand-600", chip: "bg-brand-50 text-brand-700" },
  navy: { bg: "bg-navy-100", text: "text-navy-700", chip: "bg-navy-100 text-navy-700" },
  amber: { bg: "bg-amber-50", text: "text-amber-600", chip: "bg-amber-50 text-amber-700" },
} as const;

const SYSTEM_ARCHITECTURES: Record<string, { nodes: readonly string[]; control: string }> = {
  powerbuffer: {
    nodes: ["Grid / Site Load", "LV or MV Transformer", "Bidirectional Grid-Forming PCS", "PowerBuffer BESS"],
    control: "EMS controls peak shaving, ramp-rate support, islanding and black start.",
  },
  resiliencestore: {
    nodes: ["Utility Grid", "MV Switchgear & Transformer", "Grid-Forming PCS", "ResilienceStore BESS", "Critical Loads"],
    control: "Redundant EMS and microgrid controller coordinate grid-connected and islanded operation.",
  },
  hybridpower: {
    nodes: ["Solar PV + Grid", "Generator / Fuel Cell", "Microgrid AC Bus & PCS", "HybridPower BESS", "Critical Load"],
    control: "Microgrid EMS coordinates generation, storage, grid services and resilient power delivery.",
  },
};

export function SolutionsPage() {
  useSeo({
    title: "Solutions — EBenergy",
    description: "PowerBuffer for peak shaving, ResilienceStore for backup and microgrid islanding, and HybridPower for solar-plus-storage. Compare specifications.",
  });

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 to-white">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
        <div className="container-content relative py-16 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Solutions</span>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-tight text-ink-900 sm:text-5xl lg:text-6xl">Storage engineered for your load</h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-ink-600">
              Three platforms covering peak shaving, resilience, and hybrid generation — each modular, LFP-based, and engineered around your project requirements.
            </p>
          </Reveal>
        </div>
      </section>

      {PRODUCTS.map((product, idx) => {
        const a = ACCENT_MAP[product.accent];
        const reversed = idx % 2 === 1;

        return (
          <section key={product.slug} id={product.slug} className={`section-y scroll-mt-24 ${idx % 2 === 1 ? "bg-ink-50/50" : "bg-white"}`}>
            <div className="container-content">
              <div className={`grid items-start gap-10 lg:grid-cols-2 lg:gap-16 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <Reveal>
                  <div className="relative mb-6 h-56 overflow-hidden rounded-2xl bg-ink-100 sm:h-64">
                    <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="font-display text-xl font-bold">{product.name}</p>
                      <p className="mt-0.5 text-sm text-white/85">{product.tagline}</p>
                    </div>
                  </div>
                  <SystemArchitecture
                    nodes={SYSTEM_ARCHITECTURES[product.slug].nodes}
                    control={SYSTEM_ARCHITECTURES[product.slug].control}
                  />
                  <h2 className="font-display text-3xl font-bold text-ink-900 sm:text-4xl">{product.name}</h2>
                  <p className={`mt-2 text-sm font-semibold ${a.text}`}>{product.tagline}</p>
                  <p className="mt-5 text-pretty text-base leading-relaxed text-ink-600">{product.description}</p>
                  <ul className="mt-7 space-y-3">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-ink-700">
                        <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${a.text}`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">Typical configurations</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {product.configs.map((c) => (
                        <span key={c} className="rounded-full bg-ink-100 px-3 py-1 font-mono text-xs font-medium text-ink-700">{c}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">Ideal for</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {product.useCases.map((u) => (
                        <span key={u} className={`rounded-full px-3 py-1 text-xs font-medium ${a.chip}`}>{u}</span>
                      ))}
                    </div>
                  </div>
                  <Link to="/contact" className="btn-primary mt-8">
                    Contact us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Reveal>
                <div>
                  <SpecTable specs={product.specs} />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CtaBand />
    </>
  );
}

function SystemArchitecture({ nodes, control }: { nodes: readonly string[]; control: string }) {
  return (
    <div className="mb-8 rounded-2xl border border-ink-100 bg-ink-50/70 p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">System architecture</p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {nodes.map((node, index) => (
          <div key={node} className="contents">
            <span className="rounded-lg border border-ink-200 bg-white px-3 py-2 text-xs font-semibold text-ink-800 shadow-sm">
              {node}
            </span>
            {index < nodes.length - 1 && <ArrowRight className="h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />}
          </div>
        ))}
      </div>
      <p className="mt-4 border-l-2 border-brand-400 pl-3 text-xs leading-relaxed text-ink-600">{control}</p>
    </div>
  );
}
