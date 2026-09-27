import React from 'react';
import { motion } from 'framer-motion';
import { gymData } from '../data/gymData';
import TrainerCard from './TrainerCard';
import { Users, Info } from 'lucide-react';

export default function Trainers({ onSelectTrainer }) {
  return (
    <section id="trainers" className="relative py-20 sm:py-28 bg-[#0b0b10] border-t border-[#242432]/60 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-lime/[0.04] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-brand-lime/[0.03] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141a] border border-[#242432] text-brand-lime text-xs font-bold uppercase tracking-widest"
          >
            <Users className="w-3.5 h-3.5" />
            <span>Dedicated Coaching Roster</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold uppercase text-white tracking-tight"
          >
            MEET YOUR <span className="text-brand-lime">COACHES</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed"
          >
            Head coaches certified in human biomechanics, compound barbell lifts, and high-performance athletic conditioning.
          </motion.p>
        </div>

        {/* 3 Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {gymData.trainers.map((trainer, index) => (
            <TrainerCard
              key={trainer.id}
              trainer={trainer}
              index={index}
              onSelectTrainer={onSelectTrainer}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
