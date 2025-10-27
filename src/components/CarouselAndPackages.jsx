import { motion } from "framer-motion";
import { Calendar, MapPin, CreditCard, Users, Quote, PlayCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const packages = [
  {
    title: "Iraq Ziyarat",
    places: "Karbala • Najaf • Kufa • Samarra",
    duration: "10 Days",
    price: "$1,499",
    image:
      "https://images.unsplash.com/photo-1548786811-bc4c6c8a3a2c?q=80&w=1500&auto=format&fit=crop",
  },
  {
    title: "Iran Ziyarat",
    places: "Mashhad • Qom",
    duration: "7 Days",
    price: "$1,199",
    image:
      "https://images.unsplash.com/photo-1578926375605-eaf7559b145d?q=80&w=1500&auto=format&fit=crop",
  },
  {
    title: "Umrah",
    places: "Makkah • Madinah",
    duration: "10 Days",
    price: "$1,299",
    image:
      "https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1500&auto=format&fit=crop",
  },
];

export default function CarouselAndPackages({ lang = "en", onBook }) {
  const labels = useMemo(() => ({
    en: {
      explore: "Our Destinations & Packages",
      book: "Book Now",
      about: "About Us",
      story:
        "For 17 years, we have been humbly serving Zawwars with comfort, care, and trust. Our journeys to Iraq, Iran, and Umrah are crafted to feel peaceful, premium, and spiritually uplifting.",
      mission: "Mission & Vision",
      missionText:
        "To facilitate spiritually enriching journeys with uncompromised service, safety, and sincerity.",
      timeline: "17 Years of Service",
      testimonials: "Testimonials",
      gallery: "Gallery",
    },
    ur: {
      explore: "منزل مقامات و پیکجز",
      book: "ابھی بک کریں",
      about: "ہمارے بارے میں",
      story:
        "17 سال سے ہم زوّار کی خدمت خلوص اور آرام کے ساتھ کر رہے ہیں۔ عراق، ایران اور عمرہ کے سفر آپ کے لئے پُرسکون اور روحانی تجربہ بناتے ہیں۔",
      mission: "مشن اور بصیرت",
      missionText:
        "محفوظ اور مخلص خدمت کے ساتھ روحانی سفر کو یادگار بنانا۔",
      timeline: "خدمت کے 17 سال",
      testimonials: "آرا",
      gallery: "گیلری",
    },
  })[lang], [lang]);

  const [activeIdx, setActiveIdx] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const id = setInterval(() => setActiveIdx((i) => (i + 1) % 3), 3500);
    return () => clearInterval(id);
  }, []);

  const gallery = [
    "https://images.unsplash.com/photo-1543248834-86a4702c6b86?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578495179010-42a2e4a2d55a?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1577880216142-8549e9488dad?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1548588688-6d22481877e0?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <section id="packages" className="relative py-16 bg-gradient-to-b from-[#0c0714] via-[#130a21] to-[#0c0714] text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* About */}
        <div className="mb-12 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-white via-yellow-200 to-purple-200 bg-clip-text text-transparent">
              {labels.about}
            </h2>
            <p className="mt-3 text-white/80">{labels.story}</p>
            <div className="mt-5 grid sm:grid-cols-3 gap-3 text-sm">
              {[
                { k: labels.timeline, v: "2008 → 2025" },
                { k: labels.mission, v: labels.missionText },
                { k: "Founder & Team", v: "Dedicated scholars and guides" },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-white/60">{item.k}</p>
                  <p className="mt-1 font-medium">{item.v}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[11, 12, 13].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/200?img=${i}`} alt="team" className="rounded-2xl border border-white/10" />
              ))}
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-gradient-to-br from-yellow-400/20 to-purple-500/20 border border-white/10">
            <p className="text-sm text-white/70">Tagline</p>
            <p className="text-xl font-semibold">Enroute to Heaven • Serving Zawwars Since 17 Years.</p>
            <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-white/80 text-sm">
                Premium comfort, trusted guidance, and seamless arrangements for sacred journeys to Iraq, Iran, and Umrah.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-white via-yellow-200 to-purple-200 bg-clip-text text-transparent">
            {labels.explore}
          </h2>
          <p className="text-white/70 mt-2">Iraq • Iran • Umrah</p>
        </div>

        {/* Packages cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl hover:bg-white/10 transition"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0714] via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-sm text-white/70 mt-1 flex items-center gap-2"><MapPin size={16} />{p.places}</p>
                <div className="mt-3 grid grid-cols-3 gap-3 text-sm">
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10"><Calendar size={16} />{p.duration}</div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10"><Users size={16} />2-5 Star</div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10"><CreditCard size={16} />{p.price}</div>
                </div>
                <button
                  onClick={() => onBook(p.title)}
                  className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-yellow-400 text-black font-medium shadow-xl hover:brightness-110 transition"
                >
                  {labels.book}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials slider */}
        <div className="mt-14">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2"><Quote /> {labels.testimonials}</h3>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${activeIdx * 100}%)`, width: "300%" }}
            >
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-full flex-shrink-0 px-1">
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur shadow-2xl">
                    <div className="flex items-center gap-3">
                      <img
                        src={`https://i.pravatar.cc/120?img=${i + 20}`}
                        alt="guest"
                        className="w-14 h-14 rounded-full ring-2 ring-yellow-300/50 shadow-[0_0_30px_rgba(234,179,8,0.25)]"
                      />
                      <div>
                        <p className="font-medium">Zawwar {i}</p>
                        <p className="text-xs text-white/60">Karbala Journey</p>
                      </div>
                    </div>
                    <p className="mt-3 text-white/80 text-lg italic">
                      “A peaceful and luxurious experience. Every moment felt spiritually uplifting and well arranged.”
                    </p>
                    <button className="mt-4 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition">
                      <PlayCircle size={16} /> Watch Story
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 flex justify-center gap-2">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`h-2 w-2 rounded-full ${activeIdx === i ? "bg-yellow-300" : "bg-white/30"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Gallery with lightbox */}
        <div className="mt-14">
          <h3 className="text-2xl font-semibold mb-4">{labels.gallery}</h3>
          <div className="columns-2 md:columns-3 gap-3 [column-fill:_balance]">
            {gallery.map((src, idx) => (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img key={idx} src={src} onClick={() => setLightbox(src)} className="mb-3 w-full rounded-2xl border border-white/10 cursor-zoom-in hover:opacity-90 transition" />
            ))}
          </div>

          {lightbox && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
              <img src={lightbox} alt="lightbox" className="max-h-[80vh] max-w-[90vw] rounded-2xl border border-white/10 shadow-2xl" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
