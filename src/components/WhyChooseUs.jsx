import React from 'react';
import { motion } from 'framer-motion';
import { gymData } from '../data/gymData';
import { Compass, ShieldAlert, TrendingUp, Flame, CheckCircle } from 'lucide-react';

const iconMap = {
  Compass,
  ShieldAlert,
  TrendingUp,
  Flame
};

export default function WhyChooseUs() {
  const { whyChooseUs } = gymData;

  return (
    <section id="why-us" className="relative py-20 sm:py-28 bg-[#08080a] overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-lime/[0.04] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141a] border border-[#242432] text-brand-lime text-xs font-bold uppercase tracking-widest"
          >
            <span>The Forge Standard</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold uppercase text-white tracking-tight"
          >
            WHY TRAIN <span className="text-brand-lime">WITH US?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed"
          >
            {whyChooseUs.subheading}
          </motion.p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.features.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || Flame;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-7 rounded-2xl bg-[#121218] border border-[#242432] hover:border-brand-lime/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-card-dark h-full"
              >
                {/* Header with Number and Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#1a1a24] group-hover:bg-brand-lime text-brand-lime group-hover:text-black flex items-center justify-center transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="font-heading font-extrabold text-2xl text-zinc-700 group-hover:text-brand-lime/40 transition-colors">
                      {feature.accent}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold uppercase text-white group-hover:text-brand-lime transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#242432]/60 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-brand-lime">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Principle</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom banner for realistic coaching expectations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-5 rounded-2xl bg-[#121218]/60 border border-[#242432]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-brand-lime animate-pulse" />
            <p className="text-xs sm:text-sm text-zinc-300">
              <strong className="text-white font-semibold">Honest Training Guarantee:</strong> We don't promise overnight shortcuts. We promise the tools, community, and progressive accountability to earn your transformation.
            </p>
          </div>
          <span className="text-[11px] uppercase tracking-wider text-brand-muted shrink-0">
            Scientifically Informed
          </span>
        </motion.div>

      </div>
    </section>
  );
}
