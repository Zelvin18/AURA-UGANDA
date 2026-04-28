import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const navLinks = [
    { label: "Home",    to: "/" },
    { label: "Shop",    to: "/shop" },
    { label: "About",   to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/Arua Uganda Logo.png"
            alt="Aura Uganda"
            className="h-9 w-auto object-contain"
          />
          <span className="font-display text-lg text-ink-900 tracking-widest hidden sm:block">
            AURA <span className="text-gold-400">UGANDA</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                location.pathname === l.to
                  ? "text-gold-400"
                  : "text-ink-600 hover:text-gold-400"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Cart */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 text-ink-600 hover:text-gold-400 transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag size={21} />
            {count > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-gold-400 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </button>

          {/* Shop CTA — desktop only */}
          <Link to="/shop" className="hidden md:inline-flex btn-primary py-2 px-5 text-xs">
            Shop Now
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-ink-600 hover:text-gold-400 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-stone/50 ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-5 gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`py-3 text-sm font-medium border-b border-stone/40 last:border-0 transition-colors ${
                location.pathname === l.to
                  ? "text-gold-400"
                  : "text-ink-600 hover:text-gold-400"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/shop" className="btn-primary mt-4 w-full text-center">
            Shop Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
