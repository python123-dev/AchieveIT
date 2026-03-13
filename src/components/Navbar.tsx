import { motion } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="AchieveIT Logo" className="h-12 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-slate-900 leading-none">
                ACHIEVE IT
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase mt-1">
                Software Training Institute
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#courses" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Courses</a>
            <a href="#reviews" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Reviews</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-slate-200">
              <Phone className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-slate-900">097890 29127</span>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 px-4 py-6 shadow-xl"
        >
          <div className="flex flex-col gap-4">
            <a href="#home" className="text-base font-medium text-slate-900" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#courses" className="text-base font-medium text-slate-900" onClick={() => setIsOpen(false)}>Courses</a>
            <a href="#reviews" className="text-base font-medium text-slate-900" onClick={() => setIsOpen(false)}>Reviews</a>
            <a href="#contact" className="text-base font-medium text-slate-900" onClick={() => setIsOpen(false)}>Contact</a>
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-100">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="text-base font-semibold text-slate-900">097890 29127</span>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
