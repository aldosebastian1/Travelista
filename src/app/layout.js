import "../styles/globals.css";
import { Cinzel, Poppins, Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GoogleAnalytics from "../components/GoogleAnalytics";

const cinzel = Cinzel({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    variable: "--font-cinzel",
    display: "swap",
});
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-poppins",
    display: "swap",
});
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001";
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: "Travelista | Destinasi Wisata Premium Indonesia & Dunia",
        template: "%s | Travelista",
    },
    description:
        "Temukan dan pesan paket wisata premium ke destinasi terbaik Indonesia dan dunia. Layanan profesional, harga transparan, kenangan tak terlupakan.",
    keywords: ["paket wisata", "tour travel", "destinasi wisata", "liburan premium", "bali", "raja ampat", "jepang"],
    authors: [{ name: "Travelista" }],
    creator: "Travelista",
    icons: {
        icon: "/favicon.svg",
        shortcut: "/favicon.svg",
        apple: "/favicon.svg",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
    },
    openGraph: {
        type: "website",
        locale: "id_ID",
        url: BASE_URL,
        siteName: "Travelista",
        title: "Travelista | Destinasi Wisata Premium Indonesia & Dunia",
        description:
            "Temukan dan pesan paket wisata premium ke destinasi terbaik Indonesia dan dunia.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
                width: 1200,
                height: 630,
                alt: "Travelista — Premium Travel",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Travelista | Destinasi Wisata Premium",
        description: "Pesan paket wisata premium ke destinasi terbaik bersama Travelista.",
        images: ["https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80"],
    },
};

export default function RootLayout({ children }) {
    // JSON-LD: TravelAgency Organization
    const organizationJsonLd = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        name: "Travelista",
        url: BASE_URL,
        description: "Agen perjalanan premium Indonesia menawarkan paket wisata eksklusif.",
        address: {
            "@type": "PostalAddress",
            streetAddress: "The Premium Tower, Lt. 42",
            addressLocality: "Jakarta",
            addressRegion: "DKI Jakarta",
            addressCountry: "ID",
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+62-838-3935-0200",
            contactType: "customer service",
        }
    };

    return (
        <html lang="id" className={`${cinzel.variable} ${poppins.variable} ${inter.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
                />
            </head>
            <body className="antialiased flex flex-col min-h-screen bg-slate-50 text-slate-800">
                {/* Google Analytics */}
                <GoogleAnalytics GA_MEASUREMENT_ID={GA_ID} />
                {/* Skip to content */}
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-blue focus:text-white focus:px-6 focus:py-3 focus:rounded-xl focus:font-semibold focus:shadow-lg transition-all"
                >
                    Lewati ke konten utama
                </a>

                <header>
                    <Navbar />
                </header>

                <main id="main-content" className="flex-1" tabIndex={-1}>
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    );
}
