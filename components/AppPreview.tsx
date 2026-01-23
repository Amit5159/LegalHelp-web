
import React from 'react';

export const AppPreview: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6 transform translate-y-12">
               <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400&h=600" 
                className="rounded-2xl shadow-lg border border-slate-100 object-cover w-full h-[300px]" 
                alt="Law & Order"
              />
              <div className="bg-indigo-700 p-8 rounded-2xl text-white shadow-xl">
                 <i className="fas fa-shield-halved text-3xl mb-4"></i>
                 <h4 className="font-bold text-lg">Trust First</h4>
                 <p className="text-indigo-100 text-sm mt-2">Verified processes for your peace of mind.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                 <div className="flex items-center gap-2 text-indigo-700 mb-2">
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
                 </div>
                 <p className="text-slate-800 font-bold text-sm italic">"Finally, legal help that doesn't cost a fortune."</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400&h=600" 
                className="rounded-2xl shadow-lg border border-slate-100 object-cover w-full h-[400px]" 
                alt="Signing Documents"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 order-1 lg:order-2">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">Built for the real world</h2>
          <p className="text-slate-600 mb-10 text-lg leading-relaxed">
            Legal issues don't wait for office hours. LegalHelp works on your schedule, providing guidance that's easy to understand and act upon.
          </p>
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Instant Diagnosis</h4>
                <p className="text-slate-500 mt-1">Our AI helps you identify the legal path you need to take in seconds.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Automated Paperwork</h4>
                <p className="text-slate-500 mt-1">Generate high-quality legal drafts without the expensive hourly rates.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Direct Connection</h4>
                <p className="text-slate-500 mt-1">If your case is complex, we connect you to top-rated lawyers nearby.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
