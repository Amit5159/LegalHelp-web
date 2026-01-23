import React from 'react';

export const Footer = () => {
  return React.createElement('footer', { className: 'bg-white text-slate-500 py-24 border-t border-slate-100' },
    React.createElement('div', { className: 'container mx-auto px-6' },
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16' },
        React.createElement('div', { className: 'lg:col-span-2' },
          React.createElement('div', { className: 'flex items-center gap-3 mb-8' },
            React.createElement('div', { className: 'bg-indigo-600 p-1.5 rounded-lg' },
              React.createElement('i', { className: 'fas fa-balance-scale text-white text-xs' })
            ),
            React.createElement('span', { className: 'text-2xl font-black text-slate-900 tracking-tighter uppercase' }, 'LegalHelp')
          ),
          React.createElement('p', { className: 'text-lg leading-relaxed mb-10 max-w-md font-medium text-slate-400' }, 
            'Redefining legal access through technology. We make justice available to everyone, everywhere, at any time.'
          ),
          React.createElement('div', { className: 'flex gap-5' },
            ['facebook-f', 'twitter', 'linkedin-in', 'instagram'].map(icon => 
              React.createElement('a', { key: icon, href: '#', className: 'w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all text-lg' },
                React.createElement('i', { className: `fab fa-${icon}` })
              )
            )
          )
        ),
        
        React.createElement('div', null,
          React.createElement('h5', { className: 'text-slate-900 font-black uppercase tracking-[0.2em] text-[10px] mb-8' }, 'Support'),
          React.createElement('ul', { className: 'space-y-4 font-bold text-sm' },
            React.createElement('li', null, React.createElement('a', { href: 'mailto:support@legalhelp24.in', className: 'hover:text-indigo-600 transition-colors' }, 'support@legalhelp24.in')),
            React.createElement('li', null, React.createElement('a', { href: '#', className: 'hover:text-indigo-600 transition-colors' }, 'Contact Center')),
            React.createElement('li', null, React.createElement('a', { href: '#', className: 'hover:text-indigo-600 transition-colors' }, 'Privacy Policy'))
          )
        ),
        React.createElement('div', null,
          React.createElement('h5', { className: 'text-slate-900 font-black uppercase tracking-[0.2em] text-[10px] mb-8' }, 'Legal'),
          React.createElement('ul', { className: 'space-y-4 font-bold text-sm' },
            React.createElement('li', null, React.createElement('a', { href: '#', className: 'hover:text-indigo-600 transition-colors' }, 'Terms & Conditions')),
            React.createElement('li', null, React.createElement('a', { href: '#', className: 'hover:text-indigo-600 transition-colors' }, 'Data Security')),
            React.createElement('li', null, React.createElement('a', { href: '#', className: 'hover:text-indigo-600 transition-colors' }, 'Disclaimer'))
          )
        )
      ),
      
      React.createElement('div', { className: 'mt-24 pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-extrabold uppercase tracking-[0.4em] text-slate-300 text-center' },
        React.createElement('p', null, '© 2024 LegalHelp. Justice For All.'),
        React.createElement('p', { className: 'max-w-md leading-loose' }, 'NOT A SUBSTITUTE FOR LICENSED LEGAL COUNSEL.')
      )
    )
  );
};
