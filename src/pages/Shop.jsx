import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { SlidersHorizontal } from "lucide-react";

export default function Shop() {
  const [filter, setFilter] = useState("all");

  const filters = [
    { key: "all", label: "All Candles" },
    { key: "1",   label: "Coffee Vanilla" },
    { key: "2",   label: "Citronella" },
    { key: "3",   label: "Lavender & Eucalyptus" },
  ];

  const displayed = filter === "all" ? products : products.filter((p) => String(p.id) === filter);

  return (
    <main className="min-h-screen bg-ivory pt-20 pb-20 overflow-x-hidden">
      {/* Header */}
      <div className="bg-white border-b border-stone/50 py-12 sm:py-14 text-center mb-8 sm:mb-10">
        <span className="section-label mb-3 block">Aura Uganda</span>
        <h1 className="section-title mb-3">Our Collection</h1>
        <div className="gold-divider" />
        <p className="text-ink-400 mt-4 text-sm">{products.length} handcrafted scents · Natural wax · Made in Uganda</p>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10">
          <SlidersHorizontal size={15} className="text-gold-400 mr-1" />
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 ${
                filter === f.key
                  ? "bg-gold-400 text-white border-gold-400 shadow-sm"
                  : "border-stone text-ink-600 hover:border-gold-400 hover:text-gold-400 bg-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {displayed.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </main>
  );
}
