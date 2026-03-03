"use client";

import { useState, useMemo } from "react";
import { travelPackages, categories } from "../../constants";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Star, ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";

export default function DestinationListingPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("default");

    const filtered = useMemo(() => {
        let result = travelPackages;

        // Filter by category
        if (activeCategory !== "all") {
            result = result.filter((p) => p.category === activeCategory);
        }

        // Filter by search
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            result = result.filter(
                (p) =>
                    p.name.toLowerCase().includes(q) ||
                    p.location.toLowerCase().includes(q) ||
                    p.category.toLowerCase().includes(q)
            );
        }

        // Sort
        if (sortBy === "price-asc") result = [...result].sort((a, b) => a.priceNumeric - b.priceNumeric);
        if (sortBy === "price-desc") result = [...result].sort((a, b) => b.priceNumeric - a.priceNumeric);
        if (sortBy === "rating") result = [...result].sort((a, b) => b.rating - a.rating);

        return result;
    }, [activeCategory, searchQuery, sortBy]);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Page Header */}
            <div className="bg-gradient-to-br from-sky-600 to-sky-800 pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4 tracking-tight">
                        Semua Destinasi
                    </h1>
                    <p className="text-sky-100 text-lg max-w-2xl mx-auto">
                        Temukan paket perjalanan sempurna dari ratusan destinasi pilihan kami
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Search + Sort Controls */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search
                            size={20}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            aria-hidden="true"
                        />
                        <input
                            type="search"
                            placeholder="Cari destinasi, lokasi, atau kategori..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            aria-label="Cari destinasi"
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-700 shadow-sm"
                        />
                    </div>
                    <div className="relative">
                        <SlidersHorizontal
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            aria-hidden="true"
                        />
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            aria-label="Urutkan paket"
                            className="pl-11 pr-10 py-3.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-700 shadow-sm appearance-none cursor-pointer"
                        >
                            <option value="default">Urutan Default</option>
                            <option value="price-asc">Harga: Terendah</option>
                            <option value="price-desc">Harga: Tertinggi</option>
                            <option value="rating">Rating Tertinggi</option>
                        </select>
                    </div>
                </div>

                {/* Category Filter */}
                <div
                    className="flex gap-3 flex-wrap mb-10"
                    role="group"
                    aria-label="Filter berdasarkan kategori"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            aria-pressed={activeCategory === cat.id}
                            className={`px-5 py-2.5 rounded-full font-medium transition-all text-sm border ${activeCategory === cat.id
                                    ? "bg-sky-500 text-white border-sky-500 shadow-md shadow-sky-500/20"
                                    : "bg-white text-slate-600 border-slate-200 hover:border-sky-400 hover:text-sky-500"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Results count */}
                <p className="text-slate-500 text-sm mb-6" aria-live="polite">
                    Menampilkan <strong className="text-slate-700">{filtered.length}</strong> paket wisata
                </p>

                {/* Grid */}
                {filtered.length === 0 ? (
                    <div className="text-center py-24">
                        <p className="text-slate-400 text-lg">Tidak ada paket yang cocok dengan pencarian Anda.</p>
                        <button
                            onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                            className="mt-4 text-sky-500 hover:underline font-medium"
                        >
                            Reset filter
                        </button>
                    </div>
                ) : (
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filtered.map((pkg, i) => (
                            <motion.div
                                key={pkg.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden bg-slate-100">
                                    <Image
                                        src={pkg.image}
                                        alt={`Foto destinasi ${pkg.name}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="bg-white/90 backdrop-blur-sm text-slate-600 text-xs font-semibold px-3 py-1 rounded-full">
                                            {pkg.category}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full font-bold text-sky-700 text-sm shadow-sm">
                                        {pkg.price}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col gap-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                                            <MapPin size={14} aria-hidden="true" />
                                            <span>{pkg.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-amber-500 text-sm font-semibold">
                                            <Star size={14} fill="currentColor" aria-hidden="true" />
                                            <span>{pkg.rating}</span>
                                            <span className="text-slate-400 font-normal">({pkg.reviewCount})</span>
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-playfair font-bold text-slate-900 leading-snug">
                                        {pkg.name}
                                    </h2>

                                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 flex-1">
                                        {pkg.description}
                                    </p>

                                    <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                                        <Clock size={14} aria-hidden="true" />
                                        <span>{pkg.duration}</span>
                                    </div>

                                    <Link
                                        href={`/destination/${pkg.id}`}
                                        className="mt-2 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-50 hover:bg-sky-500 hover:text-white transition-all duration-300 font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 group/btn"
                                        aria-label={`Lihat detail paket ${pkg.name}`}
                                    >
                                        Lihat Detail
                                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
}
