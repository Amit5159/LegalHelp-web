import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

export const AIAssistant = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const res = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Provide a helpful, professional legal overview for the following query, reminding the user that this is not official legal advice: ${query}`,
        config: {
          systemInstruction: "You are the LegalHelp AI Assistant. Be professional, concise, and helpful. Always include a clear disclaimer."
        }
      });
      setResponse(res.text || 'Sorry, I could not process that request.');
    } catch (err) {
      setResponse("Our legal AI is busy. Please try again or download the app!");
    } finally {
      setLoading(false);
    }
  };

  return React.createElement('div', { className: 'container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16' },
    React.createElement('div', { className: 'flex-1' },
      React.createElement('h2', { className: 'text-3xl lg:text-5xl font-bold mb-6' }, 'Experience our AI Counsel'),
      React.createElement('p', { className: 'text-indigo-200 text-lg mb-8' }, 'Try a sample query to see how LegalHelp AI assists.')
    ),
    React.createElement('div', { className: 'flex-1 w-full max-w-xl' },
      React.createElement('div', { className: 'bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-3xl shadow-2xl' },
        React.createElement('div', { className: 'bg-slate-900/50 rounded-2xl p-4 min-h-[200px] mb-4 text-slate-200 text-sm' },
          response ? response : React.createElement('p', { className: 'opacity-50 italic' }, 'Ask me anything...')
        ),
        React.createElement('div', { className: 'flex gap-2' },
          React.createElement('input', {
            type: 'text',
            value: query,
            onChange: (e) => setQuery(e.target.value),
            className: 'flex-grow bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white',
            placeholder: 'Type your legal query...'
          }),
          React.createElement('button', {
            onClick: handleAsk,
            disabled: loading,
            className: 'bg-indigo-500 text-white w-12 rounded-xl flex items-center justify-center'
          }, React.createElement('i', { className: `fas ${loading ? 'fa-spinner fa-spin' : 'fa-paper-plane'}` }))
        )
      )
    )
  );
};