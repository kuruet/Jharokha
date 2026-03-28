import { createContext, useContext, useState, useCallback, useMemo, useEffect } from "react";

const BookingContext = createContext(null);

const STORAGE_KEY = "jharokha_bookings";

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveToStorage(bookings) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  } catch {
    // fail silently
  }
}

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState(loadFromStorage);

  useEffect(() => {
    saveToStorage(bookings);
  }, [bookings]);

  const addBooking = useCallback((bookingData) => {
    const { name, date, locationId, locationName } = bookingData ?? {};

    if (!name?.trim() || !date?.trim() || !locationId) return false;

    const alreadyBooked = (prev) =>
      prev.some((b) => b.locationId === locationId);

    let added = false;

    setBookings((prev) => {
      if (alreadyBooked(prev)) return prev;
      added = true;
      return [
        ...prev,
        {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
          name: name.trim(),
          date: date.trim(),
          locationId,
          locationName: locationName ?? "",
        },
      ];
    });

    return added;
  }, []);

  const removeBooking = useCallback((id) => {
    setBookings((prev) => prev.filter((booking) => booking.id !== id));
  }, []);

  const isBooked = useCallback(
    (locationId) => bookings.some((booking) => booking.locationId === locationId),
    [bookings]
  );

  const value = useMemo(
    () => ({ bookings, addBooking, removeBooking, isBooked }),
    [bookings, addBooking, removeBooking, isBooked]
  );

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) throw new Error("BookingContext must be used within BookingProvider");
  return context;
}