import { useState } from "react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";
import { CheckCircle, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", notes: "", payment: "mobile_money",
  });
  const [placed, setPlaced] = useState(false);

  const inputClass = "w-full bg-white border border-stone focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 text-ink-900 px-4 py-3 rounded-xl outline-none transition-all text-sm placeholder-ink-400/40";
  const labelClass = "block text-ink-600 text-xs font-semibold tracking-widest uppercase mb-2";

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlaced(true);
    clearCart();
  };

  if (items.length === 0 && !placed) {
    return (
      <div className="min-h-screen bg-ivory flex flex-col items-center justify-center gap-5 pt-24 px-5 text-center">
        <ShoppingBag size={52} className="text-stone" />
        <h2 className="font-display text-3xl text-ink-900">Your cart is empty</h2>
        <p className="text-ink-400 text-sm">Add some candles before checking out.</p>
        <Link to="/shop" className="btn-primary">Browse Candles</Link>
      </div>
    );
  }

  if (placed) {
    return (
      <div className="min-h-screen bg-ivory flex flex-col items-center justify-center gap-5 pt-24 px-5 text-center">
        <CheckCircle size={60} className="text-gold-400" />
        <h2 className="font-display text-4xl text-ink-900">Order Placed!</h2>
        <p className="text-ink-600 max-w-sm text-sm leading-relaxed">
          Thank you for your order. We'll contact you shortly on WhatsApp or email to confirm delivery details.
        </p>
        <p className="text-gold-400 text-sm font-medium">Aura Uganda — Crafted with love 🕯️</p>
        <Link to="/" className="btn-primary mt-2">Back to Home</Link>
      </div>
    );
  }

  const delivery = total >= 100000 ? 0 : 10000;

  return (
    <main className="min-h-screen bg-ivory pt-20 pb-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <span className="section-label mb-3 block">Almost There</span>
          <h1 className="section-title mb-3">Checkout</h1>
          <div className="gold-divider" />
        </div>

        {/* Order summary shows FIRST on mobile */}
        <div className="lg:hidden mb-6">
          <div className="card p-5">
            <h2 className="font-serif text-ink-900 text-base font-semibold mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 items-center">
                  <img src={item.images[0]} alt={item.name} className="w-12 h-12 object-cover rounded-lg flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-ink-900 text-sm font-semibold truncate">{item.name}</p>
                    <p className="text-ink-400 text-xs">Qty: {item.qty}</p>
                  </div>
                  <p className="text-gold-500 text-sm font-medium flex-shrink-0">{formatPrice(item.price * item.qty)}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-stone/60 pt-3 space-y-1.5">
              <div className="flex justify-between text-sm text-ink-600">
                <span>Subtotal</span><span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between text-sm text-ink-600">
                <span>Delivery</span>
                <span>{delivery === 0 ? <span className="text-green-600 font-medium">Free</span> : formatPrice(delivery)}</span>
              </div>
              <div className="flex justify-between font-semibold pt-2 border-t border-stone/60">
                <span className="text-ink-900">Total</span>
                <span className="text-gold-500 font-display text-lg">{formatPrice(total + delivery)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-5 sm:space-y-8">

            {/* Personal */}
            <div className="card p-5 sm:p-6">
              <h2 className="font-serif text-ink-900 text-base sm:text-lg font-semibold mb-4 sm:mb-5">Personal Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { key: "firstName", label: "First Name",       type: "text",  placeholder: "Jane" },
                  { key: "lastName",  label: "Last Name",        type: "text",  placeholder: "Doe" },
                  { key: "email",     label: "Email Address",    type: "email", placeholder: "jane@email.com" },
                  { key: "phone",     label: "Phone / WhatsApp", type: "tel",   placeholder: "+256 700 000 000" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className={labelClass}>{f.label} *</label>
                    <input required type={f.type} placeholder={f.placeholder} value={form[f.key]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} className={inputClass} />
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery */}
            <div className="card p-5 sm:p-6">
              <h2 className="font-serif text-ink-900 text-base sm:text-lg font-semibold mb-4 sm:mb-5">Delivery Details</h2>
              <div className="space-y-4">
                <div>
                  <label className={labelClass}>Delivery Address *</label>
                  <input required type="text" placeholder="Street, area, landmark..." value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>City *</label>
                  <input required type="text" placeholder="Kampala" value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Order Notes</label>
                  <textarea rows={3} placeholder="Any special instructions..." value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })} className={inputClass + " resize-none"} />
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="card p-5 sm:p-6">
              <h2 className="font-serif text-ink-900 text-base sm:text-lg font-semibold mb-4 sm:mb-5">Payment Method</h2>
              <div className="space-y-3">
                {[
                  { key: "mobile_money", label: "Mobile Money (MTN / Airtel)", icon: "📱" },
                  { key: "cash",         label: "Cash on Delivery",             icon: "💵" },
                  { key: "bank",         label: "Bank Transfer",                icon: "🏦" },
                ].map((p) => (
                  <label key={p.key} className={`flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    form.payment === p.key ? "border-gold-400 bg-gold-400/5" : "border-stone hover:border-gold-400/50 bg-white"
                  }`}>
                    <input type="radio" name="payment" value={p.key} checked={form.payment === p.key}
                      onChange={(e) => setForm({ ...form, payment: e.target.value })} className="accent-gold-400 flex-shrink-0" />
                    <span className="text-base">{p.icon}</span>
                    <span className="text-ink-700 text-sm font-medium">{p.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className="btn-primary w-full py-4 text-sm sm:text-base">
              Place Order — {formatPrice(total + delivery)}
            </button>
          </form>

          {/* Summary — desktop only (mobile version is above) */}
          <div className="hidden lg:block">
            <div className="card p-6 sticky top-24">
              <h2 className="font-serif text-ink-900 text-lg font-semibold mb-5">Order Summary</h2>
              <div className="space-y-4 mb-5">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.images[0]} alt={item.name} className="w-14 h-14 object-cover rounded-lg flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-ink-900 text-sm font-semibold truncate">{item.name}</p>
                      <p className="text-ink-400 text-xs">Qty: {item.qty}</p>
                      <p className="text-gold-500 text-sm font-medium">{formatPrice(item.price * item.qty)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-stone/60 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-ink-600">
                  <span>Subtotal</span><span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-sm text-ink-600">
                  <span>Delivery</span>
                  <span>{delivery === 0 ? <span className="text-green-600 font-medium">Free</span> : formatPrice(delivery)}</span>
                </div>
                <div className="flex justify-between font-semibold pt-2 border-t border-stone/60">
                  <span className="text-ink-900">Total</span>
                  <span className="text-gold-500 font-display text-xl">{formatPrice(total + delivery)}</span>
                </div>
              </div>
              {delivery > 0 && (
                <p className="text-ink-400 text-xs mt-3 bg-offwhite rounded-lg p-2 text-center">
                  Add {formatPrice(100000 - total)} more for free delivery
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
