import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { MainLayout } from './layouts/MainLayout';
import { HeartPulse } from 'lucide-react';

// Lazy loading the 5 separate React pages as strictly required
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

// Loading Spinner Fallback for Lazy-loaded Pages
const PageLoader: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 space-y-4">
    <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center animate-bounce shadow-lg shadow-emerald-600/30">
      <HeartPulse className="w-7 h-7" />
    </div>
    <p className="text-sm font-extrabold text-slate-700 dark:text-slate-300 tracking-wider uppercase animate-pulse">
      Loading J.P. Gupta Medical Store...
    </p>
  </div>
);

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}
