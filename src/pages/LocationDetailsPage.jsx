import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import locations from "../data/locations";
import BookingModal from "../components/booking/BookingModal";
import ItineraryTimeline from "../components/itinerary/ItineraryTimeline";
import ARPreviewModal from "../components/arvr/ARPreviewModal";

export default function LocationDetailsPage() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showItinerary, setShowItinerary] = useState(false);
  const [isAROpen, setIsAROpen] = useState(false);
  const location = locations.find((loc) => loc.id === Number(id));

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-stone-50">
        <div className="text-center">
          <p className="text-6xl mb-6">🗺️</p>
          <h2 className="text-2xl font-bold text-gray-800">Location not found</h2>
          <p className="mt-2 text-gray-500 text-sm">
            The destination you're looking for doesn't exist or may have moved.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="relative w-full h-[60vh] sm:h-[70vh] overflow-hidden group">
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 lg:px-16 pb-10 sm:pb-14">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block bg-green-500/90 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 shadow-lg">
              {location.category}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
              {location.name}
            </h1>
            <p className="mt-3 text-white/75 text-sm sm:text-base max-w-xl line-clamp-2 leading-relaxed">
              {location.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-6">
        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6 sm:p-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-green-500 rounded-full inline-block"></span>
            About this destination
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            {location.description}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              🧭 Book Guide
            </button>

            <button
              onClick={() => setShowItinerary((prev) => !prev)}
              className="flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full bg-stone-800 hover:bg-stone-900 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              🗺️ {showItinerary ? "Hide Itinerary" : "View Itinerary"}
            </button>

            <button
              onClick={() => setIsAROpen(true)}
              className="flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              🎥 Preview Experience
            </button>
          </div>

          <p className="text-xs text-stone-400 pl-1">
            Book a local guide, explore the day-wise itinerary, or watch a destination preview before your visit.
          </p>
        </div>

        {showItinerary && (
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6 sm:p-10 transition-all duration-300">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-orange-500 rounded-full inline-block"></span>
              Suggested Itinerary
            </h2>
            <ItineraryTimeline />
          </div>
        )}
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ARPreviewModal isOpen={isAROpen} onClose={() => setIsAROpen(false)} />
    </div>
  );
}