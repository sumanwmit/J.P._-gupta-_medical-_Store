import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isWhatsAppModalOpen: boolean;
  openWhatsAppModal: (initialMedicine?: string) => void;
  closeWhatsAppModal: () => void;
  selectedMedicineForOrder: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('jpgupta_theme');
    return saved ? saved === 'dark' : false;
  });

  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [selectedMedicineForOrder, setSelectedMedicineForOrder] = useState('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('jpgupta_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('jpgupta_theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const openWhatsAppModal = (initialMedicine: string = '') => {
    setSelectedMedicineForOrder(initialMedicine);
    setIsWhatsAppModalOpen(true);
  };

  const closeWhatsAppModal = () => {
    setIsWhatsAppModalOpen(false);
    setSelectedMedicineForOrder('');
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        isWhatsAppModalOpen,
        openWhatsAppModal,
        closeWhatsAppModal,
        selectedMedicineForOrder
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
