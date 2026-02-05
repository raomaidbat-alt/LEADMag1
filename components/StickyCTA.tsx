import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

const StickyCTA = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 800px
            setVisible(window.scrollY > 800);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToForm = () => {
        document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-xl p-2 bg-dark-900/80 backdrop-blur-xl rounded-full shadow-[0_0_30px_-5px_rgba(0,0,0,0.5)] z-50 animate-slide-up flex justify-between items-center gap-4 border border-white/10 ring-1 ring-white/5">
            <div className="hidden sm:block pl-6 font-medium text-slate-300 text-sm">
                Нужна помощь с внедрением?
            </div>
            <button 
                onClick={scrollToForm}
                className="w-full sm:w-auto px-6 py-3 bg-neon-yellow hover:bg-yellow-400 text-dark-900 font-display font-bold rounded-full transition-all flex items-center justify-center gap-2 text-sm shadow-lg shadow-neon-yellow/20"
            >
                <MessageCircle className="w-4 h-4" />
                Личный разбор
            </button>
        </div>
    );
};

export default StickyCTA;