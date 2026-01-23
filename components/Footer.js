import React from 'react';

export const Footer = () => {
  return React.createElement('footer', { className: 'bg-slate-900 text-slate-400 py-20 border-t border-white/5' },
    React.createElement('div', { className: 'container mx-auto px-6' },
      React.createElement('div', { className: 'flex flex-col md:flex-row justify-between items-start gap-12' },
        React.createElement('div', { className: 'max-w-sm' },
          React.createElement('div', { className: 'flex items-center gap-3 mb-6' },
            React.createElement('div', { className: 'bg-indigo-600 p-1.5 rounded-lg' },
              React.createElement('i', { className: 'fas fa-balance-scale text-white text-sm' })
            ),
            React.createElement('span', { className: 'text-2xl font-black text-white tracking-tight' }, 'LegalHelp')
          ),
          React.createElement('p', { className: 'text-sm leading-relaxed mb-6' }, 
            'Democratizing access to justice through AI-powered legal automation and expert-vetted resources. Professional legal help is now a click away.'
          ),
          React.createElement('div', { className: 'flex gap-4' },
            ['facebook-f', 'twitter', 'linkedin-in', 'instagram'].map(icon => 
              React.createElement('a', { key: icon, href: '#', className: 'w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all' },
                React.createElement('i', { className: `fab fa-${icon}` })
              )
            )
          )
        ),
        
        React.createElement('div', { className: 'flex flex-wrap gap-x-20 gap-y-10' },
          React.createElement('div', null,
            React.createElement('h5', { className: 'text-white font-black uppercase tracking-widest text-xs mb-6' }, 'Connect'),
            React.createElement('ul', { className: 'space-y-4 text-sm' },
              React.createElement('li', null, React.createElement('a', { href: 'mailto:support@legalhelp24.in', className: 'hover:text-white transition-colors' }, 'support@legalhelp24.in')),
              React.createElement('li', null, React.createElement('a', { href: '#', className: 'hover:text-white transition-colors' }, 'Legal Partner Network')),
              React.createElement('li', null, React.createElement('a', { href: '#', className: 'hover:text-white transition-colors' }, 'Career Opportunities'))
            )
          ),
          React.createElement('div', null,
            React.createElement('h5', { className: 'text-white font-black uppercase tracking-widest text-xs mb-6' }, 'Platform'),
            React.createElement('ul', { className: 'space-y-4 text-sm' },
              React.createElement('li', null, React.createElement('a', { href: '#', className: 'hover:text-white transition-colors' }, 'Terms of Service')),
              React.createElement('li', null, React.createElement('a', { href: '#', className: 'hover:text-white transition-colors' }, 'Privacy & Data')),
              React.createElement('li', null, React.createElement('a', { href: '#', className: 'hover:text-white transition-colors' }, 'Service Level Agreement'))
            )
          )
        )
      ),
      
      React.createElement('div', { className: 'mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em]' },
        React.createElement('p', null, '© 2024 LegalHelp. Excellence in Justice.'),
        React.createElement('p', { className: 'text-center md:text-right max-w-sm' }, 'DISCLAIMER: NOT A SUBSTITUTE FOR PROFESSIONAL LEGAL ADVICE FROM A LICENSED ATTORNEY.')
      )
    )
  );
};
