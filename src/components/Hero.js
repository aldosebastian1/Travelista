"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Background moves at 40% of scroll speed — classic depth parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      ref={heroRef}
      aria-labelledby="hero-heading"
      className="relative h-screen min-h-[600px] w-full flex items-center overflow-hidden"
    >
      {/* Parallax Background — extends beyond section bounds to allow movement */}
      <motion.div
        style={{ y: bgY }}
        className="absolute w-full h-[140%] -top-[20%]"
        aria-hidden="true"
      >
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=90"
          alt="Pemandangan panorama destinasi wisata dunia yang eksklusif"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          style={{ filter: "brightness(0.9) contrast(1.1)" }}
        />
      </motion.div>

      {/* Cinematic Overlay — unchanged */}
      <div className="absolute inset-0 bg-gradient-hero z-10" aria-hidden="true" />

      {/* Content — centered, breathable */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center pt-20">
        <span
          className="section-label text-white/70 mb-8 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Eksklusif & Premium
        </span>

        <h1
          id="hero-heading"
          className="text-white text-shadow-cinematic animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Mulai Petualangan
          <br />
          <span className="text-blue-gradient italic pr-2">Tak Terlupakan</span>
        </h1>

        <p
          className="mt-8 text-lg md:text-xl font-light leading-relaxed animate-fade-up"
          style={{
            color: "rgba(255,255,255,0.85)",
            fontFamily: "var(--font-inter)",
            maxWidth: "600px",
            animationDelay: "0.6s",
          }}
        >
          Layanan perjalanan premium dengan rute eksklusif, akomodasi bintang lima, dan privasi yang
          tertata sempurna.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-6 mt-14 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <Link href="#destinasi" className="btn-primary">
            Eksplorasi Destinasi
          </Link>
          <Link href="/about" className="btn-outline">
            Layanan Kami
          </Link>
        </div>
      </div>
    </section>
  );
}
