import React from 'react';
import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience';
import GuideContent from './components/GuideContent';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import LeadForm from './components/LeadForm';
import StickyCTA from './components/StickyCTA';
import ExitIntentPopup from './components/ExitIntentPopup';
import ProgressBar from './components/ProgressBar';

function App() {
  return (
    <div className="min-h-screen relative font-sans selection:bg-neon-yellow selection:text-black pb-20 md:pb-0 bg-dark-900 text-slate-200">
      <ProgressBar />
      
      <main>
        <Hero />
        <TargetAudience />
        <HowItWorks />
        
        {/* Results Banner */}
        <div className="py-20 border-t border-b border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-neon-blue/5"></div>
            <div className="container mx-auto px-4 text-center relative z-10">
                 <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-white">Твой результат через 30 дней</h2>
                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {['Бизнес упакован', 'Каналы работают', 'Бот продает', 'Есть прибыль'].map((item, i) => (
                        <div key={i} className="p-6 bg-dark-800 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-4 hover:border-neon-yellow/30 hover:shadow-[0_0_20px_-5px_rgba(250,204,21,0.15)] transition-all">
                            <div className="w-8 h-8 rounded-full bg-neon-yellow/20 text-neon-yellow flex items-center justify-center font-bold text-sm">✓</div>
                            <span className="font-display font-bold text-lg text-white">{item}</span>
                        </div>
                    ))}
                 </div>
            </div>
        </div>

        <GuideContent />
        <FAQ />
        <LeadForm />
      </main>

      <footer className="bg-black text-slate-500 py-16 border-t border-white/10">
        <div className="container mx-auto px-4 flex flex-col items-center">
            <p className="mb-6 font-display font-bold text-2xl text-white tracking-tight">System<span className="text-neon-yellow">.Guide</span></p>
            <div className="flex justify-center gap-8 mb-8 text-xs font-bold tracking-widest uppercase">
                <a href="#" className="hover:text-neon-blue transition-colors">Telegram</a>
                <a href="#" className="hover:text-neon-yellow transition-colors">YouTube</a>
                <a href="#" className="hover:text-white transition-colors">VK</a>
            </div>
            <p className="text-xs opacity-50">© 2026. All rights reserved.</p>
        </div>
      </footer>

      <StickyCTA />
      <ExitIntentPopup />
    </div>
  );
}

export default App;