"use client";

import { useState, useMemo } from "react";
import { travelPackages, categories } from "../../constants";
import Image from "next/image";
import Link from "next/link";
import { Search, SlidersHorizontal, ArrowRight, Star } from "lucide-react";

export default function DestinationListingPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("default");

    const filtered = useMemo(() => {
        let result = travelPackages;

        if (activeCategory !== "all") {
            result = result.filter((p) => p.category === activeCategory);
        }

        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            result = result.filter(
                (p) =>
                    p.name.toLowerCase().includes(q) ||
                    p.location.toLowerCase().includes(q) ||
                    p.category.toLowerCase().includes(q)
            );
        }

        if (sortBy === "price-asc") result = [...result].sort((a, b) => a.priceNumeric - b.priceNumeric);
        if (sortBy === "price-desc") result = [...result].sort((a, b) => b.priceNumeric - a.priceNumeric);
        if (sortBy === "rating") result = [...result].sort((a, b) => b.rating - a.rating);

        return result;
    }, [activeCategory, searchQuery, sortBy]);

    return (
        <div className="min-h-screen bg-slate-50 pt-20">
            {/* Page Header — Luxury Minimalist */}
            <div className="bg-[#0A0A0A] pt-32 pb-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue/5 blur-3xl" aria-hidden="true" />
                <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
                    <span className="section-label text-blue">Koleksi Eksklusif</span>
                    <h1
                        className="text-4xl md:text-5xl lg:text-7xl font-light text-white mb-6"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                        Destinasi Premier
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl font-light">
                        Jelajahi portofolio destinasi paling dicari di dunia, dikurasi khusus untuk Anda.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20">
                {/* Search + Sort Controls — Thin borders, elegant inputs */}
                <div className="flex flex-col md:flex-row gap-6 mb-12">
                    <div className="relative flex-1">
                        <Search
                            size={18}
                            className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400"
                            strokeWidth={1.5}
                            aria-hidden="true"
                        />
                        <input
                            type="search"
                            placeholder="Cari destinasi atau lokasi..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-8 pr-4 py-4 bg-transparent border-b border-slate-300 text-slate-900 text-[0.95rem] font-light placeholder:text-slate-400 focus:outline-none focus:border-blue transition-colors"
                        />
                    </div>
                    <div className="relative md:w-64">
                        <SlidersHorizontal
                            size={16}
                            className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400"
                            strokeWidth={1.5}
                            aria-hidden="true"
                        />
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="w-full pl-8 pr-4 py-4 bg-transparent border-b border-slate-300 text-slate-900 text-[0.95rem] font-light focus:outline-none focus:border-blue transition-colors appearance-none cursor-pointer"
                        >
                            <option value="default">Urutan Default</option>
                            <option value="price-asc">Harga: Terendah</option>
                            <option value="price-desc">Harga: Tertinggi</option>
                            <option value="rating">Rating Tertinggi</option>
                        </select>
                    </div>
                </div>

                {/* Category Filter — Minimalist Text Links */}
                <div
                    className="flex gap-8 flex-wrap mb-16 border-b border-slate-200 pb-4"
                    role="group"
                    aria-label="Filter berdasarkan kategori"
                >
                    {categories.map((cat) => {
                        const isActive = activeCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                aria-pressed={isActive}
                                className={`text-[0.8rem] tracking-widest uppercase font-medium transition-all duration-500 relative pb-4 ${isActive ? "text-blue" : "text-slate-500 hover:text-slate-900"
                                    }`}
                            >
                                {cat.label}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Grid */}
                {filtered.length === 0 ? (
                    <div className="text-center py-32">
                        <p className="text-slate-500 text-lg font-light mb-6">Tidak ada ekspedisi yang ditemukan untuk kriteria ini.</p>
                        <button
                            onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                            className="btn-outline text-slate-900 border-slate-300 hover:border-blue hover:text-blue"
                        >
                            Hapus Filter
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filtered.map((pkg, i) => (
                            <article
                                key={pkg.id}
                                className="luxury-card group flex flex-col overflow-hidden animate-fade-up"
                                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
                            >
                                <div className="relative h-64 overflow-hidden bg-slate-50">
                                    <Image
                                        src={pkg.image}
                                        alt={`Foto destinasi ${pkg.name}`}
                                        fill
                                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true" />

                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="badge-category tracking-widest">{pkg.category}</span>
                                    </div>
                                    <div className="absolute bottom-4 left-6 z-10 flex flex-col">
                                        <span className="text-white/80 text-xs tracking-widest uppercase mb-1 font-poppins">Mulai Dari</span>
                                        <span className="badge-price leading-none text-white font-light border-none shadow-none bg-transparent p-0">{pkg.price}</span>
                                    </div>
                                </div>

                                <div className="p-8 flex-1 flex flex-col">
                                    <h3
                                        className="text-2xl font-light leading-snug mb-2 transition-colors duration-500 group-hover:text-blue"
                                        style={{ fontFamily: "var(--font-cinzel)" }}
                                    >
                                        {pkg.name}
                                    </h3>

                                    <div className="flex items-center justify-between text-xs tracking-widest uppercase text-slate-500 font-poppins mb-6">
                                        <span>{pkg.location}</span>
                                        <div className="flex items-center gap-1">
                                            <Star size={12} className="text-blue fill-blue" aria-hidden="true" />
                                            <span className="text-slate-700">{pkg.rating}</span>
                                        </div>
                                    </div>

                                    <p className="text-[0.9rem] leading-relaxed flex-1 line-clamp-3 text-slate-600 font-inter mb-6">
                                        {pkg.description}
                                    </p>

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
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
