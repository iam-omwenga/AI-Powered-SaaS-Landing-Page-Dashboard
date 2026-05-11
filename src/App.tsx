/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/common/Navbar';
import LandingHero from './components/landing/LandingHero';
import LandingFeatures from './components/landing/LandingFeatures';
import LandingPricing from './components/landing/LandingPricing';
import Footer from './components/common/Footer';
import DashboardSidebar from './components/dashboard/DashboardSidebar';
import DashboardOverview from './components/dashboard/DashboardOverview';

type ViewMode = 'landing' | 'dashboard';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('landing');

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [viewMode]);

  return (
    <div className="min-h-screen bg-bg-dark selection:bg-brand/30 selection:text-white">
      <AnimatePresence mode="wait">
        {viewMode === 'landing' ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden"
          >
            {/* Theme Background Glows */}
            <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="absolute bottom-[200px] right-[-100px] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

            <Navbar onDashboardClick={() => setViewMode('dashboard')} isLanding={true} />
            <main>
              <LandingHero onCtaClick={() => setViewMode('dashboard')} />
              <LandingFeatures />
              
              {/* Extra Landing Section - Statistics */}
              <section className="py-24 bg-slate-900/20 border-y border-slate-900">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { label: 'Users Worldwide', value: '450k+' },
                    { label: 'Workflows Created', value: '12M+' },
                    { label: 'Hours Saved', value: '2.5M' },
                    { label: 'Uptime', value: '99.99%' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-4xl md:text-5xl font-display font-extrabold text-white mb-2">{stat.value}</p>
                      <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </section>

              <LandingPricing />

              {/* Call to Action Section */}
              <section className="py-24">
                <div className="max-w-5xl mx-auto px-4 px-8 py-16 glass-card rounded-[3rem] text-center relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand/5 to-purple-600/5 pointer-events-none" />
                   <div className="relative z-10">
                      <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Ready to accelerate your <br /> <span className="glow-text">workflow?</span></h2>
                      <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                        Join thousands of high-performing teams who are scaling faster with NeuroFlow AI.
                      </p>
                      <button 
                        onClick={() => setViewMode('dashboard')}
                        className="btn-primary text-xl px-12 py-5"
                      >
                        Get Started for Free
                      </button>
                   </div>
                </div>
              </section>
            </main>
            <Footer />
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex"
          >
            <DashboardSidebar onLogout={() => setViewMode('landing')} />
            <DashboardOverview />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
