import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { 
  Users, 
  Zap, 
  TrendingUp, 
  AlertCircle, 
  Clock, 
  Search, 
  Bell,
  MoreVertical,
  Layers,
  CheckCircle2
} from 'lucide-react';

const data = [
  { name: 'Mon', active: 4000, optimized: 2400 },
  { name: 'Tue', active: 3000, optimized: 1398 },
  { name: 'Wed', active: 2000, optimized: 9800 },
  { name: 'Thu', active: 2780, optimized: 3908 },
  { name: 'Fri', active: 1890, optimized: 4800 },
  { name: 'Sat', active: 2390, optimized: 3800 },
  { name: 'Sun', active: 3490, optimized: 4300 },
];

const barData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'];

export default function DashboardOverview() {
  return (
    <div className="flex-1 ml-16 md:ml-64 p-4 md:p-8 bg-bg-dark min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-10 border-b border-white/5 pb-8">
        <div>
          <h1 className="text-3xl font-black mb-1">Global Performance / <span className="text-slate-500">Daily Metrics</span></h1>
          <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">v2.0 Neural Engine</p>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-600 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search neuroflow..." 
              className="bg-black/40 border border-white/5 rounded-full py-2 pl-10 pr-4 text-xs w-64 focus:outline-none focus:border-brand transition-colors text-white"
            />
          </div>
          <button className="relative w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
            <Bell className="w-5 h-5 text-slate-500" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-brand rounded-full border-2 border-[#050508]" />
          </button>
          <div className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 overflow-hidden cursor-pointer flex items-center justify-center text-xs font-black">SA</div>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Total Flows', value: '14,204', change: '+12%', icon: Zap, color: 'text-blue-500', bg: 'bg-blue-500/5' },
          { label: 'Active Bots', value: '92%', change: '+0.5%', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-500/5' },
          { label: 'Team Velocity', value: '42.8h', change: '-4.2h', icon: Clock, color: 'text-purple-500', bg: 'bg-purple-500/5' },
          { label: 'Latency Avg', value: '12ms', change: 'Stable', icon: CheckCircle2, color: 'text-cyan-500', bg: 'bg-cyan-500/5' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 rounded-2xl relative overflow-hidden group border-white/[0.06] bg-white/[0.03]"
          >
            <p className="text-gray-500 text-[10px] uppercase font-black tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-3xl font-bold text-white font-mono">{stat.value}</h3>
            
            <div className="mt-4 flex items-center justify-between">
               <div className={cn("text-[10px] font-black px-2 py-0.5 rounded-md", 
                  stat.change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-500' : 
                  stat.change === 'Stable' ? 'bg-slate-800 text-slate-500' : 'bg-brand/10 text-brand'
                )}>
                  {stat.change}
                </div>
                <stat.icon className={cn("w-4 h-4 opacity-20", stat.color)} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Analytics Main Section */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="col-span-2 glass-card p-8 rounded-3xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-xl font-bold text-white">Efficiency Trends</h3>
              <p className="text-sm text-slate-500 tracking-tight">Performance comparison over the last 7 days.</p>
            </div>
            <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800">
               <button className="px-3 py-1 text-xs font-bold bg-slate-800 text-white rounded-md shadow-sm">Active</button>
               <button className="px-3 py-1 text-xs font-bold text-slate-500 hover:text-slate-300">Optimized</button>
            </div>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#3b82f6' }}
                />
                <Area type="monotone" dataKey="active" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorActive)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-1 glass-card p-8 rounded-3xl flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-white">Volume Share</h3>
            <MoreVertical className="w-5 h-5 text-slate-500" />
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
            <div className="h-[180px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {barData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-8 space-y-4">
               {['Automations', 'Research', 'Security', 'Support'].map((item, i) => (
                  <div key={item} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: COLORS[i] }} />
                       <span className="text-sm font-medium text-slate-400">{item}</span>
                    </div>
                    <span className="text-sm font-bold text-white">{[65, 20, 10, 5][i]}%</span>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-8 rounded-3xl">
           <h3 className="text-xl font-bold text-white mb-6">Active Workflows</h3>
           <div className="space-y-6">
             {[
               { name: 'Core Pipeline v.12', status: 'Running', count: '450 ops/m', icon: Layers, color: 'text-blue-500' },
               { name: 'Neural Data Sync', status: 'Syncing', count: '1.2k ops/m', icon: Zap, color: 'text-purple-500' },
               { name: 'User Growth Pulse', status: 'Review', count: '12 ops/m', icon: Users, color: 'text-emerald-500' },
             ].map((workflow) => (
               <div key={workflow.name} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer group">
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <workflow.icon className={cn("w-5 h-5", workflow.color)} />
                   </div>
                   <div>
                     <h4 className="text-sm font-bold text-white">{workflow.name}</h4>
                     <p className="text-xs text-slate-500">{workflow.status}</p>
                   </div>
                 </div>
                 <div className="text-right">
                   <p className="text-sm font-mono text-slate-300">{workflow.count}</p>
                   <div className="h-1 w-24 bg-slate-800 rounded-full mt-2 overflow-hidden">
                      <div className="h-full w-[70%] bg-brand" />
                   </div>
                 </div>
               </div>
             ))}
           </div>
           <button className="w-full mt-6 py-3 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 text-slate-400 font-bold text-xs rounded-xl transition-all uppercase tracking-widest">
             See All Workflows
           </button>
        </div>

        <div className="glass-card p-8 rounded-3xl">
           <div className="flex items-center gap-2 mb-6">
             <AlertCircle className="w-5 h-5 text-brand" />
             <h3 className="text-xl font-bold text-white">AI Recommendations</h3>
           </div>
           <div className="space-y-4">
             {[
               "Consolidate 'Core Pipeline' nodes to save 12% compute power.",
               "Optimize team routing for 'Support' workflows (High latency detected).",
               "New neural model v2.1 ready for deployment. Expected accuracy jump +4%.",
               "Security audit suggested for 'External Gateway' credentials."
             ].map((tip, i) => (
               <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-slate-900/40 transition-colors">
                  <div className="mt-1 w-2 h-2 rounded-full bg-brand flex-shrink-0" />
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">
                    {tip}
                  </p>
               </div>
             ))}
           </div>
           <div className="mt-8 p-4 bg-brand/5 border border-brand/10 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-brand" />
                </div>
                <div>
                   <p className="text-[10px] uppercase font-bold text-brand tracking-widest">Optimization score</p>
                   <p className="text-lg font-bold text-white">92.4 <span className="text-slate-500 text-xs">/ 100</span></p>
                </div>
              </div>
              <button className="btn-primary !py-2 !px-4 text-xs">Apply AutoFix</button>
           </div>
        </div>
      </div>
    </div>
  );
}
