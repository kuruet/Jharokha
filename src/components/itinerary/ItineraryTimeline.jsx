import { useState } from "react";
import itineraries from "../../data/itineraries";

export default function ItineraryTimeline({ locationId }) {
  const itinerary = itineraries[locationId];
  const [openDay, setOpenDay] = useState(0);

  const handleToggle = (index) => {
    setOpenDay(openDay === index ? null : index);
  };

  if (!itinerary) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-20 gap-3 animate-fade-in-up">
        <span className="text-4xl">🧭</span>
        <p className="text-sm text-stone-400 text-center tracking-wide font-medium">
          No itinerary available for this location.
        </p>
        <p className="text-xs text-stone-300 text-center">
          Check back soon — we're curating the perfect journey.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Smart header */}
      <div className="mb-6 flex items-center gap-2">
        <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
          {itinerary.length}-Day Itinerary
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-orange-100 to-transparent" />
      </div>

      <div className="relative pl-7 sm:pl-8 space-y-8">
        {/* Timeline vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px sm:w-[1.5px] bg-gradient-to-b from-orange-200 via-stone-200 to-transparent" />

        {itinerary.map((item, index) => {
          const isOpen = openDay === index;
          const isPast = openDay !== null && index < openDay;
          const isFuture = openDay !== null && index > openDay;

          return (
            <div
              key={index}
              className="relative animate-fade-in-up"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              {/* Timeline dot with pulse */}
              <span className="absolute -left-[1.55rem] sm:-left-[1.65rem] top-[1.1rem] flex items-center justify-center">
                {isOpen && (
                  <span className="absolute w-5 h-5 bg-orange-100 rounded-full opacity-0 animate-dot-pulse" />
                )}
                <span
                  className={`relative rounded-full ring-[3px] ring-white shadow-md transition-all duration-300 ${
                    isOpen
                      ? "w-3.5 h-3.5 bg-orange-500 shadow-orange-200 shadow-lg"
                      : isPast
                      ? "w-2.5 h-2.5 bg-orange-300"
                      : "w-3 h-3 bg-stone-300"
                  }`}
                />
              </span>

              {/* Day card */}
              <div
                className={`rounded-2xl shadow-sm border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-orange-50/40 border-orange-200 shadow-md"
                    : "bg-white border-stone-100 hover:shadow-md"
                }`}
              >
                {/* Clickable header */}
                <div
                  role="button"
                  aria-expanded={isOpen}
                  onClick={() => handleToggle(index)}
                  className={`flex items-center justify-between px-4 sm:px-5 pt-4 sm:pt-5 pb-4 cursor-pointer select-none transition-colors duration-200 rounded-t-2xl ${
                    isOpen ? "hover:bg-orange-100/30" : "hover:bg-stone-50"
                  }`}
                >
                  <div className="flex-1 min-w-0 pr-3">
                    <p className="text-[10px] uppercase tracking-widest text-orange-400 font-bold mb-0.5">
                      Day {item.day}
                    </p>
                    <h3
                      className={`text-lg font-bold leading-snug transition-colors duration-200 ${
                        isOpen ? "text-orange-900" : "text-gray-800"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Chevron */}
                  <span
                    className={`transition-all duration-300 flex-shrink-0 ${
                      isOpen ? "text-orange-400 rotate-180" : "text-stone-400 rotate-0"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </div>

                {/* Collapsible activities */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {/* Divider */}
                  <div className="mx-4 sm:mx-5 h-px bg-gradient-to-r from-orange-200/60 to-transparent mb-4" />

                  {/* Activities */}
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 space-y-3">
                    {item.activities.map((activity, actIndex) => {
                      const isFirst = actIndex === 0;
                      return (
                        <div
                          key={actIndex}
                          className={`flex gap-3 p-4 sm:p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm ${
                            isFirst
                              ? "bg-orange-50 border-orange-200 hover:bg-orange-100/60 hover:border-orange-300"
                              : "bg-white border-stone-100 hover:bg-orange-50 hover:border-orange-100"
                          }`}
                        >
                          {/* Time column */}
                          <div className="flex flex-col items-start min-w-[68px]">
                            <span className="text-stone-300 text-[10px] mb-0.5">🕒</span>
                            <span className="text-[11px] text-stone-400 font-semibold whitespace-nowrap tracking-wide leading-none">
                              {activity.time}
                            </span>
                          </div>

                          {/* Content column */}
                          <div className="flex-1 min-w-0">
                            <p
                              className={`text-sm font-bold leading-snug ${
                                isFirst ? "text-orange-900" : "text-gray-800"
                              }`}
                            >
                              {activity.title}
                            </p>
                            <p className="text-xs text-stone-500 leading-relaxed mt-1">
                              {activity.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes dotPulse {
          0% { transform: scale(1); opacity: 0.5; }
          70% { transform: scale(2.2); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }

        .animate-fade-in-up {
          animation: fadeInUp 420ms ease-out;
        }

        .animate-dot-pulse {
          animation: dotPulse 2.4s ease-out infinite;
        }
      `}</style>
    </div>
  );
}