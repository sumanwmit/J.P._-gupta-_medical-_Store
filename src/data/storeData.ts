export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  popularItems: string[];
  image: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'shelves' | 'devices' | 'exterior' | 'surgical';
  imageUrl: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  image: string;
  author: string;
}

export const STORE_INFO = {
  name: "J.P. Gupta Medical Store",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  owner: "J.P. Gupta & Family",
  establishedYear: "1998",
  phone: "9525444307",
  phoneFormatted: "+91 9525444307",
  whatsappNumber: "919525444307",
  address: "Dakshini, Daulatpur Rd, Rajabazar, Jehanabad, Bihar 804408",
  landmark: "Near Rajabazar Main Chowk & Daulatpur Road Corner",
  city: "Jehanabad",
  state: "Bihar",
  pincode: "804408",
  googleMapsUrl: "https://maps.google.com/?q=Dakshini+Daulatpur+Rd+Rajabazar+Jehanabad+Bihar+804408",
  googleEmbedMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.232!2d84.982!3d25.215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2cc8123456789%3A0x123456789abcdef!2sDaulatpur%20Rd%2C%20Rajabazar%2C%20Jehanabad%2C%20Bihar%20804408!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  email: "contact@jpguptamedical.com",
  workingHours: [
    { days: "Monday - Saturday", hours: "8:00 AM - 10:00 PM" },
    { days: "Sunday", hours: "8:30 AM - 9:00 PM" },
    { days: "Emergency WhatsApp Support", hours: "24/7 Available" }
  ],
  usp: [
    "100% Genuine Medicines Direct from Authorized Distributors",
    "Qualified Pharmacist Assistance & Dosage Guidance",
    "Fast Home & Storefront WhatsApp Order Dispatch",
    "Affordable MRP Discounts & Special Senior Citizen Offers",
    "Temperature Controlled Storage for Insulin & Vaccines",
    "Wide Range of Surgical, Baby Care & Healthcare Equipment"
  ],
  socialLinks: {
    whatsapp: "https://wa.me/919525444307",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    googleBusiness: "https://maps.google.com/?q=J.P.+Gupta+Medical+Store+Jehanabad"
  }
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "prescription-medicines",
    title: "Prescription Medicines",
    category: "Pharmacy",
    shortDesc: "Authentic, batch-verified prescription drugs from top pharmaceutical brands.",
    fullDesc: "We store and supply 100% genuine prescription medications for cardiology, diabetes, neurology, gastroenterology, orthopedics, and general medicine. All medicines are sourced directly from authorized company distributors with strict temperature control.",
    iconName: "Pill",
    features: ["Batch Verified & Expiry Checked", "Insulin Cold Chain Maintained", "Discounts on Monthly Refills", "Expert Pharmacist Review"],
    popularItems: ["Dolo 650", "Pan 40", "Telma 40", "Glycomet 500", "Montair LC", "Azithral 500"],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "otc-medicines",
    title: "OTC & Daily Wellness Medicines",
    category: "General Health",
    shortDesc: "Over-the-counter pain relievers, cold & flu relief, antacids, and digestive aids.",
    fullDesc: "Instant access to reliable OTC formulations for common ailments like fever, pain, indigestion, seasonal allergies, throat infections, skin rashes, and first aid requirements.",
    iconName: "HeartPulse",
    features: ["Instant OTC Dispensing", "Cold & Flu Care Kits", "Topical Pain Relief Gels", "First Aid Essentials"],
    popularItems: ["Celin 500", "Volini Gel", "Cremaffin", "Crocin Pain Relief", "Eno Sachet", "Disprin"],
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "health-devices",
    title: "Health Devices & Monitors",
    category: "Equipment",
    shortDesc: "Digital BP monitors, blood glucose meters, nebulizers, thermometry & oximeters.",
    fullDesc: "Empower your family with accurate home health monitoring equipment from trusted brands like Omron, Accu-Chek, Dr. Morepen, and BPL. Comes with warranty guidance and demo support.",
    iconName: "Activity",
    features: ["Omron & Accu-Chek Authorized Stockist", "Demo & Usage Guidance", "Replacement Warranty Support", "Free Blood Pressure Check at Store"],
    popularItems: ["Omron HEM-7120 BP Monitor", "Accu-Chek Active Strips", "Dr. Morepen Nebulizer", "Pulse Oximeter"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "baby-care",
    title: "Baby Care & Maternity Essentials",
    category: "Mom & Baby",
    shortDesc: "Gentle baby wipes, diapers, pediatric formula, baby lotions & feeding accessories.",
    fullDesc: "Complete baby care solutions from trusted baby brands including Sebamed, Pampers, Himalaya Baby, Johnson's, and Lactogen. Hypoallergenic and pediatrician recommended products.",
    iconName: "Baby",
    features: ["Pediatrician Approved Skincare", "Premium Diapering Brands", "Infant Formula & Cereals", "Sterilized Feeding Bottles"],
    popularItems: ["Pampers Baby Dry Diapers", "Sebamed Gentle Wash", "Himalaya Baby Lotion", "Cerelac Stage 1"],
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "medical-surgical",
    title: "Medical & Surgical Supplies",
    category: "Surgical",
    shortDesc: "Sterile dressings, bandages, syringes, IV sets, orthedic supports & surgical gloves.",
    fullDesc: "High quality surgical disposables and orthopedic braces for patient home care, post-surgery recovery, and clinical needs in Rajabazar, Jehanabad.",
    iconName: "Stethoscope",
    features: ["Sterile Bandages & Gauze Packs", "Knee & Back Orthopedic Braces", "IV Fluids & Syringes", "Surgical Gloves & Masks"],
    popularItems: ["Cotton Roll 500g", "Crepe Bandage", "Micropore Tape", "Knee Support Cap", "Sterile Syringes"],
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "supplements-nutrition",
    title: "Supplements & Nutrition",
    category: "Wellness",
    shortDesc: "Multivitamins, calcium tablets, protein powders, immunity boosters & herbal syrups.",
    fullDesc: "Nutritional supplements tailored for seniors, adults, expecting mothers, and athletes. Boost your immune health and energy levels safely.",
    iconName: "ShieldCheck",
    features: ["100% Genuine Protein Powders", "Calcium & Vitamin D3 Combos", "Diabetic Friendly Supplements", "Herbal & Ayurvedic Tonics"],
    popularItems: ["Revital H Capsules", "Ensure Diabetes Care", "Limcee 500", "Becosules Z", "Shelcal 500"],
    image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&q=80&w=800"
  }
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Rakesh Kumar Sharma",
    location: "Daulatpur Road, Jehanabad",
    rating: 5,
    date: "10 Days ago",
    comment: "J.P. Gupta Medical Store is the most reliable pharmacy in Rajabazar. I always get 100% genuine medicines for my father's diabetes and cardiac condition at reasonable rates. The staff is polite and helpful.",
    verified: true
  },
  {
    id: "rev-2",
    author: "Sunita Devi",
    location: "Dakshini, Jehanabad",
    rating: 5,
    date: "3 Weeks ago",
    comment: "Excellent service! I messaged my prescription on WhatsApp and my medicines were packed and ready when I reached the store. Genuine products and warm behavior by Mr. J.P. Gupta.",
    verified: true
  },
  {
    id: "rev-3",
    author: "Dr. Alok Verma",
    location: "Rajabazar Main Market",
    rating: 5,
    date: "1 Month ago",
    comment: "As a practicing healthcare worker in Jehanabad, I regularly recommend J.P. Gupta Medical Store to patients. Their cold chain storage for insulin and vaccines is impeccably maintained.",
    verified: true
  },
  {
    id: "rev-4",
    author: "Manish Kumar Sinha",
    location: "Court Area, Jehanabad",
    rating: 5,
    date: "2 Months ago",
    comment: "Very neat store with all emergency medical items, blood pressure monitors, and baby care products available. Price discount is given honestly without asking.",
    verified: true
  }
];

