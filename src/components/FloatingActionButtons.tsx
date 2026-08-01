import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, ShoppingBag } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { STORE_INFO } from '../data/storeData';

export const FloatingActionButtons: React.FC = () => {
  const { openWhatsAppModal } = useTheme();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end space-y-3 pointer-events-none">
      
      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3.5 rounded-full bg-slate-800 dark:bg-slate-700 text-white shadow-xl hover:bg-slate-700 dark:hover:bg-slate-600 transition-all transform hover:scale-110 active:scale-95 group"
          aria-label="Back to top"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${STORE_INFO.phone}`}
        className="pointer-events-auto flex items-center space-x-2 px-4 py-3 rounded-full bg-sky-600 hover:bg-sky-700 text-white shadow-xl shadow-sky-600/30 transition-all transform hover:scale-105 active:scale-95 font-semibold text-sm group"
        aria-label="Call Store"
      >
        <Phone className="w-5 h-5 animate-pulse" />
        <span className="hidden sm:inline">Call Store</span>
      </a>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => openWhatsAppModal()}
        className="pointer-events-auto flex items-center space-x-2.5 px-5 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-600/35 transition-all transform hover:scale-105 active:scale-95 font-bold text-sm sm:text-base group"
        aria-label="Order on WhatsApp"
      >
        <div className="relative">
          <ShoppingBag className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-ping" />
        </div>
        <span>WhatsApp Order</span>
      </button>

    </div>
  );
};
