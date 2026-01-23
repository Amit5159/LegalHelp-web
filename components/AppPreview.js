import React from 'react';

export const AppPreview = () => {
  return React.createElement('div', { className: 'container mx-auto px-6' },
    React.createElement('div', { className: 'flex flex-col lg:flex-row items-center gap-16' },
      React.createElement('div', { className: 'flex-1' },
        React.createElement('h2', { className: 'text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6' }, 'Built for the real world'),
        React.createElement('p', { className: 'text-slate-600 mb-10 text-lg' }, 'Legal issues don\'t wait. LegalHelp works on your schedule.')
      )
    )
  );
};