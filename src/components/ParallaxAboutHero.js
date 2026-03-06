"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ParallaxAboutHero
 * Client component — extracts the about page hero section so the parent
 * server component (about/page.js) keeps its metadata export while this
 * component handles the scroll-linked background parallax.
 */
export default function ParallaxAboutHero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Background rises at 35% of scroll speed
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  return (
    <div
      ref={heroRef}
      className="relative h-[70vh] min-h-[480px] bg-noir overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Background — opacity-40 applied to wrapper to preserve Framer Motion control */}
      <motion.div
        style={{ y: bgY }}
        className="absolute w-full h-[135%] -top-[17%] opacity-40"
        aria-hidden="true"
      >
        <Image
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=90"
          alt="Tim Travelista dalam perjalanan"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          style={{ filter: "grayscale(20%)" }}
        />
      </motion.div>

      {/* Bottom gradient fade into page body */}
      <div
        className="absolute inset-0 bg-linear-to-t from-noir via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-20 max-w-4xl mx-auto">
        <span className="section-label text-blue">Filosofi Travelista</span>
        <h1 className="font-cinzel text-4xl md:text-5xl lg:text-7xl font-light text-white mb-8">
          Redefinisi Kemewahan
        </h1>
        <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
          Kami bukan sekadar agen perjalanan. Kami adalah arsitek untuk momen-momen paling eksklusif
          dan tak terlupakan dalam hidup Anda.
        </p>
      </div>
    </div>
  );
}
