import { useState } from "react";
import { ShoppingBag, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";

export default function ProductCard({ product }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="card group overflow-hidden">
      {/* Image */}
      <Link
        to={`/product/${product.id}`}
        className="block relative overflow-hidden aspect-square bg-offwhite"
        onMouseEnter={() => product.images[1] && setImgIdx(1)}
        onMouseLeave={() => setImgIdx(0)}
      >
        {product.tag && (
          <span className="absolute top-3 left-3 z-10 bg-gold-400 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase shadow-sm">
            {product.tag}
          </span>
        )}
        <img
          src={product.images[imgIdx]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-ink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="flex items-center gap-2 bg-white text-ink-900 text-xs font-semibold px-4 py-2 rounded-full shadow-md translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Eye size={13} /> View Details
          </span>
        </div>
      </Link>

      {/* Info */}
      <div className="p-5">
        <p className="text-gold-400 text-xs tracking-widest uppercase font-medium mb-1">{product.subtitle}</p>
        <h3 className="font-display text-xl text-ink-900 mb-1">{product.name}</h3>
        <p className="text-ink-400 text-xs mb-4">{product.mood}</p>
        <div className="flex items-center justify-between gap-3">
          <span className="font-serif text-gold-500 text-lg font-semibold">{formatPrice(product.price)}</span>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
              added
                ? "bg-green-500 text-white"
                : "bg-gold-400 hover:bg-gold-500 text-white shadow-sm hover:shadow-md"
            }`}
          >
            <ShoppingBag size={13} />
            {added ? "Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
