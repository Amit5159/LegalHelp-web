import React from 'react';

export const Hero = () => {
  const androidStoreUrl = "https://play.google.com/store/apps/details?id=com.amit5159.legalhelp";

  return React.createElement('div', { className: 'relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white' },
    React.createElement('div', {
      className: 'absolute inset-0 opacity-[0.03] pointer-events-none',
      style: { backgroundImage: 'radial-gradient(#4338ca 1px, transparent 1px)', backgroundSize: '40px 40px' }
    }),
    React.createElement('div', { className: 'container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16' },
      React.createElement('div', { className: 'flex-1 text-center lg:text-left z-10' },
        React.createElement('div', { className: 'inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold text-xs mb-8' },
          React.createElement('i', { className: 'fab fa-android mr-1' }),
          'OFFICIAL ANDROID LAUNCH'
        ),
        React.createElement('h1', { className: 'text-4xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6' },
          'Justice for all, ', React.createElement('br'),
          React.createElement('span', { className: 'text-indigo-700 italic' }, 'simplified.')
        ),
        React.createElement('p', { className: 'text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed' },
          'LegalHelp brings professional legal resources to your pocket. From AI consultations to document preparation—get the help you need, when you need it.'
        ),
        React.createElement('div', { className: 'flex flex-col sm:flex-row gap-4 justify-center lg:justify-start' },
          React.createElement('a', {
            href: androidStoreUrl,
            target: '_blank',
            rel: 'noopener noreferrer',
            id: 'download-section',
            className: 'flex items-center justify-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-2xl hover:bg-indigo-900 transition-all shadow-xl hover:-translate-y-1'
          },
            React.createElement('i', { className: 'fab fa-google-play text-2xl text-white' }),
            React.createElement('div', { className: 'text-left' },
              React.createElement('div', { className: 'text-[10px] uppercase tracking-wider opacity-70' }, 'Get it on'),
              React.createElement('div', { className: 'text-lg font-bold leading-tight' }, 'Google Play')
            )
          ),
          React.createElement('div', { className: 'flex items-center justify-center gap-4 bg-slate-50 text-slate-300 px-8 py-4 rounded-2xl cursor-not-allowed group relative' },
            React.createElement('i', { className: 'fab fa-apple text-2xl' }),
            React.createElement('div', { className: 'text-left' },
              React.createElement('div', { className: 'text-[10px] uppercase tracking-wider' }, 'Coming soon'),
              React.createElement('div', { className: 'text-lg font-bold leading-tight' }, 'App Store')
            )
          )
        )
      ),
      React.createElement('div', { className: 'flex-1 relative w-full max-w-[500px]' },
        React.createElement('div', { className: 'relative z-10' },
          React.createElement('img', {
            src: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800',
            className: 'w-full aspect-[4/5] object-cover rounded-[2rem] shadow-2xl border border-slate-200',
            alt: 'Professional Legal Consultation'
          })
        )
      )
    )
  );
};