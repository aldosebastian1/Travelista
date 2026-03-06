import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { getTestimonials } from "../../services/travelService";

export const metadata = {
  title: "Kesaksian Klien | Travelista",
  description:
    "Pengalaman privat tak terlupakan, dikisahkan langsung oleh para tamu eksklusif kami.",
};

export default function TestimonialsPage() {
  const testimonials = getTestimonials();

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Header — Deep Noir */}
      <div className="bg-noir pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue/5 blur-3xl" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="section-label text-blue">Jurnal Klien</span>
          <h1 className="font-cinzel text-4xl md:text-5xl lg:text-7xl font-light text-white mb-6">
            Catatan Perjalanan
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light">
            Kepercayaan yang dianugerahkan oleh kalangan paling selektif. Dipercaya dalam menyusun
            ribuan kenangan berharga.
          </p>
        </div>
      </div>

      {/* Testimonials Grid — Elegant Typography Focus */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="bg-transparent border-t border-slate-200 pt-10"
              aria-label={`Kesaksian dari ${t.name}`}
            >
              <div className="flex gap-1 mb-8" aria-label={`Rating ${t.rating} dari 5 bintang`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-blue fill-blue" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="font-cinzel text-slate-800 text-xl font-light leading-relaxed mb-10 italic">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-6">
                <div className="relative w-12 h-12 overflow-hidden shrink-0 bg-slate-100">
                  <Image
                    src={t.avatar}
                    alt={`Foto profil ${t.name}`}
                    fill
                    className="object-cover grayscale"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-medium text-[0.85rem] tracking-widest uppercase text-slate-900">
                    {t.name}
                  </p>
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-light mt-1 uppercase tracking-widest">
                    <span>{t.location}</span>
                    <span>•</span>
                    <span className="text-blue">{t.packageName}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Minimalist CTA */}
        <div className="mt-32 text-center border-t border-slate-200 pt-24">
          <span className="section-label">Langkah Selanjutnya</span>
          <h2 className="font-cinzel text-4xl lg:text-5xl font-light text-slate-900 mb-10">
            Tulis Kisah Perjalanan Anda
          </h2>
          <div className="flex justify-center flex-wrap gap-4 focus:outline-none">
            <Link href="/destination" className="btn-primary">
              Eksplorasi Destinasi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
