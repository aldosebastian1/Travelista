import { travelPackages } from "../../constants";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Star, ArrowRight } from "lucide-react";

export const metadata = {
    title: "Semua Paket Wisata",
    description: "Temukan paket wisata terlengkap dari Travelista — dari budget terjangkau hingga paket premium honeymoon.",
};

export default function PackagesPage() {
    const sorted = [...travelPackages].sort((a, b) => a.priceNumeric - b.priceNumeric);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4 tracking-tight">
                        Semua Paket Wisata
                    </h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Dari petualangan alam lokal hingga liburan premium internasional — ada paket untuk setiap impian
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Price range cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {[
                        { label: "Budget Friendly", range: "< Rp 5.000.000", color: "emerald", desc: "Destinasi lokal berkualitas" },
                        { label: "Mid Range", range: "Rp 5 – 20 Juta", color: "sky", desc: "Pengalaman semakin premium" },
                        { label: "Premium", range: "> Rp 20.000.000", color: "amber", desc: "Eksklusif tanpa kompromi" },
                    ].map(({ label, range, color, desc }) => (
                        <div key={label} className={`bg-${color}-50 border border-${color}-100 rounded-2xl p-6`}>
                            <p className={`text-${color}-600 font-bold text-lg mb-1`}>{label}</p>
                            <p className="text-slate-800 font-semibold text-xl mb-2">{range}</p>
                            <p className="text-slate-500 text-sm">{desc}</p>
                        </div>
                    ))}
                </div>

                {/* Packages list */}
                <div className="space-y-6">
                    {sorted.map((pkg) => (
                        <div
                            key={pkg.id}
                            className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col md:flex-row"
                        >
                            <div className="relative h-56 md:h-auto md:w-72 shrink-0 bg-slate-100">
                                <Image
                                    src={pkg.image}
                                    alt={`Foto ${pkg.name}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 288px"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 text-xs font-semibold text-slate-600 px-3 py-1 rounded-full backdrop-blur-sm">
                                    {pkg.category}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col justify-between flex-1">
                                <div>
                                    <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-slate-500">
                                        <span className="flex items-center gap-1.5"><MapPin size={14} aria-hidden="true" />{pkg.location}</span>
                                        <span className="flex items-center gap-1.5"><Clock size={14} aria-hidden="true" />{pkg.duration}</span>
                                        <span className="flex items-center gap-1.5 text-amber-500 font-semibold">
                                            <Star size={14} fill="currentColor" aria-hidden="true" />{pkg.rating} ({pkg.reviewCount} ulasan)
                                        </span>
                                    </div>
                                    <h2 className="text-2xl font-playfair font-bold text-slate-900 mb-3">{pkg.name}</h2>
                                    <p className="text-slate-500 leading-relaxed mb-4">{pkg.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {pkg.highlights.slice(0, 3).map((h) => (
                                            <span key={h} className="text-xs bg-sky-50 text-sky-600 px-3 py-1 rounded-full font-medium">
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-6 border-t border-slate-100">
                                    <div>
                                        <p className="text-xs text-slate-400 mb-1">Mulai dari</p>
                                        <p className="text-2xl font-bold text-sky-600">{pkg.price}</p>
                                        <p className="text-xs text-slate-400">per orang</p>
                                    </div>
                                    <Link
                                        href={`/destination/${pkg.id}`}
                                        className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                                        aria-label={`Lihat detail dan pesan paket ${pkg.name}`}
                                    >
                                        Pesan Sekarang
                                        <ArrowRight size={16} aria-hidden="true" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
