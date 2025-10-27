import { useRef, useState } from "react";
import Hero from "./components/Hero";
import CarouselAndPackages from "./components/CarouselAndPackages";
import BookingAndContact from "./components/BookingAndContact";
import Footer from "./components/Footer";
import { ChevronRight } from "lucide-react";

export default function App() {
  const [lang, setLang] = useState("en");
  const [ambient, setAmbient] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const packagesRef = useRef(null);
  const bookingRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    if (ref?.current) ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#0c0714]">
      <Hero
        lang={lang}
        toggleLang={() => setLang((p) => (p === "en" ? "ur" : "en"))}
        ambientEnabled={ambient}
        toggleAmbient={() => setAmbient((v) => !v)}
        onExplore={() => scrollTo(packagesRef)}
        onBook={() => scrollTo(bookingRef)}
        onContact={() => scrollTo(contactRef)}
      />

      <div ref={packagesRef}>
        <CarouselAndPackages lang={lang} onBook={(pkg) => { setSelectedPackage(pkg); scrollTo(bookingRef); }} />
      </div>

      <div ref={bookingRef}>
        <BookingAndContact lang={lang} selectedPackage={selectedPackage} />
      </div>

      <div ref={contactRef}>
        <Footer lang={lang} />
      </div>

      {/* Floating Book Now */}
      <button
        onClick={() => scrollTo(bookingRef)}
        className="fixed bottom-8 left-4 sm:left-8 px-5 py-3 rounded-full bg-gradient-to-r from-purple-500 to-yellow-400 text-black font-medium shadow-2xl hover:brightness-110 transition flex items-center gap-2"
      >
        Book Now <ChevronRight size={18} />
      </button>
    </div>
  );
}
