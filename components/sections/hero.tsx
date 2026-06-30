"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex h-[100svh] min-h-[680px] w-full items-end overflow-hidden bg-ink film-grain"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={images.heroNight}
          alt="Cinematic exterior of a contemporary luxury villa at night, illustrating the calibre of imagery used across Blueprint Studio's website designs"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/30" />
      </motion.div>

      {/* corner registration marks — signature motif */}
      <div className="pointer-events-none absolute inset-6 hidden border border-bone/15 md:block" />
      <span className="pointer-events-none absolute left-6 top-6 hidden h-6 w-6 border-l border-t border-gold/70 md:block" />
      <span className="pointer-events-none absolute right-6 top-6 hidden h-6 w-6 border-r border-t border-gold/70 md:block" />
      <span className="pointer-events-none absolute bottom-6 left-6 hidden h-6 w-6 border-b border-l border-gold/70 md:block" />
      <span className="pointer-events-none absolute bottom-6 right-6 hidden h-6 w-6 border-b border-r border-gold/70 md:block" />

      <motion.div style={{ opacity }} className="container relative z-10 pb-24 pt-40 md:pb-28">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow"
        >
          Web design for the property elite — 01 / Studio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-4xl font-display text-[13vw] font-light leading-[0.96] text-bone sm:text-7xl md:text-[5.5rem] lg:text-[6.4rem]"
        >
          Luxury real estate,
          <br />
          <span className="italic text-gradient-gold">designed to convert.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl font-sans text-base leading-relaxed text-bone/75 md:text-lg"
        >
          Blueprint Studio builds bespoke websites for estate agents,
          property developers and luxury brands — cinematic, fast, and
          engineered to turn viewers into enquiries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-11 flex flex-wrap items-center gap-5"
        >
          <Button variant="primary" size="lg" asChild>
            <a href="#contact">
              Start your project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <a href="#work" className="flex items-center gap-2">
              View our work
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 right-6 z-10 hidden flex-col items-center gap-3 md:flex"
      >
        <span className="font-sans text-[11px] uppercase tracking-widest2 text-bone/50 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="h-12 w-px bg-gradient-to-b from-gold/80 to-transparent" />
      </motion.div>
    </section>
  );
}
