import React, { useState } from 'react';
import { Lock, Check, Sparkles, MessageSquare } from 'lucide-react';

const LeadForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
      return (
        <section id="lead-form" className="py-24 bg-black text-white text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-neon-blue/5"></div>
            <div className="container mx-auto px-4 max-w-xl relative z-10">
                <div className="glass-panel p-12 rounded-3xl border border-neon-blue/30 shadow-[0_0_50px_-10px_rgba(59,130,246,0.2)]">
                    <div className="w-20 h-20 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-neon-blue/50">
                        <Check className="w-10 h-10 text-neon-blue" />
                    </div>
                    <h3 className="font-display text-3xl font-bold mb-4">Заявка принята!</h3>
                    <p className="text-slate-300 text-lg">Мы свяжемся с тобой в ближайшее время, чтобы обсудить твой проект.</p>
                </div>
            </div>
        </section>
      )
  }

  return (
    <section id="lead-form" className="py-24 bg-black text-white relative overflow-hidden border-t border-white/10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-yellow/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 bg-neon-yellow/10 px-3 py-1 rounded text-neon-yellow text-xs font-bold mb-6 tracking-widest uppercase border border-neon-yellow/20">
                    <Sparkles className="w-3 h-3" />
                    Личная работа
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Разберем конкретно <br/> <span className="text-neon-blue">твою ситуацию</span>
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    Этот гайд — мощная база. Но если ты хочешь сэкономить время и получить адаптированную стратегию под свой бизнес без ошибок новичка — оставь заявку.
                </p>
                
                <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                        <div className="text-neon-blue"><MessageSquare className="w-6 h-6" /></div>
                        <div>
                            <div className="font-bold text-white">Аудит текущей ситуации</div>
                            <div className="text-sm text-slate-500">Поймем, где ты теряешь деньги</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                        <div className="text-neon-yellow"><Check className="w-6 h-6" /></div>
                        <div>
                            <div className="font-bold text-white">План внедрения</div>
                            <div className="text-sm text-slate-500">Пошаговая стратегия под твою нишу</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="order-1 md:order-2 glass-panel p-8 md:p-10 rounded-3xl shadow-2xl relative">
                {/* Neon Border Effect */}
                <div className="absolute inset-0 rounded-3xl neon-border opacity-30 pointer-events-none"></div>

                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                    <div className="text-center mb-8">
                        <h3 className="font-display text-2xl font-bold mb-2">Оставить заявку</h3>
                        <p className="text-slate-500 text-sm">Заполни форму, и мы свяжемся с тобой</p>
                    </div>

                    <div className="group">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-neon-yellow transition-colors">Имя</label>
                        <input 
                            type="text" 
                            required
                            placeholder="Как к тебе обращаться?"
                            className="w-full px-5 py-4 rounded-xl bg-dark-900 border border-white/10 text-white placeholder-slate-700 focus:ring-1 focus:ring-neon-yellow focus:border-neon-yellow outline-none transition-all font-medium"
                        />
                    </div>
                    <div className="group">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-neon-blue transition-colors">Телефон / Telegram</label>
                        <input 
                            type="text" 
                            required
                            placeholder="+7 900 000 00 00"
                            className="w-full px-5 py-4 rounded-xl bg-dark-900 border border-white/10 text-white placeholder-slate-700 focus:ring-1 focus:ring-neon-blue focus:border-neon-blue outline-none transition-all font-medium"
                        />
                    </div>
                    
                    <button 
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full py-5 bg-neon-yellow hover:bg-yellow-400 text-dark-900 font-bold rounded-xl shadow-lg shadow-neon-yellow/25 transform transition-all hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg mt-4 font-display tracking-wide"
                    >
                        {status === 'loading' ? 'ОТПРАВКА...' : 'ОТПРАВИТЬ ЗАЯВКУ'}
                    </button>
                    
                    <div className="flex items-center justify-center gap-2 text-xs text-slate-600 mt-4">
                        <Lock className="w-3 h-3" />
                        Ваши данные в безопасности.
                    </div>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;