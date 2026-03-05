import { travelPackages } from "../../constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Koleksi Paket Wisata | Travelista",
    description: "Jelajahi rancang bangun destinasi premium dan eksklusif kami di seluruh dunia.",
};

export default function PackagesPage() {
    // Sort packages by price descending to emphasize premium feel
    const sorted = [...travelPackages].sort((a, b) => b.priceNumeric - a.priceNumeric);

    return (
        <div className="min-h-screen bg-slate-50 pt-20">
            {/* Header — Cinematic Minimalist */}
            <div className="bg-[#0A0A0A] pt-32 pb-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue/5 blur-3xl" aria-hidden="true" />
                <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
                    <span className="section-label text-blue">Portofolio Perjalanan</span>
                    <h1
                        className="text-4xl md:text-5xl lg:text-7xl font-light text-white mb-6"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                        Koleksi Eksklusif
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl font-light">
                        Kurasi itinerary privat untuk memori yang tak lekang oleh waktu.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24">

                {/* Minimalist Range Descriptions rather than price block cards */}
                <div className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto">
                    <h2
                        className="text-3xl font-light text-slate-900 mb-6"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                        Standar Kemewahan Tanpa Kompromi
                    </h2>
                    <p className="text-slate-600 font-light leading-relaxed">
                        Setiap porsi perjalanan dibentuk dengan dedikasi tinggi terhadap kenyamanan dan estetika. Dari resor terpencil hingga ekspedisi privat, kami merancang setiap detik untuk kesempurnaan Anda.
                    </p>
                </div>

                {/* Packages list — Luxury Magazine Layout */}
                <div className="space-y-20">
                    {sorted.map((pkg, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <article
                                key={pkg.id}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center group`}
                            >
                                {/* Image Container */}
                                <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-[3/4] overflow-hidden bg-slate-100">
                                    <Image
                                        src={pkg.image}
                                        alt={`Foto ${pkg.name}`}
                                        fill
                                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true" />
                                </div>

                                {/* Content Container */}
                                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                    <div className="mb-6">
                                        <span className="section-label text-blue mb-4">{pkg.location} • {pkg.category}</span>
                                        <h2
                                            className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 leading-tight transition-colors duration-500 group-hover:text-blue"
                                            style={{ fontFamily: "var(--font-cinzel)" }}
                                        >
                                            {pkg.name}
                                        </h2>
                                        <div className="w-12 h-[1px] bg-blue mb-8"></div>
                                        <p className="text-slate-600 text-lg font-light leading-relaxed mb-8">
                                            {pkg.description}
                                        </p>
                                    </div>

                                    {/* Highlights - elegant list */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-12">
                                        {pkg.highlights.map((h) => (
                                            <div key={h} className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 bg-blue rounded-full shrink-0"></div>
                                                <span className="text-[0.9rem] font-light text-slate-700 uppercase tracking-widest">{h}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-baseline justify-between gap-8 pt-8 border-t border-slate-200">
                                        <div>
                                            <span className="block text-[0.7rem] uppercase tracking-[0.2em] text-slate-400 mb-2">Investasi Perjalanan</span>
                                            <span
                                                className="text-3xl text-slate-900 font-light"
                                                style={{ fontFamily: "var(--font-cinzel)" }}
                                            >
                                                {pkg.price}
                                            </span>
                                        </div>
                                        <Link
                                            href={`/destination/${pkg.id}`}
                                            className="btn-primary shrink-0"
                                            aria-label={`Jelajahi portofolio ${pkg.name}`}
                                        >
                                            Lihat Itinerary
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
