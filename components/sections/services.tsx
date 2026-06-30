"use client";

import {
  Compass,
  LayoutTemplate,
  Search,
  Sparkles,
  Database,
  LifeBuoy,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const SERVICES = [
  {
    icon: Compass,
    title: "Brand & art direction",
    description:
      "A considered visual identity — palette, type, photographic direction — that positions your agency or development above the market.",
  },
  {
    icon: LayoutTemplate,
    title: "Bespoke website design",
    description:
      "Fully custom interfaces built around your portfolio, not a template. Every layout designed to flatter the properties you sell.",
  },
  {
    icon: Database,
    title: "Property search & CMS",
    description:
      "Fast, filterable listings your team can update in minutes — built on a content system that scales with your portfolio.",
  },
  {
    icon: Sparkles,
    title: "Cinematic media integration",
    description:
      "Considered placement of photography, film and 3D tours so every property feels as premium online as it does in person.",
  },
  {
    icon: Search,
    title: "SEO & performance",
    description:
      "Technical foundations tuned for search visibility and sub-second load times — because slow sites lose enquiries.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing partnership",
    description:
      "Launch is the beginning. We support, iterate and extend your site as your listings and ambitions grow.",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="relative bg-panel py-28 md:py-40">
      <div className="container">
        <SectionHeading
          eyebrow="03 / Services"
          title={
            <>
              Everything a luxury
              <br />
              <span className="italic text-mist">property brand needs.</span>
            </>
          }
        />

        <div className="mt-16 divide-y divide-hairline border-t border-hairline">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 0.05}>
                <div className="group grid grid-cols-1 gap-4 py-9 transition-colors duration-300 md:grid-cols-12 md:items-center md:gap-8 md:py-10">
                  <div className="flex items-center gap-4 md:col-span-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-300 group-hover:border-gold group-hover:bg-gold/10">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                    </span>
                    <h3 className="font-display text-2xl font-light text-bone md:text-[1.7rem]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="font-sans text-base leading-relaxed text-mist md:col-span-8">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
