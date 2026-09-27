import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { gymData } from '../data/gymData';
import MembershipCard from './MembershipCard';
import { Check, X, Shield, Info, HelpCircle } from 'lucide-react';

export default function Memberships({ onSelectPlan }) {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section id="membership" className="relative py-20 sm:py-28 bg-[#08080a] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-lime/[0.04] blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141a] border border-[#242432] text-brand-lime text-xs font-bold uppercase tracking-widest"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Transparent Pricing Models</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold uppercase text-white tracking-tight"
          >
            CHOOSE YOUR <span className="text-brand-lime">MEMBERSHIP</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed"
          >
            Flexible tier structures engineered for individual lifters, class devotees, and those seeking 1-on-1 coaching mentorship.
          </motion.p>

          {/* Authentic Membership Perks Pill */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#14141d] border border-brand-lime/30 text-zinc-300 text-xs shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-lime" />
              <span className="text-white font-medium">
                No Long-Term Contracts • Free Equipment Orientation Included
              </span>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {gymData.memberships.map((plan, index) => (
            <MembershipCard
              key={plan.id}
              plan={plan}
              index={index}
              onSelectPlan={onSelectPlan}
            />
          ))}
        </div>

        {/* Membership Comparison Area */}
        <div className="mt-16 pt-12 border-t border-[#242432]/60">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold uppercase text-white">
              PLAN COMPARISON AT A GLANCE
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Compare features side-by-side to choose the best fit for your athletic ambitions.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-[#242432] bg-[#101016]">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#242432] bg-[#161622]">
                  <th className="py-4 px-6 font-heading font-bold uppercase tracking-wider text-zinc-400 text-xs">
                    Features & Amenities
                  </th>
                  <th className="py-4 px-6 font-heading font-bold uppercase tracking-wider text-white text-xs text-center">
                    Starter
                  </th>
                  <th className="py-4 px-6 font-heading font-bold uppercase tracking-wider text-brand-lime text-xs text-center bg-brand-lime/10">
                    Performance (Popular)
                  </th>
                  <th className="py-4 px-6 font-heading font-bold uppercase tracking-wider text-white text-xs text-center">
                    Elite
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#242432]/50">
                {gymData.comparisonFeatures.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 text-zinc-300 font-medium flex items-center gap-2">
                      <span>{row.name}</span>
                    </td>
                    
                    {/* Starter */}
                    <td className="py-4 px-6 text-center">
                      {row.starter ? (
                        <div className="w-5 h-5 rounded-full bg-brand-lime/15 text-brand-lime flex items-center justify-center mx-auto">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-zinc-800/80 text-zinc-600 flex items-center justify-center mx-auto">
                          <X className="w-3 h-3 stroke-[2.5]" />
                        </div>
                      )}
                    </td>

                    {/* Performance */}
                    <td className="py-4 px-6 text-center bg-brand-lime/[0.03]">
                      {row.performance ? (
                        <div className="w-5 h-5 rounded-full bg-brand-lime/20 text-brand-lime flex items-center justify-center mx-auto">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-zinc-800/80 text-zinc-600 flex items-center justify-center mx-auto">
                          <X className="w-3 h-3 stroke-[2.5]" />
                        </div>
                      )}
                    </td>

                    {/* Elite */}
                    <td className="py-4 px-6 text-center">
                      {row.elite ? (
                        <div className="w-5 h-5 rounded-full bg-brand-lime/15 text-brand-lime flex items-center justify-center mx-auto">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-zinc-800/80 text-zinc-600 flex items-center justify-center mx-auto">
                          <X className="w-3 h-3 stroke-[2.5]" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Comparison Cards (No wide messy tables) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:hidden">
            {gymData.memberships.map((plan) => (
              <div
                key={plan.id}
                className="p-5 rounded-2xl bg-[#121218] border border-[#242432] space-y-3"
              >
                <div className="flex items-center justify-between border-b border-[#242432] pb-3">
                  <span className="font-heading font-extrabold uppercase text-white text-lg">
                    {plan.name}
                  </span>
                  <span className="text-brand-lime font-bold text-sm">
                    {plan.price}/mo
                  </span>
                </div>
                <div className="space-y-2 pt-1">
                  {gymData.comparisonFeatures.map((feat, i) => {
                    const hasFeat = feat[plan.id];
                    return (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className={hasFeat ? "text-zinc-200" : "text-zinc-500"}>
                          {feat.name}
                        </span>
                        {hasFeat ? (
                          <Check className="w-4 h-4 text-brand-lime" />
                        ) : (
                          <X className="w-3.5 h-3.5 text-zinc-600" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
