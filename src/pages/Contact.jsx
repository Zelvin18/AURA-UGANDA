import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputClass = "w-full bg-white border border-stone focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 text-ink-900 px-4 py-3 rounded-xl outline-none transition-all text-sm placeholder-ink-400/50";

  return (
    <main className="min-h-screen bg-ivory pt-24 pb-24">
      {/* Header */}
      <section className="bg-white border-b border-stone/50 py-16 text-center">
        <div className="max-w-xl mx-auto px-6">
          <span className="section-label mb-4 block">Get In Touch</span>
          <h1 className="section-title mb-3">We'd Love to Hear<br />From You</h1>
          <div className="gold-divider" />
          <p className="text-ink-400 mt-4 text-sm leading-relaxed">
            Questions about an order, bulk orders, or just want to say hello? We're here.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
        {/* Info */}
        <div>
          <h2 className="font-display text-2xl text-ink-900 mb-6">Contact Information</h2>
          <div className="space-y-4 mb-8">
            {[
              { icon: <MapPin size={18} />, label: "Location",          value: "Kampala, Uganda" },
              { icon: <Phone size={18} />, label: "Phone / WhatsApp",   value: "+256 700 000 000" },
              { icon: <Mail size={18} />,  label: "Email",              value: "hello@aurauganda.com" },
            ].map((c) => (
              <div key={c.label} className="card flex items-start gap-4 p-4">
                <div className="text-gold-400 mt-0.5">{c.icon}</div>
                <div>
                  <p className="text-ink-400 text-xs tracking-widest uppercase mb-0.5">{c.label}</p>
                  <p className="text-ink-900 text-sm font-medium">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card p-6">
            <h3 className="font-serif text-ink-900 font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2 text-sm">
              {[
                { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
                { day: "Saturday",        hours: "10:00 AM – 4:00 PM" },
                { day: "Sunday",          hours: "Closed" },
              ].map((h) => (
                <div key={h.day} className="flex justify-between text-ink-600">
                  <span>{h.day}</span>
                  <span className="font-medium text-ink-900">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          <h2 className="font-display text-2xl text-ink-900 mb-6">Send a Message</h2>
          {sent ? (
            <div className="card flex flex-col items-center justify-center gap-4 py-16 text-center">
              <CheckCircle size={48} className="text-gold-400" />
              <h3 className="font-display text-2xl text-ink-900">Message Sent!</h3>
              <p className="text-ink-400 text-sm">We'll get back to you within 24 hours.</p>
              <button onClick={() => setSent(false)} className="btn-outline mt-2">Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-ink-600 text-xs font-semibold tracking-widest uppercase mb-2">Name *</label>
                  <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-ink-600 text-xs font-semibold tracking-widest uppercase mb-2">Email *</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-ink-600 text-xs font-semibold tracking-widest uppercase mb-2">Subject</label>
                <input type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputClass} placeholder="Order enquiry, bulk order..." />
              </div>
              <div>
                <label className="block text-ink-600 text-xs font-semibold tracking-widest uppercase mb-2">Message *</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputClass + " resize-none"} placeholder="Tell us how we can help..." />
              </div>
              <button type="submit" className="btn-primary w-full py-3.5">
                <Send size={15} /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
