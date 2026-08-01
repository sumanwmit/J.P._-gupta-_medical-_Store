import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingActionButtons } from '../components/FloatingActionButtons';
import { WhatsAppOrderModal } from '../components/WhatsAppOrderModal';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingActionButtons />
      <WhatsAppOrderModal />
    </div>
  );
};
