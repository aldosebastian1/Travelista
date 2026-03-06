import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import ParallaxCardImage from "./ParallaxCardImage";

export default function DestinationCard({
  pkg,
  className = "",
  style,
  imageMode = "static",
  priceClassName = "",
}) {
  return (
    <article
      className={`luxury-card group flex flex-col overflow-hidden ${className}`.trim()}
      style={style}
    >
      <div className="relative h-64 bg-slate-50 overflow-hidden">
        {imageMode === "parallax" ? (
          <ParallaxCardImage
            src={pkg.image}
            alt={`Pemandangan destinasi ${pkg.name} di ${pkg.location}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <Image
            src={pkg.image}
            alt={`Foto destinasi ${pkg.name}`}
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        <div
          className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/60 to-transparent"
          aria-hidden="true"
        />

        <div className="absolute top-4 left-4 z-10">
          <span className="badge-category tracking-widest">{pkg.category}</span>
        </div>
        <div className="absolute bottom-4 left-6 z-10 flex flex-col">
          <span className="text-white/80 text-xs tracking-widest uppercase mb-1 font-poppins">
            Mulai Dari
          </span>
          <span className={`badge-price leading-none ${priceClassName}`.trim()}>{pkg.price}</span>
        </div>
      </div>

      <div className="p-5 md:p-8 flex-1 flex flex-col">
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
            <ArrowRight
              size={14}
              className="transition-transform duration-500 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
