import { motion, useMotionValue, useTransform } from "framer-motion";
import { Plane, Star, Globe, ChevronRight, Languages, Play } from "lucide-react";
import { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function Hero({ onExplore, onBook, onContact, lang = "en", toggleLang, ambientEnabled, toggleAmbient }) {
  const videoRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rX = useTransform(my, [0, 1], [8, -8]);
  const rY = useTransform(mx, [0, 1], [-8, 8]);

  useEffect(() => {
    if (!videoRef.current) return;
    if (ambientEnabled) {
      videoRef.current.volume = 0.15;
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [ambientEnabled]);

  const t = {
    en: {
      brand: "Al Mukhtar Tours",
      tagline: "Enroute to Heaven • Serving Zawwars Since 17 Years",
      explore: "Explore Packages",
      book: "Book Now",
      contact: "Contact Us",
      iraq: "Iraq",
      iran: "Iran",
      umrah: "Umrah",
    },
    ur: {
      brand: "المختار ٹورز",
      tagline: "راہِ جنت • زوّار کی خدمت 17 سال سے",
      explore: "پیکجز دیکھیں",
      book: "ابھی بک کریں",
      contact: "رابطہ کریں",
      iraq: "عراق",
      iran: "ایران",
      umrah: "عمرہ",
    },
  }[lang];

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mx.set(x);
    my.set(y);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1b0b26] via-[#24103a] to-[#0c0714] text-white">
      {/* Ambient clouds video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        src="https://cdn.coverr.co/videos/coverr-flying-over-clouds-7015/1080p.mp4"
        muted
        loop
        playsInline
      />

      {/* Soft light and particles overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,215,0,0.14),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(186,104,200,0.22),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(255,215,0,0.14),transparent_40%)]" />
        <div className="absolute inset-0" aria-hidden>
          {[...Array(24)].map((_, i) => (
            <span
              key={i}
              className="absolute w-1 h-1 rounded-full bg-yellow-300/60 shadow-[0_0_10px_rgba(234,179,8,0.6)]"
              style={{
                top: `${(i * 37) % 100}%`,
                left: `${(i * 53) % 100}%`,
                transform: `translateZ(0)`,
                animation: `float ${8 + (i % 6)}s ease-in-out ${(i % 4) * 0.5}s infinite alternate`,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float { from { transform: translateY(-6px); opacity: .7 } to { transform: translateY(6px); opacity: 1 } }
      `}</style>

      <div className="relative z-10">
        {/* Top bar */}
        <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/10 backdrop-blur border border-white/10 shadow-lg">
              <Plane className="text-yellow-300" size={22} />
            </div>
            <div>
              <p className="text-xl font-semibold tracking-wide">Al Mukhtar Tours</p>
              <p className="text-xs text-white/70">{t.tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleAmbient}
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition shadow border border-white/10"
            >
              <Play size={16} />
              <span className="text-sm">{ambientEnabled ? "Ambient On" : "Ambient Off"}</span>
            </button>
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition shadow border border-white/10"
            >
              <Languages size={16} />
              <span className="text-sm">{lang === "en" ? "English / Urdu" : "اردو / انگریزی"}</span>
            </button>
          </div>
        </div>

        {/* Hero content */}
        <div className="max-w-7xl mx-auto px-4 pb-16 pt-6 grid md:grid-cols-2 items-center gap-8">
          <div className="relative" onMouseMove={handleMouse}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ rotateX: rX, rotateY: rY, transformPerspective: 900 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-br from-white via-yellow-200 to-purple-200 bg-clip-text text-transparent"
            >
              {t.brand}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-3 text-lg text-white/80"
            >
              {t.tagline}
            </motion.p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button onClick={onExplore} className="px-5 py-3 rounded-full bg-gradient-to-r from-purple-500 to-yellow-400 text-black font-medium shadow-xl hover:brightness-110 transition">
                {t.explore}
              </button>
              <button onClick={onBook} className="px-5 py-3 rounded-full bg-white/10 border border-white/15 backdrop-blur hover:bg-white/20 transition">
                {t.book}
              </button>
              <button onClick={onContact} className="px-5 py-3 rounded-full bg-white/10 border border-white/15 backdrop-blur hover:bg-white/20 transition">
                {t.contact}
              </button>
            </div>

            {/* Why choose us */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { icon: Star, label: lang === "en" ? "Trusted 17+ Years" : "17+ سال کا اعتماد" },
                { icon: Globe, label: lang === "en" ? "Iraq • Iran • Umrah" : "عراق • ایران • عمرہ" },
                { icon: Plane, label: lang === "en" ? "Premium Comfort" : "پریمیم آرام" },
              ].map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="p-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Icon size={18} className="text-yellow-300" />
                    <span className="text-sm text-white/90">{label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 3D Shrine & Airplane Spline scene */}
          <div className="relative h-[360px] sm:h-[420px] md:h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
            <Spline
              scene="https://prod.spline.design/SMgqv6jXwUoZcK2g/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0714] via-transparent to-transparent" />
          </div>
        </div>

        {/* Destinations quick links */}
        <div className="max-w-7xl mx-auto px-4 pb-14">
          <div className="grid grid-cols-3 gap-3">
            {[t.iraq, t.iran, t.umrah].map((d, i) => (
              <button key={d} onClick={onExplore} className="group relative p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur hover:bg-white/15 transition text-left">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{d}</span>
                  <ChevronRight className="opacity-70 group-hover:translate-x-1 transition" size={18} />
                </div>
                <div className="mt-2 h-1 rounded-full bg-gradient-to-r from-yellow-300 to-purple-300 group-hover:from-purple-300 group-hover:to-yellow-300 transition" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
