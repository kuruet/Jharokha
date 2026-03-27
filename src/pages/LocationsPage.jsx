import { useState } from "react";
import locations from "../data/locations";
import LocationGrid from "../components/location/LocationGrid";
import CategoryFilter from "../components/location/CategoryFilter";

export default function LocationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredLocations =
    selectedCategory === "All"
      ? locations
      : locations.filter(
          (location) => location.category === selectedCategory
        );

  return (
    <div className="bg-stone-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-2">
            All Destinations
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-800 tracking-tight">
            Explore Locations
          </h1>
          <p className="mt-3 text-stone-500 text-base max-w-xl leading-relaxed">
            Discover waterfalls, sacred temples, and misty highlands across the heartland of Jharkhand.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>

        {/* Locations Grid */}
        <LocationGrid locations={filteredLocations} />

      </div>
    </div>
  );
}