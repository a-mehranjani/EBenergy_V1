import { Link } from "react-router-dom";
import { ArrowRight, Globe2, MapPin, Quote } from "lucide-react";
import { useSeo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { IMAGES } from "@/lib/images";

export function AboutPage() {
  useSeo({
    title: "About — EBenergy",
    description: "Established in 2019, EBenergy is an engineering company focused on advanced battery energy storage systems for utility and commercial applications.",
  });

  return (
    <>
      <section className="relative isolate overflow-hidden bg-white">
        <img
          src="/about-hero.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-60"
          style={{ objectPosition: "center calc(50% + 20mm)" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/35 via-white/50 to-white/85" />
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-15" />
        <div className="container-content relative py-16 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">About EBenergy</span>
            <div style={{ transform: "translateY(3mm)" }}>
              <h1 className="mt-5 text-balance text-4xl font-bold leading-tight text-ink-900 sm:text-5xl lg:text-6xl">Engineering energy security</h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-ink-600">
                The EBenergy concept originated in 2017. Today, we design, integrate, and support advanced
                battery energy storage systems for utility, commercial, and industrial applications.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="eyebrow">Our mission</span>
              <h2 className="mt-4 text-balance text-3xl font-bold text-ink-900 sm:text-4xl">Make resilient, clean power the default for every critical site</h2>
              <div className="mt-6 space-y-4 text-pretty text-ink-600 leading-relaxed">
                <p>For decades, backup power meant diesel — loud, dirty, and unreliable when you need it most. Battery storage changes that equation, but only if it's engineered for the real loads, tariffs, and failure modes of the site it serves.</p>
                <p>EBenergy was established to close that gap. Every solution is engineered around the application rather than selected from a catalogue. Our work spans system architecture, power electronics integration, controls, energy management software, grid integration, testing, commissioning, and technical support.</p>
              </div>
            </Reveal>
            <Reveal delay={120} className="relative">
              <div className="relative h-full min-h-[24rem] overflow-hidden rounded-3xl bg-ink-100">
                <img src={IMAGES.engineer} alt="EBenergy engineer inspecting equipment on site" loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y overflow-hidden bg-navy-950 text-white">
        <div className="container-content">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <span className="eyebrow text-brand-300">Global footprint</span>
              <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
                International reach, local understanding
              </h2>
              <p className="mt-6 text-pretty leading-relaxed text-navy-100">
                With a footprint spanning the United Kingdom, Canada, and Oman, EBenergy combines
                international perspective with local project understanding to deliver energy storage
                solutions suited to each market&apos;s technical, regulatory, and operational requirements.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Vancouver, Canada", "London, United Kingdom", "Muscat, Oman"].map((location) => (
                  <span
                    key={location}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white"
                  >
                    <MapPin className="h-4 w-4 text-brand-300" aria-hidden="true" />
                    {location}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-navy-900/70 p-5 shadow-2xl shadow-black/20 sm:p-8"
                role="img"
                aria-label="World map showing EBenergy's footprint in Vancouver, London, and Muscat"
              >
                <Globe2 className="absolute right-6 top-6 h-10 w-10 text-brand-400/20" aria-hidden="true" />
                <div className="relative aspect-[1.872/1]">
                  <img
                    src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Blank_world_map.png?width=1600"
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-contain opacity-25 saturate-0 invert"
                  />
                  <FootprintMarker
                    country="Vancouver"
                    className="left-[13%] top-[24%]"
                    align="left"
                    offsetXmm={-1.5}
                  />
                  <FootprintMarker
                    country="London"
                    className="left-[46%] top-[31%]"
                    align="center"
                    offsetXmm={-1}
                    offsetYmm={-1.5}
                  />
                  <FootprintMarker
                    country="Muscat"
                    className="left-[62.5%] top-[45.5%]"
                    align="right"
                    offsetXmm={-2}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y bg-navy-900 text-white">
        <div className="container-content">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Quote className="mx-auto h-10 w-10 text-brand-400" />
            <blockquote className="mt-6 text-balance text-2xl font-medium leading-relaxed sm:text-3xl">
              "A battery isn't a product you install and forget. It's a system you engineer, monitor, and maintain throughout its operating life. That's the standard we hold ourselves to."
            </blockquote>
            <p className="mt-6 text-sm text-brand-300">Ali Mehranjani</p>
          </Reveal>
          <Reveal className="mt-10 text-center">
            <Link to="/contact" className="btn bg-white text-navy-900 hover:bg-brand-50">
              Work with us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function FootprintMarker({
  country,
  className,
  align,
  offsetXmm = 0,
  offsetYmm = 0,
}: {
  country: string;
  className: string;
  align: "left" | "center" | "right";
  offsetXmm?: number;
  offsetYmm?: number;
}) {
  const alignment = {
    left: "-translate-x-2",
    center: "-translate-x-1/2",
    right: "-translate-x-full translate-x-2",
  }[align];

  return (
    <div
      className={`absolute -translate-y-1/2 ${className}`}
      style={{ marginLeft: `${offsetXmm}mm`, marginTop: `${4 + offsetYmm}mm` }}
    >
      <span className="relative flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-300 opacity-50" />
        <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-brand-400 shadow-lg shadow-brand-400/40" />
      </span>
      <span
        className={`mt-2 inline-flex whitespace-nowrap rounded-lg border border-white/15 bg-navy-950/90 px-2.5 py-1 text-[11px] font-semibold text-white shadow-lg backdrop-blur ${alignment}`}
      >
        {country}
      </span>
    </div>
  );
}
