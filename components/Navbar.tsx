
import React, { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'How it Works', href: '#preview' },
    { name: 'AI Preview', href: '#ai-help' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-700 p-2 rounded-lg shadow-indigo-200 shadow-lg">
            <i className="fas fa-gavel text-white text-lg"></i>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            LegalHelp
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-indigo-700 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#download-section"
            className="bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-800 transition-all shadow-md active:scale-95"
          >
            Download for Android
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900 p-2" onClick={() => setIsOpen(!isOpen)}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 py-8 px-6 flex flex-col gap-6 shadow-2xl animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-slate-800 border-b border-slate-50 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#download-section"
            onClick={() => setIsOpen(false)}
            className="bg-indigo-700 text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-100 text-center"
          >
            Download App (Android)
          </a>
        </div>
      )}
    </nav>
  );
};
