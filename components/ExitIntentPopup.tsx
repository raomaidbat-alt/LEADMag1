import React, { useEffect, useState } from 'react';
import { X, Zap } from 'lucide-react';

const ExitIntentPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasTriggered) {
                setIsOpen(true);
                setHasTriggered(true);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, [hasTriggered]);

    if (!isOpen) return null;

    const scrollToForm = () => {
        setIsOpen(false);
        document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-dark-900 border border-white/10 rounded-2xl p-8 max-w-md w-full relative shadow-2xl shadow-neon-blue/20 scale-100 animate-slide-up">
                <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>
                
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-neon-blue/10 rounded-full flex items-center justify-center mb-6 border border-neon-blue/20">
                        <Zap className="w-8 h-8 text-neon-blue animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">Сложно внедрить самому?</h3>
                    <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                        Не уходи с вопросами. Давай мы лично разберем твой проект и покажем точки роста.
                    </p>
                    
                    <button 
                        onClick={scrollToForm}
                        className="w-full py-3 bg-neon-yellow hover:bg-yellow-400 text-dark-900 font-bold font-display rounded-xl mb-3 shadow-lg shadow-neon-yellow/20"
                    >
                        Записаться на разбор
                    </button>
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
                    >
                        Я попробую сам
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExitIntentPopup;