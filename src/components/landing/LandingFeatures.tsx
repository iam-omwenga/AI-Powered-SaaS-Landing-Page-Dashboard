import { motion } from 'motion/react';
import { 
  BarChart3, 
  BrainCircuit, 
  Layers, 
  MessageSquareCode, 
  PieChart, 
  Workflow 
} from 'lucide-react';

const features = [
  {
    icon: BrainCircuit,
    title: 'Neural Automation',
    description: 'Advanced AI models that learn from your team\'s workflow patterns to automate repetitive data entry and task routing.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    icon: Workflow,
    title: 'Visual Flow Builder',
    description: 'Design complex multi-step automations with a beautiful drag-and-drop interface. No coding required.',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10'
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Stay ahead of deadlines with AI-driven forecasting. Identify potential project bottlenecks before they happen.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  },
  {
    icon: MessageSquareCode,
    title: 'Smart AI Chatbot',
    description: 'A contextual assistant that helps your team find information, schedule meetings, and update project statuses via natural language.',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10'
  },
  {
    icon: Layers,
    title: 'Seamless Integrations',
    description: 'Connect NeuroFlow with over 500+ apps like Slack, Jira, Salesforce, and Google Workspace in minutes.',
    color: 'text-pink-500',
    bg: 'bg-pink-500/10'
  },
  {
    icon: PieChart,
    title: 'Smart Reporting',
    description: 'Automated executive summaries and deep-dive performance reports delivered directly to your inbox.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10'
  }
];

export default function LandingFeatures() {
  return (
    <section id="features" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Powerful Features for <br />
              <span className="text-slate-400">Modern Workforces</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Everything you need to streamline your operations and unleash your team's creative potential.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-8 rounded-3xl group hover:border-brand/50 transition-all hover:-translate-y-2"
            >
              <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
