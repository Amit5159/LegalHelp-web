import React from 'react';

const featureList = [
  { title: 'AI Legal Consult', desc: 'Instant answers to your legal queries using our proprietary Gemini-powered legal model.', icon: 'fa-robot', color: 'bg-blue-100 text-blue-600' },
  { title: 'Smart Documents', desc: 'Generate legally binding contracts and documents in minutes with simple inputs.', icon: 'fa-file-signature', color: 'bg-purple-100 text-purple-600' },
  { title: 'Verified Experts', desc: 'Connect with top-rated lawyers and legal consultants in your jurisdiction.', icon: 'fa-user-shield', color: 'bg-indigo-100 text-indigo-600' },
  { title: 'Privacy First', desc: 'Your data is encrypted end-to-end. Your legal matters remain strictly confidential.', icon: 'fa-lock', color: 'bg-green-100 text-green-600' },
  { title: 'Case Tracking', desc: 'Real-time updates on your ongoing legal procedures and document statuses.', icon: 'fa-clock-rotate-left', color: 'bg-orange-100 text-orange-600' },
  { title: 'Affordable Justice', desc: 'Fixed-price services and transparent billing. No hidden legal fees.', icon: 'fa-hand-holding-dollar', color: 'bg-pink-100 text-pink-600' }
];

export const Features = () => {
  return React.createElement('div', { className: 'container mx-auto px-6' },
    React.createElement('div', { className: 'text-center max-w-3xl mx-auto mb-16' },
      React.createElement('h2', { className: 'text-indigo-600 font-bold tracking-wider uppercase text-sm mb-3' }, 'Why LegalHelp?'),
      React.createElement('h3', { className: 'text-3xl lg:text-4xl font-bold text-slate-900 mb-6' }, 'Revolutionizing access to legal services'),
      React.createElement('p', { className: 'text-slate-600' }, 'We combine artificial intelligence with human expertise to provide a seamless legal experience that is fast, reliable, and accessible.')
    ),
    React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' },
      featureList.map((f, i) => 
        React.createElement('div', {
          key: i,
          className: 'p-8 rounded-3xl bg-slate-50 border border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-xl transition-all duration-300 group'
        },
          React.createElement('div', { className: `w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl ${f.color} group-hover:scale-110 transition-transform` },
            React.createElement('i', { className: `fas ${f.icon}` })
          ),
          React.createElement('h4', { className: 'text-xl font-bold text-slate-900 mb-4' }, f.title),
          React.createElement('p', { className: 'text-slate-600 leading-relaxed' }, f.desc)
        )
      )
    )
  );
};