import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { STORE_INFO } from '../data/storeData';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, ExternalLink, CheckCircle2, ShieldAlert } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Contact: React.FC = () => {
  const { openWhatsAppModal } = useTheme();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [inquiryText, setInquiryText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    // Send inquiry via WhatsApp or show confirmation
    const waText = `Hello *${STORE_INFO.name}*,
Quick Website Inquiry:
• *Name:* ${fullName}
• *Phone:* ${phone}
• *Subject:* ${subject || 'General Inquiry'}
• *Message:* ${inquiryText}`;

    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(waText)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 py-8">
      <SEO
        title="Contact Us & Store Location | J.P. Gupta Medical Store Jehanabad"
        description="Contact J.P. Gupta Medical Store in Rajabazar, Jehanabad, Bihar. Call +91 9525444307, WhatsApp order medicines, or get Google Maps directions."
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 rounded-b-3xl">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100/90 text-[#0A8F6A] font-extrabold text-xs uppercase tracking-widest border border-emerald-500/30">
            Reach Out To Us
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact J.P. Gupta Medical Store
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            We are here to assist with medicine availability, prescription orders, and healthcare queries.
          </p>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Phone Card */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:border-[#0A8F6A] transition-colors space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center font-bold">
              <Phone className="w-5 h-5 text-[#0A8F6A]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Call Store</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Direct phone line for quick queries</p>
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="inline-block font-extrabold text-[#0A8F6A] dark:text-emerald-400 text-base hover:underline"
            >
              {STORE_INFO.phoneFormatted}
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:border-[#0A8F6A] transition-colors space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-[#0A8F6A] flex items-center justify-center font-bold">
              <Send className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">WhatsApp Order</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Send prescription photos 24/7</p>
            <button
              onClick={() => openWhatsAppModal()}
              className="inline-block font-extrabold text-[#0A8F6A] dark:text-emerald-400 text-base hover:underline text-left"
            >
              Start WhatsApp Chat
            </button>
          </div>

          {/* Location Card */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Store Address</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-tight">
              {STORE_INFO.address}
            </p>
            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline pt-1"
            >
              <span>View Map</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Hours Card */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Store Hours</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Mon - Sat: 8:00 AM - 10:00 PM<br />
              Sun: 8:30 AM - 9:00 PM
            </p>
            <span className="inline-block text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
              Emergency Support Available
            </span>
          </div>

        </div>
      </section>

      {/* Main Content: Map & Quick Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Quick Contact / Inquiry Form */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Direct Message
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                Send a Quick Inquiry
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Have a query regarding medicine availability, price, or home delivery? Fill in below.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-lg">Inquiry Sent via WhatsApp!</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Our team will review your message and reply promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuickInquiry} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Your Name <span className="text-emerald-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Anand Kumar"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Mobile Number <span className="text-emerald-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9525444307"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Subject / Medicine Name
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Checking availability for Pan 40"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Message / Special Instructions
                  </label>
                  <textarea
                    rows={4}
                    value={inquiryText}
                    onChange={(e) => setInquiryText(e.target.value)}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition space-x-2 flex items-center justify-center"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <a
                    href={`tel:${STORE_INFO.phone}`}
                    className="py-3.5 px-6 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm text-center transition flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4 text-sky-400" />
                    <span>Call Store</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl space-y-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Interactive Map
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                Find Us in Rajabazar
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Dakshini, Daulatpur Rd, Rajabazar, Jehanabad, Bihar 804408
              </p>
            </div>

            <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner">
              <iframe
                title="J.P. Gupta Medical Store Location Map"
                src={STORE_INFO.googleEmbedMap}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Landmark: Corner of Daulatpur Rd & Rajabazar
              </span>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow transition"
              >
                <span>Open Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
