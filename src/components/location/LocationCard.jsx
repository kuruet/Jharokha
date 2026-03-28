import { Link } from "react-router-dom";

const categoryStyles = {
  Waterfall: "bg-sky-100 text-sky-700",
  Hills: "bg-emerald-100 text-emerald-700",
  Religious: "bg-amber-100 text-amber-700",
};

export default function LocationCard({ id, name, image, description, category }) {
  const badgeClass = categoryStyles[category] ?? "bg-stone-100 text-stone-600";

  return (
    <Link
      to={`/location/${id}`}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48 shrink-0">
        <img
          src={image}
          alt={`${name} – ${category} in Jharkhand`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold ${badgeClass}`}>
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-2">
        <h3 className="font-bold text-stone-800 text-base leading-snug group-hover:text-orange-600 transition-colors duration-150 line-clamp-1">
          {name}
        </h3>
        <p className="text-sm text-stone-500 leading-relaxed line-clamp-2 flex-1">
          {description}
        </p>
        <div className="flex items-center gap-1 mt-2 text-xs text-stone-400">
          <svg
            className="w-3.5 h-3.5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"
            />
          </svg>
          Jharkhand
        </div>
      </div>
    </Link>
  );
}