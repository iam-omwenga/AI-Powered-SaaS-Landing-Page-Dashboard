import { motion } from 'motion/react';
import { Cpu, Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

interface NavbarProps {
  onDashboardClick: () => void;
  isLanding?: boolean;
}

export default function Navbar({ onDashboardClick, isLanding = true }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Company', href: '#company' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/80 backdrop-blur-md border-bottom border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform">
              <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
            </div>
            <span className="font-display font-bold text-xl tracking-tighter text-white">
              NeuroFlow<span className="text-brand underline decoration-2 underline-offset-4">AI</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          {isLanding && (
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold text-slate-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-bold text-slate-300 hover:text-white transition-colors">
              Log in
            </button>
            <button 
              onClick={onDashboardClick}
              className="px-5 py-2 bg-white text-black rounded-full text-xs font-black hover:bg-brand hover:text-white transition-all uppercase"
            >
              Start Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-bg-dark border-t border-slate-800 p-4 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-base font-medium text-slate-400 hover:text-brand px-3 py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <button className="text-center w-full py-3 text-slate-300 border border-slate-700 rounded-full">
              Log in
            </button>
            <button 
              onClick={() => {
                onDashboardClick();
                setIsOpen(false);
              }}
              className="btn-primary w-full"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
