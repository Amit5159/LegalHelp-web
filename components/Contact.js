import React from 'react';

export const Contact = () => {
  return React.createElement('div', { className: 'container mx-auto px-6' },
    React.createElement('div', { className: 'flex flex-col lg:flex-row gap-24 items-center' },
      React.createElement('div', { className: 'flex-1' },
        React.createElement('h2', { className: 'text-indigo-600 font-extrabold uppercase tracking-[0.3em] text-[11px] mb-6' }, 'Connect with us'),
        React.createElement('h3', { className: 'text-4xl lg:text-6xl font-extrabold text-slate-900 leading-none mb-8 tracking-tighter' }, 
          'Legal support is just a ',
          React.createElement('span', { className: 'text-indigo-600' }, 'click away.')
        ),
        React.createElement('p', { className: 'text-slate-500 text-xl leading-relaxed mb-12' }, 
          'Questions about the app? Our dedicated support team is ready to help you navigate your legal journey. Expect a response within 24 hours.'
        ),
        
        React.createElement('div', { className: 'space-y-4' },
          React.createElement('a', { 
            href: 'mailto:support@legalhelp24.in',
            className: 'flex items-center gap-6 p-6 rounded-[2rem] bg-slate-50 hover:bg-indigo-50 border border-slate-100 transition-all group'
          },
            React.createElement('div', { className: 'w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-2xl text-indigo-600 shadow-sm group-hover:scale-110 transition-transform' },
              React.createElement('i', { className: 'fas fa-envelope-open-text' })
            ),
            React.createElement('div', null,
              React.createElement('p', { className: 'text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1' }, 'Direct Email'),
              React.createElement('p', { className: 'text-xl font-extrabold text-slate-900' }, 'support@legalhelp24.in')
            )
          )
        )
      ),
      
      React.createElement('div', { className: 'flex-1 w-full' },
        React.createElement('div', { className: 'bg-slate-900 p-10 lg:p-14 rounded-[3rem] shadow-3xl relative overflow-hidden' },
          React.createElement('div', { className: 'absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full -mr-32 -mt-32 blur-3xl' }),
          React.createElement('h4', { className: 'text-3xl font-black text-white mb-10 tracking-tight' }, 'How can we help?'),
          React.createElement('form', { 
            className: 'space-y-5 relative z-10', 
            onSubmit: (e) => {
              e.preventDefault();
              window.location.href = `mailto:support@legalhelp24.in?subject=Website Inquiry`;
            }
          },
            React.createElement('input', { type: 'text', required: true, className: 'w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-indigo-400 focus:bg-white/10 transition-all font-medium', placeholder: 'Full Name' }),
            React.createElement('input', { type: 'email', required: true, className: 'w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-indigo-400 focus:bg-white/10 transition-all font-medium', placeholder: 'Email Address' }),
            React.createElement('textarea', { required: true, rows: 4, className: 'w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-indigo-400 focus:bg-white/10 transition-all resize-none font-medium', placeholder: 'Your Message...' }),
            React.createElement('button', { className: 'w-full bg-white text-slate-900 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-indigo-400 hover:text-white transition-all shadow-xl active:scale-95 mt-4' }, 'Send Message Now')
          )
        )
      )
    )
  );
};
