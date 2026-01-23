import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero.js';
import { Features } from './components/Features.js';
import { AppPreview } from './components/AppPreview.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';
import { Navbar } from './components/Navbar.js';
import { AIAssistant } from './components/AIAssistant.js';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return React.createElement('div', { className: 'min-h-screen flex flex-col' },
    React.createElement(Navbar, { scrolled: scrolled }),
    React.createElement('main', { className: 'flex-grow' },
      React.createElement('section', { id: 'home' }, React.createElement(Hero)),
      React.createElement('section', { id: 'features', className: 'py-20 bg-white' }, React.createElement(Features)),
      React.createElement('section', { id: 'preview', className: 'py-20 bg-slate-50' }, React.createElement(AppPreview)),
      React.createElement('section', { id: 'ai-help', className: 'py-20 bg-indigo-900 text-white overflow-hidden' }, React.createElement(AIAssistant)),
      React.createElement('section', { id: 'contact', className: 'py-20 bg-white' }, React.createElement(Contact))
    ),
    React.createElement(Footer)
  );
};

export default App;