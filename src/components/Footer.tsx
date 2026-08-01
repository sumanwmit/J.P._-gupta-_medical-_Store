import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, HeartPulse, Send, ExternalLink, ShieldCheck, FileText, Lock, AlertCircle } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { useTheme } from '../context/ThemeContext';
import { useTracker } from '../hooks/useTracker';

export const Footer: React.FC = () => {
  const { openWhatsAppModal } = useTheme();
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  // Invoke global analytics & page change tracking hook
  useTracker();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-8 relative overflow-hidden">
      
      {/* Background Decorative Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-1 bg-gradient-to-r from-[#0A8F6A] via-teal-400 to-[#0A8F6A]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Bar */}
        <div className="mb-14 p-8 rounded-3xl bg-gradient-to-r from-teal-950/80 via-slate-900 to-slate-950 border border-emerald-500/20 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-[#0A8F6A] uppercase tracking-wider mb-1">
              Need Emergency Medicines?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Fast WhatsApp Order & Local Storefront Dispatch
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Send your prescription photo or medicine list directly to our team in Rajabazar, Jehanabad.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => openWhatsAppModal()}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-2xl bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold text-sm shadow-lg shadow-[#0A8F6A]/30 transition transform active:scale-95 space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Order on WhatsApp</span>
            </button>

            <a
              href={`tel:${STORE_INFO.phone}`}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition space-x-2"
            >
              <Phone className="w-5 h-5 text-[#0A8F6A]" />
              <span>Call Store ({STORE_INFO.phone})</span>
            </a>
          </div>
        </div>

        {/* Footer Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Store Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A8F6A] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-[#0A8F6A]/30">
                <HeartPulse className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">
                {STORE_INFO.name}
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              {STORE_INFO.tagline}. Sourcing 100% genuine medicines, pediatric nutrition, surgical essentials, and healthcare monitors since 1998 in Jehanabad, Bihar.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={STORE_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[#0A8F6A] text-slate-300 hover:text-white flex items-center justify-center transition"
                aria-label="WhatsApp"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href={STORE_INFO.socialLinks.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[#0A8F6A] text-slate-300 hover:text-white flex items-center justify-center transition"
                aria-label="Google Business Profile"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-l-2 border-[#0A8F6A] pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition flex items-center space-x-1.5">
                  <span className="text-emerald-500">•</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition flex items-center space-x-1.5">
                  <span className="text-emerald-500">•</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition flex items-center space-x-1.5">
                  <span className="text-emerald-500">•</span>
                  <span>Services & Stock Checker</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition flex items-center space-x-1.5">
                  <span className="text-emerald-500">•</span>
                  <span>Store Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition flex items-center space-x-1.5">
                  <span className="text-emerald-500">•</span>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Working Hours */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-l-2 border-emerald-500 pl-2">
              Working Hours
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              {STORE_INFO.workingHours.map((wh, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-800/60 border border-slate-800">
                  <div className="flex items-center space-x-1.5 text-slate-200 font-semibold mb-0.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{wh.days}</span>
                  </div>
                  <span className="text-slate-400">{wh.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Business Address & Map */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-l-2 border-emerald-500 pl-2">
              Locate Store
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{STORE_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${STORE_INFO.phone}`} className="hover:text-emerald-400 transition">
                  {STORE_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{STORE_INFO.email}</span>
              </div>

              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-emerald-400 hover:text-emerald-300 font-semibold pt-1"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          
          {/* Policy Links */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-slate-300 transition"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-slate-300 transition"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveModal('disclaimer')}
              className="hover:text-slate-300 transition"
            >
              Medical Disclaimer
            </button>
          </div>

          {/* Copyright */}
          <div>
            &copy; {new Date().getFullYear()} {STORE_INFO.name}. All rights reserved.
          </div>

          {/* Developer Credit - Strict Requirement: Developed by WMIT -> https://main.webmakerit.com */}
          <div className="text-slate-400 font-medium">
            Developed by{' '}
            <a
              href="https://main.webmakerit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 font-bold hover:underline inline-flex items-center space-x-1"
            >
              <span>WMIT</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Modal for Privacy, Terms, Disclaimer */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 text-slate-300 space-y-4">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              ✕
            </button>
            
            {activeModal === 'privacy' && (
              <>
                <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                  <Lock className="w-5 h-5 text-emerald-400" />
                  <span>Privacy Policy</span>
                </h3>
                <p className="text-xs leading-relaxed text-slate-400">
                  At J.P. Gupta Medical Store, we prioritize customer confidentiality. Any prescription photos, phone numbers, or delivery addresses shared via our website or WhatsApp order system are used strictly for order processing and delivery fulfillment in Jehanabad, Bihar. We do not sell or share personal health information with third parties.
                </p>
              </>
            )}

            {activeModal === 'terms' && (
              <>
                <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-emerald-400" />
                  <span>Terms of Service</span>
                </h3>
                <p className="text-xs leading-relaxed text-slate-400">
                  Prescription medicines (Schedule H & H1 drugs) are dispensed strictly upon presentation of a valid registered medical practitioner's prescription. Prices listed on the online stock checker are based on current batch MRPs and subject to standard pharmaceutical revisions.
                </p>
              </>
            )}

            {activeModal === 'disclaimer' && (
              <>
                <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-emerald-400" />
                  <span>Medical Disclaimer</span>
                </h3>
                <p className="text-xs leading-relaxed text-slate-400">
                  Information on this website is provided for general awareness and inventory checking only. It does not replace professional medical diagnosis, treatment, or doctor consultation. Always take prescription drugs as directed by your qualified physician.
                </p>
              </>
            )}

            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
