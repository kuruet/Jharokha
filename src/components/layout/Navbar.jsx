import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Locations", to: "/locations" },
  { label: "My Bookings", to: "/bookings" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          : "bg-white/80 backdrop-blur-sm shadow-sm"
      }`}
      aria-label="Main navigation"
    >
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">

          <Link
            to="/"
            className="flex items-center gap-2 group select-none shrink-0"
            aria-label="Jharokha – Go to homepage"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 shadow-md shadow-orange-200 group-hover:scale-105 transition-transform duration-200">
              <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-white" aria-hidden="true">
                <path
                  d="M10 2C6.686 2 4 4.686 4 8c0 4.418 6 10 6 10s6-5.582 6-10c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="font-bold text-xl tracking-tight text-stone-800 group-hover:text-orange-600 transition-colors duration-200">
              Jharokha
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    isActive(to)
                      ? "text-orange-600"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-orange-500 transition-transform duration-200 origin-left ${
                      isActive(to) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center shrink-0">
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-semibold shadow-md shadow-orange-200 hover:shadow-lg hover:shadow-orange-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 select-none"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                <path
                  d="M8 1.5a.75.75 0 01.75.75V7h4.75a.75.75 0 010 1.5H8.75v4.75a.75.75 0 01-1.5 0V8.5H2.5a.75.75 0 010-1.5h4.75V2.25A.75.75 0 018 1.5z"
                  fill="currentColor"
                />
              </svg>
              Explore
            </Link>
          </div>

          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors duration-150"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 transition-transform duration-200"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="border-t border-stone-100 bg-white/98 backdrop-blur-md px-5 py-3 flex flex-col gap-1">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                isActive(to)
                  ? "text-orange-600 bg-orange-50"
                  : "text-stone-700 hover:text-stone-900 hover:bg-stone-100"
              }`}
            >
              {isActive(to) && (
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
              )}
              {label}
            </Link>
          ))}

          <div className="pt-2 pb-1">
            <Link
              to="/locations"
              className="flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-semibold shadow-md shadow-orange-200 hover:shadow-lg hover:shadow-orange-300 transition-all duration-200"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                <path
                  d="M8 1.5a.75.75 0 01.75.75V7h4.75a.75.75 0 010 1.5H8.75v4.75a.75.75 0 01-1.5 0V8.5H2.5a.75.75 0 010-1.5h4.75V2.25A.75.75 0 018 1.5z"
                  fill="currentColor"
                />
              </svg>
              Explore Jharkhand
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}