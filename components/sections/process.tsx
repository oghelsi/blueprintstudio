"use client";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const STEPS = [
  {
    n: "01",
    title: "Discovery",
    description:
      "We learn your portfolio, your buyers and what's holding your current site back — then define what success looks like.",
  },
  {
    n: "02",
    title: "Design",
    description:
      "A bespoke art direction and full page-by-page design, refined with you across structured review rounds.",
  },
  {
    n: "03",
    title: "Build",
    description:
      "Hand-built in Next.js for speed and longevity, with your listings, enquiry flow and CMS wired in.",
  },
  {
    n: "04",
    title: "Launch",
    description:
      "Final QA across every device, performance tuning, and a coordinated go-live with your domain and analytics.",
  },
  {
    n: "05",
    title: "Grow",
    description:
      "Ongoing support and iteration as your listings, campaigns and ambitions evolve beyond launch day.",
  },
] as const;

export function Process() {
  return (
    <section id="process" className="relative bg-ink py-28 md:py-40">
      <div className="container">
        <SectionHeading
          eyebrow="06 / Process"
          title={
            <>
              Five stages,
              <br />
              <span className="italic text-mist">one dedicated team.</span>
            </>
          }
        />

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-[26px] hidden h-px bg-hairline md:block" />
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-5 md:gap-6">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08}>
                <div className="relative">
                  <div className="relative z-10 mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-gold/50 bg-ink font-display text-sm italic text-gold">
                    {step.n}
                  </div>
                  <h3 className="font-display text-xl font-light text-bone">
                    {step.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-mist">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
