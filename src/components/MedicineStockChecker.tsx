import React, { useState, useMemo } from 'react';
import { Search, CheckCircle2, AlertTriangle, XCircle, ShoppingBag, Filter, RefreshCw } from 'lucide-react';
import stockDataRaw from '../data/medicineStock.json';
import { useTheme } from '../context/ThemeContext';

export interface MedicineStockItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock' | string;
  description: string;
}

const stockData = stockDataRaw as MedicineStockItem[];

export const MedicineStockChecker: React.FC = () => {
  const { openWhatsAppModal } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set(stockData.map(item => item.category));
    return ['All', ...Array.from(set)];
  }, []);

  // Filter items based on search query, category, and status
  const filteredStock = useMemo(() => {
    return stockData.filter(item => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchQuery, selectedCategory, selectedStatus]);

  const getStatusBadge = (status: string, qty: number) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600 dark:text-emerald-400" />
            In Stock ({qty} units)
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
            <AlertTriangle className="w-3.5 h-3.5 mr-1 text-amber-600 dark:text-amber-400" />
            Limited Stock ({qty} left)
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
            <XCircle className="w-3.5 h-3.5 mr-1 text-rose-600 dark:text-rose-400" />
            Out of Stock
          </span>
        );
    }
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 p-6 md:p-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-[#0A8F6A] dark:bg-emerald-950 dark:text-emerald-300 uppercase tracking-wider mb-2">
            Stock Availability
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
            Medicine Stock Checker
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Search live store inventory, check MRP & order instantly via WhatsApp
          </p>
        </div>

        <button
          onClick={() => {
            setSearchQuery('');
            setSelectedCategory('All');
            setSelectedStatus('All');
          }}
          className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-[#0A8F6A] dark:hover:text-emerald-400 transition"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Reset Filters</span>
        </button>
      </div>

      {/* Search & Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
        {/* Search Input */}
        <div className="relative md:col-span-6">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search medicine name, brand, or formula (e.g. Dolo, Omron, Paracetamol)..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-[#0A8F6A] focus:outline-none transition shadow-inner"
          />
        </div>

        {/* Category Filter */}
        <div className="relative md:col-span-3">
          <Filter className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-[#0A8F6A] focus:outline-none transition"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div className="relative md:col-span-3">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-[#0A8F6A] focus:outline-none transition"
          >
            <option value="All">All Stock Status</option>
            <option value="Available">Available Only</option>
            <option value="Limited Stock">Limited Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Results Count Bar */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4 px-1">
        <span>Showing <strong>{filteredStock.length}</strong> medicines matching your criteria</span>
        <span className="hidden sm:inline">Updated Daily at J.P. Gupta Medical Store</span>
      </div>

      {/* Medicines Table / Card Grid */}
      {filteredStock.length === 0 ? (
        <div className="py-12 text-center bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 p-8">
          <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
            No medicine found for "{searchQuery}"
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
            Don't worry! We stock thousands of formulations. Click below to request this medicine on WhatsApp and our team will verify availability immediately.
          </p>
          <button
            onClick={() => openWhatsAppModal(searchQuery ? `Special Request: ${searchQuery}` : '')}
            className="mt-4 inline-flex items-center px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs shadow-md transition space-x-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Request "{searchQuery || 'Medicine'}" on WhatsApp</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredStock.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 hover:border-[#0A8F6A] dark:hover:border-emerald-700 transition-all hover:shadow-md"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-700 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-600">
                    {item.brand}
                  </span>
                  {getStatusBadge(item.status, item.availableQuantity)}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#0A8F6A] dark:group-hover:text-emerald-400 transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1 mb-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-medium">MRP Price</span>
                  <span className="text-base font-extrabold text-slate-900 dark:text-white">
                    ₹{item.mrp.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => openWhatsAppModal(`${item.name} (${item.brand}) - ₹${item.mrp}`)}
                  className="inline-flex items-center px-3.5 py-2 rounded-xl bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-semibold text-xs transition shadow-sm space-x-1.5"
                  title="Order via WhatsApp"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 text-center text-xs text-slate-400">
        * Note: Stock quantities are synchronized regularly. Prices are subject to government batch revisions. Valid doctor prescription required for scheduled drugs.
      </div>
    </div>
  );
};
