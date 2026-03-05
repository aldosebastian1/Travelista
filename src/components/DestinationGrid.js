"use client";

import { travelPackages } from "../constants";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function DestinationGrid() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };

    // Smooth, slow, elegant entrance
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    };

    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {travelPackages.map((pkg) => (
                <motion.article
                    variants={itemVariants}
                    key={pkg.id}
                    className="luxury-card group flex flex-col overflow-hidden"
                >
                    {/* Image — No excessive shine, just a very slow scale on hover */}
                    <div className="relative h-64 overflow-hidden bg-slate-50">
                        <Image
                            src={pkg.image}
                            alt={`Pemandangan destinasi ${pkg.name} di ${pkg.location}`}
                            fill
                            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {/* Very subtle gradient overlay at bottom for price contrast */}
                        <div
                            className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"
                            aria-hidden="true"
                        />

                        {/* Category and Price — overlaying the image */}
                        <div className="absolute top-4 left-4 z-10">
                            <span className="badge-category tracking-widest">{pkg.category}</span>
                        </div>
                        <div className="absolute bottom-4 left-6 z-10 flex flex-col">
                            <span className="text-white/80 text-xs tracking-widest uppercase mb-1 font-poppins">Mulai Dari</span>
                            <span className="badge-price leading-none">{pkg.price}</span>
                        </div>
                    </div>

                    {/* Content — Ample padding, elegant typography */}
                    <div className="p-8 flex-1 flex flex-col">

                        {/* Title — Cinzel Serif */}
                        <h3
                            className="text-2xl font-light leading-snug mb-2 transition-colors duration-500 group-hover:text-blue"
                            style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                            {pkg.name}
                        </h3>

                        {/* Location & Rating — Minimalist */}
                        <div className="flex items-center justify-between text-xs tracking-widest uppercase text-slate-500 font-poppins mb-6">
                            <span>{pkg.location}</span>
                            <div className="flex items-center gap-1">
                                <Star size={12} className="text-blue fill-blue" aria-hidden="true" />
                                <span className="text-slate-700">{pkg.rating}</span>
                            </div>
                        </div>

                        {/* Description — Inter, line-clamp-3 for uniform height */}
                        <p
                            className="text-[0.9rem] leading-relaxed flex-1 line-clamp-3 text-slate-600 font-inter mb-6"
                        >
                            {pkg.description}
                        </p>

                        {/* Action Link — Understated & elegant */}
                        <div className="pt-4 border-t border-slate-100">
                            <Link
                                href={`/destination/${pkg.id}`}
                                className="btn-card-action"
                                aria-label={`Jelajahi ${pkg.name}`}
                            >
                                <span className="tracking-[0.15em] uppercase text-xs">Jelajahi Destinasi</span>
                                <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </motion.article>
            ))}
        </motion.div>
    );
}
