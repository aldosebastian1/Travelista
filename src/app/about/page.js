import Image from "next/image";
import Link from "next/link";
import { Shield, Award, Globe, HeartHandshake, MapPin, ArrowRight } from "lucide-react";

export const metadata = {
    title: "Filosofi Kami | Travelista",
    description: "Kenali lebih dekat Travelista — biro perjalanan premium Indonesia yang mengkurasi eksklusivitas sejak 2015.",
};

const teamMembers = [
    {
        name: "Arya Kusuma",
        role: "CEO & Travel Designer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
        bio: "Mengkurasi kemewahan di 5 Benua",
    },
    {
        name: "Sinta Rahayu",
        role: "Head of Concierge",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
        bio: "Dedikasi pada detail & privasi",
    },
    {
        name: "Bagas Wicaksono",
        role: "Expedition Director",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        bio: "Spesialisasi rute tersembunyi",
    },
    {
        name: "Laila Putri",
        role: "Client Relations",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
        bio: "Melayani dengan standar bintang 5",
    },
];

const values = [
    { Icon: Shield, title: "Privasi Absolut", desc: "Kerahasiaan data dan jadwal perjalanan Anda adalah prioritas tak tertawar kami." },
    { Icon: Award, title: "Kualitas Premium", desc: "Akses ke properti eksklusif yang tidak tersedia untuk publik umum." },
    { Icon: Globe, title: "Jaringan Global", desc: "Relasi intim dengan partner lokal terbaik di destinasi paling prestisius di dunia." },
    { Icon: HeartHandshake, title: "Layanan White-Glove", desc: "Asisten pribadi siaga 24/7 untuk memenuhi setiap ekspektasi Anda selama perjalanan." },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-50 pt-20">
            {/* Hero — Cinematic Noir */}
            <div className="relative h-[70vh] min-h-[500px] bg-[#0A0A0A] overflow-hidden flex items-center justify-center">
                <Image
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=90"
                    alt="Tim Travelista dalam perjalanan"
                    fill
                    priority
                    className="object-cover opacity-40 scale-105"
                    sizes="100vw"
                    style={{ filter: "grayscale(20%)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" aria-hidden="true" />

                <div className="relative z-10 text-center px-6 mt-16 max-w-4xl mx-auto">
                    <span className="section-label text-blue">Filosofi Travelista</span>
                    <h1
                        className="text-4xl md:text-5xl lg:text-7xl font-light text-white mb-8"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                        Redefinisi Kemewahan
                    </h1>
                    <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
                        Kami bukan sekadar agen perjalanan. Kami adalah arsitek untuk momen-momen paling eksklusif dan tak terlupakan dalam hidup Anda.
                    </p>
                </div>
            </div>

            {/* Story */}
            <div className="max-w-7xl mx-auto px-6 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <div>
                        <span className="section-label">Warisan</span>
                        <h2
                            className="text-4xl md:text-5xl font-light text-slate-900 mb-10"
                            style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                            Seni Perjalanan
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-6 font-light text-lg">
                            Travelista lahir dari keyakinan bahwa kemewahan sejati bukanlah tentang harga, melainkan eksklusivitas, privasi, dan ketenangan pikiran. Sejak 2015, kami telah melayani klien di seluruh dunia.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-6 font-light text-lg">
                            Setiap rancang bangun (itinerary) yang kami susun diperlakukan layaknya karya seni — dipersonalisasi hingga detail terkecil untuk mencerminkan selera dan aspirasi Anda secara sempurna.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { value: "2015", label: "Est." },
                            { value: "Bintang 5", label: "Standar Layanan" },
                            { value: "100+", label: "Destinasi Eksklusif" },
                            { value: "24/7", label: "VIP Concierge" },
                        ].map(({ value, label }) => (
                            <div key={label} className="bg-white p-8 border border-slate-200 text-center">
                                <p className="text-3xl font-light text-blue mb-2" style={{ fontFamily: "var(--font-cinzel)" }}>{value}</p>
                                <p className="text-slate-500 text-[0.75rem] uppercase tracking-widest font-medium">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Values */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <span className="section-label">Pilar</span>
                        <h2
                            className="text-4xl md:text-5xl font-light text-slate-900"
                            style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                            Komitmen Kami
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map(({ Icon, title, desc }) => (
                            <div key={title} className="bg-white p-10 border border-slate-200 transition-all duration-500 hover:border-blue group">
                                <Icon size={28} className="text-blue mb-6 transition-transform duration-500 group-hover:scale-110" strokeWidth={1} aria-hidden="true" />
                                <h3 className="font-light text-xl text-slate-900 mb-4" style={{ fontFamily: "var(--font-cinzel)" }}>{title}</h3>
                                <p className="text-slate-500 text-[0.9rem] leading-relaxed font-light">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <span className="section-label">Ekspertise</span>
                        <h2
                            className="text-4xl md:text-5xl font-light text-slate-900"
                            style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                            Travel Designers
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="text-center group">
                                <div className="relative w-48 h-48 mx-auto mb-6 bg-slate-100 overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={`Foto ${member.name}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 192px"
                                        style={{ filter: "grayscale(40%) contrast(1.1)" }}
                                    />
                                </div>
                                <h3 className="font-light text-2xl text-slate-900 mb-1" style={{ fontFamily: "var(--font-cinzel)" }}>{member.name}</h3>
                                <p className="text-blue text-[0.8rem] uppercase tracking-widest font-medium mb-3">{member.role}</p>
                                <p className="text-slate-500 text-sm font-light italic">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-[#0A0A0A] p-20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue/5 blur-3xl" aria-hidden="true" />
                    <div className="relative z-10">
                        <span className="section-label text-blue">Konsultasi Pribadi</span>
                        <h2
                            className="text-4xl md:text-5xl font-light text-white mb-8"
                            style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                            Diskusikan Visi Perjalanan Anda
                        </h2>
                        <div className="flex justify-center mt-12">
                            <a
                                href="mailto:concierge@travelista.id"
                                className="btn-outline text-white border-white/30 hover:border-blue hover:text-blue"
                            >
                                Hubungi Kami
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
