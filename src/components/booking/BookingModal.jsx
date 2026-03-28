import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useBooking } from "../../context/BookingContext";

export default function BookingModal({ isOpen, onClose, locationId, locationName }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [visible, setVisible] = useState(false);
  const { addBooking, isBooked } = useBooking();
  const nameRef = useRef(null);
  const alreadyBooked = isBooked(locationId);
  const today = new Date().toISOString().split("T")[0];
  const canSubmit = !alreadyBooked && !isSubmitting && name.trim() && date;

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setVisible(true));
      setTimeout(() => nameRef.current?.focus(), 80);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => { if (e.key === "Escape") handleClose(); };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => onClose(), 200);
  };

  const handleConfirm = () => {
    if (alreadyBooked) return;
    if (!name.trim()) { toast.error("Please enter your name"); return; }
    if (!date) { toast.error("Please select a date"); return; }

    setIsSubmitting(true);
    addBooking({ name: name.trim(), date, locationId, locationName });
    toast.success(`Booking confirmed for ${name.trim()} 🎉`, { duration: 3000 });
    setName("");
    setDate("");
    setIsSubmitting(false);
    handleClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && canSubmit) handleConfirm();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-0 transition-all duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`relative bg-white rounded-2xl shadow-2xl w-full max-w-md transition-all duration-200 ease-out ${
          visible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <div className="px-5 sm:px-8 pt-6 pb-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id="booking-modal-title" className="text-xl font-bold text-gray-900 leading-tight">
                Book a Guide
              </h2>
              {locationName && (
                <p className="text-sm text-stone-500 mt-0.5">
                  for{" "}
                  <span className="font-semibold text-orange-500">{locationName}</span>
                </p>
              )}
            </div>
            <button
              onClick={handleClose}
              className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-800 transition-all duration-150 text-sm font-bold mt-0.5"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="h-px bg-stone-100 mx-5 sm:mx-8 mt-4" />

        <div className="px-5 sm:px-8 py-5">
          {alreadyBooked ? (
            <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3.5 flex items-start gap-3">
              <span className="text-lg mt-0.5">✅</span>
              <div>
                <p className="text-sm font-semibold text-green-800">Already Booked</p>
                <p className="text-xs text-green-600 mt-0.5">
                  You've already booked a guide for this location.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="booking-name"
                  className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5"
                >
                  Your Name
                </label>
                <input
                  id="booking-name"
                  ref={nameRef}
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent focus:scale-[1.01] transition-all duration-200 disabled:opacity-50 bg-stone-50 focus:bg-white"
                />
              </div>
              <div>
                <label
                  htmlFor="booking-date"
                  className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5"
                >
                  Preferred Date
                </label>
                <input
                  id="booking-date"
                  type="date"
                  min={today}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent focus:scale-[1.01] transition-all duration-200 disabled:opacity-50 bg-stone-50 focus:bg-white"
                />
              </div>
            </div>
          )}
        </div>

        <div className="h-px bg-stone-100 mx-5 sm:mx-8" />

        <div className="px-5 sm:px-8 py-5 flex flex-col-reverse sm:flex-row sm:justify-end gap-2.5">
          <button
            onClick={handleClose}
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl transition-all duration-150 active:scale-[0.98]"
          >
            {alreadyBooked ? "Close" : "Cancel"}
          </button>

          {!alreadyBooked && (
            <button
              onClick={handleConfirm}
              disabled={!canSubmit}
              className={`w-full sm:w-auto px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-150 
                ${canSubmit
                  ? "bg-orange-500 hover:bg-orange-600 text-white hover:shadow-lg hover:shadow-orange-200 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
                  : "bg-orange-300 text-white cursor-not-allowed opacity-60"
                }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                  Booking...
                </span>
              ) : (
                "Confirm Booking"
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}