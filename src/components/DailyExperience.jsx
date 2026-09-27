import React from 'react';
import { motion } from 'framer-motion';
import { gymData } from '../data/gymData';
import { DoorOpen, Flame, Dumbbell, ClipboardCheck, HeartPulse, Repeat, Sparkles } from 'lucide-react';

const iconMap = {
  DoorOpen,
  Flame,
  Dumbbell,
  ClipboardCheck,
  HeartPulse,
  Repeat
};

export default function DailyExperience() {
  const { dailyExperience } = gymData;

  return (
    <section className="relative py-20 sm:py-28 bg-[#0b0b10] border-t border-[#242432]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141a] border border-[#242432] text-brand-lime text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Daily Protocol</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold uppercase text-white tracking-tight"
          >
            SHOW UP. TRAIN HARD. <br className="hidden sm:inline" />
            <span className="text-brand-lime">LEAVE STRONGER.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed"
          >
            {dailyExperience.subheading}
          </motion.p>
        </div>

        {/* 6 Step Sequence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {dailyExperience.steps.map((item, index) => {
            const Icon = iconMap[item.iconName] || Dumbbell;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-7 rounded-3xl bg-[#121218] border border-[#242432] hover:border-brand-lime/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-dark flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#191924] group-hover:bg-brand-lime text-brand-lime group-hover:text-black flex items-center justify-center transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="font-heading font-extrabold text-2xl text-zinc-700 group-hover:text-brand-lime/40 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-extrabold uppercase text-white group-hover:text-brand-lime transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#242432]/60 flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-zinc-500 group-hover:text-brand-lime transition-colors">
                  <span>Phase {item.step}</span>
                  <span className="text-brand-lime">• Active Protocol</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
