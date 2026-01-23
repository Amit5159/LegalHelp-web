
import React from 'react';

export const Hero: React.FC = () => {
  /** 
   * PRODUCTION URL:
   * This is mapped to your package name.
   */
  const androidStoreUrl = "https://play.google.com/store/apps/details?id=com.amit5159.legalhelp";

  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      {/* Subtle architectural background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(#4338ca 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
      
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold text-xs mb-8">
            <i className="fab fa-android mr-1"></i>
            OFFICIAL ANDROID LAUNCH
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6">
            Justice for all, <br />
            <span className="text-indigo-700 italic">simplified.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            LegalHelp brings professional legal resources to your pocket. From AI consultations to document preparation—get the help you need, when you need it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href={androidStoreUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              id="download-section" 
              className="flex items-center justify-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-2xl hover:bg-indigo-900 transition-all shadow-xl hover:-translate-y-1"
            >
              <i className="fab fa-google-play text-2xl text-white"></i>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider opacity-70">Get it on</div>
                <div className="text-lg font-bold leading-tight">Google Play</div>
              </div>
            </a>
            <div className="flex items-center justify-center gap-4 bg-slate-50 text-slate-300 px-8 py-4 rounded-2xl cursor-not-allowed group relative">
              <i className="fab fa-apple text-2xl"></i>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider">Coming soon</div>
                <div className="text-lg font-bold leading-tight">App Store</div>
              </div>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                iOS Version in Development
              </span>
            </div>
          </div>
          
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-4">
            <div className="flex -space-x-3">
              {[11,22,33].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Early User" />
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500 font-medium">
              Join <span className="text-indigo-700 font-bold">early access</span> users simplifying their legal life.
            </p>
          </div>
        </div>
        
        <div className="flex-1 relative w-full max-w-[500px]">
          <div className="relative z-10">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>
            <img 
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800" 
              className="w-full aspect-[4/5] object-cover rounded-[2rem] shadow-2xl border border-slate-200"
              alt="Professional Legal Consultation"
            />
            <div className="absolute bottom-6 -right-6 md:-right-12 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 animate-float hidden md:block w-64">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="text-xs font-bold text-slate-800">NDA Draft Ready</div>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-indigo-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