export const FAQS_LIST: FAQItem[] = [
  {
    id: "faq-1",
    question: "How can I order medicines on WhatsApp from J.P. Gupta Medical Store?",
    answer: "Simply click the WhatsApp button on our website, upload a clear photo of your prescription or type out the required medicine names along with your address. Our team will verify stock, provide the total price, and confirm dispatch or store pickup.",
    category: "Ordering"
  },
  {
    id: "faq-2",
    question: "Are all medicines at J.P. Gupta Medical Store genuine?",
    answer: "Yes, 100%. We source every single medicine, supplement, and surgical supply directly from government-licensed pharmaceutical manufacturers and official company distributors. We strict maintain batch codes and expiry logs.",
    category: "Quality"
  },
  {
    id: "faq-3",
    question: "Do you store temperature-sensitive medicines like insulin in a refrigerator?",
    answer: "Absolutely. We have dedicated medical-grade refrigeration units with 24/7 power backup to store insulin vials, vaccines, eye drops, and biological injections under strictly monitored 2°C to 8°C temperature.",
    category: "Storage"
  },
  {
    id: "faq-4",
    question: "Where is J.P. Gupta Medical Store located in Jehanabad?",
    answer: "We are located at Dakshini, Daulatpur Rd, Rajabazar, Jehanabad, Bihar 804408, near Daulatpur Road corner in the heart of Rajabazar.",
    category: "Location"
  },
  {
    id: "faq-5",
    question: "Can I check medicine stock online before visiting?",
    answer: "Yes! Use our interactive Medicine Stock Checker tool on the Services page to search for medicine names, check live stock availability, MRP, and send an instant WhatsApp order.",
    category: "Stock Checker"
  },
  {
    id: "faq-6",
    question: "What payment methods do you accept?",
    answer: "We accept Cash, UPI (PhonePe, Google Pay, Paytm, BHIM), Debit/Credit Cards, and online bank transfers for convenience.",
    category: "Payment"
  }
];

