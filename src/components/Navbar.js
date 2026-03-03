"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Menu, User, X, Map } from "lucide-react";
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
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            aria-label="Navigasi utama"
            style={{ backgroundColor: scrolled ? "#0F2A66" : "#0F2A66" }}
            className="fixed w-full z-50 transition-all duration-300"
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2.5 group focus-ring-blue rounded-xl"
                    aria-label="Travelista — kembali ke beranda"
                >
                    <div
                        className="p-2 rounded-xl transition-all duration-200 group-hover:scale-110"
                        style={{ backgroundColor: "#1E90FF" }}
                        aria-hidden="true"
                    >
                        <Compass className="text-white" size={22} />
                    </div>
                    <span className="font-poppins text-xl font-bold text-white tracking-tight">
                        Travelista
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map(({ href, label }) => {
                        const isActive = pathname === href || pathname.startsWith(href + "/");
                        return (
                            <Link
                                key={label}
                                href={href}
                                className="relative text-sm font-medium transition-colors duration-200 focus-ring-blue rounded-md px-1 py-0.5"
                                style={{
                                    color: isActive ? "#1E90FF" : "rgba(255,255,255,0.85)",
                                }}
                                aria-current={isActive ? "page" : undefined}
                            >
                                {label}
                                {isActive && (
                                    <span
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                                        style={{ backgroundColor: "#1E90FF" }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* CTA + Mobile Toggle */}
                <div className="flex items-center gap-3">
                    <Link
                        href="/destination"
                        className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
                        style={{
                            backgroundColor: "#1E90FF",
                            boxShadow: "0 4px 14px rgba(30,144,255,0.40)",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1C74D4")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1E90FF")}
                    >
                        <Map size={15} aria-hidden="true" />
                        Rencanakan Perjalanan
                    </Link>

                    <button
                        aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-menu"
                        className="md:hidden text-white p-2 rounded-xl transition-colors focus-ring-blue"
                        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                        onClick={() => setMobileOpen((prev) => !prev)}
                    >
                        {mobileOpen ? (
                            <X size={24} aria-hidden="true" />
                        ) : (
                            <Menu size={24} aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div
                    id="mobile-menu"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menu navigasi"
                    className="md:hidden px-6 pb-6 pt-4 space-y-2"
                    style={{ backgroundColor: "#0A2040", borderTop: "1px solid rgba(255,255,255,0.1)" }}
                >
                    {navLinks.map(({ href, label }) => {
                        const isActive = pathname === href || pathname.startsWith(href + "/");
                        return (
                            <Link
                                key={label}
                                href={href}
                                className="block py-3 px-4 rounded-xl font-medium text-sm transition-colors"
                                style={{
                                    backgroundColor: isActive ? "rgba(30,144,255,0.2)" : "transparent",
                                    color: isActive ? "#1E90FF" : "rgba(255,255,255,0.8)",
                                }}
                                onClick={() => setMobileOpen(false)}
                                aria-current={isActive ? "page" : undefined}
                            >
                                {label}
                            </Link>
                        );
                    })}
                    <div className="pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                        <Link
                            href="/destination"
                            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-all"
                            style={{ backgroundColor: "#1E90FF" }}
                            onClick={() => setMobileOpen(false)}
                        >
                            <Map size={16} aria-hidden="true" />
                            Rencanakan Perjalanan
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
