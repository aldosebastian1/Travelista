import Image from "next/image";
import Link from "next/link";
import { Shield, Award, Globe, HeartHandshake, MapPin, ArrowRight } from "lucide-react";

export const metadata = {
    title: "Tentang Kami",
    description: "Kenali lebih dekat Travelista — agen perjalanan premium Indonesia yang telah melayani lebih dari 10.000 wisatawan sejak 2015.",
};

const teamMembers = [
    {
        name: "Arya Kusuma",
        role: "CEO & Co-Founder",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
        bio: "10+ tahun di industri pariwisata Indonesia",
    },
    {
        name: "Sinta Rahayu",
        role: "Head of Operations",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
        bio: "Ahli logistik perjalanan & partner lokal",
    },
    {
        name: "Bagas Wicaksono",
        role: "Head of Destinations",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        bio: "Telah mengeksplor 40+ destinasi Indonesia",
    },
    {
        name: "Laila Putri",
        role: "Customer Experience Lead",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        bio: "Berdedikasi pada kepuasan pelanggan 100%",
    },
];

const values = [
    { Icon: Shield, title: "Terpercaya & Transparan", desc: "Harga jelas, tidak ada biaya tersembunyi. Kami jujur di setiap langkah perjalanan Anda." },
    { Icon: Award, title: "Kualitas Premium", desc: "Setiap paket dikurasi dengan standar tertinggi — akomodasi, transportasi, dan layanan." },
    { Icon: Globe, title: "Pengalaman Global", desc: "Partner lokal di 50+ destinasi memastikan pengalaman otentik di setiap perjalanan." },
    { Icon: HeartHandshake, title: "Layanan Personal", desc: "Tim kami siap 24/7 untuk memastikan perjalanan Anda berjalan lancar dari awal hingga akhir." },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <div className="relative h-[60vh] min-h-[400px] bg-slate-900 overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=80"
                    alt="Tim Travelista dalam perjalanan"
                    fill
                    priority
                    className="object-cover opacity-50"
                    sizes="100vw"
                />
                <div className="absolute inset-0 flex items-center justify-center text-center px-6 mt-16">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4 tracking-tight">
                            Tentang Travelista
                        </h1>
                        <p className="text-slate-200 text-lg max-w-2xl mx-auto">
                            Kami hadir sejak 2015 dengan satu misi: menghadirkan perjalanan yang tak terlupakan bagi setiap orang Indonesia.
                        </p>
                    </div>
                </div>
            </div>

            {/* Story */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-playfair font-bold text-slate-900 mb-6">Cerita Kami</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Travelista lahir dari rasa cinta mendalam terhadap keindahan Indonesia. Berawal dari garasi kecil di Jakarta pada 2015, kami kini telah melayani lebih dari <strong>10.000 wisatawan</strong> ke seluruh penjuru nusantara dan dunia.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Kami percaya bahwa setiap perjalanan adalah kesempatan untuk tumbuh, belajar, dan menciptakan kenangan abadi. Itulah mengapa kami merancang setiap paket dengan penuh perhatian — bukan sekadar itinerary, tapi sebuah pengalaman hidup.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Dengan tim berpengalaman dan jaringan partner lokal di 50+ destinasi, kami siap mewujudkan liburan impian Anda dengan standar kualitas tertinggi.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { value: "2015", label: "Tahun Berdiri" },
                            { value: "10.000+", label: "Pelanggan Puas" },
                            { value: "50+", label: "Destinasi" },
                            { value: "4.9★", label: "Rating Rata-rata" },
                        ].map(({ value, label }) => (
                            <div key={label} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center">
                                <p className="text-3xl font-playfair font-bold text-sky-600 mb-1">{value}</p>
                                <p className="text-slate-500 text-sm">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Values */}
                <div className="mb-20">
                    <h2 className="text-3xl font-playfair font-bold text-slate-900 text-center mb-12">Nilai-nilai Kami</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map(({ Icon, title, desc }) => (
                            <div key={title} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-sky-50 text-sky-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Icon size={28} aria-hidden="true" />
                                </div>
                                <h3 className="font-playfair font-bold text-slate-900 mb-2">{title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team */}
                <div className="mb-20">
                    <h2 className="text-3xl font-playfair font-bold text-slate-900 text-center mb-12">Tim Kami</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="text-center group">
                                <div className="relative w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 bg-slate-100 ring-4 ring-slate-100 group-hover:ring-sky-200 transition-all">
                                    <Image
                                        src={member.image}
                                        alt={`Foto ${member.name}`}
                                        fill
                                        className="object-cover"
                                        sizes="112px"
                                    />
                                </div>
                                <h3 className="font-bold text-slate-900">{member.name}</h3>
                                <p className="text-sky-500 text-sm font-medium">{member.role}</p>
                                <p className="text-slate-400 text-xs mt-1">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center">
                    <MapPin size={40} className="text-sky-400 mx-auto mb-4" aria-hidden="true" />
                    <h2 className="text-3xl font-playfair font-bold text-white mb-4">Mulai Perjalananmu Hari Ini</h2>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                        Hubungi kami atau temukan langsung paket yang cocok untuk Anda.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/destination"
                            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
                        >
                            Lihat Destinasi
                            <ArrowRight size={18} aria-hidden="true" />
                        </Link>
                        <a
                            href="mailto:support@travelista.id"
                            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold transition-colors"
                        >
                            Hubungi Kami
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
