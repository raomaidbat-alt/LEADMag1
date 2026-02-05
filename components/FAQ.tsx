import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-dark-900 border-t border-white/5">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-white">FAQ</h2>
                <div className="space-y-4">
                    {FAQ_DATA.map((item, idx) => (
                        <div key={idx} className="border-b border-white/5 last:border-0">
                            <button 
                                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between py-6 text-left group"
                            >
                                <span className={`text-lg font-bold transition-colors font-display ${activeIndex === idx ? 'text-neon-yellow' : 'text-slate-300 group-hover:text-white'}`}>
                                    {item.question}
                                </span>
                                <span className={`flex-shrink-0 ml-4 w-6 h-6 flex items-center justify-center transition-colors ${activeIndex === idx ? 'text-neon-yellow' : 'text-slate-500 group-hover:text-white'}`}>
                                    {activeIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </span>
                            </button>
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === idx ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="text-slate-400 leading-relaxed text-sm">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;