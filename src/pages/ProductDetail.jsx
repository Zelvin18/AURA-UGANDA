import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingBag, Flame, Clock, Weight, Star, ChevronRight, Minus, Plus } from "lucide-react";
import { products, formatPrice } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);
  const { addToCart } = useCart();
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 pt-24 px-5">
        <p className="text-ink-600 text-xl font-display">Product not found</p>
        <Link to="/shop" className="btn-primary">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id);

  const handleAdd = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="min-h-screen bg-ivory pt-20 pb-20 overflow-x-hidden">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4 flex items-center gap-1.5 text-xs text-ink-400 flex-wrap">
        <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
        <ChevronRight size={11} />
        <Link to="/shop" className="hover:text-gold-400 transition-colors">Shop</Link>
        <ChevronRight size={11} />
        <span className="text-ink-900 font-medium truncate max-w-[140px]">{product.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 mt-2">

        {/* Images */}
        <div className="space-y-3">
          <div className="aspect-square overflow-hidden bg-white rounded-2xl border border-stone/50 shadow-sm">
            <img src={product.images[activeImg]} alt={product.name} className="w-full h-full object-cover transition-all duration-500" />
          </div>
          <div className="flex gap-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-xl border-2 transition-all flex-shrink-0 ${
                  activeImg === i ? "border-gold-400 shadow-sm" : "border-stone/50 hover:border-gold-400/50"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          {product.tag && (
            <span className="inline-block bg-gold-400 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase mb-4 w-fit shadow-sm">
              {product.tag}
            </span>
          )}
          <p className="section-label mb-2">{product.subtitle}</p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink-900 mb-3 leading-tight">{product.name}</h1>

          <div className="flex items-center gap-2 mb-5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-gold-400 fill-gold-400" />)}
            </div>
            <span className="text-ink-400 text-xs">(24 reviews)</span>
          </div>

          <p className="text-ink-600 leading-relaxed mb-5 text-sm">{product.description}</p>

          {/* Scent notes */}
          <div className="bg-white border border-stone/60 rounded-xl p-4 mb-5">
            <p className="text-xs text-gold-400 tracking-widest uppercase font-semibold mb-1">Scent Notes</p>
            <p className="text-ink-700 text-sm">{product.scent}</p>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
            {[
              { icon: <Clock size={14} />, label: "Burn Time", value: product.burnTime },
              { icon: <Weight size={14} />, label: "Weight",   value: product.weight },
              { icon: <Flame size={14} />, label: "Wax",       value: "Natural" },
            ].map((s) => (
              <div key={s.label} className="text-center bg-white border border-stone/50 rounded-xl p-2.5 sm:p-3">
                <div className="text-gold-400 flex justify-center mb-1">{s.icon}</div>
                <p className="text-ink-400 text-[10px] sm:text-xs mb-0.5">{s.label}</p>
                <p className="text-ink-900 text-xs sm:text-sm font-semibold leading-tight">{s.value}</p>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="mb-5">
            <span className="font-display text-3xl text-gold-500">{formatPrice(product.price)}</span>
          </div>

          {/* Qty + Add to cart — stacks nicely on mobile */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex items-center border border-stone rounded-full overflow-hidden bg-white self-start sm:self-auto">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-11 h-11 flex items-center justify-center text-ink-600 hover:text-gold-400 transition-colors">
                <Minus size={14} />
              </button>
              <span className="w-10 text-center text-ink-900 font-semibold text-sm">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="w-11 h-11 flex items-center justify-center text-ink-600 hover:text-gold-400 transition-colors">
                <Plus size={14} />
              </button>
            </div>

            <button
              onClick={handleAdd}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 shadow-sm ${
                added ? "bg-green-500 text-white" : "bg-gold-400 hover:bg-gold-500 text-white hover:shadow-md"
              }`}
            >
              <ShoppingBag size={16} />
              {added ? "Added to Cart!" : "Add to Cart"}
            </button>
          </div>

          <p className="text-ink-400 text-xs mt-4">
            🚚 Free delivery within Kampala on orders over UGX 100,000
          </p>
        </div>
      </div>

      {/* Related */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 mt-16 sm:mt-20">
        <div className="text-center mb-8 sm:mb-10">
          <span className="section-label mb-2 block">You May Also Like</span>
          <h2 className="font-display text-2xl sm:text-3xl text-ink-900">More Scents</h2>
          <div className="gold-divider" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {related.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </main>
  );
}
