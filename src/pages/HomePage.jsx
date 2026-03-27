import { Link } from "react-router-dom";
import locations from "../data/locations";
import LocationCard from "../components/location/LocationCard";

const categories = [
  {
    label: "Waterfalls",
    emoji: "💧",
    desc: "Cascading wonders of nature",
    color: "from-sky-400/20 to-blue-500/10 border-sky-200 hover:border-sky-400",
    text: "text-sky-700",
  },
  {
    label: "Hills",
    emoji: "⛰️",
    desc: "Misty peaks & serene valleys",
    color: "from-emerald-400/20 to-green-500/10 border-emerald-200 hover:border-emerald-400",
    text: "text-emerald-700",
  },
  {
    label: "Religious",
    emoji: "🛕",
    desc: "Sacred temples & spiritual sites",
    color: "from-amber-400/20 to-orange-500/10 border-amber-200 hover:border-amber-400",
    text: "text-amber-700",
  },
];

const stats = [
  { value: "40+", label: "Destinations" },
  { value: "120+", label: "Local Guides" },
  { value: "15+", label: "Itineraries" },
  { value: "360°", label: "Previews" },
];

export default function HomePage() {
  return (
    <div className="bg-stone-50 min-h-screen">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 pt-28 pb-24 sm:pt-36 sm:pb-32">
        <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-orange-600/10 blur-3xl" />

        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Discover Jharkhand
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-3xl mx-auto">
            Explore the{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Hidden Gems
            </span>{" "}
            of Jharkhand
          </h1>

          <p className="mt-5 text-base sm:text-lg text-stone-400 max-w-xl mx-auto leading-relaxed">
            Waterfalls, misty highlands, and ancient temples — experience the
            soul of India's heartland with local guides and immersive 360° previews.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3 max-w-xl mx-auto">
            <div className="relative flex-1 w-full">
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400/60 focus:bg-white/15 transition-all duration-200"
                readOnly
              />
            </div>
            <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-semibold shadow-lg shadow-orange-900/40 hover:shadow-orange-900/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 whitespace-nowrap">
              Search
            </button>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span className="text-2xl font-extrabold text-white">{value}</span>
                <span className="text-xs text-stone-400 uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 28C840 36 960 40 1080 36C1200 32 1320 20 1380 14L1440 8V60H0Z" fill="#f9fafb" />
          </svg>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-2">Browse By Type</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-800">What are you looking for?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {categories.map(({ label, emoji, desc, color, text }) => (
            <Link
              to="/locations"
              key={label}
              className={`group flex flex-col items-center text-center gap-3 p-7 rounded-2xl bg-gradient-to-br ${color} border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer`}
            >
              <span className="text-4xl">{emoji}</span>
              <div>
                <p className={`font-bold text-base ${text}`}>{label}</p>
                <p className="text-xs text-stone-500 mt-0.5">{desc}</p>
              </div>
              <span className={`text-xs font-semibold ${text} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-2">Top Picks</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-800">Featured Destinations</h2>
            </div>
            <Link
              to="/locations"
              className="text-sm font-semibold text-orange-600 hover:text-orange-700 underline underline-offset-4 decoration-orange-300 hover:decoration-orange-500 transition-colors duration-150 shrink-0"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <LocationCard key={location.id} {...location} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 px-8 py-16 sm:px-16 text-center shadow-2xl">
            <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-orange-600/10 blur-3xl" />

            <p className="relative text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
              Your Adventure Awaits
            </p>
            <h2 className="relative text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              Start Your Journey Today
            </h2>
            <p className="relative text-stone-400 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
              Browse curated itineraries, connect with local guides, and preview destinations in 360° before you go.
            </p>
            <Link
              to="/locations"
              className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold text-sm shadow-lg shadow-orange-900/50 hover:shadow-orange-900/70 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Explore Locations
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}