import React from 'react';
import { motion } from 'framer-motion';
import { gymData } from '../data/gymData';
import ProgramCard from './ProgramCard';
import { Target } from 'lucide-react';

export default function Programs({ onSelectProgram }) {
  return (
    <section id="programs" className="relative py-20 sm:py-28 bg-[#08080a] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-lime/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141a] border border-[#242432] text-brand-lime text-xs font-bold uppercase tracking-widest"
          >
            <Target className="w-3.5 h-3.5" />
            <span>Targeted Training Disciplines</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold uppercase text-white tracking-tight"
          >
            TRAIN WITH <span className="text-brand-lime">PURPOSE</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed"
          >
            Whether you're starting from zero or pushing toward your next personal best, choose a program built around your goals.
          </motion.p>
        </div>

        {/* 6 Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {gymData.programs.map((program, index) => (
            <ProgramCard
              key={program.id}
              program={program}
              index={index}
              onSelectProgram={onSelectProgram}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
