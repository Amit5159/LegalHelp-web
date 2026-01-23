
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AppPreview } from './components/AppPreview';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { AIAssistant } from './components/AIAssistant';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrolled={scrolled} />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="features" className="py-20 bg-white">
          <Features />
        </section>
        <section id="preview" className="py-20 bg-slate-50">
          <AppPreview />
        </section>
        <section id="ai-help" className="py-20 bg-indigo-900 text-white overflow-hidden">
          <AIAssistant />
        </section>
        <section id="contact" className="py-20 bg-white">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
