import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function Hero() {
    return (
        <section
            aria-labelledby="hero-heading"
            className="relative h-screen min-h-[600px] max-h-[900px] w-full flex items-center overflow-hidden grain-overlay"
        >
            {/* Background Image */}
            <Image
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=85"
                alt="Pemandangan panorama destinasi wisata dunia yang memukau"
                fill
                priority
                className="object-cover"
                sizes="100vw"
            />

            {/* Blue cinematic overlay */}
            <div className="bg-gradient-hero absolute inset-0 z-10" aria-hidden="true" />
            <div
                className="absolute bottom-0 left-0 right-0 h-1/3 z-10"
                style={{ background: "linear-gradient(to top, rgba(15,42,102,0.5) 0%, transparent 100%)" }}
                aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-16 pt-24">
                <div className="max-w-3xl">
                    {/* Eyebrow badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8 fade-up"
                        style={{
                            backgroundColor: "rgba(30,144,255,0.2)",
                            border: "1px solid rgba(30,144,255,0.4)",
                            color: "#93C5FD",
                            backdropFilter: "blur(8px)",
                            fontFamily: "var(--font-poppins)",
                        }}
                    >
                        <MapPin size={14} aria-hidden="true" />
                        Jelajahi 50+ Destinasi Premium
                    </div>

                    {/* H1 — Cinzel cinematic */}
                    <h1
                        id="hero-heading"
                        className="text-white text-shadow-cinematic fade-up fade-up-delay-1"
                    >
                        Mulai Petualangan
                        <br />
                        <span style={{ color: "#93C5FD" }}>Tak Terlupakan</span>
                    </h1>

                    {/* Subheadline — Inter */}
                    <p
                        className="mt-6 text-lg md:text-xl leading-relaxed fade-up fade-up-delay-2"
                        style={{
                            color: "rgba(255,255,255,0.82)",
                            fontFamily: "var(--font-inter)",
                            maxWidth: "540px",
                        }}
                    >
                        Layanan perjalanan premium dengan pemandu profesional, akomodasi terbaik, dan kenangan yang akan selalu Anda ceritakan.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 mt-10 fade-up fade-up-delay-3">
                        <Link
                            href="#destinasi"
                            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 hover:-translate-y-0.5"
                            style={{
                                backgroundColor: "#FF7A59",
                                boxShadow: "0 8px 24px rgba(255,122,89,0.40)",
                                fontFamily: "var(--font-poppins)",
                            }}
                        >
                            Eksplor Sekarang →
                        </Link>
                        <Link
                            href="/about"
                            className="btn-secondary inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105"
                            style={{
                                backgroundColor: "rgba(255,255,255,0.12)",
                                border: "1.5px solid rgba(255,255,255,0.45)",
                                color: "white",
                                backdropFilter: "blur(8px)",
                                fontFamily: "var(--font-poppins)",
                            }}
                        >
                            Pelajari Lebih Lanjut
                        </Link>
                    </div>

                    {/* Trust badges */}
                    <div className="flex items-center gap-8 mt-12 fade-up fade-up-delay-3 flex-wrap">
                        {[
                            { value: "10.000+", label: "Wisatawan Puas" },
                            { value: "50+", label: "Destinasi" },
                            { value: "4.9★", label: "Rating" },
                        ].map(({ value, label }) => (
                            <div key={label} className="text-center">
                                <p className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-poppins)" }}>
                                    {value}
                                </p>
                                <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter)" }}>
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator (CSS animation via global) */}
            <div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 fade-up fade-up-delay-3"
                aria-hidden="true"
            >
                <div
                    className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-1"
                    style={{ borderColor: "rgba(255,255,255,0.4)" }}
                >
                    <div className="scroll-dot w-1.5 h-3 rounded-full" style={{ backgroundColor: "white" }} />
                </div>
            </div>
        </section>
    );
}
