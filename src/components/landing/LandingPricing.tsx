import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for individuals and small proof-of-concept projects.',
    features: [
      '3 Automated Workflows',
      'Basic AI Predictions',
      '500 Actions per month',
      'Standard Support',
      'Community Access'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Pro',
    price: '$49',
    description: 'Scaled automation for growing teams and startups.',
    features: [
      'Unlimited Workflows',
      'Advanced Neural Models',
      '10,000 Actions per month',
      'Priority Email Support',
      'Team Collaboration Tools',
      'Custom API Access'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Bespoke solutions for large organizations with complex needs.',
    features: [
      'SLA Guarantees',
      'Dedicated Account Manager',
      'Unlimited Actions',
      'SSO & Advanced Security',
      'Custom Training Models',
      'On-premise Deployment'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export default function LandingPricing() {
  return (
    <section id="pricing" className="py-24 bg-bg-dark relative overflow-hidden">
       {/* Background decorative blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand/10 blur-[150px] rounded-full -mr-64 -mb-64 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Choose the plan that's right for you. All plans include a 14-day free trial.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-10 rounded-3xl relative flex flex-col ${
                plan.popular ? 'border-brand shadow-[0_0_40px_rgba(59,130,246,0.1)]' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-brand rounded-full text-xs font-bold text-white uppercase tracking-widest shadow-[0_0_15px_var(--color-brand-glow)]">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-slate-500 font-medium">/mo</span>}
                </div>
                <p className="text-slate-400 mt-4 text-sm leading-relaxed min-h-[48px]">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-brand" />
                    </div>
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  plan.popular
                    ? 'btn-primary'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                }`}
              >
                {plan.cta} {plan.popular && <ArrowRight className="w-4 h-4" />}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
