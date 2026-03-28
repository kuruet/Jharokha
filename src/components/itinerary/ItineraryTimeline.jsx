const itinerary = [
  {
    day: "Day 1",
    title: "Arrival & Local Exploration",
    description: "Arrive at the destination, check in to your stay, and explore nearby attractions at a relaxed pace.",
  },
  {
    day: "Day 2",
    title: "Main Attraction Experience",
    description: "Visit the main location early in the day to enjoy scenic beauty, photography, and peaceful surroundings.",
  },
  {
    day: "Day 3",
    title: "Local Culture & Departure",
    description: "Explore local markets, try regional food, and prepare for your return journey.",
  },
];

export default function ItineraryTimeline() {
  return (
    <div className="w-full">
      <div className="relative pl-6 border-l-2 border-stone-200 space-y-8">
        {itinerary.map((item, index) => (
          <div key={index} className="relative">
            <span className="absolute -left-[1.4rem] top-4 w-3 h-3 bg-orange-500 rounded-full ring-4 ring-white shadow-sm" />
            <div className="bg-white rounded-xl p-5 shadow-sm border border-stone-100 hover:shadow-md transition-all duration-300">
              <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-1">
                {item.day}
              </p>
              <h3 className="text-base font-bold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}