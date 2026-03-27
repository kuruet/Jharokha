const categories = ["All", "Waterfall", "Hills", "Religious"];

export default function CategoryFilter({ selectedCategory, onChange }) {
  return (
    <div className="flex flex-wrap gap-3" role="group" aria-label="Filter by category">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
            selectedCategory === category
              ? "bg-orange-600 text-white shadow-sm shadow-orange-200"
              : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-800"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}