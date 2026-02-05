import React from 'react';
import { Search, Copy, Rocket } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-24 bg-dark-800 relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-white mb-4">Как это работает?</h2>
            <p className="text-slate-400">Проще, чем кажется.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="p-8 rounded-2xl bg-dark-900 border border-white/5 relative group hover:border-neon-blue/50 transition-colors">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-dark-700 border border-white/10 rounded-xl flex items-center justify-center text-neon-blue shadow-lg z-10">
                1
            </div>
            <div className="mt-6 text-center">
                <div className="mb-4 inline-flex p-4 rounded-full bg-neon-blue/10 text-neon-blue group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">Выбери нишу</h3>
                <p className="text-slate-500 text-sm leading-relaxed">В гайде 4 ветки развития. Найди свою и следуй только по ней.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-8 rounded-2xl bg-dark-900 border border-white/5 relative group hover:border-neon-yellow/50 transition-colors">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-dark-700 border border-white/10 rounded-xl flex items-center justify-center text-neon-yellow shadow-lg z-10">
                2
            </div>
            <div className="mt-6 text-center">
                 <div className="mb-4 inline-flex p-4 rounded-full bg-neon-yellow/10 text-neon-yellow group-hover:scale-110 transition-transform duration-300">
                    <Copy className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">Скопируй промт</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Вставь готовый текст в ChatGPT. Он сгенерирует контент под твой проект.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-8 rounded-2xl bg-dark-900 border border-white/5 relative group hover:border-white/50 transition-colors">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-dark-700 border border-white/10 rounded-xl flex items-center justify-center text-white shadow-lg z-10">
                3
            </div>
            <div className="mt-6 text-center">
                 <div className="mb-4 inline-flex p-4 rounded-full bg-white/10 text-white group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">Внедряй</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Действуй по чек-листу на 30 дней. Каждая неделя — конкретный результат.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;