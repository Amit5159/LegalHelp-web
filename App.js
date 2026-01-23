import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero.js';
import { Features } from './components/Features.js';
import { AppPreview } from './components/AppPreview.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';
import { Navbar } from './components/Navbar.js';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // iOS Detection and Redirect Logic
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
      window.location.replace("https://legalhelp24.in");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return React.createElement('div', { className: 'min-h-screen flex flex-col bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900' },
    React.createElement(Navbar, { scrolled: scrolled }),
    React.createElement('main', { className: 'flex-grow' },
      React.createElement('section', { id: 'home' }, React.createElement(Hero)),
      React.createElement('section', { id: 'features', className: 'py-24 bg-white border-y border-slate-100' }, React.createElement(Features)),
      React.createElement('section', { id: 'how-it-works', className: 'py-24 bg-slate-50' }, React.createElement(AppPreview)),
      React.createElement('section', { id: 'contact', className: 'py-24 bg-white' }, React.createElement(Contact))
    ),
    React.createElement(Footer)
  );
};

export default App;
