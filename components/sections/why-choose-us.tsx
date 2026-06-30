"use client";

import Image from "next/image";
import { Reveal, RevealWipe } from "@/components/reveal";
import { images } from "@/lib/images";

const POINTS = [
  {
    stat: "6–8 wks",
    title: "From kickoff to launch",
    description:
      "A focused, intensive build process — no agency bloat, no months of waiting on a queue.",
  },
  {
    stat: "<1.5s",
    title: "Engineered for speed",
    description:
      "Every site is built lean and fast, because a slow website loses buyers before they've seen a single listing.",
  },
  {
    stat: "Mobile-first",
    title: "Designed for how buyers browse",
    description:
      "Layouts are composed for the phone screen first, then elevated for desktop — never the other way round.",
  },
  {
    stat: "Direct line",
    title: "No account managers",
    description:
      "You work directly with the designer and developer building your site, start to finish.",
  },
] as const;

export function WhyChooseUs() {
  return (
    <section className="relative bg-ink py-28 md:py-40">
      <div className="container grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <RevealWipe className="aspect-[4/5] w-full overflow-hidden rounded-sm md:sticky md:top-32">
            <Image
              src={images.livingRoomBlackFireplace}
              alt="Refined luxury living room interior, representative of the design quality Blueprint Studio brings to client websites"
              width={900}
              height={1125}
              className="h-full w-full object-cover"
            />
          </RevealWipe>
        </div>

        <div className="md:col-span-7">
          <Reveal>
            <span className="eyebrow">04 / Why Blueprint Studio</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-light leading-[1.1] text-bone sm:text-5xl">
              A studio built
              <br />
              <span className="italic text-mist">for one niche, properly.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-mist md:text-lg">
              We don't design everything for everyone. Blueprint Studio
              works exclusively with estate agents, developers and property
              brands — which means every decision, from typography to
              listings architecture, is informed by what actually moves
              buyers to enquire.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {POINTS.map((point, i) => (
              <Reveal key={point.title} delay={0.1 + i * 0.06}>
                <div className="border-t border-hairline pt-6">
                  <span className="font-display text-3xl italic text-gold">
                    {point.stat}
                  </span>
                  <h3 className="mt-3 font-sans text-base font-semibold text-bone">
                    {point.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-mist">
                    {point.description}
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
