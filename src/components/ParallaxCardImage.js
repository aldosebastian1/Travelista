"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

/**
 * ParallaxCardImage
 * Wraps a Next.js Image with a subtle inner parallax pan as the card
 * scrolls through the viewport. The image "slides" vertically at a
 * fraction of the scroll speed, creating natural depth within the card.
 *
 * The container uses absolute inset-0 so it layers cleanly inside a
 * parent with `position: relative`.
 */
export default function ParallaxCardImage({ src, alt, sizes }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // Track from when card bottom enters viewport bottom → card top exits viewport top
    offset: ["start end", "end start"],
  });

  // Image pans from -8% (card below viewport) to +8% (card above viewport)
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y }}
        // Extend height beyond container to prevent empty edges during parallax
        className="absolute w-full h-[116%] -top-[8%] transition-[scale] duration-1000 ease-out group-hover:scale-105"
      >
        <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} />
      </motion.div>
    </div>
  );
}
