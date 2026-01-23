import React from 'react';

export const Hero = () => {
  const androidStoreUrl = "https://play.google.com/store/apps/details?id=com.amit5159.legalhelp";

  return React.createElement('div', { className: 'relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white' },
    React.createElement('div', {
      className: 'absolute inset-0 opacity-[0.02] pointer-events-none',
      style: { backgroundImage: 'radial-gradient(#4338ca 1px, transparent 1px)', backgroundSize: '40px 40px' }
    }),
    React.createElement('div', { className: 'container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16' },
      React.createElement('div', { className: 'flex-1 text-center lg:text-left z-10' },
        React.createElement('div', { className: 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-extrabold text-[10px] tracking-[0.2em] uppercase mb-8' },
          React.createElement('i', { className: 'fab fa-android' }),
          'Official Android Version'
        ),
        React.createElement('h1', { className: 'text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1] tracking-tight mb-8' },
          'Your Law Partner, ', React.createElement('br'),
          React.createElement('span', { className: 'text-indigo-600' }, 'Everywhere.')
        ),
        React.createElement('p', { className: 'text-xl text-slate-500 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium' },
          'Join thousands of users simplifying their legal matters with automated documentation, expert connections, and priority support. Accessible justice for everyone.'
        ),
        React.createElement('div', { className: 'flex flex-col sm:flex-row gap-6 justify-center lg:justify-start' },
          React.createElement('a', {
            href: androidStoreUrl,
            target: '_blank',
            rel: 'noopener noreferrer',
            id: 'download-section',
            className: 'flex items-center justify-center gap-5 bg-slate-900 text-white px-10 py-5 rounded-[2rem] hover:bg-indigo-700 transition-all shadow-2xl hover:-translate-y-1'
          },
            React.createElement('i', { className: 'fab fa-google-play text-3xl' }),
            React.createElement('div', { className: 'text-left' },
              React.createElement('div', { className: 'text-[10px] uppercase tracking-widest opacity-60 font-bold' }, 'Download for'),
              React.createElement('div', { className: 'text-xl font-black' }, 'Android')
            )
          ),
          React.createElement('a', {
            href: 'https://legalhelp24.in',
            className: 'flex items-center justify-center gap-5 bg-slate-100 text-slate-400 px-10 py-5 rounded-[2rem] border border-slate-200 hover:bg-white hover:text-indigo-600 transition-all'
          },
            React.createElement('i', { className: 'fab fa-apple text-3xl' }),
            React.createElement('div', { className: 'text-left' },
              React.createElement('div', { className: 'text-[10px] uppercase tracking-widest font-bold' }, 'Available on'),
              React.createElement('div', { className: 'text-xl font-black' }, 'Web/iOS')
            )
          )
        )
      ),
      React.createElement('div', { className: 'flex-1 relative w-full max-w-[550px]' },
        React.createElement('div', { className: 'relative z-10 p-4' },
          React.createElement('img', {
            src: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200',
            className: 'w-full aspect-[4/5] object-cover rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-8 border-white',
            alt: 'Legal Excellence'
          })
        )
      )
    )
  );
};
