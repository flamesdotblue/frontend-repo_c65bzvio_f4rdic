export default function Footer({ lang = "en" }) {
  return (
    <footer className="bg-[#0b0711] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid sm:grid-cols-3 gap-8">
        <div>
          <p className="text-xl font-semibold">Al Mukhtar Tours</p>
          <p className="text-white/70 mt-1">Enroute to Heaven • Serving Zawwars Since 17 Years.</p>
        </div>
        <div>
          <p className="font-medium mb-2">Quick Links</p>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><a href="#packages" className="hover:text-yellow-300">Packages</a></li>
            <li><a href="#booking" className="hover:text-yellow-300">Booking</a></li>
            <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>
        <div id="contact">
          <p className="font-medium mb-2">Follow</p>
          <div className="flex gap-3">
            <a className="p-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition" href="#" aria-label="Instagram">IG</a>
            <a className="p-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition" href="#" aria-label="Facebook">FB</a>
            <a className="p-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition" href="#" aria-label="YouTube">YT</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-white/70 text-sm">
        © 2025 Al Mukhtar Tours — Enroute to Heaven
      </div>
    </footer>
  );
}
