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
    className: `fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-6'}`
  },
    React.createElement('div', { className: 'container mx-auto px-6 flex justify-between items-center' },
      React.createElement('a', { href: '#home', className: 'flex items-center gap-2 group' },
        React.createElement('div', { className: 'bg-indigo-600 p-2 rounded-xl shadow-lg group-hover:rotate-12 transition-transform' },
          React.createElement('i', { className: 'fas fa-balance-scale text-white text-lg' })
        ),
        React.createElement('span', { className: 'text-2xl font-extrabold tracking-tighter text-slate-900 uppercase' }, 'LegalHelp')
      ),
      
      React.createElement('div', { className: 'hidden md:flex items-center gap-10' },
        navLinks.map((link) => 
          React.createElement('a', {
            key: link.name,
            href: link.href,
            className: 'text-[13px] font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase tracking-[0.1em]'
          }, link.name)
        ),
        React.createElement('a', {
          href: '#download-section',
          className: 'bg-slate-900 text-white px-7 py-3 rounded-full text-[11px] font-extrabold uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl active:scale-95'
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
      className: 'md:hidden fixed inset-x-0 top-[72px] bg-white border-b border-slate-100 p-10 flex flex-col gap-8 shadow-2xl animate-fade-in h-screen z-40'
    },
      navLinks.map((link) =>
        React.createElement('a', {
          key: link.name,
          href: link.href,
          className: 'text-3xl font-black text-slate-900 tracking-tighter',
          onClick: () => setIsOpen(false)
        }, link.name)
      ),
      React.createElement('a', {
        href: '#download-section',
        onClick: () => setIsOpen(false),
        className: 'bg-indigo-600 text-white py-6 rounded-2xl font-black text-center shadow-xl uppercase tracking-widest text-sm'
      }, 'Download for Android')
    )
  );
};
