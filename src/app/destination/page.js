"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import DestinationCard from "../../components/DestinationCard";
import useDestinationFilter from "../../features/destination/hooks/useDestinationFilter";
import { getCategories, getTravelPackages } from "../../services/travelService";

export default function DestinationListingPage() {
  const travelPackages = getTravelPackages();
  const categories = getCategories();

  const {
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    filtered,
  } = useDestinationFilter(travelPackages);

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Page Header — Luxury Minimalist */}
      <div className="bg-noir pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue/5 blur-3xl" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="section-label text-blue">Koleksi Eksklusif</span>
          <h1 className="font-cinzel text-4xl md:text-5xl lg:text-7xl font-light text-white mb-6">
            Destinasi Premier
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light">
            Jelajahi portofolio destinasi paling dicari di dunia, dikurasi khusus untuk Anda.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Search + Sort Controls — Thin borders, elegant inputs */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-1">
            <label htmlFor="destination-search" className="sr-only">
              Cari destinasi atau lokasi
            </label>
            <Search
              size={18}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <input
              id="destination-search"
              type="search"
              placeholder="Cari destinasi atau lokasi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-4 py-4 bg-transparent border-b border-slate-300 text-slate-900 text-[0.95rem] font-light placeholder:text-slate-400 focus:outline-none focus:border-blue transition-colors"
            />
          </div>
          <div className="relative md:w-64">
            <label htmlFor="destination-sort" className="sr-only">
              Urutkan hasil destinasi
            </label>
            <SlidersHorizontal
              size={16}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <select
              id="destination-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full pl-8 pr-4 py-4 bg-transparent border-b border-slate-300 text-slate-900 text-[0.95rem] font-light focus:outline-none focus:border-blue transition-colors appearance-none cursor-pointer"
            >
              <option value="default">Urutan Default</option>
              <option value="price-asc">Harga: Terendah</option>
              <option value="price-desc">Harga: Tertinggi</option>
              <option value="rating">Rating Tertinggi</option>
            </select>
          </div>
        </div>

        {/* Category Filter — Minimalist Text Links */}
        <div
          className="flex gap-8 flex-wrap mb-16 border-b border-slate-200 pb-4"
          role="group"
          aria-label="Filter berdasarkan kategori"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={isActive}
                className={`text-[0.8rem] tracking-widest uppercase font-medium transition-all duration-500 relative pb-4 ${
                  isActive ? "text-blue" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {cat.label}
                {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue" />}
              </button>
            );
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          Menampilkan {filtered.length} destinasi.
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-32">
            <p className="text-slate-500 text-lg font-light mb-6">
              Tidak ada ekspedisi yang ditemukan untuk kriteria ini.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="btn-outline text-slate-900 border-slate-300 hover:border-blue hover:text-blue"
            >
              Hapus Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((pkg, i) => (
              <DestinationCard
                key={pkg.id}
                pkg={pkg}
                imageMode="static"
                className="animate-fade-up"
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
                priceClassName="text-white font-light border-none shadow-none bg-transparent p-0"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
