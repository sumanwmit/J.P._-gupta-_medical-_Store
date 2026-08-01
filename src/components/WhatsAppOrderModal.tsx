import React, { useState, useEffect } from 'react';
import { X, Send, Phone, Upload, CheckCircle2, AlertCircle, FileText, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { STORE_INFO } from '../data/storeData';

export const WhatsAppOrderModal: React.FC = () => {
  const { isWhatsAppModalOpen, closeWhatsAppModal, selectedMedicineForOrder } = useTheme();

  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineName, setMedicineName] = useState('');
  const [hasPrescription, setHasPrescription] = useState<boolean>(false);
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [prescriptionFileName, setPrescriptionFileName] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('Morning (8 AM - 12 PM)');
  const [message, setMessage] = useState('');
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    if (selectedMedicineForOrder) {
      setMedicineName(selectedMedicineForOrder);
    }
  }, [selectedMedicineForOrder]);

  if (!isWhatsAppModalOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPrescriptionFile(file);
      setPrescriptionFileName(file.name);
      setHasPrescription(true);
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim() || !medicineName.trim()) {
      setValidationError('Please fill in your Name, Phone Number, and Medicine Required.');
      return;
    }
    setValidationError('');

    const formattedMessage = `Hello *${STORE_INFO.name}*,
I would like to place a Medicine Order via Website.

📋 *CUSTOMER DETAILS*
• *Name:* ${customerName.trim()}
• *Phone:* ${phone.trim()}
${email.trim() ? `• *Email:* ${email.trim()}\n` : ''}• *Delivery Address:* ${address.trim() || 'Store Pickup'}

💊 *MEDICINE REQUIRED*
${medicineName.trim()}

📑 *PRESCRIPTION STATUS*
• *Attached:* ${hasPrescription ? `Yes (${prescriptionFileName || 'Image Ready'})` : 'No / Not Required'}

⏰ *PREFERRED DELIVERY TIME*
• ${deliveryTime}

📝 *NOTES / SPECIAL REQUESTS*
${message.trim() || 'N/A'}`;

    const encodedMsg = encodeURIComponent(formattedMessage);
    const waUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodedMsg}`;
    
    window.open(waUrl, '_blank');
    closeWhatsAppModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 p-6 md:p-8">
        
        {/* Close Button */}
        <button
          onClick={closeWhatsAppModal}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-2xl">
            <Send className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              WhatsApp Medicine Order
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Quick order & prescription upload for J.P. Gupta Medical Store
            </p>
          </div>
        </div>

        {validationError && (
          <div className="mb-4 p-3 rounded-xl bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 text-sm flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        <form onSubmit={handleSendWhatsApp} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Customer Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                Customer Name <span className="text-emerald-600">*</span>
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Rajesh Kumar"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                Mobile Number <span className="text-emerald-600">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 9876543210"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. rajesh@gmail.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
              />
            </div>

            {/* Delivery Time */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1 flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Preferred Delivery / Pickup</span>
              </label>
              <select
                value={deliveryTime}
                onChange={(e) => setDeliveryTime(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
              >
                <option value="Immediate Express (Within 1 Hr)">Immediate Express (Within 1 Hr)</option>
                <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                <option value="Store Pickup Ready">Store Pickup Ready</option>
              </select>
            </div>
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
              Full Delivery Address / Landmark in Jehanabad
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="e.g. House #12, Near Daulatpur Rd Corner, Rajabazar"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
            />
          </div>

          {/* Medicine Required */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
              Medicine Required & Quantity <span className="text-emerald-600">*</span>
            </label>
            <textarea
              rows={3}
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              placeholder="e.g. Dolo 650 (2 strips), Pan 40 (1 strip), Omron BP Monitor"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
            />
          </div>

          {/* Prescription Upload Option */}
          <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center space-x-2">
                <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Doctor's Prescription</span>
              </span>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasPrescription}
                  onChange={(e) => setHasPrescription(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-emerald-600"></div>
                <span className="ml-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
                  {hasPrescription ? 'Yes, I have prescription' : 'No prescription'}
                </span>
              </label>
            </div>

            {hasPrescription && (
              <div className="pt-2">
                <label className="flex items-center justify-center px-4 py-3 rounded-xl border-2 border-dashed border-emerald-300 dark:border-emerald-700 bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-slate-700 cursor-pointer transition">
                  <Upload className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">
                    {prescriptionFileName ? `File selected: ${prescriptionFileName}` : 'Click to attach Prescription Image / PDF'}
                  </span>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                {prescriptionFileName && (
                  <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400 flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Attached! When WhatsApp opens, you can send this prescription image in chat.</span>
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Message / Additional notes */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
              Additional Message or Instructions
            </label>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. Please send doctor invoice along with delivery."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
            />
          </div>

          {/* Modal Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base shadow-lg shadow-emerald-600/25 transition transform active:scale-95 space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={`tel:${STORE_INFO.phone}`}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-base shadow-lg shadow-sky-600/25 transition transform active:scale-95 space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
