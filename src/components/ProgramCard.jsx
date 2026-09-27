import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Zap, CheckCircle2 } from 'lucide-react';

export default function ProgramCard({ program, index, onSelectProgram }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl overflow-hidden bg-[#121218] border border-[#242432] hover:border-brand-lime/50 transition-all duration-500 flex flex-col justify-between hover:shadow-card-dark hover:-translate-y-1.5 h-full"
    >
      {/* Top Image Container with Zoom Effect */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          loading="lazy"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-110 group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121218] via-[#121218]/40 to-transparent" />
        
        {/* Category Pill */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md border border-[#242432] text-brand-lime group-hover:border-brand-lime/60 transition-colors">
            {program.category}
          </span>
        </div>

        {/* Quick Specs */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-zinc-300 font-medium">
          <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
            <Clock className="w-3.5 h-3.5 text-brand-lime" />
            {program.duration}
          </span>
          <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
            <Zap className="w-3.5 h-3.5 text-brand-lime" />
            {program.intensity}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-heading font-extrabold uppercase text-white group-hover:text-brand-lime transition-colors">
            {program.title}
          </h3>
          <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
            {program.description}
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="space-y-1.5 pt-2 border-t border-[#242432]/60">
          {program.focus.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime shrink-0" />
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          type="button"
          onClick={() => onSelectProgram(program.title)}
          className="mt-4 w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#1a1a24] text-white group-hover:bg-brand-lime group-hover:text-black font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300"
        >
          <span>Enroll / Inquire</span>
          <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-black/10 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </div>
        </button>
      </div>
    </motion.article>
  );
}
