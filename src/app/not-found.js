import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata = {
    title: "Halaman Tidak Ditemukan | Travelista",
    description: "Halaman yang Anda cari tidak tersedia. Temukan destinasi impian Anda di Travelista.",
};

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
            <div className="max-w-2xl w-full text-center">
                {/* Big 404 */}
                <div className="relative mb-8">
                    <p className="text-[180px] font-playfair font-bold text-slate-100 leading-none select-none">
                        404
                    </p>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-sky-500 rounded-full flex items-center justify-center shadow-xl shadow-sky-500/30">
                            <MapPin size={40} className="text-white" aria-hidden="true" />
                        </div>
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">
                    Destinasi Tidak Ditemukan
                </h1>
                <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                    Sepertinya Anda tersesat dalam petualangan. Halaman yang Anda cari tidak ada atau telah dipindahkan.
                    Yuk, kembali ke beranda dan temukan destinasi impian Anda!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg shadow-sky-500/20"
                    >
                        Kembali ke Beranda
                        <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                    <Link
                        href="/destination"
                        className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-semibold transition-colors"
                    >
                        Lihat Semua Destinasi
                    </Link>
                </div>
            </div>
        </div>
    );
}
