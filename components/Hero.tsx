import React from 'react';
import { ArrowRight, BookOpen, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';

const Hero = () => {
  const scrollToContent = () => {
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToForm = () => {
      document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neon-blue/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-yellow/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-3 bg-neon-blue/10 border border-neon-blue/30 px-5 py-2 rounded-full mb-8 animate-fade-in backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-yellow opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-yellow"></span>
                </span>
                <span className="text-neon-blue font-bold uppercase tracking-wider text-xs md:text-sm">
                    Обновление стратегии 2025/26
                </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8 animate-slide-up leading-[1.0] max-w-6xl">
                Твой бизнес работает. <br/>
                <span className="relative inline-block">
                    <span className="absolute inset-x-0 bottom-2 h-4 bg-neon-blue/30 -skew-x-12"></span>
                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white">Ты — управляешь.</span>
                </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up font-light" style={{ animationDelay: '0.1s' }}>
                Пошаговая инструкция, как превратить хаос и рутину в <span className="text-neon-yellow font-bold text-glow-yellow">системную машину продаж</span> за 30 дней. Без воды. Только практика.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <button 
                    onClick={scrollToContent}
                    className="px-10 py-5 bg-neon-yellow hover:bg-yellow-400 text-dark-900 font-display font-bold text-lg rounded-xl shadow-[0_0_40px_-10px_rgba(250,204,21,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-10px_rgba(250,204,21,0.6)] flex items-center justify-center gap-3"
                >
                    <BookOpen className="w-5 h-5 fill-current" />
                    Начать внедрение
                </button>
                <button 
                    onClick={scrollToForm}
                    className="px-10 py-5 bg-dark-800/50 border border-neon-blue/30 hover:bg-neon-blue/10 hover:border-neon-blue text-white font-display font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-2 group backdrop-blur-sm"
                >
                    Хочу личный разбор
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-neon-blue" />
                </button>
            </div>

            {/* Trust/Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-4 bg-white/5 border border-white/5 p-4 rounded-2xl hover:border-neon-blue/30 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue flex-shrink-0">
                        <TrendingUp className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                        <div className="font-bold text-white">Рост выручки</div>
                        <div className="text-xs text-slate-400">За счет точных действий</div>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 border border-white/5 p-4 rounded-2xl hover:border-neon-yellow/30 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-neon-yellow/20 flex items-center justify-center text-neon-yellow flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                        <div className="font-bold text-white">Готовые промты</div>
                        <div className="text-xs text-slate-400">Копируй и внедряй</div>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 border border-white/5 p-4 rounded-2xl hover:border-white/20 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                        <div className="font-bold text-white">Без регистрации</div>
                        <div className="text-xs text-slate-400">Весь материал открыт</div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;