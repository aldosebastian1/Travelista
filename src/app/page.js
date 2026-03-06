import Hero from "../components/Hero";
import DestinationGrid from "../components/DestinationGrid";
import TestimonialsSection from "../components/TestimonialsSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <Hero />

      {/* Destinasi Populer */}
      <section
        id="destinasi"
        aria-labelledby="destinations-heading"
        className="py-32 px-6 max-w-7xl mx-auto"
      >
        <div className="flex flex-col items-center text-center mb-24">
          <span className="section-label">Kurasi Perjalanan</span>
          <h2
            id="destinations-heading"
            className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-6"
          >
            Destinasi Premier
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Temukan koleksi perjalanan eksklusif yang dirancang untuk memberikan pengalaman tak
            tertandingi di destinasi paling prestisius di dunia.
          </p>
        </div>

        <DestinationGrid />

        <div className="flex justify-center mt-20">
          <Link href="/destination" className="btn-outline btn-outline-slate">
            Lihat Seluruh Kurasi
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Testimoni Section */}
      <TestimonialsSection />

      {/* CTA Banner — Minimalist Luxury */}
      <section
        aria-labelledby="cta-heading"
        className="py-32 px-6 bg-noir text-center relative overflow-hidden"
      >
        {/* Subtle background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-linear-to-b from-blue/5 to-transparent blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="section-label text-blue">VIP Concierge</span>
          <h2
            id="cta-heading"
            className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8"
          >
            Rancang Perjalanan Anda
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-light mb-16 leading-relaxed max-w-2xl">
            Biarkan travel designer kami menyusun rancang bangun liburan yang dikhususkan sepenuhnya
            untuk preferensi Anda. Konsultasi tanpa kompromi.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/destination" className="btn-primary">
              Mulai Perencanaan
            </Link>
            <a
              href={`https://wa.me/6283839350200?text=${encodeURIComponent("Halo Travelista, saya ingin mengatur jadwal konsultasi VIP.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline btn-outline-inverse"
            >
              Hubungi Travel Designer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
