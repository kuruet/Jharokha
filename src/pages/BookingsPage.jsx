import { Link } from "react-router-dom";
import { useBooking } from "../context/BookingContext";
import toast from "react-hot-toast";

export default function BookingsPage() {
  const { bookings, removeBooking } = useBooking();

  const sorted = [...bookings].sort((a, b) => b.id - a.id);

  const handleCancel = (id, locationName) => {
    removeBooking(id);
    toast.success(`Booking for ${locationName} cancelled.`, { duration: 3000 });
  };

  if (sorted.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
        <div className="text-center max-w-sm mx-auto">
          <p className="text-6xl mb-5">📭</p>
          <h2 className="text-2xl font-bold text-gray-800">No bookings yet</h2>
          <p className="mt-2 text-sm text-stone-500 leading-relaxed">
            Start exploring destinations and book your first guide.
          </p>
          <Link
            to="/locations"
            className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Explore Locations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
            My Bookings
          </h1>
          <p className="text-sm text-stone-500 mt-1">
            {sorted.length} {sorted.length === 1 ? "booking" : "bookings"} found
          </p>
        </div>

        <div className="space-y-4">
          {sorted.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-xl shadow-sm border border-stone-100 p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex flex-col gap-1.5">
                <p className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <span>📍</span> {booking.locationName}
                </p>
                <p className="text-sm text-stone-500 flex items-center gap-2">
                  <span>👤</span> {booking.name}
                </p>
                <p className="text-sm text-stone-500 flex items-center gap-2">
                  <span>📅</span>{" "}
                  {new Date(booking.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>

              <button
                onClick={() => handleCancel(booking.id, booking.locationName)}
                className="w-full sm:w-auto px-4 py-2 text-sm font-medium bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-all duration-200 shrink-0"
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}