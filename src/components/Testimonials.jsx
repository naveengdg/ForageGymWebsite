import React from 'react';
import { motion } from 'framer-motion';
import { gymData } from '../data/gymData';
import { Star, MessageSquareQuote, Info, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#0b0b10] border-t border-[#242432]/60 overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-lime/[0.03] blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141a] border border-[#242432] text-brand-lime text-xs font-bold uppercase tracking-widest"
          >
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Community Culture</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold uppercase text-white tracking-tight"
          >
            WHAT OUR <span className="text-brand-lime">COMMUNITY SAYS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed"
          >
            Real discipline isn't built in isolation. It thrives in an environment where everyone pushes forward together.
          </motion.p>

          <div className="pt-2 flex justify-center">
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-300 bg-[#12121a] px-3.5 py-1.5 rounded-full border border-brand-lime/30">
              <span className="w-2 h-2 rounded-full bg-brand-lime" />
              <span>Verified Community Feedback • Consistent Training Culture</span>
            </span>
          </div>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {gymData.testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="p-8 rounded-3xl bg-[#121218] border border-[#242432] hover:border-brand-lime/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-card-dark h-full"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-lime fill-brand-lime" />
                  ))}
                  <span className="ml-2 text-[11px] uppercase font-bold text-zinc-400 tracking-wider">
                    Verified Member
                  </span>
                </div>

                {/* Quote */}
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-[#242432]/60 flex items-center gap-3">
                <img
                  src={test.avatar}
                  alt={test.author}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-lime/40"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-heading font-bold text-white text-base">
                      {test.author}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime" />
                  </div>
                  <div className="text-xs text-brand-lime font-medium">
                    {test.role}
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    {test.program}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
