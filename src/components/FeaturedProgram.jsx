import React from 'react';
import { motion } from 'framer-motion';
import { gymData } from '../data/gymData';
import { ArrowRight, Check, Sparkles, Activity } from 'lucide-react';

export default function FeaturedProgram({ onOpenJoin }) {
  const { featuredProgram } = gymData;

  return (
    <section className="relative py-20 sm:py-28 bg-[#0b0b0f] border-y border-[#242432]/60 overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-brand-lime/5 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with layered badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#242432] shadow-2xl group">
              <img
                src={featuredProgram.image}
                alt="High intensity coaching at Forge Fitness"
                loading="lazy"
                className="w-full h-[450px] sm:h-[540px] object-cover object-center filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-80" />

              {/* Floating Floating Stat Badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto p-4 sm:p-5 rounded-2xl bg-[#14141a]/90 backdrop-blur-md border border-[#242432] shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-lime flex items-center justify-center text-black font-extrabold shadow-glow-lime-sm">
                  <Activity className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-brand-muted font-bold">Training Philosophy</div>
                  <div className="text-white font-heading font-bold text-sm sm:text-base">100% Periodized & Tracked</div>
                </div>
              </div>
            </div>

            {/* Accent decorative block */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border-r-2 border-b-2 border-brand-lime/40 pointer-events-none rounded-br-3xl -z-10 hidden sm:block" />
          </motion.div>

          {/* Right Column: Editorial Copy & 4 Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 space-y-6 sm:space-y-8"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161620] border border-brand-lime/40 text-brand-lime text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{featuredProgram.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase text-white tracking-tight leading-tight">
                {featuredProgram.title}
              </h2>
              <p className="text-lg sm:text-xl font-medium text-brand-lime">
                {featuredProgram.subtitle}
              </p>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                {featuredProgram.description}
              </p>
            </div>

            {/* 4 Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {featuredProgram.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#14141b] border border-[#242432]/70 hover:border-brand-lime/50 transition-colors"
                >
                  <div className="flex items-center gap-2 text-white font-heading font-bold text-sm uppercase">
                    <span className="w-5 h-5 rounded-full bg-brand-lime/20 text-brand-lime flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>{benefit.title}</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenJoin}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-brand-lime text-black font-heading font-extrabold text-sm uppercase tracking-wider hover:bg-brand-limeHover transition-all duration-300 shadow-glow-lime-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>CLAIM YOUR FREE ORIENTATION</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
