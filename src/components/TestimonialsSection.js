import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { getTestimonials } from "../services/travelService";

export default function TestimonialsSection() {
  const testimonials = getTestimonials();

  return (
    <section aria-labelledby="testimonials-heading" className="bg-transparent py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">Jurnal Klien</span>
          <h2
            id="testimonials-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-6"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Kepercayaan Eksklusif
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Pengalaman istimewa yang dibagikan oleh klien-klien kehormatan kami dari seluruh dunia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="bg-white border border-slate-200 p-8 flex flex-col gap-6"
              aria-label={`Kesaksian dari ${t.name}`}
            >
              <div className="flex gap-1" aria-label={`${t.rating} bintang`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-blue fill-blue" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="text-slate-600 text-[0.95rem] leading-relaxed flex-1 font-light italic">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-slate-100">
                  <Image
                    src={t.avatar}
                    alt={`Foto ${t.name}`}
                    fill
                    className="object-cover grayscale"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-medium text-slate-900 text-[0.85rem] tracking-widest uppercase">
                    {t.name}
                  </p>
                  <p className="text-blue text-xs tracking-widest uppercase mt-1">
                    {t.packageName}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center flex-wrap gap-4 focus:outline-none">
          <Link
            href="/testimonials"
            className="btn-outline text-slate-900 border-slate-300 hover:border-blue hover:text-blue"
          >
            Baca Seluruh Jurnal
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
