import LocationCard from "./LocationCard";

export default function LocationGrid({ locations }) {
  if (!locations || locations.length === 0) {
    return (
      <div className="py-10 text-center text-stone-500 text-sm">
        No locations found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {locations.map((location) => (
        <LocationCard key={location.id} {...location} />
      ))}
    </div>
  );
}