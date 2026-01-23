
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-600 pt-16 pb-10 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-xs space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-700 p-1.5 rounded-md">
                <i className="fas fa-gavel text-white text-sm"></i>
              </div>
              <span className="text-xl font-bold text-slate-900">LegalHelp</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Modernizing access to legal services through technology. Your law partner in your pocket.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div>
              <h4 className="text-slate-900 font-bold text-sm mb-4 uppercase tracking-widest">Connect</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><a href="#contact" className="hover:text-indigo-600 transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">X (Twitter)</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 font-bold text-sm mb-4 uppercase tracking-widest">Legal</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest font-bold text-slate-400">
          <p>© 2024 LegalHelp App. All Rights Reserved.</p>
          <p className="text-center md:text-right max-w-sm">
            Not a substitute for professional legal advice from a licensed attorney.
          </p>
        </div>
      </div>
    </footer>
  );
};
