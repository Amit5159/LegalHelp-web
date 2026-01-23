import React from 'react';

export const Footer = () => {
  return React.createElement('footer', { className: 'bg-white text-slate-600 pt-16 pb-10 border-t' },
    React.createElement('div', { className: 'container mx-auto px-6 text-center' },
      React.createElement('p', null, '© 2024 LegalHelp App. All Rights Reserved.')
    )
  );
};