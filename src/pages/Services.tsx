import React from 'react';
import { SEO } from '../components/SEO';
import { SERVICES_LIST } from '../data/storeData';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { Send, CheckCircle2, ShoppingBag, ShieldAlert, HeartPulse, Stethoscope, Activity, Baby, Pill, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Services: React.FC = () => {
  const { openWhatsAppModal } = useTheme();

  return (
    <div className="space-y-16 py-8">
      <SEO
        title="Pharmacy Services & Medicine Stock Checker | J.P. Gupta Medical Store"
        description="Search live medicine inventory, check MRPs, and explore healthcare categories at J.P. Gupta Medical Store in Rajabazar, Jehanabad."
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 rounded-b-3xl">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100/90 text-[#0A8F6A] font-extrabold text-xs uppercase tracking-widest border border-emerald-500/30">
            Comprehensive Pharmacy Offerings
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Services & Medicine Stock Checker
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Browse our complete range of healthcare categories and search live stock availability at our Rajabazar store.
          </p>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE: Medicine Stock Checker Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicineStockChecker />
      </section>

      {/* Detailed Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400">
            Full Service Spectrum
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Category-Wise Pharmacy Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:border-[#0A8F6A] transition-colors space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-[#0A8F6A] dark:bg-emerald-950 dark:text-emerald-300 uppercase tracking-wider">
                    {service.category}
                  </span>
                  <HeartPulse className="w-6 h-6 text-[#0A8F6A] dark:text-emerald-400" />
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Features list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#0A8F6A] dark:text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Popular items pills */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Popular Stock Formulations
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.popularItems.map((pop, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700"
                      >
                        {pop}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Card CTA */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => openWhatsAppModal(`Inquiry regarding ${service.title}`)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold text-xs shadow-md shadow-[#0A8F6A]/20 transition space-x-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Order {service.title} on WhatsApp</span>
                </button>

                <a
                  href={`tel:9525444307`}
                  className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline"
                >
                  Call Pharmacist Directly
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prescription Notice Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <ShieldAlert className="w-8 h-8 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Prescription Drug Dispensing Notice
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
                Schedule H & H1 prescription drugs (antibiotics, cardiac medicines, psychotropic drugs) will only be dispensed upon presentation of a valid doctor's prescription.
              </p>
            </div>
          </div>

          <button
            onClick={() => openWhatsAppModal('Uploading Doctor Prescription')}
            className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition flex-shrink-0"
          >
            Upload Prescription Now
          </button>
        </div>
      </section>

    </div>
  );
};
