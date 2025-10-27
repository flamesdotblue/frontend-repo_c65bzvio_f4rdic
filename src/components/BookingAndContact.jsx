import { useMemo, useState } from "react";
import { Calendar, Clock, Users, Phone, MessageCircle, MapPin, CreditCard, Mail } from "lucide-react";

export default function BookingAndContact({ lang = "en", selectedPackage }) {
  const [form, setForm] = useState({
    pkg: selectedPackage || "Iraq Ziyarat",
    date: "",
    time: "Morning",
    travelers: 2,
    name: "",
    email: "",
    phone: "",
    payment: "Card",
  });

  const labels = useMemo(() => ({
    en: {
      title: "Booking",
      pkg: "Package",
      date: "Select Date",
      time: "Preferred Time",
      morning: "Morning",
      evening: "Evening",
      travelers: "Travelers",
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      pay: "Payment Method",
      submit: "Confirm Booking",
      contact: "Contact",
      help: "24/7 Helpline",
      map: "Our Location",
    },
    ur: {
      title: "بکنگ",
      pkg: "پیکج",
      date: "تاریخ منتخب کریں",
      time: "مطلوبہ وقت",
      morning: "صبح",
      evening: "شام",
      travelers: "مسافر",
      name: "پورا نام",
      email: "ای میل",
      phone: "فون",
      pay: "ادائیگی کا طریقہ",
      submit: "بکنگ کی تصدیق",
      contact: "رابطہ",
      help: "ہیلپ لائن",
      map: "ہمارا مقام",
    },
  })[lang], [lang]);

  const handleChange = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    alert(`${labels.title} submitted for ${form.pkg} on ${form.date} (${form.time}). We will contact you shortly.`);
  };

  return (
    <section id="booking" className="relative py-16 bg-gradient-to-b from-[#0c0714] via-[#120f1e] to-[#0c0714] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking form */}
          <form onSubmit={submit} className="lg:col-span-2 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
            <h3 className="text-2xl font-semibold">{labels.title}</h3>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70">{labels.pkg}</label>
                <select value={form.pkg} onChange={(e) => handleChange("pkg", e.target.value)} className="mt-1 w-full bg-white/10 border border-white/10 rounded-xl p-3 outline-none">
                  {["Iraq Ziyarat", "Iran Ziyarat", "Umrah"].map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm text-white/70">{labels.date}</label>
                <div className="mt-1 flex items-center gap-2 bg-white/10 border border-white/10 rounded-xl p-3">
                  <Calendar size={16} />
                  <input type="date" value={form.date} onChange={(e) => handleChange("date", e.target.value)} className="bg-transparent outline-none w-full" required />
                </div>
              </div>
              <div>
                <label className="text-sm text-white/70">{labels.time}</label>
                <div className="mt-1 grid grid-cols-2 gap-2">
                  {[labels.morning, labels.evening].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => handleChange("time", t === labels.morning ? "Morning" : "Evening")}
                      className={`p-3 rounded-xl border ${form.time === (t === labels.morning ? "Morning" : "Evening") ? "bg-gradient-to-r from-purple-500 to-yellow-400 text-black border-transparent" : "bg-white/10 border-white/10"}`}
                    >
                      <Clock size={16} className="inline mr-2" />{t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm text-white/70">{labels.travelers}</label>
                <div className="mt-1 flex items-center gap-2 bg-white/10 border border-white/10 rounded-xl p-3">
                  <Users size={16} />
                  <input type="number" min={1} value={form.travelers} onChange={(e) => handleChange("travelers", Number(e.target.value))} className="bg-transparent outline-none w-full" />
                </div>
              </div>
              <div>
                <label className="text-sm text-white/70">{labels.name}</label>
                <input value={form.name} onChange={(e) => handleChange("name", e.target.value)} className="mt-1 w-full bg-white/10 border border-white/10 rounded-xl p-3 outline-none" required />
              </div>
              <div>
                <label className="text-sm text-white/70">{labels.email}</label>
                <div className="mt-1 flex items-center gap-2 bg-white/10 border border-white/10 rounded-xl p-3">
                  <Mail size={16} />
                  <input type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} className="bg-transparent outline-none w-full" required />
                </div>
              </div>
              <div>
                <label className="text-sm text-white/70">{labels.phone}</label>
                <div className="mt-1 flex items-center gap-2 bg-white/10 border border-white/10 rounded-xl p-3">
                  <Phone size={16} />
                  <input value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} className="bg-transparent outline-none w-full" required />
                </div>
              </div>
              <div>
                <label className="text-sm text-white/70">{labels.pay}</label>
                <div className="mt-1 flex items-center gap-2 bg-white/10 border border-white/10 rounded-xl p-3">
                  <CreditCard size={16} />
                  <select value={form.payment} onChange={(e) => handleChange("payment", e.target.value)} className="bg-transparent outline-none w-full">
                    <option>Card</option>
                    <option>Bank Transfer</option>
                    <option>Cash</option>
                  </select>
                </div>
              </div>
            </div>

            <button className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-yellow-400 text-black font-medium shadow-xl hover:brightness-110 transition">
              {labels.submit}
            </button>
          </form>

          {/* Contact and Map */}
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
              <h4 className="text-xl font-semibold flex items-center gap-2"><Phone /> {labels.contact}</h4>
              <p className="text-white/80 mt-2">WhatsApp: +971 55 123 4567</p>
              <p className="text-white/80">Email: info@almukhtartours.com</p>
              <div className="mt-4 flex items-center gap-3">
                <a href="https://wa.me/971551234567" target="_blank" rel="noreferrer" className="flex-1 text-center py-3 rounded-xl bg-green-500 text-white font-medium hover:brightness-110 transition flex items-center justify-center gap-2">
                  <MessageCircle size={18} /> WhatsApp
                </a>
                <a href="tel:+971551234567" className="flex-1 text-center py-3 rounded-xl bg-yellow-400 text-black font-medium hover:brightness-110 transition flex items-center justify-center gap-2">
                  <Phone size={18} /> Call
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
              <h4 className="text-xl font-semibold flex items-center gap-2"><MapPin /> {labels.map}</h4>
              <div className="mt-3 rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115841.85679467667!2d44.286911!3d33.315241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15578189308f0d9f%3A0x2e3f32bce49963cf!2sBaghdad%2C%20Iraq!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-yellow-400/20 to-purple-500/20 border border-white/10 text-white/90">
                <p className="text-sm font-medium">{labels.help}: +971 55 123 4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating contact icons */}
      <a href="https://wa.me/971551234567" target="_blank" rel="noreferrer" className="fixed bottom-24 right-4 p-4 rounded-full bg-green-500 text-white shadow-2xl hover:scale-105 transition">
        <MessageCircle />
      </a>
      <a href="tel:+971551234567" className="fixed bottom-8 right-4 p-4 rounded-full bg-yellow-400 text-black shadow-2xl hover:scale-105 transition">
        <Phone />
      </a>
    </section>
  );
}
