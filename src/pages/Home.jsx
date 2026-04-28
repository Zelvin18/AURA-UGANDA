import { Link } from "react-router-dom";
import { ArrowRight, Star, Leaf, Flame, Award } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <main className="bg-ivory overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="min-h-screen bg-white flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 lg:py-20">

          {/* Text */}
          <div className="text-center lg:text-left animate-slide-up order-2 lg:order-1">
            <span className="section-label mb-4 block">✦ Handcrafted in Uganda</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink-900 leading-[1.08] mb-5">
              Scent that<br />
              <span className="text-gold-400 italic">transforms</span><br />
              your space
            </h1>
            <p className="text-ink-400 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
              Premium scented candles made from natural wax, poured by hand in Kampala. Luxury you can feel — and smell.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <Link to="/shop" className="btn-primary text-sm sm:text-base px-7 py-3.5 w-full sm:w-auto">
                Shop the Collection <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn-outline text-sm sm:text-base px-7 py-3.5 w-full sm:w-auto">
                Our Story
              </Link>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {[
                { icon: <Leaf size={14} />, text: "100% Natural Wax" },
                { icon: <Flame size={14} />, text: "45–50 hr Burn" },
                { icon: <Award size={14} />, text: "Made in Uganda" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-1.5 text-ink-400 text-xs sm:text-sm">
                  <span className="text-gold-400">{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </div>
          </div>

          {/* Image grid */}
          <div className="relative order-1 lg:order-2 animate-fade-in">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img src="/images/Creamish-coffe vanilla 1.png"          alt="Coffee Vanilla"  className="w-full aspect-square object-cover rounded-2xl shadow-md animate-float" style={{ animationDelay: "0s" }} />
              <img src="/images/White- lavender and eucalyptus 1.png"  alt="Lavender"        className="w-full aspect-square object-cover rounded-2xl shadow-md mt-6 sm:mt-8 animate-float" style={{ animationDelay: "2s" }} />
              <img src="/images/Pale yellow-citronella 1.png"          alt="Citronella"      className="w-full aspect-square object-cover rounded-2xl shadow-md -mt-3 sm:-mt-4 animate-float" style={{ animationDelay: "1s" }} />
              <img src="/images/Creamish-coffe vanilla 2.png"          alt="Coffee Vanilla 2" className="w-full aspect-square object-cover rounded-2xl shadow-md mt-3 sm:mt-4 animate-float" style={{ animationDelay: "3s" }} />
            </div>
            {/* Floating badge — only show on sm+ to avoid overflow */}
            <div className="hidden sm:flex absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg px-4 py-2.5 items-center gap-2.5 border border-stone/60 whitespace-nowrap">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={11} className="text-gold-400 fill-gold-400" />)}
              </div>
              <span className="text-ink-600 text-xs font-medium">Loved by 500+ customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="bg-gold-400 py-3 overflow-hidden">
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {Array(8).fill(["✦ Coffee Vanilla", "✦ Citronella", "✦ Lavender & Eucalyptus", "✦ Handcrafted in Uganda", "✦ Natural Wax"]).flat().map((t, i) => (
            <span key={i} className="text-white font-semibold text-xs tracking-[0.2em] uppercase shrink-0">{t}</span>
          ))}
        </div>
      </div>

      {/* ── PRODUCTS ── */}
      <section className="py-16 sm:py-24 px-5 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="section-label mb-3 block">Our Collection</span>
          <h2 className="section-title mb-3">Signature Scents</h2>
          <div className="gold-divider" />
          <p className="text-ink-400 max-w-sm mx-auto mt-4 leading-relaxed text-sm">
            Each candle is a sensory journey — poured with intention, crafted with care.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="text-center mt-8 sm:mt-10">
          <Link to="/shop" className="btn-outline">
            View All <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── WHY AURA ── */}
      <section className="py-16 sm:py-20 bg-offwhite border-y border-stone/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <span className="section-label mb-3 block">Why Choose Us</span>
            <h2 className="section-title mb-3">The Aura Difference</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              { icon: "🌿", title: "Natural Ingredients", desc: "Pure soy & coconut wax with premium fragrance oils — no toxins." },
              { icon: "🕯️", title: "Long Burn Time",      desc: "Up to 50 hours of continuous fragrance per candle." },
              { icon: "🇺🇬", title: "Made in Uganda",      desc: "Proudly handcrafted in Kampala, supporting local artisans." },
              { icon: "🎁", title: "Perfect Gift",         desc: "Beautifully packaged and ready to gift for any occasion." },
            ].map((f) => (
              <div key={f.title} className="card p-5 sm:p-6 text-center">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-serif text-ink-900 text-base font-semibold mb-2">{f.title}</h3>
                <p className="text-ink-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 sm:py-24 px-5 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <span className="section-label mb-3 block">What People Say</span>
          <h2 className="section-title mb-3">Loved by Many</h2>
          <div className="gold-divider" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {[
            { name: "Amara K.",  location: "Kampala", text: "The lavender candle is absolutely divine. My whole apartment smells like a luxury spa. I've already ordered three more!" },
            { name: "David M.",  location: "Entebbe", text: "Bought the coffee vanilla as a gift and my wife absolutely loves it. The scent is rich and long-lasting." },
            { name: "Priya S.",  location: "Kampala", text: "The citronella candle is perfect for outdoor evenings. Keeps mosquitoes away AND smells amazing!" },
          ].map((t) => (
            <div key={t.name} className="card p-6 sm:p-7">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-gold-400 fill-gold-400" />)}
              </div>
              <p className="text-ink-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div>
                <p className="text-ink-900 font-semibold text-sm">{t.name}</p>
                <p className="text-ink-400 text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-20 bg-ink-900 mx-4 sm:mx-6 mb-12 sm:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 60% 50%, #C9973A 0%, transparent 65%)" }} />
        <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-gold-400 tracking-[0.3em] uppercase text-xs font-semibold mb-4 block">Limited Stock</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-5 leading-tight">
            Ready to transform<br />your space?
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed text-sm sm:text-base">
            Order today and experience the luxury of Aura Uganda delivered to your door.
          </p>
          <Link to="/shop" className="btn-primary text-sm sm:text-base px-8 py-3.5">
            Shop Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
}
