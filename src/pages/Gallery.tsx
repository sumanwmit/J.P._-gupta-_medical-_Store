import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { GALLERY_PHOTOS } from '../data/storeData';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { ZoomIn, Filter } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'exterior', label: 'Store Exterior' },
    { id: 'shelves', label: 'Medicine Shelves' },
    { id: 'interior', label: 'Store Interior' },
    { id: 'devices', label: 'Health Devices' },
    { id: 'surgical', label: 'Surgical Section' },
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-12 py-8">
      <SEO
        title="Store Gallery | J.P. Gupta Medical Store Rajabazar Jehanabad"
        description="Take a visual tour of J.P. Gupta Medical Store in Jehanabad, Bihar. View our organized medicine shelves, cold storage units, health devices, and clean interior."
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 rounded-b-3xl">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100/90 text-[#0A8F6A] font-extrabold text-xs uppercase tracking-widest border border-emerald-500/30">
            Visual Store Showcase
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Store Photo Gallery
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Take a look inside our clean, air-conditioned pharmacy in Rajabazar, Jehanabad.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#0A8F6A] text-white shadow-md shadow-[#0A8F6A]/20'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Photo Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-slate-950/60 px-2.5 py-1 rounded-md backdrop-blur-md">
                    {photo.category}
                  </span>
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-emerald-600 transition">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Lightbox Popup */}
      <GalleryLightbox
        items={filteredPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
};
