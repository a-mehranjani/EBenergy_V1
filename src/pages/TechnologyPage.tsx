import { Link } from "react-router-dom";
import { Cpu, Radio, Flame, Gauge, Cloud, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { useSeo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { CERTIFICATIONS } from "@/lib/data";
import { IMAGES } from "@/lib/images";

const PILLARS = [
  { icon: Cpu, title: "LFP cell architecture", text: "Every system uses lithium-iron-phosphate cells — the safest high-energy chemistry, with no thermal runaway risk in normal operation and 6,000+ cycles." },
  { icon: Radio, title: "Power electronics integration", text: "Bidirectional, grid-forming power conversion systems are selected and integrated around the application, with fast grid response and seamless islanding capability." },
  { icon: Flame, title: "Thermal & fire safety", text: "Cell-level monitoring, liquid-cooled packs, and NFPA 855-compliant containment and suppression in every enclosure." },
  { icon: Gauge, title: "Energy management", text: "On-board EMS dispatches charge and discharge against your tariff, load forecast, and reserve targets — automatically, every cycle." },
  { icon: Cloud, title: "Cloud monitoring", text: "24/7 fleet telemetry with anomaly detection, predictive maintenance alerts, and a dashboard you can access from any browser." },
  { icon: ShieldCheck, title: "Cybersecurity", text: "Encrypted communication, signed firmware, and role-based access following IEC 62443 principles across the full stack." },
];

export function TechnologyPage() {
  useSeo({
    title: "Technology — EBenergy",
    description: "Inside the EBenergy platform: BESS architecture, power electronics integration, controls, energy management software, grid integration, testing, and commissioning.",
  });

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 -z-10">
          <img src={IMAGES.warehouse} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-30" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-900/85 to-navy-900" />
          <div className="absolute inset-0 grid-bg-dark opacity-30" />
        </div>
        <div className="container-content relative py-20 lg:py-28">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow text-brand-300">Technology</span>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Engineered as a complete system</h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-navy-100">
              Every EBenergy system is engineered around our system architecture, power electronics
              integration, controls, and energy management software.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-content">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 80}>
                <div className="h-full bg-white p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-ink-900">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-600">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-ink-50/60">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Compliance & safety</span>
            <h2 className="mt-4 text-balance text-3xl font-bold text-ink-900 sm:text-4xl">Certified to the standards that matter</h2>
            <p className="mt-4 text-pretty text-ink-600">
              Systems are integrated with qualified manufacturing partners using our approved architecture,
              quality-assurance process, and factory acceptance testing before delivery.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((c, i) => (
              <Reveal key={c.name} delay={(i % 3) * 70}>
                <div className="card flex items-center gap-4 p-5">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-600" />
                  <div>
                    <p className="font-semibold text-ink-900">{c.name}</p>
                    <p className="text-sm text-ink-500">{c.code}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How we deliver</span>
            <h2 className="mt-4 text-balance text-3xl font-bold text-ink-900 sm:text-4xl">Designed, integrated and maintained</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              { t: "System engineering", d: "We assess the application, define the BESS architecture, size the system, and develop the controls and grid-integration strategy." },
              { t: "Integration & quality assurance", d: "We coordinate qualified manufacturing partners, power electronics integration, controls, and factory acceptance testing (FAT)." },
              { t: "Commissioning & support", d: "We manage site acceptance testing (SAT), commissioning, project delivery, and ongoing technical support with our regional partner network." },
            ].map((b, i) => (
              <Reveal key={b.t} delay={i * 90}>
                <div className="card h-full p-7">
                  <span className="font-display text-sm font-bold text-brand-600">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-semibold text-ink-900">{b.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link to="/contact" className="btn-secondary">
              Discuss your project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
