import React from 'react';

export const Contact = () => {
  return React.createElement('div', { className: 'container mx-auto px-6' },
    React.createElement('div', { className: 'bg-indigo-50 rounded-[40px] p-8 lg:p-16 relative' },
      React.createElement('h2', { className: 'text-3xl lg:text-4xl font-bold text-slate-900 mb-6' }, 'Get in touch'),
      React.createElement('form', { className: 'bg-white p-8 rounded-3xl shadow-xl space-y-4' },
        React.createElement('input', { type: 'text', className: 'w-full px-4 py-3 rounded-xl bg-slate-50 border', placeholder: 'Name' }),
        React.createElement('button', { className: 'w-full bg-indigo-600 text-white py-4 rounded-xl font-bold' }, 'Send Message')
      )
    )
  );
};