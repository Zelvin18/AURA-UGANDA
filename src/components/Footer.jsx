import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white/80">
      {/* Delivery banner */}
      <div className="bg-gold-400 py-3">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-white text-sm font-medium">
            🕯️ Free delivery within Kampala on orders over <span className="font-bold">UGX 100,000</span>
          </p>
          <p className="text-white/80 text-xs tracking-widest uppercase">Handcrafted · 100% Natural Wax</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <img src="/images/Arua Uganda Logo.png" alt="Aura Uganda" className="h-11 w-auto object-contain mb-4 brightness-150" />
          <p className="text-white/50 text-sm leading-relaxed mb-5">
            Luxury scented candles handcrafted in the heart of Uganda. Warmth, calm, and elegance for every space.
          </p>
          <div className="flex gap-3">
            {[
              { icon: <IconInstagram />, label: "Instagram" },
              { icon: <IconFacebook />, label: "Facebook" },
              { icon: <Mail size={15} />, label: "Email", href: "mailto:hello@aurauganda.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href || "#"}
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-gold-400 hover:text-gold-400 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {[{ label: "Home", to: "/" }, { label: "Shop All", to: "/shop" }, { label: "About Us", to: "/about" }, { label: "Contact", to: "/contact" }].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/50 hover:text-gold-400 text-sm transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Scents */}
        <div>
          <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">Our Scents</h4>
          <ul className="space-y-3">
            {["Coffee Vanilla", "Citronella", "Lavender & Eucalyptus"].map((s) => (
              <li key={s}>
                <Link to="/shop" className="text-white/50 hover:text-gold-400 text-sm transition-colors">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">Get In Touch</h4>
          <ul className="space-y-4">
            {[
              { icon: <MapPin size={14} />, text: "Kampala, Uganda" },
              { icon: <Phone size={14} />, text: "+256 700 000 000" },
              { icon: <Mail size={14} />, text: "hello@aurauganda.com" },
            ].map((c) => (
              <li key={c.text} className="flex items-center gap-3 text-white/50 text-sm">
                <span className="text-gold-400 shrink-0">{c.icon}</span>
                {c.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="text-center text-white/30 text-xs">
          © {new Date().getFullYear()} Aura Uganda. All rights reserved. Made with{" "}
          <Heart size={10} className="inline text-gold-400" /> in Uganda.
        </p>
      </div>
    </footer>
  );
}
