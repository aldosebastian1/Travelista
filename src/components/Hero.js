import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            aria-labelledby="hero-heading"
            className="relative h-screen min-h-[700px] w-full flex items-center overflow-hidden"
        >
            {/* Background Image — High Quality, static */}
            <Image
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=90"
                alt="Pemandangan panorama destinasi wisata dunia yang eksklusif"
                fill
                priority
                className="object-cover scale-105"
                sizes="100vw"
                style={{ filter: "brightness(0.9) contrast(1.1)" }}
            />

            {/* Cinematic Overlay — Deep Noir to transparent */}
            <div className="absolute inset-0 bg-gradient-hero z-10" aria-hidden="true" />

            {/* Content — Centered, elegant, breathable */}
            <div className="relative z-20 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center pt-20">

                {/* Subtle eyebrow label */}
                <span
                    className="section-label text-white/70 mb-8 animate-fade-up"
                    style={{ animationDelay: "0.2s" }}
                >
                    Eksklusif & Premium
                </span>

                {/* H1 — Elegant Cinzel Serif */}
                <h1
                    id="hero-heading"
                    className="text-white text-shadow-cinematic animate-fade-up"
                    style={{ animationDelay: "0.4s" }}
                >
                    Mulai Petualangan<br />
                    <span className="text-blue-gradient italic pr-2">Tak Terlupakan</span>
                </h1>

                {/* Subheadline — Clean Inter */}
                <p
                    className="mt-8 text-lg md:text-xl font-light leading-relaxed animate-fade-up"
                    style={{
                        color: "rgba(255,255,255,0.85)",
                        fontFamily: "var(--font-inter)",
                        maxWidth: "600px",
                        animationDelay: "0.6s",
                    }}
                >
                    Layanan perjalanan premium dengan rute eksklusif, akomodasi bintang lima, dan privasi yang tertata sempurna.
                </p>

                {/* CTA Buttons — Minimalist solid & outline */}
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

            {/* Scroll Indicator — Elegant single line fading */}
            <div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 animate-fade-up"
                style={{ animationDelay: "1.2s", opacity: 0.6 }}
                aria-hidden="true"
            >
                <span className="text-[0.65rem] tracking-[0.3em] uppercase text-white font-poppins">Scroll</span>
                <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-fade-down" style={{ animationIterationCount: "infinite", animationDuration: "2s" }} />
                </div>
            </div>
        </section>
    );
}
