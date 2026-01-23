
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="bg-indigo-50 rounded-[40px] p-8 lg:p-16 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full -mr-20 -mt-20 blur-3xl opacity-50"></div>
        
        <div className="flex flex-col lg:flex-row gap-12 relative z-10">
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Get in touch</h2>
            <p className="text-slate-600 mb-8">
              Have questions about LegalHelp? Our support team and legal moderators are here to help you navigate our platform.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-indigo-600 shadow-sm">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email us at</p>
                  <p className="font-bold text-slate-900">support@legalhelp.app</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-indigo-600 shadow-sm">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Call Support</p>
                  <p className="font-bold text-slate-900">+1 (888) LEGAL-HP</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-indigo-600 shadow-sm">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Main Office</p>
                  <p className="font-bold text-slate-900">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <form className="bg-white p-8 rounded-3xl shadow-xl space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 outline-none transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Support Request</option>
                  <option>Partnership</option>
                  <option>Legal Professional Enrollment</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 outline-none transition-colors resize-none" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
