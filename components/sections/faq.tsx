"use client";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Who do you design websites for?",
    a: "Exclusively property professionals — independent estate agents, regional agency networks, residential and commercial developers, and luxury property brands. We don't take on work outside real estate, which keeps our process sharp.",
  },
  {
    q: "How long does a project take?",
    a: "Most bespoke builds launch within 6–8 weeks of kickoff, depending on scope. Larger multi-region platforms or custom property-search tooling can extend that timeline — we'll give you an exact estimate after discovery.",
  },
  {
    q: "Can you integrate our existing listings or CRM?",
    a: "Yes. We regularly connect sites to property data feeds, CRMs and portals so your listings stay in sync without manual re-entry.",
  },
  {
    q: "Do you use stock photography or our own property images?",
    a: "Your site is built around your own photography and media wherever possible. Imagery shown in our portfolio and concept sections is demonstration photography used to illustrate layout and style only.",
  },
  {
    q: "What does a project cost?",
    a: "Every engagement is scoped individually based on pages, functionality and integrations. Get in touch with a brief outline of your project and we'll come back with a clear, fixed-scope proposal.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes — every project includes a post-launch support window, with ongoing retainers available for teams who want continued design and development input.",
  },
] as const;

export function FAQ() {
  return (
    <section id="faq" className="relative bg-ink py-28 md:py-40">
      <div className="container grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <SectionHeading
            eyebrow="08 / FAQ"
            title={
              <>
                Questions,
                <br />
                <span className="italic text-mist">answered.</span>
              </>
            }
          />
        </div>
        <div className="md:col-span-8">
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq) => (
                <AccordionItem key={faq.q} value={faq.q}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
