import { 
  Home, 
  BarChart2, 
  Users, 
  Layers, 
  Settings, 
  HelpCircle, 
  LogOut, 
  Cpu, 
  Zap, 
  ShieldCheck,
  Bell
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const sidebarLinks = [
  { icon: Home, label: 'Overview', active: true },
  { icon: BarChart2, label: 'Analytics' },
  { icon: Layers, label: 'Workflows' },
  { icon: Users, label: 'Team' },
  { icon: ShieldCheck, label: 'Security' },
  { icon: Settings, label: 'Settings' },
];

export default function DashboardSidebar({ onLogout }: { onLogout: () => void }) {
  return (
    <aside className="w-16 md:w-64 flex-shrink-0 bg-black/40 backdrop-blur-xl border-r border-white/5 flex flex-col h-screen fixed top-0 left-0 z-40">
      <div className="p-4 md:p-6 flex flex-col items-center md:items-stretch">
        <div className="flex items-center gap-2 mb-10 group cursor-pointer" onClick={() => window.location.reload()}>
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
          </div>
          <span className="hidden md:inline font-display font-bold text-xl tracking-tighter text-white">
            NeuroFlow<span className="text-brand underline decoration-2 underline-offset-4">AI</span>
          </span>
        </div>

        <nav className="space-y-2">
          {sidebarLinks.map((link) => (
            <button
              key={link.label}
              className={cn(
                "w-full flex items-center justify-center md:justify-start gap-3 p-3 md:px-4 md:py-3 rounded-xl transition-all duration-200 group text-sm font-bold",
                link.active 
                  ? "bg-blue-500/20 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.1)] border border-blue-500/10" 
                  : "text-slate-600 hover:text-white hover:bg-white/5"
              )}
            >
              <link.icon className={cn("w-5 h-5", link.active ? "text-blue-400" : "text-slate-600 group-hover:text-slate-400")} />
              <span className="hidden md:inline">{link.label}</span>
              {link.label === 'Workflows' && link.active && (
                <span className="ml-auto hidden md:flex h-2 w-2 rounded-full bg-brand animate-pulse" />
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-4 md:p-6 space-y-6">
        <div className="hidden md:block bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-5">
           <div className="flex items-center gap-3 mb-3">
             <div className="px-2 py-1 bg-blue-500 text-[9px] font-black rounded uppercase text-white shadow-sm">AI Live</div>
             <span className="text-[10px] font-black text-white uppercase tracking-widest">NeuroFlow v2.0</span>
           </div>
           <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
             Neural Intelligence Prediction: Expected efficiency increase of 24% next sprint.
           </p>
           <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-[92%] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
           </div>
        </div>

        <div className="space-y-1">
          <button className="w-full flex items-center justify-center md:justify-start gap-3 p-3 md:px-4 md:py-3 text-slate-600 hover:text-white hover:bg-white/5 rounded-xl transition-all text-sm font-bold">
            <HelpCircle className="w-5 h-5" />
            <span className="hidden md:inline">Support</span>
          </button>
          <button 
            onClick={onLogout}
            className="w-full flex items-center justify-center md:justify-start gap-3 p-3 md:px-4 md:py-3 text-red-500/50 hover:text-red-400 hover:bg-red-500/5 rounded-xl transition-all text-sm font-bold"
          >
            <LogOut className="w-5 h-5" />
            <span className="hidden md:inline">Sign Out</span>
          </button>
        </div>

        <div className="pt-4 border-t border-white/5">
           <a 
            href="https://fitiweso.lovable.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block w-full"
          >
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 transform transition-all duration-500 hover:scale-[1.05] hover:-rotate-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(59,130,246,0.1)] relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <p className="text-[8px] uppercase font-black tracking-widest text-slate-500 mb-1 group-hover:text-blue-400 transition-colors">Digital Architects</p>
               <p className="text-[9px] font-bold text-slate-400 group-hover:text-white leading-tight transition-colors">
                 <span className="hidden md:inline">Financial Times Web Solutions and Consultants</span>
                 <span className="md:hidden">FTWSC</span>
               </p>
               
               {/* 3D Accents */}
               <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-blue-500/20 group-hover:bg-blue-500 transition-colors shadow-[0_0_5px_rgba(59,130,246,0.5)]" />
            </div>
           </a>
        </div>
      </div>
    </aside>
  );
}
