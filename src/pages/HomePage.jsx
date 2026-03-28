import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import locations from "../data/locations";
import LocationCard from "../components/location/LocationCard";

const categories = [
  {
    label: "Waterfalls",
    emoji: "💧",
    desc: "Cascading wonders of nature",
    color: "from-sky-400/20 to-blue-500/10 border-sky-200 hover:border-sky-400",
    text: "text-sky-700",
    iconBg: "from-sky-100 to-blue-100",
    glow: "hover:shadow-[0_10px_30px_rgba(56,189,248,0.2)]",
  },
  {
    label: "Hills",
    emoji: "⛰️",
    desc: "Misty peaks & serene valleys",
    color: "from-emerald-400/20 to-green-500/10 border-emerald-200 hover:border-emerald-400",
    text: "text-emerald-700",
    iconBg: "from-emerald-100 to-green-100",
    glow: "hover:shadow-[0_10px_30px_rgba(52,211,153,0.2)]",
  },
  {
    label: "Religious",
    emoji: "🛕",
    desc: "Sacred temples & spiritual sites",
    color: "from-amber-400/20 to-orange-500/10 border-amber-200 hover:border-amber-400",
    text: "text-amber-700",
    iconBg: "from-amber-100 to-orange-100",
    glow: "hover:shadow-[0_10px_30px_rgba(251,191,36,0.2)]",
  },
];

const stats = [
  { value: "40+", label: "Destinations" },
  { value: "120+", label: "Local Guides" },
  { value: "15+", label: "Itineraries" },
  { value: "360°", label: "Previews" },
];

const featuredLocations = (
  locations.filter((loc) => loc.rating >= 4.4).length
    ? locations.filter((loc) => loc.rating >= 4.4)
    : locations
).slice(0, 3);

const whyFeatures = [
  {
    icon: "🌿",
    title: "Breathtaking Nature",
    description:
      "From majestic waterfalls to lush forests and serene hills, experience untouched natural beauty.",
  },
  {
    icon: "🛕",
    title: "Rich Cultural Heritage",
    description:
      "Explore tribal traditions, spiritual sites, and the deep-rooted culture of Jharkhand.",
  },
  {
    icon: "🧭",
    title: "Endless Adventure",
    description:
      "Trekking, exploring, and discovering hidden gems — every journey is an adventure.",
  },
];

function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function HomePage() {
  const categoriesRef = useScrollReveal();
  const featuredRef = useScrollReveal();
  const whyRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <div className="bg-stone-50 min-h-screen">

      {/* Hero */}
      <section className="relative h-[80vh] sm:h-[90vh] overflow-hidden group">
        <img
src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85"
className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[10000ms] ease-in-out"className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[10000ms] ease-in-out"className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[10000ms] ease-in-out"        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

        {/* Floating blobs */}
        <div className="pointer-events-none absolute -top-16 -left-16 w-72 h-72 rounded-full bg-green-500/10 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute bottom-24 -right-16 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl animate-pulse" style={{ animationDelay: "1500ms" }} />

        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }}
        />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <span className="hero-fade-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Discover Jharkhand
            </span>
            <h1 className="hero-fade-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Discover the{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Natural Beauty
              </span>{" "}
              of Jharkhand
            </h1>
            <p className="hero-fade-3 mt-5 text-base sm:text-lg text-white/60 max-w-xl leading-relaxed">
              Waterfalls, misty highlands, and ancient temples — experience the
              soul of India's heartland with local guides and immersive 360° previews.
            </p>
            <Link
              to="/locations"
              className="hero-fade-4 mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold text-sm shadow-lg shadow-orange-900/50 hover:shadow-orange-900/70 hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 active:scale-100 transition-all duration-200"
            >
              Explore Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <div className="hero-fade-5 mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <span className="text-2xl font-extrabold text-white">{value}</span>
                  <span className="text-xs text-white/40 uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 28C840 36 960 40 1080 36C1200 32 1320 20 1380 14L1440 8V60H0Z" fill="#f9fafb" />
          </svg>
        </div>
      </section>

      {/* Categories */}
      <section ref={categoriesRef} className="reveal py-20 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-2">Browse By Type</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-800">What are you looking for?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(({ label, emoji, desc, color, text, iconBg, glow }, index) => (
              <Link
                to="/locations"
                key={label}
                className={`reveal-child group relative flex flex-col items-center text-center gap-5 p-8 rounded-3xl bg-gradient-to-br ${color} bg-white/70 backdrop-blur-md border transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl ${glow} hover:border-opacity-80 cursor-pointer overflow-hidden`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/40 to-transparent" />
                <div className={`relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${iconBg} shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 ease-out`}>
                  <span className="text-3xl leading-none">{emoji}</span>
                </div>
                <div className="relative flex flex-col gap-1.5">
                  <p className={`font-bold text-base sm:text-lg ${text}`}>{label}</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
                </div>
                <span
                  className={`relative inline-flex items-center gap-1.5 text-xs font-semibold ${text} opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out`}
                >
                  Explore
                  <svg
                    className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Locations */}
      <section ref={featuredRef} className="reveal py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-2">
                Curated Experiences
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-800">
                Handpicked Destinations
              </h2>
              <p className="mt-2 text-sm text-stone-500 max-w-md leading-relaxed">
                Explore our top recommended places selected for unforgettable experiences.
              </p>
            </div>
            <Link
              to="/locations"
              className="text-sm font-semibold text-orange-600 hover:text-orange-700 underline underline-offset-4 decoration-orange-300 hover:decoration-orange-500 transition-colors duration-150 shrink-0"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredLocations.map((location, index) => (
              <div
                key={location.id}
                className="reveal-child"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <LocationCard {...location} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Explore Jharkhand */}
      <section ref={whyRef} className="reveal py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-2">
              Why Jharkhand
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-800">
              Why Explore Jharkhand
            </h2>
            <p className="mt-3 text-sm text-stone-500 max-w-md mx-auto leading-relaxed">
              Experience nature, culture, and adventure like never before.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyFeatures.map(({ icon, title, description }, index) => (
              <div
                key={title}
                className="reveal-child bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-3xl">{icon}</span>
                <h3 className="mt-4 text-lg font-bold text-stone-800">{title}</h3>
                <p className="mt-2 text-sm text-stone-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="reveal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 px-8 py-16 sm:px-16 text-center shadow-2xl hover:shadow-[0_32px_64px_rgba(0,0,0,0.25)] transition-shadow duration-500">
            <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl animate-pulse" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-orange-600/10 blur-3xl animate-pulse" style={{ animationDelay: "1000ms" }} />
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
              className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold text-sm shadow-lg shadow-orange-900/50 hover:shadow-orange-900/70 hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 active:scale-100 transition-all duration-200"
            >
              Explore Locations
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroFade {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-fade-1 { animation: heroFade 600ms ease-out 100ms both; }
        .hero-fade-2 { animation: heroFade 600ms ease-out 250ms both; }
        .hero-fade-3 { animation: heroFade 600ms ease-out 400ms both; }
        .hero-fade-4 { animation: heroFade 600ms ease-out 550ms both; }
        .hero-fade-5 { animation: heroFade 600ms ease-out 700ms both; }

        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 700ms ease-out, transform 700ms ease-out;
        }

        .reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-child {
          opacity: 0;
          transform: translateY(20px);
          animation: none;
        }

        .reveal.in-view .reveal-child {
          animation: fadeInUp 600ms ease-out forwards;
        }
      `}</style>
    </div>
  );
}