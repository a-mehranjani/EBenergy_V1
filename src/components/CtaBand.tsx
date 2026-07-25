import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="section-y bg-white">
      <div className="container-content">
        <Reveal className="relative overflow-hidden rounded-3xl bg-navy-800 px-6 py-14 text-center sm:px-12 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0 grid-bg-dark opacity-40" />
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-600/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-brand-500/15 blur-3xl" />
          <div className="relative">
            <p className="eyebrow text-brand-300">Start a conversation</p>
            <h2 className="mt-4 text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Let us identify the right solution for your project
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-navy-100 sm:text-lg">
              Tell us about your project. Our engineering team will assess your requirements and
              recommend the most appropriate battery energy storage solution.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="btn bg-brand-500 text-white hover:bg-brand-400 hover:shadow-xl hover:shadow-brand-500/25">
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/solutions" className="btn bg-white/10 text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 hover:ring-white/40">
                Explore solutions
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
