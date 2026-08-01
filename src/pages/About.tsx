import React from 'react';
import { SEO } from '../components/SEO';
import { STORE_INFO, STORE_TIMELINE } from '../data/storeData';
import { ShieldCheck, Heart, Award, Target, Eye, Sparkles, Building2, CheckCircle2, Phone, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const About: React.FC = () => {
  const { openWhatsAppModal } = useTheme();

  return (
    <div className="space-y-16 py-8">
      <SEO
        title="About Us | J.P. Gupta Medical Store Rajabazar Jehanabad"
        description="Learn about J.P. Gupta Medical Store's 28-year legacy in Jehanabad, Bihar. Founded in 1998 with a mission to deliver 100% genuine medicines & healthcare supplies."
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 rounded-b-3xl">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100/90 text-[#0A8F6A] font-extrabold text-xs uppercase tracking-widest border border-emerald-500/30">
            Our Legacy of Trust Since 1998
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About {STORE_INFO.name}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Dedicated to serving Rajabazar & Jehanabad with genuine pharmaceutical products, certified cold-chain preservation, and compassionate care.
          </p>
        </div>
      </section>

      {/* Business Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400">
              Our Journey & Roots
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Built on Unwavering Authenticity & Community Service
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              J.P. Gupta Medical Store was founded by Mr. J.P. Gupta in 1998 at Rajabazar, Jehanabad, Bihar. At a time when finding reliable, non-spurious medicines in regional towns was a challenge, Mr. Gupta established a clear oath: <em>"Every single drug sold at this counter will be 100% genuine, stored properly, and priced fairly."</em>
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Over the last two decades, our single-store counter has grown into one of Jehanabad's most trusted healthcare destinations, carrying over 5,000+ active formulations across chronic cardiac, diabetic, orthopedic, pediatric, surgical, and wellness categories.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900">
                <CheckCircle2 className="w-5 h-5 text-[#0A8F6A] dark:text-emerald-400 mb-1" />
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Direct Distributors</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Sourced directly from pharma companies</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <CheckCircle2 className="w-5 h-5 text-[#0A8F6A] dark:text-emerald-400 mb-1" />
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Certified Storage</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Refrigerated insulin & biologicals</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=1000"
                alt="Store Interior"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent text-white">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Storefront Overview</span>
                <p className="text-sm font-semibold">Dakshini, Daulatpur Rd, Rajabazar, Jehanabad, Bihar 804408</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="bg-slate-100 dark:bg-slate-900/60 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Mission, Vision & Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Mission */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                To ensure every household in Jehanabad has immediate, affordable access to 100% authentic medicines, surgical supplies, and healthcare equipment accompanied by certified pharmacist advice.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                To bridge modern digital healthcare conveniences (WhatsApp prescription ordering, stock tracking) with the warmth and trust of regional community pharmacy care.
              </p>
            </div>

            {/* Values */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Core Values</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Integrity in sourcing, transparency in pricing, strict adherence to cold-chain safety, and utmost empathy toward every patient visiting our counter.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Owner Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-emerald-500/20">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Founder & Pharmacist Desk
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              "When It Comes to Health, There Can Be No Shortcut"
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed italic">
              "When someone comes to a medical store, they are looking for hope, healing, and absolute confidence that the medicine in their hands will work. For 28 years, my family and I have made it our personal duty to maintain 100% genuine stock direct from company depots. We treat every customer in Jehanabad like our own family member."
            </p>
            <div className="pt-2">
              <span className="font-bold text-emerald-300 text-base block">— J.P. Gupta</span>
              <span className="text-xs text-slate-400">Founder & Chief Pharmacist, J.P. Gupta Medical Store</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-3">
            <Building2 className="w-12 h-12 text-emerald-400" />
            <span className="text-sm font-bold">Visit Our Store Front</span>
            <span className="text-xs text-slate-300">Dakshini, Daulatpur Rd, Rajabazar, Jehanabad</span>
            <button
              onClick={() => openWhatsAppModal()}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Message Founder on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* Business Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Our Evolution
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            28 Years Timeline of Service
          </h2>
        </div>

        <div className="relative border-l-2 border-emerald-500/30 ml-4 md:ml-32 space-y-8">
          {STORE_TIMELINE.map((t, idx) => (
            <div key={idx} className="relative pl-6 md:pl-8 group">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-900 group-hover:scale-125 transition-transform" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">
                  {t.year}
                </span>
                <span className="text-base font-bold text-slate-900 dark:text-white">
                  {t.title}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
