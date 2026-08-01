import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Moon, Sun, Menu, X, ShoppingBag, ShieldCheck, HeartPulse } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { STORE_INFO } from '../data/storeData';

export const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode, openWhatsAppModal } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services & Stock', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-nav border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      
      {/* Top Banner Notice */}
      <div className="bg-[#0A8F6A] text-white text-xs py-1.5 px-4 font-medium flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-200" />
            <span>100% Genuine Medicines & Cold-Chain Storage in Rajabazar, Jehanabad</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline">Open Today: 8:00 AM - 10:00 PM</span>
            <a href={`tel:${STORE_INFO.phone}`} className="font-bold underline hover:text-emerald-100 flex items-center space-x-1">
              <Phone className="w-3 h-3" />
              <span>{STORE_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#0A8F6A] text-white flex items-center justify-center font-bold text-xl shadow-md shadow-[#0A8F6A]/20 group-hover:scale-105 transition-transform">
              G
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-[#0A8F6A] dark:group-hover:text-emerald-400 transition-colors">
                J.P. GUPTA MEDICAL STORE
              </span>
              <span className="text-[10px] font-semibold text-[#0A8F6A] dark:text-emerald-400 tracking-widest uppercase mt-1">
                Pharmacy & Healthcare
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `py-1 transition-all ${
                    isActive
                      ? 'text-[#0A8F6A] font-bold border-b-2 border-[#0A8F6A]'
                      : 'hover:text-[#0A8F6A] text-slate-600 dark:text-slate-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              aria-label="Toggle dark mode"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            {/* Call button */}
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 hover:border-[#0A8F6A] text-slate-700 dark:text-slate-200 hover:text-[#0A8F6A] text-xs font-bold transition space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#0A8F6A]" />
              <span>Call Store</span>
            </a>

            {/* WhatsApp Order CTA */}
            <button
              onClick={() => openWhatsAppModal()}
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-semibold text-xs shadow-lg shadow-[#0A8F6A]/20 transition transform active:scale-95 space-x-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </button>
          </div>

          {/* Mobile Hamburger Controls */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-fade-in">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-2xl text-base font-bold transition-all ${
                    isActive
                      ? 'bg-[#0A8F6A] text-white shadow-md'
                      : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsAppModal();
              }}
              className="w-full py-3.5 rounded-2xl bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold text-center flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>WhatsApp Medicine Order</span>
            </button>

            <a
              href={`tel:${STORE_INFO.phone}`}
              className="w-full py-3 rounded-2xl bg-sky-600 text-white font-bold text-center flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Store ({STORE_INFO.phone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
