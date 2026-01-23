import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

export const AIAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      // Use the required initialization format
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const res = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Provide a helpful, professional legal overview for the following query, reminding the user that this is not official legal advice: ${query}`,
        config: {
            systemInstruction: "You are the LegalHelp AI Assistant. Be professional, concise, and helpful. Always include a clear disclaimer that you are an AI and not a lawyer."
        }
      });
      
      // Access .text property directly as per guidelines
      setResponse(res.text || 'Sorry, I could not process that request.');
    } catch (err) {
      console.error("AI Error:", err);
      setResponse("Our legal AI is currently processing many requests. Please try again in a moment or download the LegalHelp app for priority access!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
      <div className="flex-1">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Experience our AI Counsel</h2>
        <p className="text-indigo-200 text-lg mb-8">
          Try a sample query below to see how LegalHelp AI can assist you with basic legal information and procedural guidance.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="bg-indigo-500 p-2 rounded-lg mt-1">
              <i className="fas fa-check text-xs"></i>
            </div>
            <p>Instant clarity on legal jargon</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-indigo-500 p-2 rounded-lg mt-1">
              <i className="fas fa-check text-xs"></i>
            </div>
            <p>Step-by-step procedural guides</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-indigo-500 p-2 rounded-lg mt-1">
              <i className="fas fa-check text-xs"></i>
            </div>
            <p>Document structure recommendations</p>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full max-w-xl">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-3xl shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
              <i className="fas fa-robot"></i>
            </div>
            <div>
              <h4 className="font-bold">LegalHelp AI</h4>
              <p className="text-xs text-indigo-300">Online & Ready</p>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-2xl p-4 min-h-[200px] mb-4 text-slate-200 text-sm leading-relaxed max-h-[300px] overflow-y-auto">
            {response ? (
              <div className="animate-fade-in">
                {response.split('\n').map((line, i) => <p key={i} className="mb-2">{line}</p>)}
              </div>
            ) : (
              <p className="opacity-50 italic">Ask me anything... e.g. "What are the common steps in a tenant-landlord dispute?"</p>
            )}
            {loading && (
              <div className="flex items-center gap-2 py-2">
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
              placeholder="Type your legal query..."
              className="flex-grow bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-400 transition-colors placeholder:text-white/30 text-white"
            />
            <button 
              onClick={handleAsk}
              disabled={loading}
              className="bg-indigo-500 hover:bg-indigo-400 disabled:opacity-50 text-white w-12 rounded-xl transition-all flex items-center justify-center shadow-lg"
            >
              <i className={`fas ${loading ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
            </button>
          </div>
          <p className="text-[10px] text-indigo-300 mt-4 text-center opacity-70">
            Note: This preview uses a limited version of our AI. For the full experience, download the app.
          </p>
        </div>
      </div>
    </div>
  );
};