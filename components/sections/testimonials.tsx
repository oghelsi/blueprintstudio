"use client";

import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const TESTIMONIALS = [
  {
    quote:
      "The site doesn't just look beautiful — it changed how prospective buyers perceive us before they've even booked a viewing. Enquiries from the website have never felt more qualified.",
    name: "S. Whitfield",
    role: "Director, Independent Estate Agency",
    initials: "SW",
  },
  {
    quote:
      "We needed a launch microsite that felt as premium as the units themselves. Blueprint Studio understood the brief immediately and the floor-plan tool became our best sales aid.",
    name: "R. Adeyemi",
    role: "Marketing Lead, Residential Developer",
    initials: "RA",
  },
  {
    quote:
      "Every previous website felt like a template with our logo on it. This is the first time our digital presence has actually matched the calibre of our portfolio.",
    name: "C. Morrow",
    role: "Founder, Boutique Property Brand",
    initials: "CM",
  },
] as const;

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-panel py-28 md:py-40">
      <div className="container">
        <div className="flex flex-col gap-3">
          <SectionHeading eyebrow="07 / Testimonials" title="What clients say." />
          <Reveal delay={0.18}>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-hairline px-4 py-1.5 font-sans text-[11px] uppercase tracking-[0.18em] text-mist">
              Sample testimonials — illustrative until replaced with your client feedback
            </span>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="flex h-full flex-col justify-between rounded-sm border border-hairline bg-elevated/40 p-8 transition-colors duration-300 hover:border-gold/40">
                <div>
                  <Quote className="h-6 w-6 text-gold" strokeWidth={1.5} />
                  <p className="mt-6 font-display text-lg font-light italic leading-relaxed text-bone/90">
                    "{t.quote}"
                  </p>
                </div>
                <div className="mt-9 flex items-center gap-3 border-t border-hairline pt-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 font-sans text-xs text-gold">
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-sans text-sm font-semibold text-bone">
                      {t.name}
                    </p>
                    <p className="font-sans text-xs text-mist">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
