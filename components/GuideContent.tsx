import React, { useState } from 'react';
import { STEPS_DATA } from '../constants';
import CopyBlock from './ui/CopyBlock';
import { LayoutList, Info, Check, Table2, ClipboardList, ChevronDown, Zap, Target, Box, Share2, Flag, MessageCircle, MapPin, Search, Camera, Video, ShoppingBag, Send, Mail, Globe, MessageSquare, Heart, MessageCircle as CommentIcon, Bookmark, MoreHorizontal } from 'lucide-react';

// --- Tracking Table Component (Unchanged) ---
const TrackingTable = () => {
    const [copied, setCopied] = useState(false);

    const rows = [
        { week: "1", task: "Позиционирование", prompt: "№1", status: "⏳", deadline: "ДД.ММ", result: "-" },
        { week: "1", task: "Анализ конкурентов", prompt: "№2", status: "⏳", deadline: "ДД.ММ", result: "-" },
        { week: "1", task: "Интервью ЦА", prompt: "№3", status: "⏳", deadline: "ДД.ММ", result: "-" },
        { week: "2", task: "Лендинг", prompt: "№4", status: "⏳", deadline: "ДД.ММ", result: "-" },
        { week: "2", task: "Шапка профиля", prompt: "5.X.1", status: "⏳", deadline: "ДД.ММ", result: "-" },
        { week: "3", task: "Контент-план", prompt: "5.X.3", status: "⏳", deadline: "ДД.ММ", result: "-" },
        { week: "3", task: "Запуск рекламы", prompt: "5.X.4", status: "⏳", deadline: "ДД.ММ", result: "-" },
        { week: "4", task: "Настройка бота", prompt: "7.1, 7.2", status: "⏳", deadline: "ДД.ММ", result: "-" },
    ];

    const handleCopyTable = () => {
        const headers = "Неделя\tЗадача\tПромт\tСтатус\tДедлайн\tРезультат";
        const body = rows.map(r => `${r.week}\t${r.task}\t${r.prompt}\t${r.status}\t${r.deadline}\t${r.result}`).join('\n');
        const content = `${headers}\n${body}`;
        
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="mt-8 bg-black/40 p-6 rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 blur-[80px] pointer-events-none"></div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6 relative z-10">
                <div>
                    <h4 className="text-white font-display font-bold text-xl flex items-center gap-2">
                        <ClipboardList className="w-6 h-6 text-neon-yellow" />
                        Трекер внедрения
                    </h4>
                    <p className="text-slate-400 text-sm mt-1">Твоя приборная панель на ближайший месяц</p>
                </div>
                <button 
                    onClick={handleCopyTable}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold tracking-widest uppercase transition-all border shadow-lg ${copied ? 'bg-green-500/10 border-green-500/50 text-green-400 shadow-green-500/10' : 'bg-white/5 border-white/10 text-white hover:bg-neon-yellow hover:border-neon-yellow hover:text-dark-900'}`}
                >
                    {copied ? <Check className="w-4 h-4" /> : <Table2 className="w-4 h-4" />}
                    {copied ? 'Скопировано!' : 'Скопировать в Sheets'}
                </button>
            </div>

            <div className="overflow-x-auto rounded-xl border border-white/10 shadow-inner bg-dark-900/50">
                <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                        <tr className="bg-white/5 text-[10px] uppercase tracking-widest text-slate-400 font-bold border-b border-white/5">
                            <th className="p-4 w-16 text-center">Неделя</th>
                            <th className="p-4">Задача</th>
                            <th className="p-4 w-24 text-center">Промт</th>
                            <th className="p-4 w-24 text-center">Статус</th>
                            <th className="p-4 w-24">Дедлайн</th>
                            <th className="p-4 w-32">Результат</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-sm text-slate-300">
                        {rows.map((row, idx) => (
                            <tr key={idx} className="hover:bg-white/5 transition-colors group">
                                <td className="p-4 text-center font-mono text-neon-blue font-bold bg-white/[0.02]">{row.week}</td>
                                <td className="p-4 font-bold text-white group-hover:text-neon-yellow transition-colors">{row.task}</td>
                                <td className="p-4 text-center">
                                    <span className="inline-block bg-dark-800 border border-white/10 px-2 py-1 rounded text-[10px] text-slate-400 font-mono group-hover:border-white/30 transition-colors">
                                        {row.prompt}
                                    </span>
                                </td>
                                <td className="p-4 text-center text-lg">{row.status}</td>
                                <td className="p-4 text-slate-500 text-xs font-mono">{row.deadline}</td>
                                <td className="p-4 text-slate-600 italic text-xs">{row.result}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
             <div className="mt-4 flex items-start gap-3 p-4 bg-neon-yellow/5 rounded-lg border border-neon-yellow/10">
                <Info className="w-5 h-5 text-neon-yellow flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300 leading-relaxed">
                    <span className="text-neon-yellow font-bold block mb-1">Как пользоваться:</span>
                    Нажми кнопку «Скопировать», открой Google Таблицу (или Excel) и нажми <code>Ctrl+V</code> (Mac: <code>Cmd+V</code>).
                </p>
            </div>
        </div>
    );
};

// --- Helper for Channel Icons (Unchanged) ---
const getChannelIcon = (type: string) => {
    switch (type) {
        case 'instagram': return <Camera className="w-8 h-8" />;
        case 'telegram': return <Send className="w-8 h-8" />;
        case 'map': return <MapPin className="w-8 h-8" />;
        case 'search': return <Search className="w-8 h-8" />;
        case 'video': return <Video className="w-8 h-8" />;
        case 'shopping': return <ShoppingBag className="w-8 h-8" />;
        case 'mail': return <Mail className="w-8 h-8" />;
        case 'globe': return <Globe className="w-8 h-8" />;
        case 'message': return <MessageSquare className="w-8 h-8" />;
        default: return <Share2 className="w-8 h-8" />;
    }
};

const getChannelColorBg = (color: string) => {
    // Mapping tailwind text colors to background gradients for the "Photo"
    if (color.includes('blue')) return 'bg-gradient-to-br from-blue-400 to-blue-600';
    if (color.includes('purple')) return 'bg-gradient-to-br from-purple-400 to-purple-600';
    if (color.includes('yellow')) return 'bg-gradient-to-br from-yellow-400 to-yellow-600';
    if (color.includes('green')) return 'bg-gradient-to-br from-green-400 to-green-600';
    if (color.includes('red')) return 'bg-gradient-to-br from-red-400 to-red-600';
    if (color.includes('pink')) return 'bg-gradient-to-br from-pink-400 to-pink-600';
    if (color.includes('cyan')) return 'bg-gradient-to-br from-cyan-400 to-cyan-600';
    if (color.includes('indigo')) return 'bg-gradient-to-br from-indigo-400 to-indigo-600';
    return 'bg-gradient-to-br from-slate-400 to-slate-600';
}

// --- Step Item Component ---
const StepItem = ({ step, isOpen, onToggle, phaseColor, isTrafficPhase }: any) => {
    const [activeSubTab, setActiveSubTab] = useState(0);

    return (
        <div className={`mb-4 last:mb-0 rounded-xl overflow-hidden transition-all duration-300 border ${isOpen ? `bg-white/5 border-${phaseColor}/50 shadow-[0_0_20px_-5px_rgba(0,0,0,0.3)]` : 'bg-dark-900/40 border-white/5 hover:bg-white/5 hover:border-white/10'}`}>
            <button 
                onClick={onToggle}
                className="w-full text-left p-4 flex items-start justify-between gap-4"
            >
                <div className="flex items-center gap-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-xs border ${isOpen ? `bg-${phaseColor} text-dark-900 border-${phaseColor}` : `bg-white/5 text-slate-500 border-white/5`}`}>
                        {step.id}
                    </div>
                    <div>
                         <h3 className={`font-display font-bold text-base transition-colors leading-tight ${isOpen ? 'text-white' : 'text-slate-300'} ${isTrafficPhase ? 'text-xl md:text-2xl' : 'md:text-lg'}`}>
                            {step.title}
                        </h3>
                    </div>
                </div>
                <div className={`transition-transform duration-300 mt-1.5 ${isOpen ? 'rotate-180' : ''}`}>
                         <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-white' : 'text-slate-600'}`} />
                </div>
            </button>

             {/* Expanded Content */}
             <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <div className="px-4 pb-6 pt-0 ml-12 border-l border-white/5 pl-4 md:pl-6">
                        <p className={`text-xs uppercase tracking-wider font-bold mb-3 mt-1 text-${phaseColor}`}>
                            {step.subtitle}
                        </p>
                        <div className="whitespace-pre-line mb-6 text-slate-300 leading-relaxed text-sm">
                            {step.content}
                        </div>

                        {step.id === 13 && <TrackingTable />}

                        {/* Sub Tabs */}
                        {step.subTabs && (
                            <div className={`mt-4 rounded-lg border border-white/5 p-2 ${isTrafficPhase ? 'bg-black/50 border-white/10 p-6' : 'bg-black/30'}`}>
                                <div className="flex flex-wrap gap-2 mb-6 border-b border-white/5 pb-2 px-1">
                                    {step.subTabs.map((tab: any, idx: number) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveSubTab(idx)}
                                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${activeSubTab === idx ? `bg-${phaseColor} text-dark-900 shadow scale-105` : 'text-slate-400 bg-white/5 hover:bg-white/10 hover:text-white'}`}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                                <div className="px-1 md:px-2 pb-2">
                                    {/* Channel Grid - INSTAGRAM STYLE FOR STEP 5 */}
                                    {step.id === 5 && step.subTabs[activeSubTab].channels ? (
                                        <div className="mb-8">
                                            <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/5 text-slate-300 text-sm italic">
                                                {step.subTabs[activeSubTab].content}
                                            </div>
                                            
                                            {/* INSTAGRAM GRID LAYOUT */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {step.subTabs[activeSubTab].channels.map((channel: any) => (
                                                    <div key={channel.id} className="bg-dark-900 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all hover:scale-[1.02] shadow-xl group">
                                                        {/* Post Header */}
                                                        <div className="flex items-center justify-between p-3 border-b border-white/5">
                                                            <div className="flex items-center gap-2">
                                                                <div className={`w-8 h-8 rounded-full ${channel.color.replace('text', 'bg').replace('400', '500/20')} flex items-center justify-center`}>
                                                                    <div className={`w-full h-full rounded-full opacity-50 ${getChannelColorBg(channel.color)}`}></div>
                                                                </div>
                                                                <span className="text-sm font-bold text-white">{channel.name}</span>
                                                            </div>
                                                            <MoreHorizontal className="w-5 h-5 text-slate-500" />
                                                        </div>

                                                        {/* Post Image (Abstract Visual) */}
                                                        <div className={`aspect-square sm:aspect-video w-full ${getChannelColorBg(channel.color)} relative flex items-center justify-center group-hover:brightness-110 transition-all`}>
                                                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                                                            <div className="text-white drop-shadow-2xl scale-125 transform group-hover:scale-150 transition-transform duration-500">
                                                                {getChannelIcon(channel.iconType)}
                                                            </div>
                                                            <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider">
                                                                {channel.name}
                                                            </div>
                                                        </div>

                                                        {/* Post Footer (Actions) */}
                                                        <div className="p-3">
                                                            <div className="flex items-center justify-between mb-3">
                                                                <div className="flex items-center gap-3">
                                                                    <Heart className="w-6 h-6 text-white hover:text-red-500 transition-colors cursor-pointer" />
                                                                    <CommentIcon className="w-6 h-6 text-white hover:text-blue-500 transition-colors cursor-pointer" />
                                                                    <Send className="w-6 h-6 text-white hover:text-green-500 transition-colors cursor-pointer" />
                                                                </div>
                                                                <Bookmark className="w-6 h-6 text-white cursor-pointer" />
                                                            </div>
                                                            <div className="text-white text-sm font-bold mb-1">
                                                                {Math.floor(Math.random() * 500) + 100} likes
                                                            </div>
                                                            <div className="text-slate-300 text-sm leading-relaxed">
                                                                <span className="font-bold text-white mr-2">{channel.name}</span>
                                                                {channel.reason}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                            <p className="mb-4 font-medium text-white text-sm">{step.subTabs[activeSubTab].content}</p>
                                    )}

                                    {step.subTabs[activeSubTab].prompts.map((prompt: any, pIdx: number) => (
                                        <div key={pIdx}>
                                            <CopyBlock title={prompt.title} content={prompt.content} />
                                            {prompt.description && (
                                                <div className={`mb-6 bg-${phaseColor}/5 border-l-2 border-${phaseColor} p-3 rounded-r-lg`}>
                                                    <p className="text-[10px] text-slate-400 mb-1 font-bold uppercase">Следующий шаг:</p>
                                                    <div className="text-slate-300 text-xs whitespace-pre-line leading-relaxed">
                                                        {prompt.description}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Standard Prompts */}
                        {step.prompts?.map((prompt: any, idx: number) => (
                            <div key={idx}>
                                <CopyBlock title={prompt.title} content={prompt.content} />
                                {prompt.description && (
                                    <div className={`mb-6 bg-${phaseColor}/5 border-l-2 border-${phaseColor} p-3 rounded-r-lg`}>
                                         <p className="text-[10px] text-slate-400 mb-1 font-bold uppercase">Следующий шаг:</p>
                                        <div className="text-slate-300 text-xs whitespace-pre-line leading-relaxed">
                                            {prompt.description}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
             </div>
        </div>
    )
}

// --- Main Content Component ---
const GuideContent = () => {
  const [openStep, setOpenStep] = useState<number | null>(null);

  const toggleStep = (id: number) => {
    setOpenStep(openStep === id ? null : id);
  };

  const phases = [
      { id: 'foundation', title: 'ФАЗА 1: ФУНДАМЕНТ', icon: <Target className="w-5 h-5" />, color: 'neon-blue', steps: STEPS_DATA.filter(s => s.id >= 1 && s.id <= 3) },
      { id: 'packaging', title: 'ФАЗА 2: УПАКОВКА', icon: <Box className="w-5 h-5" />, color: 'neon-yellow', steps: STEPS_DATA.filter(s => s.id === 4) },
      { id: 'channels', title: 'ФАЗА 3: ТРАФИК', icon: <Share2 className="w-5 h-5" />, color: 'neon-blue', steps: STEPS_DATA.filter(s => s.id >= 5 && s.id <= 6) },
      { id: 'automation', title: 'ФАЗА 4: СИСТЕМА', icon: <Zap className="w-5 h-5" />, color: 'neon-yellow', steps: STEPS_DATA.filter(s => s.id >= 7 && s.id <= 8) },
      { id: 'execution', title: 'ФАЗА 5: ДЕЙСТВИЕ', icon: <Flag className="w-5 h-5" />, color: 'white', steps: STEPS_DATA.filter(s => s.id >= 9) },
  ];

  return (
    <section className="py-24 bg-dark-900 relative" id="content">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <div className="relative mb-32 text-center">
                 <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-neon-blue font-bold tracking-widest uppercase text-[10px] mb-6 backdrop-blur-md">
                    <LayoutList className="w-3 h-3" />
                    Карта действий
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                    Твой маршрут <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-yellow">к системе продаж</span>
                </h2>
            </div>

            {/* ZIG ZAG LAYOUT */}
            <div className="relative flex flex-col gap-12 md:gap-0">
                {phases.map((phase, idx) => {
                    const isEven = idx % 2 === 0;
                    const isLast = idx === phases.length - 1;
                    const isTraffic = phase.id === 'channels'; // Identify Phase 3
                    
                    return (
                        <div key={phase.id} className={`relative flex flex-col md:flex-row ${isEven ? 'md:justify-start' : 'md:justify-end'} items-center`}>
                            
                            {/* Connector Line (Desktop Only) */}
                            {!isLast && (
                                <div className="hidden md:block absolute top-full w-full h-32 pointer-events-none z-0">
                                    {/* Curved line logic based on direction */}
                                    <svg className="w-full h-full" preserveAspectRatio="none">
                                        <path 
                                            d={isEven 
                                                ? `M 25% 0 C 25% 50, 75% 50, 75% 100` // Left to Right curve
                                                : `M 75% 0 C 75% 50, 25% 50, 25% 100` // Right to Left curve
                                            }
                                            fill="none" 
                                            stroke="url(#gradient-line)" 
                                            strokeWidth="2"
                                            strokeDasharray="8 8"
                                            className="opacity-40"
                                        />
                                        <defs>
                                            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#3B82F6" />
                                                <stop offset="100%" stopColor="#FACC15" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            )}

                             {/* Connector Line (Mobile Only) */}
                             {!isLast && (
                                <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 h-12 w-0.5 bg-gradient-to-b from-slate-700 to-transparent"></div>
                             )}

                            {/* Phase Card */}
                            <div className={`relative w-full z-10 ${isTraffic ? 'md:w-[70%] md:mx-auto scale-100 md:scale-105' : 'md:w-[48%]'} ${!isTraffic && isEven ? 'md:mr-auto' : ''} ${!isTraffic && !isEven ? 'md:ml-auto' : ''}`}>
                                {/* Card Body */}
                                <div className={`group rounded-3xl p-1 transition-all duration-500 bg-gradient-to-br from-white/10 to-transparent hover:from-${phase.color}/20 ${isTraffic ? 'shadow-[0_0_50px_-10px_rgba(59,130,246,0.2)]' : ''}`}>
                                    <div className={`bg-dark-900/90 backdrop-blur-xl rounded-[22px] border border-white/10 p-6 md:p-8 h-full shadow-2xl relative overflow-hidden ${isTraffic ? 'border-neon-blue/30' : ''}`}>
                                        
                                        {/* Glow Effect */}
                                        <div className={`absolute top-0 right-0 w-64 h-64 bg-${phase.color}/10 blur-[80px] pointer-events-none rounded-full -translate-y-1/2 translate-x-1/2`}></div>

                                        {/* Phase Header */}
                                        <div className="flex items-center gap-4 mb-8 relative">
                                            <div className={`w-12 h-12 rounded-2xl bg-dark-800 border border-${phase.color}/30 flex items-center justify-center text-${phase.color} shadow-lg shadow-${phase.color}/10 ${isTraffic ? 'w-16 h-16 scale-110' : ''}`}>
                                                {phase.icon}
                                            </div>
                                            <div>
                                                <h3 className={`font-display font-bold uppercase tracking-wider text-${phase.color} ${isTraffic ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                                                    {phase.title}
                                                </h3>
                                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">
                                                    {phase.steps.length} {phase.steps.length === 1 ? 'Шаг' : (phase.steps.length < 5 ? 'Шага' : 'Шагов')}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Steps List */}
                                        <div className="relative">
                                            {phase.steps.map((step) => (
                                                <StepItem 
                                                    key={step.id}
                                                    step={step}
                                                    phaseColor={phase.color}
                                                    isOpen={openStep === step.id}
                                                    onToggle={() => toggleStep(step.id)}
                                                    isTrafficPhase={isTraffic}
                                                />
                                            ))}
                                        </div>

                                    </div>
                                </div>
                                
                                {/* Floating Number (Decoration) */}
                                <div className={`absolute -top-6 text-8xl font-display font-bold text-white/5 select-none pointer-events-none hidden md:block ${isEven ? '-left-6' : '-right-6'}`}>
                                    0{idx + 1}
                                </div>
                            </div>

                        </div>
                    );
                })}
            </div>

            <div className="mt-32 text-center relative z-20">
                <button 
                    onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center justify-center px-12 py-6 bg-neon-yellow text-dark-900 font-display font-bold text-xl rounded-2xl shadow-[0_0_40px_-10px_rgba(250,204,21,0.4)] hover:scale-105 transition-all duration-300 gap-3 hover:bg-white group"
                >
                    <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    Записаться на разбор
                </button>
                <p className="mt-4 text-slate-500 text-sm">Бесплатно. 30 минут. Конкретика.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default GuideContent;