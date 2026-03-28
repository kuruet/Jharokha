import reviews from "../../data/reviews";
import locations from "../../data/locations";

function StarRow({ rating, size = "sm" }) {
  const sizeClass = size === "lg" ? "w-5 h-5" : "w-3.5 h-3.5";
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < Math.floor(rating);
        const partial = !filled && i < rating;
        return (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`${sizeClass} ${
              filled
                ? "text-amber-400"
                : partial
                ? "text-amber-300"
                : "text-stone-200"
            }`}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      })}
    </div>
  );
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const AVATAR_COLORS = [
  "bg-orange-100 text-orange-600",
  "bg-green-100 text-green-700",
  "bg-indigo-100 text-indigo-600",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-600",
  "bg-teal-100 text-teal-700",
];

function avatarColor(name) {
  const code = name.charCodeAt(0) + (name.charCodeAt(1) || 0);
  return AVATAR_COLORS[code % AVATAR_COLORS.length];
}

export default function Reviews({ locationId }) {
  const locationReviews = reviews[locationId] || [];
  const location = locations.find((loc) => loc.id === locationId);

  const displayRating =
    location?.rating ??
    (locationReviews.length > 0
      ? parseFloat(
          (
            locationReviews.reduce((sum, r) => sum + r.rating, 0) /
            locationReviews.length
          ).toFixed(1)
        )
      : null);

  const displayTotal = location?.totalReviews ?? locationReviews.length;

  return (
    <div className="space-y-6">
      {/* Section title */}
      <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
        <span className="w-1 h-5 bg-orange-500 rounded-full inline-block" />
        Traveller Reviews
      </h2>

      {/* Rating summary */}
      {displayRating !== null && (
        <div className="flex items-center gap-4 bg-amber-50 border border-amber-100 rounded-2xl px-5 py-4">
          <div className="flex flex-col items-center justify-center min-w-[56px]">
            <span className="text-3xl font-extrabold text-amber-500 leading-none">
              {displayRating}
            </span>
            <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider mt-1">
              / 5
            </span>
          </div>
          <div className="w-px h-10 bg-amber-200 shrink-0" />
          <div className="flex flex-col gap-1">
            <StarRow rating={displayRating} size="lg" />
            <p className="text-xs text-stone-500 font-medium">
              Based on{" "}
              <span className="text-gray-700 font-semibold">
                {displayTotal.toLocaleString()}
              </span>{" "}
              {displayTotal === 1 ? "review" : "reviews"}
            </p>
          </div>
        </div>
      )}

      {/* Empty state */}
      {locationReviews.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-14 gap-3 text-center">
          <span className="text-4xl">💬</span>
          <p className="text-sm font-semibold text-stone-500">
            No reviews yet.
          </p>
          <p className="text-xs text-stone-400 max-w-xs leading-relaxed">
            Be the first to share your experience at this destination!
          </p>
        </div>
      ) : (
        /* Reviews grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {locationReviews.map((review, index) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-4 sm:p-5 border border-stone-100 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 animate-fade-in-up flex flex-col gap-3"
              style={{
                animationDelay: `${index * 60}ms`,
                animationFillMode: "both",
              }}
            >
              {/* Header: avatar + name + date */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${avatarColor(
                      review.name
                    )}`}
                  >
                    {getInitials(review.name)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-gray-800 leading-tight truncate">
                      {review.name}
                    </p>
                    <p className="text-[11px] text-stone-400 mt-0.5">
                      {formatDate(review.date)}
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <StarRow rating={review.rating} size="sm" />
                </div>
              </div>

              {/* Comment */}
              <p className="text-sm text-stone-600 leading-relaxed border-t border-stone-50 pt-3">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 380ms ease-out;
        }
      `}</style>
    </div>
  );
}