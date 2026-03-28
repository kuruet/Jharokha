import { useEffect } from "react";

export default function ARPreviewModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ease-in-out scale-100 opacity-100 hover:scale-[1.01]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-lg">🎬</span>
            <h2 className="text-white font-bold text-base sm:text-lg tracking-wide">
              Preview Experience
            </h2>
            <span className="ml-2 text-xs bg-orange-500/90 text-white px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider">
              Video Preview
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 text-sm font-bold"
          >
            ✕
          </button>
        </div>

        <div className="w-full aspect-video bg-black">
          <iframe
            src="https://www.youtube.com/embed/eDIJv93S_tQ?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1"
            title="360° Jharkhand Experience"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        <div className="px-5 py-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10">
          <p className="text-white/50 text-xs">
            Watch a quick preview of this destination before your visit
          </p>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-white/60 hover:text-white transition-all duration-200"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}