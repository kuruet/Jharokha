import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LocationsPage from "../pages/LocationsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/locations" element={<LocationsPage />} />
    </Routes>
  );
}

export default AppRoutes;