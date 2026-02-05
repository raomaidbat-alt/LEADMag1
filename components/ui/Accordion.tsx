import React, { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  title: string;
  subtitle?: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  stepNumber?: number;
}

const Accordion: React.FC<AccordionProps> = ({ title, subtitle, isOpen, onToggle, children, stepNumber }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`group mb-4 transition-all duration-300`}>
      <button
        onClick={onToggle}
        className={`w-full relative overflow-hidden flex items-start md:items-center justify-between p-6 text-left transition-all duration-300 rounded-xl focus:outline-none border ${isOpen ? 'bg-white/5 border-neon-blue/50 shadow-[0_0_20px_-5px_rgba(59,130,246,0.15)]' : 'bg-dark-800 border-white/5 hover:border-white/10 hover:bg-dark-700'}`}
      >
        {/* Active Glow Bar */}
        {isOpen && <div className="absolute left-0 top-0 bottom-0 w-1 bg-neon-blue shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>}

        <div className="flex items-start gap-5 pl-2">
            {stepNumber && (
                <span className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded bg-white/5 text-sm font-display font-bold transition-colors border border-white/5 ${isOpen ? 'text-neon-yellow border-neon-yellow/30' : 'text-slate-500'}`}>
                    0{stepNumber}
                </span>
            )}
          <div>
            <h3 className={`font-display font-bold text-lg md:text-xl transition-colors ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider group-hover:text-slate-400 transition-colors">{subtitle}</p>
            )}
          </div>
        </div>
        <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all bg-white/5 ${isOpen ? 'rotate-180 text-neon-blue' : 'text-slate-500'}`}>
             <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      
      <div 
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight : 0, opacity: isOpen ? 1 : 0.6 }}
      >
        <div className="p-6 md:p-8 pt-2 text-slate-400 border-l border-white/5 ml-6 md:ml-10">
            {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;