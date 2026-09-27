import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Zap, Sparkles, ArrowRight, Flame } from 'lucide-react';

const pricingPlans = [
  {
    id: "monthly",
    name: "1-Month Access",
    badge: "Flexible",
    price: "1,999",
    billing: "Billed monthly • No contract",
    description: "Ideal for short-term training or testing out our lifting floor.",
    popular: false,
    features: [
      "Full gym floor & barbell access",
      "5:30 AM – 10:00 PM operating hours",
      "Free locker & shower facilities",
      "Floor trainer form guidance",
      "Workout routine chart",
    ],
    ctaText: "Select 1-Month Plan"
  },
  {
    id: "annual",
    name: "Annual Pro Pass",
    badge: "MOST POPULAR • BEST VALUE",
    price: "1,249",
    totalPrice: "₹14,999 / year (Save ₹9,000)",
    billing: "Calculated at ₹1,249/month",
    description: "For serious individuals committed to a long-term transformation habit.",
    popular: true,
    features: [
      "Unlimited gym floor & turf access",
      "Priority equipment & locker allocation",
      "Free 1-on-1 personal training session",
      "Monthly body composition audit",
      "Free guest passes (2 per quarter)",
      "Freeze membership up to 30 days",
      "Dedicated WhatsApp coach support",
    ],
    ctaText: "GET ANNUAL PRO PASS"
  },
  {
    id: "quarterly",
    name: "3-Month Momentum",
    badge: "Habit Builder",
    price: "1,666",
    totalPrice: "₹4,999 billed quarterly",
    billing: "Calculated at ₹1,666/month",
    description: "The ideal 90-day window to build real physical momentum and see results.",
    popular: false,
    features: [
      "Full floor & turf access 6 days/week",
      "Free locker & shower access",
      "Bi-weekly progress check-ins",
      "Custom periodized workout plan",
      "Trainer form audits",
    ],
    ctaText: "Select 3-Month Plan"
  }
];

export default function PricingSection({ onSelectPlan }) {
  return (
    <section id="pricing" className="relative py-20 sm:py-28 bg-[#090a0f] border-t border-[#242432]/70 overflow-hidden">
      {/* Visual Contrast: Ambient Focal Glow behind Popular Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-brand-lime/[0.08] blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151622] border border-brand-lime/40 text-brand-lime text-xs font-bold uppercase tracking-widest shadow-glow-lime-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT MEMBERSHIP</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold uppercase text-white tracking-tight"
          >
            HONEST PRICING. <span className="text-brand-lime">ZERO HIDDEN FEES.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-zinc-300 font-light max-w-2xl mx-auto"
          >
            Choose a plan that fits your schedule. No admission charges, no maintenance surcharges.
          </motion.p>
        </div>

        {/* 3 Pricing Cards Grid with the Hero Card visually standing out */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {pricingPlans.map((plan, index) => {
            const isPop = plan.popular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                  isPop
                    ? 'bg-[#151722] border-2 border-brand-lime shadow-glow-lime lg:-translate-y-3 z-20'
                    : 'bg-[#111219] border border-[#26283b] hover:border-zinc-500'
                }`}
              >
                {/* Popular Header Pill */}
                {isPop && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-brand-lime text-black font-heading font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                    <Flame className="w-3.5 h-3.5 fill-black stroke-black" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div className="p-6 sm:p-8 space-y-6">
                  {/* Title & Badge */}
                  <div className="space-y-1">
                    {!isPop && (
                      <span className="px-2.5 py-0.5 rounded-md bg-[#1d1f2e] text-[10px] font-heading font-bold uppercase tracking-wider text-zinc-400">
                        {plan.badge}
                      </span>
                    )}
                    <h3 className="text-2xl font-heading font-extrabold uppercase text-white mt-2">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-zinc-400 font-light">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="pt-2 pb-4 border-y border-[#26283b]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-heading font-bold text-brand-lime">₹</span>
                      <span className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs text-zinc-400 uppercase font-mono">/ month</span>
                    </div>
                    {plan.totalPrice && (
                      <div className="text-xs text-brand-lime font-mono font-bold mt-1">
                        {plan.totalPrice}
                      </div>
                    )}
                    <div className="text-[11px] text-zinc-400 font-light mt-0.5">
                      {plan.billing}
                    </div>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-2.5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold">
                      INCLUDED IN THIS PLAN:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isPop ? 'bg-brand-lime text-black' : 'bg-brand-lime/20 text-brand-lime'
                        }`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 sm:p-8 pt-0">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-4 rounded-xl font-heading font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      isPop
                        ? 'bg-brand-lime text-black hover:bg-brand-limeHover shadow-glow-lime hover:scale-[1.02]'
                        : 'bg-[#1e202f] hover:bg-brand-lime hover:text-black text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Confidence Assurance Strip */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#12131b] border border-[#242432] grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          <div className="text-xs text-zinc-300">
            <span className="font-bold text-white block">Zero Registration Fee</span>
            <span className="text-[10px] text-zinc-400">Save ₹1,500 on enrollment</span>
          </div>
          <div className="text-xs text-zinc-300">
            <span className="font-bold text-white block">Free Day 1 Pass</span>
            <span className="text-[10px] text-zinc-400">Try before committing</span>
          </div>
          <div className="text-xs text-zinc-300">
            <span className="font-bold text-white block">Locker & Showers</span>
            <span className="text-[10px] text-zinc-400">Included in all tiers</span>
          </div>
          <div className="text-xs text-zinc-300">
            <span className="font-bold text-white block">Coach Guidance</span>
            <span className="text-[10px] text-zinc-400">Floor trainers on duty</span>
          </div>
        </div>

      </div>
    </section>
  );
}
