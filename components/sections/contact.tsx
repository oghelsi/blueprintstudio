"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { images } from "@/lib/images";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "£8,000 – £15,000",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...form }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink py-28 md:py-40"
    >
      <div className="absolute inset-0">
        <Image
          src={images.tropicalVillaTwilight}
          alt="Luxury villa with pool at twilight, setting a cinematic backdrop for Blueprint Studio's contact section"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/90 to-ink" />
      </div>

      <div className="container relative grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <Reveal>
            <span className="eyebrow">09 / Start a Project</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl font-light leading-[1.1] text-bone sm:text-5xl">
              Let's design something
              <br />
              <span className="italic text-gradient-gold">worth visiting.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-mist">
              Tell us about your agency, your portfolio and what your
              current website is failing to do. We reply to every enquiry
              within one business day.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-4 font-sans text-sm text-bone/80">
              <a
                href="mailto:thecreatorsblueprints@gmail.com"
                className="group flex w-fit items-center gap-2 hover:text-gold"
              >
                thecreatorsblueprints@gmail.com
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="https://instagram.com/tcblueprintstudio" target="_blank" className="text-mist">@tcblueprintstudio on Instagram</a>
              <span className="text-mist">London · Remote-first studio</span>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal delay={0.12}>
            <div className="rounded-sm border border-hairline bg-elevated/50 p-8 backdrop-blur-sm md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[320px] flex-col items-center justify-center text-center"
                >
                  <CheckCircle2 className="h-10 w-10 text-gold" strokeWidth={1.2} />
                  <h3 className="mt-5 font-display text-2xl font-light text-bone">
                    Enquiry received
                  </h3>
                  <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-mist">
                    Thank you — we'll review your project and reply within
                    one business day.
                  </p>
                </motion.div>
              ) : (
                <form
                  name="contact"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don't fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  <Field
                    label="Full name"
                    name="name"
                    value={form.name}
                    onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                    required
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                    required
                  />
                  <Field
                    label="Company / Agency"
                    name="company"
                    value={form.company}
                    onChange={(v) => setForm((f) => ({ ...f, company: v }))}
                    className="sm:col-span-2"
                  />

                  <label className="flex flex-col gap-2 sm:col-span-2">
                    <span className="font-sans text-xs uppercase tracking-[0.18em] text-mist">
                      Estimated budget
                    </span>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, budget: e.target.value }))
                      }
                      className="border-b border-hairline bg-transparent py-3 font-sans text-bone outline-none transition-colors focus:border-gold"
                    >
                      <option className="bg-panel">£3,000 – £8,000</option>
                      <option className="bg-panel">£8,000 – £15,000</option>
                      <option className="bg-panel">£15,000 – £30,000</option>
                      <option className="bg-panel">£30,000+</option>
                    </select>
                  </label>

                  <label className="flex flex-col gap-2 sm:col-span-2">
                    <span className="font-sans text-xs uppercase tracking-[0.18em] text-mist">
                      Tell us about your project
                    </span>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      className="resize-none border-b border-hairline bg-transparent py-3 font-sans text-bone outline-none transition-colors focus:border-gold"
                    />
                  </label>

                  <div className="sm:col-span-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={submitting}
                      className="w-full sm:w-auto"
                    >
                      {submitting ? "Sending…" : "Send enquiry"}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
  className,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className ?? ""}`}>
      <span className="font-sans text-xs uppercase tracking-[0.18em] text-mist">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border-b border-hairline bg-transparent py-3 font-sans text-bone outline-none transition-colors focus:border-gold"
      />
    </label>
  );
}
