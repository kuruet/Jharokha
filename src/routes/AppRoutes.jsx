import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LocationsPage from "../pages/LocationsPage";
import LocationDetailsPage from "../pages/LocationDetailsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/locations" element={<LocationsPage />} />
      <Route path="/location/:id" element={<LocationDetailsPage />} />
    </Routes>
  );
}

export default AppRoutes;