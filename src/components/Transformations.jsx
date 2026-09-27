import React from 'react';
import { motion } from 'framer-motion';
import { gymData } from '../data/gymData';
import { Trophy, Clock, CheckCircle, Info, Quote } from 'lucide-react';

export default function Transformations() {
  return (
    <section id="results" className="relative py-20 sm:py-28 bg-[#0a0a0f] border-t border-[#242432]/60 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-lime/[0.03] blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141a] border border-[#242432] text-brand-lime text-xs font-bold uppercase tracking-widest"
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Real Training Consistency</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold uppercase text-white tracking-tight"
          >
            YOUR PROGRESS. <span className="text-brand-lime">YOUR STORY.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed"
          >
            True transformation happens through disciplined habits, proper mechanics, and weekly commitment.
          </motion.p>

          {/* Milestone Indicator */}
          <div className="pt-2 flex justify-center">
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-300 bg-[#12121a] px-3.5 py-1.5 rounded-full border border-brand-lime/30">
              <span className="w-2 h-2 rounded-full bg-brand-lime" />
              <span>Documented Member Milestones • Progressive Overload & Consistency</span>
            </span>
          </div>
        </div>

        {/* 3 Transformation Journey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gymData.transformations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative rounded-3xl overflow-hidden bg-[#121218] border border-[#242432] hover:border-brand-lime/60 transition-all duration-500 flex flex-col justify-between hover:shadow-card-dark hover:-translate-y-1.5 h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121218] via-[#121218]/40 to-transparent" />

                {/* Journey Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md border border-brand-lime/40 text-brand-lime">
                    {item.label}
                  </span>
                </div>

                {/* Timeline pill */}
                <div className="absolute bottom-3 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-sm text-xs font-semibold text-zinc-300">
                  <Clock className="w-3.5 h-3.5 text-brand-lime" />
                  <span>{item.timeline}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-lime">
                    {item.focus}
                  </div>
                  <h3 className="text-2xl font-heading font-extrabold uppercase text-white mt-1 group-hover:text-brand-lime transition-colors">
                    {item.title}
                  </h3>

                  {/* Quote */}
                  <div className="mt-3 relative pl-4 border-l-2 border-brand-lime/40 text-xs sm:text-sm text-zinc-300 italic">
                    "{item.quote}"
                  </div>
                </div>

                {/* Verified Metrics Chips */}
                <div className="pt-4 border-t border-[#242432]/60 grid grid-cols-3 gap-2">
                  {item.stats.map((stat, i) => (
                    <div key={i} className="p-2 rounded-xl bg-[#191924] border border-[#242432]/60 text-center">
                      <div className="text-xs sm:text-sm font-heading font-extrabold text-white">
                        {stat.value}
                      </div>
                      <div className="text-[10px] uppercase font-bold tracking-tight text-zinc-400 mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
