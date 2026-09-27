import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Dumbbell, Target, Users } from 'lucide-react';
import { gymData } from '../data/gymData';

const iconMap = {
  ShieldCheck,
  Dumbbell,
  Target,
  Users
};

export default function ValueStrip() {
  return (
    <section className="relative z-20 -mt-2 border-y border-[#242432]/80 bg-[#0e0e13]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {gymData.valueStrip.map((item, index) => {
            const Icon = iconMap[item.iconName] || Dumbbell;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full flex items-start gap-4 p-4 rounded-xl bg-[#14141b]/60 border border-[#242432]/60 hover:border-brand-lime/40 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-[#1c1c27] text-brand-lime group-hover:scale-110 group-hover:bg-brand-lime group-hover:text-black transition-all duration-300 shadow-sm shrink-0">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-base tracking-wide uppercase group-hover:text-brand-lime transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
