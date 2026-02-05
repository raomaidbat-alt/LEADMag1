import React from 'react';
import { Smartphone, ShoppingCart, MapPin, Video, AlertCircle } from 'lucide-react';

const TargetAudience = () => {
  const problems = [
    "Нет системы: маркетинг хаотичный, то таргет, то блогеры",
    "Заявок мало, или они неоправданно дорогие",
    "Непонятно, куда лить бюджет, чтобы не слить его",
    "Не хочешь быть «маркетологом 24/7», но нужно контролировать",
    "Нужен четкий план действий, а не теория"
  ];

  const types = [
    { icon: <Smartphone className="w-6 h-6" />, title: "IT Стартапы", desc: "SaaS, сервисы, платформы", color: "text-blue-400", border: "hover:border-blue-500/50", glow: "hover:shadow-blue-500/20" },
    { icon: <ShoppingCart className="w-6 h-6" />, title: "E-commerce", desc: "Товары, маркетплейсы", color: "text-yellow-400", border: "hover:border-yellow-500/50", glow: "hover:shadow-yellow-500/20" },
    { icon: <MapPin className="w-6 h-6" />, title: "Local Business", desc: "Салоны, студии, услуги", color: "text-blue-400", border: "hover:border-blue-500/50", glow: "hover:shadow-blue-500/20" },
    { icon: <Video className="w-6 h-6" />, title: "Блогеры / Эксперты", desc: "Инфопродукты, консалтинг", color: "text-yellow-400", border: "hover:border-yellow-500/50", glow: "hover:shadow-yellow-500/20" },
  ];

  return (
    <section className="py-24 bg-dark-900 border-t border-white/5" id="for-whom">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
            
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left: Problems */}
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
                Узнаешь <span className="text-neon-yellow">себя</span>?
              </h2>
              <div className="space-y-4">
                {problems.map((prob, idx) => (
                  <div key={idx} className="group p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 flex items-start gap-4">
                    <div className="mt-1 text-neon-yellow opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                        <AlertCircle className="w-5 h-5" />
                    </div>
                    <p className="text-slate-300 font-medium">{prob}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Solutions/Types */}
            <div className="order-1 lg:order-2">
                 <div className="mb-8">
                    <h3 className="font-display text-2xl font-bold text-white mb-2">Адаптировано под 4 типа:</h3>
                    <p className="text-slate-400">Внутри гайда отдельные ветки промтов для каждой ниши.</p>
                 </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {types.map((type, idx) => (
                        <div key={idx} className={`p-6 rounded-2xl bg-dark-800 border border-white/5 transition-all duration-300 ${type.border} hover:shadow-2xl ${type.glow} group cursor-default`}>
                            <div className={`mb-4 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center ${type.color} group-hover:bg-white/10 transition-colors`}>
                                {type.icon}
                            </div>
                            <h4 className="font-display font-bold text-lg text-white mb-1">{type.title}</h4>
                            <p className="text-slate-500 text-sm group-hover:text-slate-400 transition-colors">{type.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TargetAudience;