import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Send, MapPin, ShieldCheck, ArrowRight, Star, HeartPulse, CheckCircle2, Award, Clock, Truck, HelpCircle, ChevronRight, Sparkles, Mail } from 'lucide-react';
import { SEO } from '../components/SEO';
import { STORE_INFO, SERVICES_LIST, REVIEWS_LIST, FAQS_LIST, HEALTH_TIPS } from '../data/storeData';
import { useTheme } from '../context/ThemeContext';

export const Home: React.FC = () => {
  const { openWhatsAppModal } = useTheme();

  return (
    <div className="space-y-16 md:space-y-24 pb-12">
      <SEO
        title="J.P. Gupta Medical Store | Genuine Pharmacy in Jehanabad"
        description="Your trusted medical store in Rajabazar, Jehanabad for 100% genuine medicines, pediatric care, surgical supplies & fast WhatsApp delivery."
      />

      {/* Hero Banner Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 px-4 overflow-hidden">
        {/* Background Image with Dark & Glass Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=1920"
            alt="J.P. Gupta Medical Store Banner"
            className="w-full h-full object-cover object-center filter brightness-[0.35]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-teal-950/70 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full text-center lg:text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-white">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 text-[#0A8F6A] font-extrabold text-xs uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#0A8F6A]" />
              <span>Trusted Healthcare Partner • Serving Since 1998</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Your Trusted Medical Store for <span className="text-[#0A8F6A] font-black">Genuine Medicines</span> & Healthcare.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care, and daily medical essentials at affordable prices in Jehanabad.
            </p>

            {/* Hero Buttons */}
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="inline-flex items-center px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base shadow-xl transition transform hover:-translate-y-0.5 space-x-2 border border-slate-700"
              >
                <Phone className="w-5 h-5 text-[#0A8F6A]" />
                <span>Call: {STORE_INFO.phone}</span>
              </a>

              <button
                onClick={() => openWhatsAppModal()}
                className="inline-flex items-center px-7 py-3.5 rounded-xl bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold text-base shadow-lg shadow-[#0A8F6A]/30 transition transform hover:-translate-y-0.5 space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Order on WhatsApp</span>
              </button>

              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3.5 rounded-xl bg-white text-slate-800 hover:border-[#0A8F6A] font-bold text-base border-2 border-slate-200 transition space-x-2"
              >
                <MapPin className="w-5 h-5 text-[#0A8F6A]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Quick Badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300 font-medium">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#0A8F6A]" />
                <span>100% Genuine Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#0A8F6A]" />
                <span>Cold Chain Storage</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#0A8F6A]" />
                <span>Same-Day Local Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Floating Card Preview */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 dark:bg-slate-900/95 rounded-[32px] p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-2xl space-y-6 text-left relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-[#0A8F6A] flex items-center justify-center font-bold">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-[#0A8F6A] dark:bg-emerald-950 dark:text-emerald-300">
                  Storefront & Stock
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Quick Medicine Availability
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Search 10,000+ SKUs or send your prescription photo directly
                </p>
              </div>

              <div className="space-y-3">
                <Link
                  to="/services"
                  className="w-full py-3.5 px-4 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white text-sm font-semibold flex items-center justify-between transition group"
                >
                  <span>Search Live Stock Checker</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0A8F6A]" />
                </Link>

                <button
                  onClick={() => openWhatsAppModal()}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#0A8F6A] hover:bg-[#087a5a] text-white text-sm font-semibold flex items-center justify-between transition group shadow-lg shadow-[#0A8F6A]/20"
                >
                  <span>Upload Doctor Prescription</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>📍 Rajabazar, Jehanabad</span>
                <span className="font-bold text-[#0A8F6A]">8:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 2: Short About Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400">
              About J.P. Gupta Medical Store
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Your Health & Trust Are Our Highest Priorities
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Established in 1998 in Rajabazar, Jehanabad, J.P. Gupta Medical Store has served thousands of families with uncompromised commitment to authentic medicines, friendly dosage advice, and fair pricing.
            </p>
            <div className="pt-2 flex items-center space-x-4">
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold text-sm transition space-x-2 shadow-md shadow-[#0A8F6A]/20"
              >
                <span>Read Full Story</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900">
              <span className="text-3xl font-black text-[#0A8F6A] dark:text-emerald-400">28+</span>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">Years Experience</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
              <span className="text-3xl font-black text-slate-900 dark:text-white">10k+</span>
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 mt-1">SKUs in Stock</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
              <span className="text-3xl font-black text-[#0A8F6A] dark:text-emerald-400">100%</span>
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 mt-1">Genuine Medicines</p>
            </div>
            <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900">
              <span className="text-3xl font-black text-amber-600 dark:text-amber-400">24/7</span>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">Emergency Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Services (Max 6 Preview) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400">
              Our Core Offerings
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Featured Pharmacy Services
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center text-sm font-bold text-[#0A8F6A] dark:text-emerald-400 hover:underline space-x-1"
          >
            <span>View All Services & Stock</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.slice(0, 6).map((s) => (
            <div
              key={s.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-[#0A8F6A] shadow-sm hover:shadow-md transition-colors duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-[#0A8F6A] flex items-center justify-center font-bold mb-4 group-hover:bg-[#0A8F6A] group-hover:text-white transition-colors">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {s.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0A8F6A] dark:text-emerald-400">
                  {s.category}
                </span>
                <Link
                  to="/services"
                  className="text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-[#0A8F6A] transition flex items-center space-x-1"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="bg-emerald-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
              Why Jehanabad Trusts Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-1">
              Uncompromising Healthcare Quality
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
              <ShieldCheck className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="text-lg font-bold mb-1">100% Genuine Medicines</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct procurement from licensed drug manufacturers with full batch traceability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
              <Award className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="text-lg font-bold mb-1">Certified Pharmacists</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Qualified guidance on dosage, drug interactions, and storage directions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
              <Truck className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="text-lg font-bold mb-1">Fast WhatsApp Delivery</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Upload your prescription for rapid local store dispatch across Jehanabad.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
              <Clock className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="text-lg font-bold mb-1">Cold Chain Preservation</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Refrigerated storage for insulin, vaccines, and sensitive biological vials.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
              <HeartPulse className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="text-lg font-bold mb-1">Fair Discounted MRPs</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Transparent and affordable rates for monthly chronic illness refills.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
              <Send className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="text-lg font-bold mb-1">24/7 WhatsApp Response</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Emergency medicine query support anytime at your fingertips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Customer Reviews Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Real Customer Voices
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            Trusted by Families in Jehanabad
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS_LIST.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-md space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-slate-400">{rev.date}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                "{rev.comment}"
              </p>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">{rev.author}</span>
                  <span className="text-slate-400 text-[11px]">{rev.location}</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[10px] font-bold">
                  Verified Local Buyer
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: FAQ Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Helpful Guidance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                Frequently Asked Questions
              </h2>
            </div>
            <Link
              to="/contact"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center space-x-1"
            >
              <span>Have More Questions? Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS_LIST.slice(0, 4).map((faq) => (
              <div key={faq.id} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 space-y-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-start space-x-2">
                  <HelpCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Health Tips Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Wellness Awareness
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Latest Health & Medicine Tips
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HEALTH_TIPS.map((tip) => (
            <div
              key={tip.id}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 overflow-hidden shadow-md flex flex-col justify-between"
            >
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-44 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 uppercase">{tip.category}</span>
                    <span>{tip.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3">
                    {tip.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>By {tip.author}</span>
                  <span className="font-semibold text-slate-600 dark:text-slate-300">{tip.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 8: Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-teal-900 to-emerald-900 text-white text-center max-w-4xl mx-auto space-y-4 shadow-xl">
          <Mail className="w-10 h-10 text-emerald-300 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Subscribe for Health Updates & Stock Alerts
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Get seasonal health advice, medicine stock updates, and senior citizen discount notices delivered directly to your inbox.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing to J.P. Gupta Medical Store updates!');
            }}
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 flex-1"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};
