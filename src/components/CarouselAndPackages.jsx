import { motion } from "framer-motion";
import { Calendar, MapPin, CreditCard, Users } from "lucide-react";

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
  const labels = {
    en: { explore: "Our Destinations & Packages", book: "Book Now" },
    ur: { explore: "منزل مقامات و پیکجز", book: "ابھی بک کریں" },
  }[lang];

  return (
    <section id="packages" className="relative py-16 bg-gradient-to-b from-[#0c0714] via-[#130a21] to-[#0c0714] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-white via-yellow-200 to-purple-200 bg-clip-text text-transparent">
            {labels.explore}
          </h2>
          <p className="text-white/70 mt-2">Iraq • Iran • Umrah</p>
        </div>

        {/* Carousel style row */}
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

        {/* Testimonials */}
        <div className="mt-14">
          <h3 className="text-2xl font-semibold mb-4">Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={`https://i.pravatar.cc/80?img=${i + 10}`}
                    alt="guest"
                    className="w-12 h-12 rounded-full ring-2 ring-yellow-300/50 shadow-[0_0_30px_rgba(234,179,8,0.25)]"
                  />
                  <div>
                    <p className="font-medium">Zawwar {i}</p>
                    <p className="text-xs text-white/60">Karbala Journey</p>
                  </div>
                </div>
                <p className="mt-3 text-white/80">
                  "A peaceful and luxurious experience. Every moment felt spiritually uplifting and well arranged."
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-14">
          <h3 className="text-2xl font-semibold mb-4">Gallery</h3>
          <div className="columns-2 md:columns-3 gap-3 [column-fill:_balance]">
            {[
              "https://images.unsplash.com/photo-1543248834-86a4702c6b86?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1578495179010-42a2e4a2d55a?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1577880216142-8549e9488dad?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1548588688-6d22481877e0?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop",
            ].map((src, idx) => (
              <img key={idx} src={src} alt="gallery" className="mb-3 w-full rounded-2xl border border-white/10" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
