import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LocationsPage from "../pages/LocationsPage";
import LocationDetailsPage from "../pages/LocationDetailsPage";
import BookingsPage from "../pages/BookingsPage"; // ✅ NEW IMPORT

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/locations" element={<LocationsPage />} />
      <Route path="/location/:id" element={<LocationDetailsPage />} />
      <Route path="/bookings" element={<BookingsPage />} /> {/* ✅ NEW ROUTE */}
    </Routes>
  );
}

export default AppRoutes;