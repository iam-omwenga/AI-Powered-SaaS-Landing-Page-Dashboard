import { Cpu, Github, Twitter, Linkedin, Slack } from 'lucide-react';

export default function Footer() {
  const links = {
    Product: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Docs'],
    Company: ['About Us', 'Careers', 'Blog', 'Contact', 'Security'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'SLA'],
    Social: ['Twitter', 'GitHub', 'Discord', 'LinkedIn']
  };

  return (
    <footer className="bg-bg-dark pt-24 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tighter text-white">
                NeuroFlow<span className="text-brand">AI</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              The neural workflow platform for ambitious teams. Built for speed, scale, and security.
            </p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
              <Slack className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="col-span-1">
              <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">{title}</h4>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-500 hover:text-brand text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} NeuroFlow AI Inc. All rights reserved. Built with ❤️ for the future.
          </p>
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               <span className="text-slate-500 text-[10px] uppercase font-bold">Systems Operational</span>
             </div>
             <p className="text-slate-500 text-xs hover:text-white cursor-pointer transition-colors">Back to Top</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
