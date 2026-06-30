"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealWipe } from "@/components/reveal";
import { images } from "@/lib/images";
import { ArrowRight } from "lucide-react";

const CONCEPTS = [
  {
    name: "The Hampstead Edit",
    category: "Boutique Estate Agency Concept",
    description:
      "A full brand-to-build concept for a fictional boutique agency, exploring how a single-portfolio agent could present a tightly curated set of listings as a gallery rather than a grid — each property treated like a feature, not a database row.",
    features: ["Editorial listings layout", "Custom enquiry flow", "Agent profile pages"],
    img: images.waterfrontBuilding,
  },
  {
    name: "Solene Residences",
    category: "Off-Plan Development Concept",
    description:
      "A pre-launch concept microsite designed for a branded residential tower — built to generate reservations before a single unit is built, with a floor-plan explorer and a registration-of-interest funnel.",
    features: ["Interactive floor plans", "Reservation funnel", "Investor brochure download"],
    img: images.buildingWithPool,
  },
  {
    name: "Northcliff Estates",
    category: "Multi-Region Agency Concept",
    description:
      "A concept rebuild for a network of regional offices, unifying a fragmented brand under one search experience while keeping each office's local character on its own landing page.",
    features: ["Unified property search", "Localised office pages", "Valuation request tool"],
    img: images.villaConcrete,
  },
] as const;

export function FeaturedConcepts() {
  return (
    <section className="relative bg-panel py-28 md:py-40">
      <div className="container">
        <SectionHeading
          eyebrow="05 / Featured Concepts"
          title={
            <>
              Deeper looks at
              <br />
              <span className="italic text-mist">three concept builds.</span>
            </>
          }
          description="Each concept below was developed to explore a specific challenge property brands face online — illustrative work created by Blueprint Studio to demonstrate range, not completed client engagements."
        />

        <div className="mt-20 flex flex-col gap-28 md:gap-36">
          {CONCEPTS.map((concept, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={concept.name}
                className={`grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12 ${
                  reversed ? "md:[direction:rtl]" : ""
                }`}
              >
                <div
                  className={`md:col-span-7 ${reversed ? "[direction:ltr]" : ""}`}
                >
                  <RevealWipe className="aspect-[16/11] w-full overflow-hidden rounded-sm corner-frame">
                    <Image
                      src={concept.img}
                      alt={`${concept.name} — ${concept.category}, a website concept by Blueprint Studio`}
                      width={1400}
                      height={960}
                      className="h-full w-full object-cover"
                    />
                  </RevealWipe>
                </div>

                <div
                  className={`md:col-span-5 ${reversed ? "[direction:ltr]" : ""}`}
                >
                  <Reveal>
                    <span className="eyebrow">{concept.category}</span>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <h3 className="mt-4 font-display text-3xl font-light italic text-bone sm:text-4xl">
                      {concept.name}
                    </h3>
                  </Reveal>
                  <Reveal delay={0.14}>
                    <p className="mt-5 font-sans text-base leading-relaxed text-mist">
                      {concept.description}
                    </p>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <ul className="mt-7 flex flex-col gap-3">
                      {concept.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-3 font-sans text-sm text-bone/80"
                        >
                          <span className="h-px w-6 bg-gold" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal delay={0.26}>
                    <a
                      href="#contact"
                      className="group mt-8 inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.18em] text-gold"
                    >
                      Discuss a similar build
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
