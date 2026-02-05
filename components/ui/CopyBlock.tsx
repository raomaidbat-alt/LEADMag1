import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

interface CopyBlockProps {
    title: string;
    content: string;
}

const CopyBlock: React.FC<CopyBlockProps> = ({ title, content }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="my-8 rounded-lg overflow-hidden border border-white/10 bg-black group relative">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity pointer-events-none">
                 <div className="w-20 h-20 bg-neon-blue blur-[50px] rounded-full"></div>
            </div>

            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-neon-yellow" />
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest font-display">{title}</span>
                </div>
                <button 
                    onClick={handleCopy}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold transition-all uppercase tracking-wider ${copied ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-white hover:bg-neon-blue hover:text-white'}`}
                >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? 'Copied' : 'Copy'}
                </button>
            </div>
            <div className="relative">
                <pre className="p-6 overflow-x-auto text-[14px] text-slate-300 leading-relaxed font-mono whitespace-pre-wrap selection:bg-neon-yellow selection:text-black">
                    {content}
                </pre>
            </div>
        </div>
    );
};

export default CopyBlock;