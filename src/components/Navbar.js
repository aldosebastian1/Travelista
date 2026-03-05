"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Menu, X, Map } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
    { href: "/destination", label: "Destinasi" },
    { href: "/packages", label: "Paket" },
    { href: "/testimonials", label: "Testimoni" },
    { href: "/about", label: "Tentang Kami" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            aria-label="Navigasi utama"
            className={`fixed w-full z-50 transition-all duration-700 ${scrolled
                ? "glass-dark py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo — Luxury Serif */}
                <Link
                    href="/"
                    className="flex items-center gap-3 group focus-ring-blue"
                    aria-label="Travelista — kembali ke beranda"
                >
                    <Compass
                        className="text-blue transition-transform duration-700 group-hover:scale-105"
                        size={28}
                        strokeWidth={1.5}
                    />
                    <span
                        className="text-xl md:text-2xl font-light tracking-[0.2em] text-white transition-opacity duration-500 group-hover:opacity-80"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                        TRAVELISTA
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-10 items-center">
                    {navLinks.map(({ href, label }) => {
                        const isActive = pathname === href || pathname.startsWith(href + "/");
                        return (
                            <Link
                                key={label}
                                href={href}
                                className="relative text-[0.8rem] font-medium tracking-[0.15em] uppercase transition-all duration-500 group hover:text-white"
                                style={{
                                    color: isActive ? "#1D4ED8" : "rgba(255,255,255,0.85)",
                                    fontFamily: "var(--font-poppins)",
                                }}
                                aria-current={isActive ? "page" : undefined}
                            >
                                {label}
                                {/* Subtle gold underline on hover/active */}
                                <span
                                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[1px] bg-blue transition-all duration-500 ease-out"
                                    style={{
                                        width: isActive ? "20px" : "0px",
                                        opacity: isActive ? 1 : 0,
                                    }}
                                />
                                {!isActive && (
                                    <span
                                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[1px] bg-blue w-0 opacity-0 group-hover:w-[20px] group-hover:opacity-100 transition-all duration-500 ease-out"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* CTA + Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/destination"
                        className="btn-primary hidden md:inline-flex px-6 py-2.5 text-xs"
                        aria-label="Rencanakan perjalanan"
                    >
                        Rencanakan Perjalanan
                    </Link>

                    <button
                        aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-menu"
                        className="md:hidden text-white p-2 transition-all duration-500 hover:text-blue"
                        onClick={() => setMobileOpen((prev) => !prev)}
                    >
                        {mobileOpen ? (
                            <X size={28} strokeWidth={1.5} aria-hidden="true" />
                        ) : (
                            <Menu size={28} strokeWidth={1.5} aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu — minimal fade down */}
            {mobileOpen && (
                <div
                    id="mobile-menu"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menu navigasi"
                    className="md:hidden absolute top-full left-0 w-full px-6 pb-8 pt-4 space-y-4 animate-fade-down"
                    style={{
                        backgroundColor: "rgba(10, 10, 10, 0.98)",
                        backdropFilter: "blur(20px)",
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                >
                    {navLinks.map(({ href, label }, i) => {
                        const isActive = pathname === href || pathname.startsWith(href + "/");
                        return (
                            <Link
                                key={label}
                                href={href}
                                className="block py-3 text-sm tracking-[0.1em] uppercase transition-all duration-500 hover:text-white"
                                style={{
                                    color: isActive ? "#1D4ED8" : "rgba(255,255,255,0.8)",
                                    fontFamily: "var(--font-poppins)",
                                    borderBottom: "1px solid rgba(255,255,255,0.03)",
                                }}
                                onClick={() => setMobileOpen(false)}
                                aria-current={isActive ? "page" : undefined}
                            >
                                {label}
                            </Link>
                        );
                    })}
                    <div className="pt-6">
                        <Link
                            href="/destination"
                            className="btn-primary flex items-center justify-center w-full"
                            onClick={() => setMobileOpen(false)}
                        >
                            Rencanakan Perjalanan
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
