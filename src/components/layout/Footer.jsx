import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Locations", to: "/locations" },
  { label: "Explore", to: "/locations" },
];

const featureLinks = [
  { label: "Book Guides" },
  { label: "Itineraries" },
  { label: "360° Preview" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Email", href: "mailto:hello@jharokha.in" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-stone-900 text-stone-400" aria-label="Site footer">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Section 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group w-fit"
              aria-label="Jharokha – Go to homepage"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-md bg-gradient-to-br from-amber-500 to-orange-600 shadow-md shadow-orange-900/40 group-hover:scale-105 transition-transform duration-200">
                <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5 text-white" aria-hidden="true">
                  <path
                    d="M10 2C6.686 2 4 4.686 4 8c0 4.418 6 10 6 10s6-5.582 6-10c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-orange-400 transition-colors duration-200">
                Jharokha
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-stone-500 max-w-xs">
              Explore the hidden gems of Jharkhand with immersive travel experiences, local guides, and 360° previews.
            </p>
          </div>

          {/* Section 2 — Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-300">
              Navigate
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {navLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-stone-500 hover:text-orange-400 transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 — Features */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-300">
              Features
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {featureLinks.map(({ label }) => (
                <li key={label}>
                  <span className="text-sm text-stone-500 hover:text-orange-400 transition-colors duration-150 cursor-default">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 — Social / Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-300">
              Connect
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {socialLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-stone-500 hover:text-orange-400 transition-colors duration-150"
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-600 text-center sm:text-left">
            © 2026 Jharokha. All rights reserved.
          </p>
          <p className="text-xs text-stone-700 text-center sm:text-right">
            Built with passion for Jharkhand's beauty.
          </p>
        </div>
      </div>
    </footer>
  );
}