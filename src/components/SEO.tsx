import React, { useEffect } from 'react';
import { STORE_INFO } from '../data/storeData';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
  ogImage?: string;
  schemaType?: 'LocalBusiness' | 'Pharmacy' | 'FAQPage' | 'WebPage';
  faqs?: Array<{ question: string; answer: string }>;
  breadcrumbs?: Array<{ name: string; item: string }>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl = window.location.href,
  keywords = "J.P. Gupta Medical Store, pharmacy in Jehanabad, genuine medicines Rajabazar, medical shop Bihar",
  ogImage = "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=1200",
  faqs,
  breadcrumbs
}) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | ${STORE_INFO.name}`;

    // Helper to update meta tag
    const updateMeta = (name: string, content: string, attrName = 'name') => {
      let element = document.querySelector(`meta[${attrName}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('keywords', keywords);

    // Open Graph
    updateMeta('og:title', `${title} | ${STORE_INFO.name}`, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:image', ogImage, 'property');
    updateMeta('og:url', canonicalUrl, 'property');
    updateMeta('og:type', 'website', 'property');

    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image', 'name');
    updateMeta('twitter:title', title, 'name');
    updateMeta('twitter:description', description, 'name');
    updateMeta('twitter:image', ogImage, 'name');

    // Canonical link
    let canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', canonicalUrl);

    // Dynamic JSON-LD injection
    const existingSchemas = document.querySelectorAll('script[data-type="json-ld-seo"]');
    existingSchemas.forEach(s => s.remove());

    // 1. LocalBusiness / Pharmacy Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "name": STORE_INFO.name,
      "image": ogImage,
      "@id": "https://jpguptamedical.com/#pharmacy",
      "url": canonicalUrl,
      "telephone": STORE_INFO.phone,
      "priceRange": "₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dakshini, Daulatpur Rd, Rajabazar",
        "addressLocality": "Jehanabad",
        "addressRegion": "Bihar",
        "postalCode": STORE_INFO.pincode,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.215,
        "longitude": 84.982
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Sunday"],
          "opens": "08:30",
          "closes": "21:00"
        }
      ],
      "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, PhonePe, Google Pay",
      "currenciesAccepted": "INR"
    };

    const scriptLocal = document.createElement('script');
    scriptLocal.type = 'application/ld+json';
    scriptLocal.setAttribute('data-type', 'json-ld-seo');
    scriptLocal.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(scriptLocal);

    // 2. FAQ Schema if present
    if (faqs && faqs.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      };
      const scriptFaq = document.createElement('script');
      scriptFaq.type = 'application/ld+json';
      scriptFaq.setAttribute('data-type', 'json-ld-seo');
      scriptFaq.text = JSON.stringify(faqSchema);
      document.head.appendChild(scriptFaq);
    }

    // 3. Breadcrumb Schema if present
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((b, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": b.name,
          "item": b.item
        }))
      };
      const scriptBc = document.createElement('script');
      scriptBc.type = 'application/ld+json';
      scriptBc.setAttribute('data-type', 'json-ld-seo');
      scriptBc.text = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(scriptBc);
    }
  }, [title, description, canonicalUrl, keywords, ogImage, faqs, breadcrumbs]);

  return null;
};
