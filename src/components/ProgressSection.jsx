import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { gymData } from '../data/gymData';
import { LineChart, BarChart3, Activity, CheckCircle2, Info, ArrowRight } from 'lucide-react';

export default function ProgressSection({ onOpenJoin }) {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    { title: "Strength Metric", desc: "Compound lift progression & barbell total volume tracking" },
    { title: "Consistency Log", desc: "Weekly check-ins, recovery sleep scores, and streak data" },
    { title: "Cardio VO2", desc: "Targeted heart rate zones and interval recovery efficiency" },
    { title: "Mobility Score", desc: "Bi-monthly joint flexibility and posture alignment audits" }
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-[#08080a] border-t border-[#242432]/60 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-brand-lime/[0.04] blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141a] border border-[#242432] text-brand-lime text-xs font-bold uppercase tracking-widest"
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Biometric & Performance Systems</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold uppercase text-white tracking-tight"
          >
            TRACK YOUR <span className="text-brand-lime">REAL PROGRESS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed"
          >
            What gets measured gets improved. We equip you with clear benchmarks across strength, consistency, and cardiovascular longevity.
          </motion.p>

          <div className="pt-2 flex justify-center">
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-300 bg-[#12121a] px-3.5 py-1.5 rounded-full border border-brand-lime/30">
              <span className="w-2 h-2 rounded-full bg-brand-lime" />
              <span>Forge Mobile Companion • Biometric & Compound Volume Sync</span>
            </span>
          </div>
        </div>

        {/* Dashboard-style Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Progress Metric Bars */}
          <div className="lg:col-span-7 space-y-5">
            {gymData.progressMetrics.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-[#121218] border border-[#242432] hover:border-brand-lime/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <div className="font-heading font-bold text-white uppercase text-base tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-lime" />
                    <span>{item.title}</span>
                  </div>
                  <span className="text-xs text-brand-lime font-mono font-semibold">
                    {item.indicator}
                  </span>
                </div>

                <p className="text-xs text-zinc-400 mb-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Animated Bar */}
                <div className="h-3 w-full bg-[#1e1e28] rounded-full overflow-hidden p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + idx * 0.15, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-brand-lime to-emerald-400 rounded-full shadow-glow-lime-sm"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: High-tech Visual Blueprint Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-gradient-to-b from-[#161622] via-[#12121a] to-[#0c0c12] border border-[#242432] shadow-2xl relative space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#242432]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-lime/10 border border-brand-lime/30 flex items-center justify-center text-brand-lime">
                    <LineChart className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white uppercase text-sm">
                      MEMBER APP COMPANION
                    </h3>
                    <div className="text-[11px] text-brand-muted">Forge Dynamic Sync</div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-brand-lime text-black">
                  APP SYNCED
                </span>
              </div>

              {/* Progress Summary Mockup */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#0a0a0e]/90 border border-[#242432]/60 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-zinc-400 uppercase font-semibold">Current Cycle</span>
                    <div className="text-white font-heading font-bold text-base">Hypertrophy & Density Phase</div>
                  </div>
                  <span className="text-brand-lime font-mono font-bold text-xs bg-brand-lime/10 px-2 py-1 rounded-md">
                    Week 5 / 8
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-[#0a0a0e]/90 border border-[#242432]/60 text-center">
                    <div className="text-xs text-zinc-400 uppercase font-medium">Logged Load</div>
                    <div className="text-xl font-heading font-extrabold text-white mt-1">18,420 kg</div>
                    <div className="text-[10px] text-brand-lime mt-0.5">Weekly Accumulation</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0a0a0e]/90 border border-[#242432]/60 text-center">
                    <div className="text-xs text-zinc-400 uppercase font-medium">Streak</div>
                    <div className="text-xl font-heading font-extrabold text-white mt-1">18 Days</div>
                    <div className="text-[10px] text-brand-lime mt-0.5">Consistent training</div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenJoin}
                  className="w-full py-3.5 px-4 rounded-xl bg-brand-lime text-black font-heading font-bold text-xs uppercase tracking-wider hover:bg-brand-limeHover transition-all flex items-center justify-center gap-2 shadow-glow-lime-sm"
                >
                  <span>Experience The System</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
