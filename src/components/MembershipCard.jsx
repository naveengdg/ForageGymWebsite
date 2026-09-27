import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Sparkles, ArrowRight } from 'lucide-react';

export default function MembershipCard({ plan, index, onSelectPlan }) {
  const isPopular = plan.popular;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 h-full ${
        isPopular
          ? 'bg-gradient-to-b from-[#181824] via-[#14141e] to-[#0e0e14] border-2 border-brand-lime shadow-glow-lime sm:-translate-y-3 z-10'
          : 'bg-[#121218] border border-[#242432] hover:border-brand-lime/40 hover:-translate-y-1'
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 rounded-full bg-brand-lime text-black font-heading font-extrabold text-[11px] uppercase tracking-widest flex items-center gap-1.5 shadow-md">
            <Sparkles className="w-3.5 h-3.5 fill-black" />
            {plan.badge}
          </span>
        </div>
      )}

      {!isPopular && plan.badge && (
        <div className="absolute -top-3 left-6">
          <span className="px-3 py-0.5 rounded-full bg-[#1e1e2c] border border-[#2e2e42] text-zinc-300 font-heading font-bold text-[10px] uppercase tracking-wider">
            {plan.badge}
          </span>
        </div>
      )}

      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-heading font-extrabold uppercase text-white tracking-wide">
            {plan.name}
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-zinc-400 mt-2 min-h-[40px] leading-relaxed">
          {plan.description}
        </p>

        {/* Price Tag */}
        <div className="mt-6 mb-6 p-4 rounded-2xl bg-[#0a0a0e]/80 border border-[#242432]/60 flex items-baseline gap-2">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            {plan.price}
          </span>
          <span className="text-xs sm:text-sm text-brand-muted font-medium">
            / {plan.billing.replace('per ', '')}
          </span>
        </div>

        {/* Feature List */}
        <div className="space-y-3 pt-2">
          <div className="text-[11px] uppercase tracking-wider font-bold text-zinc-400">
            What's Included:
          </div>
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-200">
              <div className="w-4 h-4 rounded-full bg-brand-lime/15 text-brand-lime flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>{feature}</span>
            </div>
          ))}

          {/* Not included items */}
          {plan.notIncluded && plan.notIncluded.length > 0 && (
            <div className="pt-2 space-y-2 border-t border-[#242432]/40">
              {plan.notIncluded.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-zinc-500">
                  <div className="w-4 h-4 rounded-full bg-zinc-800 text-zinc-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-8 pt-4">
        <button
          type="button"
          onClick={() => onSelectPlan(plan.name)}
          className={`w-full py-3.5 px-6 rounded-xl font-heading font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
            isPopular
              ? 'bg-brand-lime text-black hover:bg-brand-limeHover shadow-glow-lime-sm hover:scale-[1.02]'
              : 'bg-[#1a1a24] text-white hover:bg-brand-lime hover:text-black hover:scale-[1.01]'
          }`}
        >
          <span>{plan.ctaText}</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </motion.div>
  );
}
