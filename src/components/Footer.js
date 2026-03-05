"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            style={{ backgroundColor: "#0A0A0A" }}
            className="text-slate-300"
        >
            <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-8">

                {/* Brand Column */}
                <div className="md:col-span-5">
                    <Link href="/" className="inline-block mb-8 group" aria-label="Travelista beranda">
                        <span
                            className="text-2xl font-light text-white tracking-[0.2em] transition-colors duration-500 group-hover:text-blue"
                            style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                            TRAVELISTA
                        </span>
                    </Link>
                    <p className="text-[0.9rem] leading-loose text-slate-300 font-light max-w-sm mb-10">
                        Mengkurasi perjalanan paling eksklusif ke destinasi premier dunia. Privasi, kemewahan, dan layanan tanpa kompromi.
                    </p>

                    {/* Socials - Minimalist */}
                    <div className="flex gap-6" aria-label="Ikuti kami di media sosial">
                        {[
                            { href: "https://facebook.com", Icon: Facebook, label: "Facebook" },
                            { href: "https://instagram.com", Icon: Instagram, label: "Instagram" },
                            { href: "https://twitter.com", Icon: Twitter, label: "Twitter" },
                        ].map(({ href, Icon, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Travelista di ${label}`}
                                className="text-slate-400 transition-colors duration-500 hover:text-blue"
                            >
                                <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Link Columns */}
                <div className="md:col-span-2 space-y-8">
                    <h3 className="section-label text-xs">Kurasi</h3>
                    <ul className="space-y-4 text-[0.85rem] font-light">
                        {[
                            { href: "/destination", label: "Destinasi Premier" },
                            { href: "/destination?category=Honeymoon", label: "Private Honeymoon" },
                            { href: "/destination?category=Internasional", label: "Eksplorasi Global" },
                        ].map(({ href, label }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    className="transition-colors duration-500 hover:text-white"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-2 space-y-8">
                    <h3 className="section-label text-xs">Layanan</h3>
                    <ul className="space-y-4 text-[0.85rem] font-light">
                        {[
                            { href: "/about", label: "Filosofi Kami" },
                            { href: "/testimonials", label: "Ulasan Klien" },
                            { href: "#", label: "Konsultasi Pribadi" },
                        ].map(({ href, label }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    className="transition-colors duration-500 hover:text-white"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Concierge / Newsletter */}
                <div className="md:col-span-3 space-y-8">
                    <h3 className="section-label text-xs">VIP Concierge</h3>
                    <ul className="space-y-4 text-[0.85rem] font-light mb-8">
                        <li className="flex items-center gap-3">
                            <Phone size={14} className="text-slate-400" strokeWidth={1.5} />
                            <a href="tel:+6283839350200" className="hover:text-white transition-colors tracking-wider">
                                +62 838 3935 0200
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={14} className="text-slate-400" strokeWidth={1.5} />
                            <a href="mailto:concierge@travelista.id" className="hover:text-white transition-colors">
                                concierge@travelista.id
                            </a>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin size={14} className="mt-1 shrink-0 text-slate-400" strokeWidth={1.5} />
                            <span className="leading-relaxed">The Premium Tower, Lt. 42<br />Jakarta, Indonesia</span>
                        </li>
                    </ul>

                    {/* Minimalist Newsletter */}
                    <div className="pt-2">
                        <form
                            onSubmit={(e) => { e.preventDefault(); }}
                            className="relative"
                            aria-label="Registrasi Jurnal Perjalanan"
                        >
                            <input
                                type="email"
                                placeholder="Alamat email Anda"
                                required
                                className="input-luxury pr-10"
                                aria-label="Alamat email untuk jurnal"
                            />
                            <button
                                type="submit"
                                aria-label="Kirim"
                                className="absolute right-0 bottom-3 text-slate-300 hover:text-blue transition-colors"
                            >
                                <ArrowRight size={16} strokeWidth={1.5} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Bar — Minimalist Divider */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="border-t border-white/5 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[0.75rem] font-light tracking-wide uppercase">
                    <p>© {currentYear} Travelista. <span className="text-slate-600 hidden sm:inline">|</span> Crafted for Excellence.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privasi</a>
                        <a href="#" className="hover:text-white transition-colors">Ketentuan Layanan</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
