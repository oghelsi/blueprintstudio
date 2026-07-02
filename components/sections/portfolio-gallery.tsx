"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { RevealWipe } from "@/components/reveal";
import { images } from "@/lib/images";

const ITEMS = [
  {
    brand: "Ashworth & Vale",
    sector: "Prime London Estate Agency",
    tag: "Brand site · Listings · CMS",
    img: images.livingRoomWindow,
    span: "md:col-span-7",
    h: "h-[440px] md:h-[560px]",
  },
  {
    brand: "Marlowe Developments",
    sector: "Off-Plan New Build Developer",
    tag: "Launch microsite · 3D tours",
    img: images.heroVillaPool,
    span: "md:col-span-5",
    h: "h-[440px] md:h-[560px]",
  },
  {
    brand: "Solene Residences",
    sector: "Branded Penthouse Collection",
    tag: "Visual identity · Webflow build",
    img: images.buildingWithPool,
    span: "md:col-span-4",
    h: "h-[420px]",
  },
  {
    brand: "The Hartfield Group",
    sector: "Multi-Region Estate Agency",
    tag: "Property search · Booking flow",
    img: images.livingRoomFireplace,
    span: "md:col-span-4",
    h: "h-[420px]",
  },
  {
    brand: "Northcliff Estates",
    sector: "Coastal & Country Homes",
    tag: "Editorial brand site",
    img: images.villaFacadeDay,
    span: "md:col-span-4",
    h: "h-[420px]",
  },
  {
    brand: "Fenwick & Hale",
    sector: "Independent Estate Agency",
    tag: "Brand site · Listings · Local SEO",
    img: images.livingRoomWarm,
    span: "md:col-span-12",
    h: "h-[420px]",
  },
] as const;

export function PortfolioGallery() {
  return (
    <section id="work" className="relative bg-ink py-28 md:py-40">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="02 / Selected Work"
            title={
              <>
                Concept builds for the
                <br />
                <span className="italic text-mist">property world.</span>
              </>
            }
          />
          <p className="max-w-xs font-sans text-sm leading-relaxed text-mist md:text-right">
            A selection of demonstration concepts created to showcase the
            range and finish of Blueprint Studio's work across agencies,
            developers and private collections.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-12">
          {ITEMS.map((item, i) => (
            <RevealWipe
              key={item.brand}
              delay={i * 0.08}
              className={`group relative ${item.span} ${item.h} overflow-hidden rounded-sm corner-frame`}
            >
              <Image
                src={item.img}
                alt={`${item.brand} — demonstration luxury real estate website concept by Blueprint Studio`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-90" />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7 md:p-9">
                <div>
                  <span className="eyebrow !text-bone/60">{item.tag}</span>
                  <h3 className="mt-3 font-display text-2xl font-light italic text-bone md:text-3xl">
                    {item.brand}
                  </h3>
                  <p className="mt-1.5 font-sans text-sm text-bone/60">
                    {item.sector}
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-bone/25 text-bone transition-all duration-300 group-hover:border-gold group-hover:text-gold group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </div>
            </RevealWipe>
          ))}
        </div>
      </div>
    </section>
  );
}
