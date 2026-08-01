import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GalleryItem } from '../data/storeData';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const GalleryLightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const [zoomed, setZoomed] = useState(false);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomed(false);
    const newIdx = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    onNavigate(newIdx);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomed(false);
    const newIdx = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    onNavigate(newIdx);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls */}
        <div className="flex items-center justify-between p-4 bg-slate-900/80 border-b border-slate-800">
          <div>
            <h4 className="text-white font-bold text-base md:text-lg">{currentItem.title}</h4>
            <p className="text-xs text-slate-400 capitalize">{currentItem.category} Section</p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setZoomed(!zoomed)}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
              title="Toggle Zoom"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative flex-1 min-h-[300px] md:min-h-[500px] max-h-[70vh] flex items-center justify-center bg-slate-950 overflow-hidden">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className={`max-h-[70vh] w-auto object-contain transition-transform duration-300 ${
              zoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
            }`}
            onClick={() => setZoomed(!zoomed)}
            referrerPolicy="no-referrer"
          />

          {/* Nav Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white transition shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white transition shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Footer info */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex flex-col md:flex-row md:items-center justify-between text-xs text-slate-400 gap-2">
          <p>{currentItem.description}</p>
          <span>Photo {currentIndex + 1} of {items.length}</span>
        </div>
      </div>
    </div>
  );
};
