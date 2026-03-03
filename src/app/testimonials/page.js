import { testimonials } from "../../constants";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

export const metadata = {
    title: "Testimoni Pelanggan",
    description: "Baca kisah nyata dari ribuan pelanggan puas Travelista yang telah mewujudkan liburan impian mereka.",
};

export default function TestimonialsPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <div className="bg-gradient-to-br from-sky-500 to-sky-700 pt-32 pb-20 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4 tracking-tight">
                        Kata Mereka
                    </h1>
                    <p className="text-sky-100 text-lg">
                        Lebih dari <strong>10.000+ pelanggan</strong> telah mempercayakan liburan impian mereka kepada Travelista
                    </p>
                </div>
            </div>

            {/* Stats bar */}
            <div className="bg-white border-b border-slate-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: "10.000+", label: "Pelanggan Puas" },
                        { value: "4.9/5", label: "Rating Rata-rata" },
                        { value: "50+", label: "Destinasi" },
                        { value: "98%", label: "Tingkat Kepuasan" },
                    ].map(({ value, label }) => (
                        <div key={label}>
                            <p className="text-3xl font-playfair font-bold text-sky-600 mb-1">{value}</p>
                            <p className="text-slate-500 text-sm">{label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials Grid */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((t) => (
                        <article
                            key={t.id}
                            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                            aria-label={`Testimoni dari ${t.name}`}
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-slate-100">
                                    <Image
                                        src={t.avatar}
                                        alt={`Foto profil ${t.name}`}
                                        fill
                                        className="object-cover"
                                        sizes="56px"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-slate-900">{t.name}</p>
                                    <p className="text-slate-400 text-sm">{t.location}</p>
                                    <div className="flex gap-0.5 mt-1.5" aria-label={`Rating ${t.rating} dari 5 bintang`}>
                                        {Array.from({ length: t.rating }).map((_, i) => (
                                            <Star key={i} size={14} className="text-amber-400 fill-amber-400" aria-hidden="true" />
                                        ))}
                                    </div>
                                </div>
                                <Quote size={32} className="text-sky-100 shrink-0" aria-hidden="true" />
                            </div>

                            <blockquote className="text-slate-600 leading-relaxed mb-4 italic">
                                "{t.text}"
                            </blockquote>

                            <div className="pt-4 border-t border-slate-100">
                                <span className="text-xs bg-sky-50 text-sky-600 px-3 py-1 rounded-full font-medium">
                                    {t.packageName}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center bg-gradient-to-br from-sky-500 to-sky-700 rounded-3xl p-12">
                    <h2 className="text-3xl font-playfair font-bold text-white mb-4">
                        Siap Membuat Kenangan Tak Terlupakan?
                    </h2>
                    <p className="text-sky-100 mb-8 max-w-xl mx-auto">
                        Bergabunglah dengan ribuan pelanggan puas yang telah mewujudkan liburan impian mereka bersama Travelista.
                    </p>
                    <a
                        href="/destination"
                        className="inline-flex items-center gap-2 bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-xl font-bold transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-600"
                    >
                        Temukan Destinasimu
                    </a>
                </div>
            </div>
        </div>
    );
}
