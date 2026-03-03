"use client";

import Link from "next/link";
import { Compass, Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            style={{ backgroundColor: "#0F2A66" }}
            className="text-slate-300"
        >
            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand col */}
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="flex items-center gap-2.5 mb-5 w-fit group" aria-label="Travelista beranda">
                        <div
                            className="p-2 rounded-xl transition-all duration-200 group-hover:scale-110"
                            style={{ backgroundColor: "#1E90FF" }}
                            aria-hidden="true"
                        >
                            <Compass className="text-white" size={22} />
                        </div>
                        <span
                            className="text-xl font-bold text-white"
                            style={{ fontFamily: "var(--font-cinzel)", letterSpacing: "0.04em" }}
                        >
                            Travelista
                        </span>
                    </Link>
                    <p className="text-sm leading-relaxed mb-6 text-slate-400" style={{ fontFamily: "var(--font-inter)" }}>
                        Menghadirkan pengalaman perjalanan tak terlupakan ke destinasi impian di seluruh Indonesia dan dunia.
                    </p>
                    {/* Social links */}
                    <div className="flex gap-3" aria-label="Ikuti kami di media sosial">
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
                                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 focus-ring-blue"
                                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1E90FF")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)")}
                            >
                                <Icon size={15} aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Perjalanan */}
                <div>
                    <h3
                        className="text-white font-semibold text-base mb-5"
                        style={{ fontFamily: "var(--font-poppins)" }}
                    >
                        Perjalanan
                    </h3>
                    <ul className="space-y-3 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                        {[
                            { href: "/destination", label: "Destinasi Populer" },
                            { href: "/packages", label: "Semua Paket" },
                            { href: "/destination?category=Honeymoon", label: "Paket Honeymoon" },
                            { href: "/destination?category=Internasional", label: "Wisata Internasional" },
                        ].map(({ href, label }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    className="text-slate-400 hover:text-white transition-colors"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bantuan */}
                <div>
                    <h3
                        className="text-white font-semibold text-base mb-5"
                        style={{ fontFamily: "var(--font-poppins)" }}
                    >
                        Bantuan
                    </h3>
                    <ul className="space-y-3 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                        {[
                            { href: "/about", label: "Tentang Kami" },
                            { href: "/testimonials", label: "Testimoni" },
                            { href: "#", label: "Syarat & Ketentuan" },
                            { href: "#", label: "Kebijakan Privasi" },
                        ].map(({ href, label }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    className="text-slate-400 hover:text-white transition-colors"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter + Kontak */}
                <div>
                    <h3
                        className="text-white font-semibold text-base mb-5"
                        style={{ fontFamily: "var(--font-poppins)" }}
                    >
                        Info & Promo
                    </h3>
                    {/* Newsletter form */}
                    <p className="text-slate-400 text-sm mb-3" style={{ fontFamily: "var(--font-inter)" }}>
                        Daftar untuk info promo eksklusif:
                    </p>
                    <form
                        onSubmit={(e) => { e.preventDefault(); }}
                        className="flex gap-2 mb-6"
                        aria-label="Form langganan newsletter"
                    >
                        <input
                            type="email"
                            placeholder="email@kamu.com"
                            required
                            className="flex-1 px-3 py-2.5 rounded-xl text-sm text-slate-800 bg-white focus-ring-blue"
                            style={{ fontFamily: "var(--font-inter)", border: "1.5px solid rgba(30,144,255,0.3)" }}
                            aria-label="Alamat email untuk newsletter"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors"
                            style={{ backgroundColor: "#1E90FF", fontFamily: "var(--font-poppins)", minHeight: "44px" }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1C74D4")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1E90FF")}
                        >
                            Daftar
                        </button>
                    </form>
                    {/* Contact */}
                    <ul className="space-y-2.5 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                        <li className="flex items-center gap-2.5 text-slate-400">
                            <Mail size={14} style={{ color: "#1E90FF" }} aria-hidden="true" />
                            <a href="mailto:support@travelista.id" className="hover:text-white transition-colors">
                                support@travelista.id
                            </a>
                        </li>
                        <li className="flex items-center gap-2.5 text-slate-400">
                            <Phone size={14} style={{ color: "#1E90FF" }} aria-hidden="true" />
                            <a href="tel:+6283839350200" className="hover:text-white transition-colors">
                                +62 838-3935-0200
                            </a>
                        </li>
                        <li className="flex items-start gap-2.5 text-slate-400">
                            <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "#1E90FF" }} aria-hidden="true" />
                            <span>Gedung Thamrin Lt. 12, Jakarta</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div
                className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)", fontFamily: "var(--font-inter)" }}
            >
                <p>© {currentYear} Travelista. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-slate-300 transition-colors">Syarat & Ketentuan</a>
                    <a href="#" className="hover:text-slate-300 transition-colors">Privasi</a>
                </div>
                {/* Back to top */}
                <a
                    href="#"
                    aria-label="Kembali ke atas halaman"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{ backgroundColor: "#1E90FF", color: "white" }}
                >
                    <ArrowUp size={16} aria-hidden="true" />
                </a>
            </div>
        </footer>
    );
}
