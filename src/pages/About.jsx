import { Link } from "react-router-dom";
import { ArrowRight, Heart, Leaf, Users } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-ivory pt-20 pb-20 overflow-x-hidden">

      {/* Hero */}
      <section className="bg-white border-b border-stone/50 py-14 sm:py-20 text-center">
        <div className="max-w-2xl mx-auto px-5 sm:px-6">
          <span className="section-label mb-4 block">Our Story</span>
          <h1 className="section-title mb-3">Born from a Passion<br />for Craft & Scent</h1>
          <div className="gold-divider" />
          <p className="text-ink-400 mt-5 text-sm sm:text-base leading-relaxed">
            Aura Uganda was founded with a simple belief — that every home deserves to smell extraordinary, and every candle should tell a story.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Image grid — simplified on mobile to avoid stagger overflow */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <img src="/images/White- lavender and eucalyptus 1.png" alt="Lavender candle" className="w-full aspect-square object-cover rounded-2xl shadow-md" />
          <img src="/images/Creamish-coffe vanilla 2.png"         alt="Coffee candle"   className="w-full aspect-square object-cover rounded-2xl shadow-md sm:mt-8" />
          <img src="/images/Pale yellow-citronella 2.png"         alt="Citronella"      className="w-full aspect-square object-cover rounded-2xl shadow-md" />
          <img src="/images/White- lavender and eucalyptus 2.png" alt="Lavender 2"      className="w-full aspect-square object-cover rounded-2xl shadow-md sm:mt-4" />
        </div>
        <div>
          <span className="section-label mb-4 block">Who We Are</span>
          <h2 className="font-display text-3xl sm:text-4xl text-ink-900 mb-5 sm:mb-6 leading-tight">
            Crafting Moments,<br />One Candle at a Time
          </h2>
          <div className="space-y-4 text-ink-600 text-sm leading-relaxed">
            <p>Aura Uganda started in a small workshop in Kampala, where our founder discovered the transformative power of scent. What began as a personal passion quickly grew into a mission — to bring world-class luxury candles to Ugandan homes and beyond.</p>
            <p>Every candle we make is poured by hand, using only the finest natural waxes and premium fragrance oils. We believe in slow craft — taking the time to get every detail right, from the first pour to the final label.</p>
            <p>We're proud to be a Ugandan brand, supporting local talent and contributing to our community. When you buy Aura Uganda, you're not just buying a candle — you're supporting a dream.</p>
          </div>
          <Link to="/shop" className="btn-primary mt-7 sm:mt-8 w-full sm:w-auto">
            Shop Our Candles <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Values */}
      <section className="bg-offwhite border-y border-stone/50 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <span className="section-label mb-3 block">What Drives Us</span>
            <h2 className="section-title mb-3">Our Values</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {[
              { icon: <Leaf size={22} />,  title: "Sustainability", desc: "Natural, eco-friendly waxes and recyclable packaging. The planet matters to us as much as the perfect scent." },
              { icon: <Heart size={22} />, title: "Craftsmanship",  desc: "Every candle is hand-poured with care. We never rush the process — quality is our non-negotiable." },
              { icon: <Users size={22} />, title: "Community",      desc: "We employ local artisans and source ingredients responsibly, giving back to the community that inspires us." },
            ].map((v) => (
              <div key={v.title} className="card p-6 sm:p-8 text-center">
                <div className="text-gold-400 flex justify-center mb-4">{v.icon}</div>
                <h3 className="font-serif text-ink-900 text-base sm:text-lg font-semibold mb-3">{v.title}</h3>
                <p className="text-ink-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 text-center">
          {[
            { number: "3",     label: "Signature Scents" },
            { number: "500+",  label: "Happy Customers" },
            { number: "100%",  label: "Natural Wax" },
            { number: "50hrs", label: "Avg Burn Time" },
          ].map((s) => (
            <div key={s.label} className="card p-5 sm:p-6">
              <p className="font-display text-3xl sm:text-4xl text-gold-400 mb-2">{s.number}</p>
              <p className="text-ink-400 text-xs tracking-wider uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
