import { testimonials } from "../constants";
import Image from "next/image";
import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";

export default function TestimonialsSection() {
    return (
        <section
            aria-labelledby="testimonials-heading"
            className="bg-slate-900 py-24 px-6"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2
                        id="testimonials-heading"
                        className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4 tracking-tight"
                    >
                        Kata Mereka
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Lebih dari <strong className="text-white">10.000+ pelanggan</strong> telah mempercayakan liburan impian mereka kepada kami.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {testimonials.map((t) => (
                        <article
                            key={t.id}
                            className="bg-slate-800 rounded-3xl p-6 border border-slate-700 flex flex-col gap-4"
                            aria-label={`Testimoni dari ${t.name}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 bg-slate-700">
                                    <Image
                                        src={t.avatar}
                                        alt={`Foto ${t.name}`}
                                        fill
                                        className="object-cover"
                                        sizes="44px"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-white text-sm">{t.name}</p>
                                    <p className="text-slate-400 text-xs">{t.location}</p>
                                </div>
                                <Quote size={20} className="text-sky-700 ml-auto shrink-0" aria-hidden="true" />
                            </div>

                            <div className="flex gap-0.5" aria-label={`${t.rating} bintang`}>
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <Star key={i} size={13} className="text-amber-400 fill-amber-400" aria-hidden="true" />
                                ))}
                            </div>

                            <blockquote className="text-slate-300 text-sm leading-relaxed flex-1 italic">
                                "{t.text}"
                            </blockquote>

                            <span className="text-xs bg-slate-700 text-sky-400 px-3 py-1 rounded-full font-medium self-start">
                                {t.packageName}
                            </span>
                        </article>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/testimonials"
                        className="inline-flex items-center gap-2 border border-slate-600 text-slate-300 hover:border-sky-500 hover:text-sky-400 px-6 py-3 rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 group"
                    >
                        Lihat Semua Testimoni
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
