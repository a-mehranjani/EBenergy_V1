import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { useSeo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { supabase } from "@/lib/supabase";

type FormState = { name: string; email: string; company: string; interest: string; message: string };
type Status = "idle" | "submitting" | "success" | "error";

const INTERESTS = [
  "PowerBuffer (peak shaving)",
  "ResilienceStore (backup / microgrid)",
  "HybridPower (solar + storage)",
  "General inquiry",
] as const;

const EMPTY: FormState = { name: "", email: "", company: "", interest: "", message: "" };

const inputCls =
  "w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30";

export function ContactPage() {
  useSeo({
    title: "Contact — EBenergy",
    description: "Tell EBenergy about your project requirements and receive an engineering-led battery energy storage recommendation.",
  });

  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [errorText, setErrorText] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorText("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorText("Please fill in your name, email, and message.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus("error");
      setErrorText("Please enter a valid email address.");
      return;
    }

    const submission = {
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim(),
      interest: form.interest,
      message: form.message.trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });

      if (!response.ok || !response.headers.get("content-type")?.includes("application/json")) {
        throw new Error("Email delivery failed");
      }
    } catch {
      setStatus("error");
      setErrorText("Something went wrong sending your message. Please try again or email us directly.");
      return;
    }

    // Keep a database copy when Supabase is available. Email delivery above is
    // the primary contact channel, so a backup failure does not block the user.
    if (supabase) {
      await supabase.from("contact_submissions").insert({
        ...submission,
        company: submission.company || null,
        interest: submission.interest || null,
      });
    }

    setStatus("success");
    setForm(EMPTY);
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-white">
        <img
          src="/contact-hero.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/35 via-white/50 to-white/85" />
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-15" />
        <div className="container-content relative py-16 lg:py-20">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Contact</span>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-tight text-ink-900 sm:text-5xl">Let’s find the right solution</h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-ink-600">
              Tell us about your project objectives and technical requirements. Our engineers will assess
              your application and provide the most appropriate energy storage solution.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-content">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <div className="card p-6 sm:p-8">
                {status === "success" ? (
                  <div className="flex flex-col items-center py-12 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <h2 className="mt-5 text-xl font-semibold text-ink-900">Message sent</h2>
                    <p className="mt-2 max-w-sm text-sm text-ink-600">
                      Thanks for reaching out. An EBenergy engineer will be in touch within five business days.
                    </p>
                    <button type="button" className="btn-secondary mt-6" onClick={() => setStatus("idle")}>
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Name" htmlFor="name" required>
                        <input id="name" name="name" type="text" autoComplete="name" required value={form.name} onChange={(e) => update("name", e.target.value)} className={inputCls} placeholder="Jane Doe" />
                      </Field>
                      <Field label="Email" htmlFor="email" required>
                        <input id="email" name="email" type="email" autoComplete="email" required value={form.email} onChange={(e) => update("email", e.target.value)} className={inputCls} placeholder="jane@company.com" />
                      </Field>
                    </div>
                    <Field label="Company" htmlFor="company">
                      <input id="company" name="company" type="text" autoComplete="organization" value={form.company} onChange={(e) => update("company", e.target.value)} className={inputCls} placeholder="Company / organization" />
                    </Field>
                    <Field label="I'm interested in" htmlFor="interest">
                      <select id="interest" name="interest" value={form.interest} onChange={(e) => update("interest", e.target.value)} className={inputCls}>
                        <option value="">Select a solution…</option>
                        {INTERESTS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </Field>
                    <Field label="Project Scope" htmlFor="message" required>
                      <textarea id="message" name="message" required rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} className={`${inputCls} resize-y`} placeholder="Tell us about your project scope, site, load profile, programme, and resilience goals…" />
                    </Field>
                    {status === "error" && (
                      <div role="alert" className="flex items-start gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-800">
                        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                        <span>{errorText}</span>
                      </div>
                    )}
                    <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "submitting"}>
                      {status === "submitting" ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>) : (<><Send className="h-4 w-4" /> Send message</>)}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-5">
              <div className="space-y-6">
                <div className="card p-6">
                  <h3 className="text-base font-semibold text-ink-900">Reach us directly</h3>
                  <div className="mt-5 space-y-4 text-sm">
                    <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-ink-700 hover:text-brand-700">
                      <Mail className="h-5 w-5 text-brand-600" />
                      {SITE.email}
                    </a>
                    <a href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-3 text-ink-700 hover:text-brand-700">
                      <Phone className="h-5 w-5 text-brand-600" />
                      {SITE.phone}
                    </a>
                    <p className="flex items-start gap-3 text-ink-700">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                      <span>{SITE.address.line1}<br />{SITE.address.city}, {SITE.address.state} {SITE.address.zip}<br />{SITE.address.country}</span>
                    </p>
                  </div>
                </div>
                <div className="card bg-brand-50/60 p-6">
                  <h3 className="text-base font-semibold text-ink-900">What happens next</h3>
                  <ol className="mt-4 space-y-3 text-sm text-ink-700">
                    {["Tell us about your project.",
"Our engineering team will assess your requirements.",
"We recommend the most appropriate battery energy storage solution."].map((step, i) => (
                      <li key={step} className="flex gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-[11px] font-bold text-white">{i + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, htmlFor, required, children }: { label: string; htmlFor: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink-800">
        {label}{required && <span className="ml-0.5 text-brand-600" aria-hidden="true">*</span>}
      </label>
      {children}
    </div>
  );
}
