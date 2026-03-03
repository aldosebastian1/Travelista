"use client";

import { travelPackages } from "../constants";
import { MapPin, ArrowRight, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function DestinationGrid() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };
    const itemVariants = {
        hidden: { y: 28, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 90, damping: 14 } },
    };

    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
        >
            {travelPackages.map((pkg) => (
                <motion.article
                    variants={itemVariants}
                    key={pkg.id}
                    className="group flex flex-col bg-white rounded-2xl overflow-hidden hover-lift border"
                    style={{
                        boxShadow: "0 6px 20px rgba(30, 144, 255, 0.12)",
                        borderColor: "#E5E7EB",
                        borderRadius: "16px",
                    }}
                >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden bg-slate-100">
                        <Image
                            src={pkg.image}
                            alt={`Pemandangan destinasi ${pkg.name} di ${pkg.location}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {/* Gradient overlay */}
                        <div
                            className="absolute inset-0"
                            style={{ background: "linear-gradient(to top, rgba(15,42,102,0.6) 0%, transparent 60%)" }}
                            aria-hidden="true"
                        />
                        {/* Category chip */}
                        <div className="absolute top-4 left-4 z-10">
                            <span
                                className="text-xs font-semibold px-3 py-1 rounded-full"
                                style={{
                                    backgroundColor: "rgba(15,42,102,0.75)",
                                    color: "#93C5FD",
                                    backdropFilter: "blur(8px)",
                                    border: "1px solid rgba(30,144,255,0.3)",
                                    fontFamily: "var(--font-poppins)",
                                }}
                            >
                                {pkg.category}
                            </span>
                        </div>
                        {/* Price badge */}
                        <div
                            className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full font-bold text-sm"
                            style={{
                                backgroundColor: "#FF7A59",
                                color: "white",
                                fontFamily: "var(--font-poppins)",
                                boxShadow: "0 4px 12px rgba(255,122,89,0.35)",
                            }}
                        >
                            {pkg.price}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col gap-3">
                        {/* Location & Rating */}
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1.5" style={{ color: "#4B5563" }}>
                                <MapPin size={13} aria-hidden="true" style={{ color: "#1E90FF" }} />
                                <span style={{ fontFamily: "var(--font-inter)" }}>{pkg.location}</span>
                            </div>
                            <div className="flex items-center gap-1 font-semibold" style={{ color: "#F59E0B" }}>
                                <Star size={13} fill="currentColor" aria-hidden="true" />
                                <span>{pkg.rating}</span>
                                <span style={{ color: "#9CA3AF", fontWeight: 400 }}>({pkg.reviewCount})</span>
                            </div>
                        </div>

                        {/* Title — Poppins */}
                        <h3
                            className="text-xl font-bold leading-snug"
                            style={{ fontFamily: "var(--font-poppins)", color: "#0F1B2A" }}
                        >
                            {pkg.name}
                        </h3>

                        {/* Description */}
                        <p
                            className="text-sm leading-relaxed flex-1 line-clamp-2"
                            style={{ color: "#4B5563", fontFamily: "var(--font-inter)" }}
                        >
                            {pkg.description}
                        </p>

                        {/* Duration */}
                        <div className="flex items-center gap-1.5 text-sm" style={{ color: "#6B7280" }}>
                            <Clock size={13} aria-hidden="true" style={{ color: "#1E90FF" }} />
                            <span style={{ fontFamily: "var(--font-inter)" }}>{pkg.duration}</span>
                        </div>

                        {/* CTA button */}
                        <Link
                            href={`/destination/${pkg.id}`}
                            className="mt-2 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
                            style={{
                                backgroundColor: "#E6F0FF",
                                color: "#1E90FF",
                                fontFamily: "var(--font-poppins)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "#1E90FF";
                                e.currentTarget.style.color = "white";
                                e.currentTarget.style.boxShadow = "0 4px 16px rgba(30,144,255,0.35)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "#E6F0FF";
                                e.currentTarget.style.color = "#1E90FF";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                            aria-label={`Lihat detail paket ${pkg.name}`}
                        >
                            Lihat Detail
                            <ArrowRight size={15} aria-hidden="true" />
                        </Link>
                    </div>
                </motion.article>
            ))}
        </motion.div>
    );
}
