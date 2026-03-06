import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Clock, Star, ArrowLeft, CheckCircle } from "lucide-react";
import { notFound } from "next/navigation";
import BookingForm from "../../../components/BookingForm";
import { BASE_URL } from "../../../lib/site-config";
import { getTravelPackageById } from "../../../services/travelService";

// Next.js 15: params is a Promise — must be awaited
export async function generateMetadata({ params }) {
  const { id } = await params;
  const pkg = getTravelPackageById(id);
  if (!pkg) return { title: "Destinasi Tidak Ditemukan" };

  return {
    title: `${pkg.name} — ${pkg.location}`,
    description: `Pesan paket wisata ${pkg.name} ke ${pkg.location} hanya ${pkg.price}. Layanan premium, pemandu profesional, akomodasi terbaik.`,
    alternates: { canonical: `${BASE_URL}/destination/${pkg.id}` },
    openGraph: {
      title: `${pkg.name} | Travelista`,
      description: `Eksplorasi keindahan ${pkg.location} bersama Travelista.`,
      url: `${BASE_URL}/destination/${pkg.id}`,
      images: [
        {
          url: pkg.image,
          width: 1200,
          height: 630,
          alt: `Pemandangan ${pkg.name}`,
        },
      ],
      type: "website",
      locale: "id_ID",
    },
    twitter: {
      card: "summary_large_image",
      title: `${pkg.name} | Travelista`,
      images: [pkg.image],
    },
  };
}

export default async function DestinationDetail({ params }) {
  // Next.js 15: params is a Promise
  const { id } = await params;
  const pkg = getTravelPackageById(id);
  if (!pkg) return notFound();

  const touristTripJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.name,
    description: `Paket wisata premium ke ${pkg.location}`,
    image: pkg.image,
    offers: {
      "@type": "Offer",
      price: pkg.price.replace(/[^0-9]/g, ""),
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Destinasi",
        item: `${BASE_URL}/destination`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pkg.name,
        item: `${BASE_URL}/destination/${pkg.id}`,
      },
    ],
  };

  const facilities =
    pkg.included?.length > 0
      ? pkg.included
      : [
          "Akomodasi Hotel Bintang 4",
          "Transportasi AC Premium",
          "Makan 3x Sehari",
          "Tiket Masuk Wisata",
          "Tour Guide Profesional",
          "Asuransi Perjalanan",
        ];

  const infoCards = [
    { Icon: Clock, label: "Durasi", value: pkg.duration },
    { Icon: Calendar, label: "Ketersediaan", value: "Sepanjang Tahun" },
    { Icon: Star, label: "Rating", value: `${pkg.rating.toFixed(1)} / 5.0` },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hidden breadcrumb for screen readers */}
      <nav aria-label="Breadcrumb" className="sr-only">
        <ol>
          <li>
            <Link href="/">Beranda</Link>
          </li>
          <li>
            <Link href="/destination">Destinasi</Link>
          </li>
          <li aria-current="page">{pkg.name}</li>
        </ol>
      </nav>

      {/* Hero */}
      <div className="relative h-[60vh] min-h-100 w-full">
        <div className="absolute inset-0 bg-slate-900/30 z-10" aria-hidden="true" />
        <Image
          src={pkg.image}
          alt={`Pemandangan indah di ${pkg.name}, ${pkg.location}`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute top-24 left-6 md:left-20 z-20">
          <Link
            href="/"
            aria-label="Kembali ke halaman beranda"
            className="inline-flex items-center gap-2 text-white bg-slate-900/20 hover:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-white backdrop-blur-md px-4 py-2 rounded-sm transition-colors font-medium"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Kembali
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-20 bg-linear-to-t from-slate-900/80 via-slate-900/40 to-transparent pt-32 pb-12 px-6 md:px-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center text-white/70 font-medium mb-4">
                <MapPin size={20} className="mr-2" aria-hidden="true" />
                <span className="text-lg">{pkg.location}</span>
              </div>
              <h1 className="font-cinzel text-4xl md:text-6xl font-light text-white mb-2 tracking-tight">
                {pkg.name}
              </h1>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg shrink-0">
              <p className="text-slate-200 text-sm mb-1">Mulai dari</p>
              <p className="font-cinzel text-3xl font-light text-blue">{pkg.price}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-cinzel text-2xl font-light text-slate-900 mb-6">
              Tentang Perjalanan Ini
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              Nikmati pengalaman perjalanan yang tidak terlupakan dengan paket eksklusif {pkg.name}.
              Kami merancang setiap itinerary dengan teliti untuk memastikan Anda mendapatkan
              pengalaman terbaik di {pkg.location} — dengan kenyamanan maksimal dan sentuhan layanan
              premium kami.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {infoCards.map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className="bg-white p-5 rounded-lg shadow-sm border border-slate-100 flex items-center gap-4"
                >
                  <div className="p-3 surface-info-soft shrink-0">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="font-semibold text-slate-800">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="facilities-heading">
            <h2
              id="facilities-heading"
              className="font-cinzel text-2xl font-light text-slate-900 mb-6"
            >
              Fasilitas Termasuk
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facilities.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle size={20} className="text-blue shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Booking Sidebar — Client Component */}
        <aside className="lg:col-span-1" aria-label="Form pemesanan">
          <div className="bg-white p-8 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 sticky top-32">
            <h2 className="font-cinzel text-xl font-light text-slate-900 mb-6">Pesan Sekarang</h2>
            <BookingForm packageName={pkg.name} packagePrice={pkg.price} />
            <p className="text-center text-xs text-slate-500 mt-4 leading-relaxed">
              *Tidak ada biaya tambahan. Tim kami akan menghubungi Anda untuk konfirmasi.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
