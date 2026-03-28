import { Link } from "react-router-dom";
import locations from "../../data/locations";

export default function NearbyPlaces({ currentLocation }) {
  const nearby = locations
    .filter(
      (loc) =>
        loc.category === currentLocation.category &&
        loc.id !== currentLocation.id
    )
    .slice(0, 4);

  if (nearby.length === 0) return null;

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="w-1 h-5 bg-indigo-500 rounded-full inline-block" />
        You may also like
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {nearby.map((loc) => (
          <Link
            key={loc.id}
            to={`/location/${loc.id}`}
            className="group bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="h-40 overflow-hidden">
              <img
                src={loc.image}
                alt={loc.name}
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-2 flex-1">
              <span className="inline-block self-start text-[10px] font-bold uppercase tracking-widest text-green-600 bg-green-50 border border-green-100 px-2.5 py-1 rounded-full">
                {loc.category}
              </span>
              <p className="text-sm font-bold text-gray-800 leading-snug group-hover:text-indigo-600 transition-colors duration-200">
                {loc.name}
              </p>
              {loc.rating && (
                <div className="flex items-center gap-1 mt-auto pt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-3.5 h-3.5 text-amber-400"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs font-semibold text-gray-600">{loc.rating}</span>
                  {loc.totalReviews && (
                    <span className="text-[11px] text-stone-400">
                      ({loc.totalReviews.toLocaleString()})
                    </span>
                  )}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}