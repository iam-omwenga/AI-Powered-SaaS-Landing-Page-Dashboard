import { motion } from 'motion/react';
import { ArrowRight, Play, Zap, Shield, Sparkles } from 'lucide-react';

export default function LandingHero({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-purple-600/30 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="badge-neural mb-8">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
              v2.0 Productivity Engine Now Live
            </div>
            <h1 className="text-6xl md:text-[84px] leading-[0.95] font-black tracking-tighter text-white mb-8">
              Automate <br/> <span className="glow-text">Smarter</span> with AI.
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto">
              The ultimate neural workspace for high-velocity teams. Orchestrate workflows and predict bottlenecks before they happen.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={onCtaClick}
                className="btn-primary w-full sm:w-auto px-10"
              >
                Launch Dashboard
              </button>
              <button className="btn-secondary w-full sm:w-auto px-10">
                Book Demo
              </button>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-20 pt-10 border-t border-slate-800/50"
          >
            <p className="text-sm font-medium text-slate-500 uppercase tracking-[0.2em] mb-8">
              Trusted by innovative teams at
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {['TechFlow', 'Quantum', 'Nebula', 'Evolve', 'Nexus'].map((brand) => (
                <div key={brand} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-slate-700 animate-pulse" />
                  <span className="text-xl font-display font-bold text-slate-300">{brand}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Dashboard Mockup Preview */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-24 relative"
        >
          <div className="relative mx-auto max-w-5xl group">
            {/* Glow effect around mockup */}
            <div className="absolute -inset-4 bg-brand/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl relative border-slate-700/50">
              {/* Fake UI Header */}
              <div className="bg-slate-900/80 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="bg-slate-800 px-3 py-1 rounded text-[10px] text-slate-500 font-mono">
                  neuroflow.app/dashboard/analytics
                </div>
                <div className="w-12 h-2 bg-slate-800 rounded-full" />
              </div>
              
              {/* Fake Content Placeholder */}
              <div className="p-8 aspect-video bg-slate-950/20 backdrop-blur-3xl flex flex-col gap-6">
                <div className="flex gap-6">
                  <div className="w-1/3 h-32 rounded-xl bg-slate-800/50 animate-pulse" />
                  <div className="w-2/3 h-32 rounded-xl bg-slate-800/50 animate-pulse" />
                </div>
                <div className="flex-1 rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 p-6">
                   <div className="w-full h-full flex items-center justify-center">
                      <div className="flex flex-col items-center gap-4">
                        <Zap className="w-12 h-12 text-brand animate-bounce" />
                        <div className="h-4 w-48 bg-slate-700 rounded-full animate-pulse" />
                        <div className="h-4 w-32 bg-slate-800 rounded-full animate-pulse" />
                      </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="glass-card p-4 rounded-xl shadow-xl space-y-3 w-48 animate-[float_6s_ease-in-out_infinite]">
                 <div className="flex items-center gap-2">
                   <Shield className="w-4 h-4 text-green-500" />
                   <span className="text-[10px] uppercase font-bold text-slate-400">Security Check</span>
                 </div>
                 <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-[95%] bg-green-500" />
                 </div>
                 <span className="text-xs font-medium text-white italic">"Safe & Secure"</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
