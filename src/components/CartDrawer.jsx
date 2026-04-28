import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeFromCart, updateQty, total, clearCart } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-ink-900/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone/60">
          <div className="flex items-center gap-3">
            <ShoppingBag size={19} className="text-gold-400" />
            <h2 className="font-display text-xl text-ink-900">Your Cart</h2>
            {items.length > 0 && (
              <span className="text-xs text-gold-500 bg-gold-400/10 px-2 py-0.5 rounded-full font-medium">
                {items.length} item{items.length > 1 ? "s" : ""}
              </span>
            )}
          </div>
          <button onClick={() => setIsOpen(false)} className="p-1 text-ink-400 hover:text-ink-900 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={44} className="text-stone" />
              <p className="font-display text-xl text-ink-900">Your cart is empty</p>
              <p className="text-ink-400 text-sm">Add some candles to get started</p>
              <button onClick={() => setIsOpen(false)} className="btn-primary mt-2">
                Browse Candles
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-offwhite p-3 rounded-xl border border-stone/40">
                <img src={item.images[0]} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                <div className="flex-1 min-w-0">
                  <p className="font-serif text-ink-900 text-sm font-semibold truncate">{item.name}</p>
                  <p className="text-gold-500 text-sm mt-0.5 font-medium">{formatPrice(item.price)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="w-6 h-6 flex items-center justify-center border border-stone text-ink-600 hover:border-gold-400 hover:text-gold-400 transition-colors rounded-full"
                    >
                      <Minus size={11} />
                    </button>
                    <span className="text-ink-900 text-sm w-5 text-center font-medium">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="w-6 h-6 flex items-center justify-center border border-stone text-ink-600 hover:border-gold-400 hover:text-gold-400 transition-colors rounded-full"
                    >
                      <Plus size={11} />
                    </button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-stone hover:text-red-400 transition-colors self-start mt-1">
                  <Trash2 size={15} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-stone/60 space-y-4 bg-offwhite">
            <div className="flex justify-between items-center">
              <span className="text-ink-400 text-sm">Total</span>
              <span className="font-display text-2xl text-gold-500">{formatPrice(total)}</span>
            </div>
            <Link
              to="/checkout"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full text-center"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={clearCart}
              className="w-full text-center text-ink-400 hover:text-red-400 text-xs transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
