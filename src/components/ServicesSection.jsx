import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gymData } from '../data/gymData';
import { Target, CheckCircle2, ArrowRight, Zap, Clock, Shield, Sparkles } from 'lucide-react';

const serviceCategories = [
  { id: 'all', label: 'All Services', count: 6 },
  { id: 'muscle', label: 'Muscle Building', count: 2 },
  { id: 'fat-loss', label: 'Fat Loss & Cardio', count: 2 },
  { id: 'strength', label: 'Strength & Power', count: 1 },
  { id: 'personal', label: 'Personal Coaching', count: 1 },
];

export default function ServicesSection({ onSelectService, activeGoalFilter }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = gymData.programs.filter((prog) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'muscle') return prog.id === 'muscle-building' || prog.id === 'group-training';
    if (selectedCategory === 'fat-loss') return prog.id === 'fat-loss' || prog.id === 'functional-fitness';
    if (selectedCategory === 'strength') return prog.id === 'strength-training';
    if (selectedCategory === 'personal') return prog.id === 'personal-training';
    return true;
  });

  return (
    <section
      id="services"
      className="relative py-20 sm:py-28 bg-[#0b0c12] border-t border-[#242432]/70 overflow-hidden"
    >
      {/* Visual Contrast: Ambient Diagonal Lime Light Cones */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-brand-lime/[0.06] blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-20 left-10 w-[500px] h-[300px] bg-emerald-500/[0.04] blur-[150px] pointer-events-none rounded-full" />

      {/* Carbon Texture */}
      <div className="absolute inset-0 bg-subtle-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Bold & Customer-Focused */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151622] border border-brand-lime/40 text-brand-lime text-xs font-bold uppercase tracking-widest shadow-glow-lime-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHAT WE PROVIDE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold uppercase text-white tracking-tight leading-tight"
          >
            SERVICES DESIGNED FOR <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-[#d8ff33] to-white">
              YOUR EXACT GOAL
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto"
          >
            No generic routines. Every service includes hands-on coach guidance on the floor, structured progression, and free access to our calibrated weights.
          </motion.p>

          {/* Interactive Goal Filter Tabs */}
          <div className="pt-4 flex items-center justify-center flex-wrap gap-2">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-brand-lime text-black shadow-glow-lime-sm scale-105'
                    : 'bg-[#151622] text-zinc-400 hover:text-white border border-[#242432]'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Services Cards Grid with Rich Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.article
                key={service.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group relative rounded-3xl overflow-hidden bg-[#13141d] border border-[#252636] hover:border-brand-lime/60 transition-all duration-300 flex flex-col justify-between hover:shadow-card-dark"
              >
                {/* Visual Top Image with Status Overlays */}
                <div className="relative h-52 sm:h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13141d] via-[#13141d]/50 to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-heading font-extrabold uppercase tracking-wider bg-black/80 backdrop-blur-md text-brand-lime border border-[#2e2f42]">
                      {service.category}
                    </span>
                  </div>

                  {/* Highlights Badge */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-[11px] text-zinc-200">
                    <span className="flex items-center gap-1.5 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                      <Clock className="w-3.5 h-3.5 text-brand-lime" />
                      <span>{service.duration}</span>
                    </span>
                    <span className="flex items-center gap-1.5 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                      <Zap className="w-3.5 h-3.5 text-brand-lime" />
                      <span>{service.intensity} Intensity</span>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold uppercase text-white group-hover:text-brand-lime transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-300 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables / What is Included */}
                  <div className="space-y-2 pt-3 border-t border-[#252636]">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-brand-lime font-bold">
                      WHAT YOU GET:
                    </div>
                    {service.focus.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime shrink-0 stroke-[2.5]" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Direct Action Button */}
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="w-full mt-2 flex items-center justify-between px-4 py-3 rounded-xl bg-[#1b1c28] group-hover:bg-brand-lime text-white group-hover:text-black font-heading font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer"
                  >
                    <span>SELECT THIS FOR FREE 1-DAY PASS</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
