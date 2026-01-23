import React from 'react';

export const Contact = () => {
  return React.createElement('div', { className: 'container mx-auto px-6' },
    React.createElement('div', { className: 'flex flex-col lg:flex-row gap-20' },
      React.createElement('div', { className: 'flex-1 space-y-8' },
        React.createElement('div', null,
          React.createElement('h2', { className: 'text-indigo-600 font-black uppercase tracking-[0.2em] text-sm mb-4' }, 'Contact Support'),
          React.createElement('h3', { className: 'text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6' }, 
            'We’re here to ensure your ',
            React.createElement('span', { className: 'text-indigo-600' }, 'legal success.')
          ),
          React.createElement('p', { className: 'text-slate-500 text-lg leading-relaxed' }, 
            'Our dedicated support team is available to assist you with any questions regarding the LegalHelp app or our legal automation services.'
          )
        ),
        
        React.createElement('div', { className: 'space-y-6' },
          React.createElement('div', { className: 'flex items-center gap-5 p-4 rounded-3xl hover:bg-slate-50 transition-colors' },
            React.createElement('div', { className: 'w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-xl shadow-inner' },
              React.createElement('i', { className: 'fas fa-envelope-open-text' })
            ),
            React.createElement('div', null,
              React.createElement('p', { className: 'text-xs font-black text-slate-400 uppercase tracking-widest' }, 'Official Email'),
              React.createElement('p', { className: 'text-lg font-bold text-slate-900' }, 'support@legalhelp24.in')
            )
          ),
          React.createElement('div', { className: 'flex items-center gap-5 p-4 rounded-3xl hover:bg-slate-50 transition-colors' },
            React.createElement('div', { className: 'w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-xl shadow-inner' },
              React.createElement('i', { className: 'fas fa-shield-check' })
            ),
            React.createElement('div', null,
              React.createElement('p', { className: 'text-xs font-black text-slate-400 uppercase tracking-widest' }, 'Availability'),
              React.createElement('p', { className: 'text-lg font-bold text-slate-900' }, '24/7 Priority Assistance')
            )
          )
        )
      ),
      
      React.createElement('div', { className: 'flex-1' },
        React.createElement('div', { className: 'bg-slate-900 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group' },
          React.createElement('div', { className: 'absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -mr-20 -mt-20 blur-3xl' }),
          React.createElement('h4', { className: 'text-2xl font-black text-white mb-8' }, 'Send us a message'),
          React.createElement('form', { className: 'space-y-4 relative z-10', onSubmit: (e) => e.preventDefault() },
            React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
              React.createElement('input', { type: 'text', className: 'w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-indigo-400 focus:bg-white/10 transition-all', placeholder: 'Your Name' }),
              React.createElement('input', { type: 'email', className: 'w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-indigo-400 focus:bg-white/10 transition-all', placeholder: 'Your Email' })
            ),
            React.createElement('textarea', { rows: 4, className: 'w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-indigo-400 focus:bg-white/10 transition-all resize-none', placeholder: 'Tell us how we can help...' }),
            React.createElement('button', { className: 'w-full bg-white text-slate-900 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-indigo-400 hover:text-white transition-all shadow-xl active:scale-95' }, 'Dispatch Message')
          )
        )
      )
    )
  );
};
