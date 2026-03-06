import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Halaman Tidak Ditemukan | Travelista",
  description:
    "Halaman yang Anda cari tidak tersedia. Temukan destinasi eksklusif Anda di Travelista.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-noir flex items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-blue/5 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center">
        {/* Minimalist Compass Icon */}
        <Compass className="text-blue mb-8" size={64} strokeWidth={1} />

        <span className="section-label text-blue mb-4">Error 404</span>

        <h1 className="font-cinzel text-4xl md:text-5xl font-light text-white mb-6">
          Destinasi Tidak Ditemukan
        </h1>

        <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed max-w-lg mx-auto">
          Mungkin rute ini belum kami petakan, atau kemewahan yang Anda cari berada di destinasi
          lain. Mari kembali ke jalur utama.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/" className="btn-primary">
            Kembali ke Beranda
          </Link>
          <Link href="/destination" className="btn-outline btn-outline-inverse">
            Lihat Destinasi
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