export const GALLERY_PHOTOS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Store Exterior & Signage View",
    category: "exterior",
    imageUrl: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=1000",
    description: "Front entrance of J.P. Gupta Medical Store on Daulatpur Road, Rajabazar, Jehanabad."
  },
  {
    id: "gal-2",
    title: "Organized Medicine Shelves",
    category: "shelves",
    imageUrl: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=1000",
    description: "Systematically categorized medicine rows arranged alphabetically and therapeutic-wise."
  },
  {
    id: "gal-3",
    title: "Clean Modern Store Interior",
    category: "interior",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=1000",
    description: "Air-conditioned counter area designed for comfortable customer consulting."
  },
  {
    id: "gal-4",
    title: "Health Devices & Monitors Display",
    category: "devices",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
    description: "Authorized digital BP monitors, glucometers, nebulizers, and pulse oximeters."
  },
  {
    id: "gal-5",
    title: "Surgical & Hospital Essentials Counter",
    category: "surgical",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1000",
    description: "Sterile dressings, bandages, orthopedic supports, and surgical items section."
  },
  {
    id: "gal-6",
    title: "Baby Care & Nutrition Shelf",
    category: "shelves",
    imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=1000",
    description: "Pediatrician-recommended baby washes, diaper packs, and infant formula products."
  }
];

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: "tip-1",
    title: "How to Safely Store Medicines at Home in Hot Weather",
    category: "Medicine Safety",
    date: "July 24, 2026",
    readTime: "3 min read",
    summary: "High humidity and summer heat can degrade tablet efficacy. Learn proper home medicine storage rules.",
    content: "Keep medicines in a cool, dry place away from direct sunlight and kitchen heat. Insulin vials and syrup suspensions must be stored inside the main refrigerator shelf (never in the freezer!). Always check expiration dates before consumption.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    author: "J.P. Gupta (Lead Pharmacist)"
  },
  {
    id: "tip-2",
    title: "Essential Tips for Accurate Blood Pressure Measurement at Home",
    category: "Home Care",
    date: "July 12, 2026",
    readTime: "4 min read",
    summary: "Simple steps to avoid false high readings when using a digital upper arm BP monitor.",
    content: "Sit comfortably with back supported for 5 minutes before taking a reading. Place the cuff on bare upper arm at heart level. Do not speak or drink tea/coffee right before measurement. Record 2 consecutive readings 2 minutes apart.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    author: "Jehanabad Healthcare Desk"
  },
  {
    id: "tip-3",
    title: "Managing Seasonal Monsoon Infections in Jehanabad",
    category: "Preventive Care",
    date: "June 28, 2026",
    readTime: "3 min read",
    summary: "Prevent vector-borne fever, water contamination, and skin fungal issues with proactive habits.",
    content: "Boil drinking water thoroughly, keep surroundings clean to prevent mosquito breeding, and maintain personal hygiene. Consult your doctor or pharmacist promptly if you experience persistent high fever or chills.",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800",
    author: "J.P. Gupta Medical Editorial"
  }
];

export const STORE_TIMELINE = [
  { year: "1998", title: "Establishment in Rajabazar", description: "J.P. Gupta Medical Store opened its doors in Rajabazar, Jehanabad, with a core pledge of 100% genuine medicines." },
  { year: "2008", title: "Expansion into Surgical Supplies", description: "Added dedicated surgical disposables, hospital items, and orthopedic support braces to serve regional clinics." },
  { year: "2016", title: "Cold Chain Modernization", description: "Installed medical-grade refrigeration units with backup generators to safeguard temperature-sensitive insulins and vaccines." },
  { year: "2021", title: "WhatsApp Ordering Service", description: "Pioneered fast WhatsApp prescription ordering and local home delivery for senior citizens in Jehanabad." },
  { year: "2026", title: "Digital Inventory & Stock Checker", description: "Launched our full online portal and live stock checker to allow patients instant medicine search before store visits." }
];
