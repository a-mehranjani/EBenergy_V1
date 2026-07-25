import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, TrendingDown, Leaf, Clock, Plug } from "lucide-react";
import { useSeo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { PRODUCTS } from "@/lib/data";
import { IMAGES } from "@/lib/images";

const BENEFITS = [
  { icon: TrendingDown, title: "Cut demand charges", text: "Peak-shaving algorithms reduce your facility's peak draw, lowering demand charges by up to 40%." },
  { icon: Clock, title: "Stay online", text: "Sub-4-second islanding keeps critical loads running through outages without diesel." },
  { icon: Leaf, title: "Decarbonize", text: "Pair storage with solar to displace generators and cut scope-1 emissions from your backup power." },
  { icon: Plug, title: "Avoid grid upgrades", text: "Buffer new loads — EV charging, electrification — behind the meter and defer costly service upgrades." },
];

export function HomePage() {
  useSeo({
    title: "EBenergy — Commercial Battery Storage & Grid Resilience",
    description: "EBenergy designs and deploys commercial battery energy storage systems — peak shaving, grid resilience, and hybrid power — for utilities, industry, and communities.",
  });

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 -z-10">
          <img src={IMAGES.hero} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-40" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-900/80 to-navy-900" />
          <div className="absolute inset-0 grid-bg-dark opacity-30" />
        </div>
        <div className="container-content relative pt-20 pb-24 lg:pt-28 lg:pb-36">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="eyebrow text-brand-300">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse-soft" />
                Engineering the future of sustainable energy storage
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
                Power that lasts when the grid doesn't.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-navy-100">
                Commercial battery storage, grid resilience, and hybrid power systems — engineered,
                integrated, commissioned, and supported by EBenergy for utilities, industry, and communities.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link to="/solutions" className="btn-primary">
                  Explore solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="btn bg-white/10 text-white ring-1 ring-inset ring-white/25 backdrop-blur-sm hover:bg-white/20 hover:ring-white/40">
                  Contact us
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why EBenergy</span>
            <h2 className="mt-4 text-balance text-3xl font-bold text-ink-900 sm:text-4xl">Storage that pays for itself</h2>
            <p className="mt-4 text-pretty text-ink-600">
              Every system is designed around your load profile, tariff, and resilience requirements, with ongoing monitoring and engineering support.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="card h-full p-6 transition-shadow hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-ink-900">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-ink-50/60">
        <div className="container-content">
          <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <span className="eyebrow">Our platforms</span>
              <h2 className="mt-4 text-balance text-3xl font-bold text-ink-900 sm:text-4xl">Three systems, one engineering standard</h2>
            </div>
            <Link to="/solutions" className="btn-ghost shrink-0">
              All solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => {
              return (
                <Reveal key={p.slug} delay={i * 90}>
                  <Link to="/solutions" className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition-all hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative h-44 overflow-hidden bg-ink-100">
                      <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="font-display text-lg font-bold">{p.name}</p>
                        <p className="mt-0.5 text-xs text-white/85">{p.tagline}</p>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl font-bold text-ink-900">{p.name}</h3>
                      <p className="mt-1 text-sm font-medium text-brand-700">{p.tagline}</p>
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">{p.description}</p>
                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 transition-colors group-hover:text-brand-700">
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How it works</span>
            <h2 className="mt-4 text-balance text-3xl font-bold text-ink-900 sm:text-4xl">From site survey to commissioned system</h2>
          </Reveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-4">
            {[
              { n: "01", t: "Site assessment", d: "We analyze your load profile, tariff, and resilience needs — on-site or remote." },
              { n: "02", t: "System design", d: "Engineers model the optimal capacity, topology, and dispatch strategy for your goals." },
              { n: "03", t: "Integration & commissioning", d: "We coordinate delivery, site integration, testing, and commissioning with full electrical, fire, and utility coordination." },
              { n: "04", t: "Monitor & optimize", d: "Cloud EMS tracks performance 24/7 and tunes dispatch as your loads evolve." },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 90}>
                <div className="relative">
                  <span className="font-display text-5xl font-bold text-brand-100">{step.n}</span>
                  <h3 className="mt-3 text-base font-semibold text-ink-900">{step.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-12 text-white">
        <div className="container-content">
          <Reveal className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-navy-100">
              {["UL 9540", "IEEE 1547", "NFPA 855", "ISO 9001:2015"].map((c) => (
                <span key={c} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-400" />
                  {c}
                </span>
              ))}
            </div>
            <p className="text-sm text-navy-200">Certified, warrantied, and maintained by EBenergy for the full system lifetime.</p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
