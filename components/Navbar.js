import React, { useState } from 'react';

export const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Contact', href: '#contact' },
  ];

  return React.createElement('nav', {
    className: `fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-200/20 py-3' : 'bg-transparent py-6'}`
  },
    React.createElement('div', { className: 'container mx-auto px-6 flex justify-between items-center' },
      React.createElement('a', { href: '#home', className: 'flex items-center gap-3 group' },
        React.createElement('div', { className: 'bg-indigo-600 p-2 rounded-xl shadow-indigo-200 shadow-lg group-hover:scale-110 transition-transform' },
          React.createElement('i', { className: 'fas fa-balance-scale text-white text-lg' })
        ),
        React.createElement('span', { className: 'text-2xl font-black tracking-tight text-slate-900' }, 'LegalHelp')
      ),
      
      React.createElement('div', { className: 'hidden md:flex items-center gap-8' },
        navLinks.map((link) => 
          React.createElement('a', {
            key: link.name,
            href: link.href,
            className: 'text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase tracking-widest'
          }, link.name)
        ),
        React.createElement('a', {
          href: '#download-section',
          className: 'bg-slate-900 text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl hover:-translate-y-0.5 active:scale-95'
        }, 'Get Android App')
      ),

      React.createElement('button', {
        className: 'md:hidden text-slate-900 p-2 text-2xl',
        onClick: () => setIsOpen(!isOpen)
      },
        React.createElement('i', { className: `fas ${isOpen ? 'fa-times' : 'fa-bars-staggered'}` })
      )
    ),
    
    isOpen && React.createElement('div', {
      className: 'md:hidden fixed inset-x-0 top-[72px] bg-white/95 backdrop-blur-2xl border-b border-slate-100 p-8 flex flex-col gap-6 shadow-2xl animate-fade-in'
    },
      navLinks.map((link) =>
        React.createElement('a', {
          key: link.name,
          href: link.href,
          className: 'text-xl font-black text-slate-800 tracking-tight',
          onClick: () => setIsOpen(false)
        }, link.name)
      ),
      React.createElement('a', {
        href: '#download-section',
        onClick: () => setIsOpen(false),
        className: 'bg-indigo-600 text-white py-5 rounded-2xl font-black text-center shadow-2xl shadow-indigo-200 uppercase tracking-widest text-sm'
      }, 'Download for Android')
    )
  );
};
