import Hero from "../components/Hero";
import DestinationGrid from "../components/DestinationGrid";
import TestimonialsSection from "../components/TestimonialsSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001";

export const metadata = {
    title: "Travelista | Temukan Destinasi Impianmu",
    description:
        "Eksplorasi destinasi eksklusif dengan harga terbaik. Mulai petualangan alam, budaya, dan relaksasi Anda hari ini.",
    alternates: { canonical: BASE_URL },
};

export default function Home() {
    return (
        <div>
            <Hero />

            {/* Destinasi Populer */}
            <section
                id="destinasi"
                aria-labelledby="destinations-heading"
                className="py-20 px-6 max-w-7xl mx-auto"
            >
                <div className="text-center mb-16">
                    <h2
                        id="destinations-heading"
                        className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 mb-4 tracking-tight"
                    >
                        Destinasi Populer
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Temukan berbagai paket perjalanan eksklusif dan mulailah petualangan tak terlupakan bersama kami.
                    </p>
                </div>

                <DestinationGrid />

                <div className="text-center mt-12">
                    <Link
                        href="/destination"
                        className="inline-flex items-center gap-2 border border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-sky-500 group"
                    >
                        Lihat Semua Destinasi
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                </div>
            </section>

            {/* Testimoni Section */}
            <TestimonialsSection />

            {/* CTA Banner */}
            <section
                aria-labelledby="cta-heading"
                className="py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-center"
            >
                <div className="max-w-3xl mx-auto">
                    <h2
                        id="cta-heading"
                        className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6 tracking-tight"
                    >
                        Siap Memulai Petualangan?
                    </h2>
                    <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                        Hubungi tim kami sekarang — konsultasi gratis, tanpa kewajiban. Kami bantu wujudkan liburan impian Anda.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/destination"
                            className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-sky-500/20 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        >
                            Jelajahi Destinasi
                        </Link>
                        <a
                            href={`https://wa.me/6283839350200?text=${encodeURIComponent("Halo Travelista! Saya ingin konsultasi paket wisata.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        >
                            Chat WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
