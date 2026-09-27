import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Shield, Sparkles, X, Eye, ChevronRight, ChevronLeft } from 'lucide-react';

const facilityZones = [
  {
    num: "01",
    title: "Olympic Lifting Platforms",
    subtitle: "Calibrated Bars & Bumpers",
    description: "Multi-station heavy deadlift and squat bays featuring tournament-grade steel bars, precision bumper plates, and non-slip rubber platforms.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85",
    tag: "STRENGTH ZONE"
  },
  {
    num: "02",
    title: "Free Weight Arena (1kg – 60kg)",
    subtitle: "Complete Dumbbell Arsenal",
    description: "Pairs from 1kg up to 60kg calibrated solid steel dumbbells with commercial adjustable benches engineered for heavy pressing.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
    tag: "HYPERTROPHY"
  },
  {
    num: "03",
    title: "Athletic Conditioning Turf",
    subtitle: "Agility & High-Output Sprint Track",
    description: "High-density sled track, conditioning battle ropes, plyometric boxes, and resistance gear for full-body metabolic conditioning.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=85",
    tag: "SPEED & POWER"
  },
  {
    num: "04",
    title: "Clean Lockers & Showers",
    subtitle: "Hygienic Recovery Suites",
    description: "Private sanitized change rooms, personal storage lockers, fresh towel service, and pressurized hot showers so you can train before work.",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=1200&q=85",
    tag: "COMFORT & HYGIENE"
  }
];

export default function FacilityShowcase() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="facility" className="relative py-20 sm:py-28 bg-[#101118] border-t border-[#242432]/70 overflow-hidden">
      {/* Visual Contrast: Ambient Steel Glow */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[350px] bg-cyan-500/[0.03] blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[350px] bg-brand-lime/[0.04] blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181926] border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest"
          >
            <Dumbbell className="w-3.5 h-3.5" />
            <span>FACILITY & EQUIPMENT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold uppercase text-white tracking-tight"
          >
            INSIDE OUR <span className="text-brand-lime">TRAINING FLOOR</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-zinc-300 font-light max-w-2xl mx-auto"
          >
            Clean, ventilated, and loaded with commercial-grade iron. No waiting 20 minutes for a bench or barbell.
          </motion.p>
        </div>

        {/* 4 Architectural Zone Cards (Distinct Visual Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {facilityZones.map((zone, idx) => (
            <motion.div
              key={zone.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              onClick={() => setSelectedPhoto(zone)}
              className="group relative rounded-3xl overflow-hidden bg-[#161723] border border-[#282a3d] hover:border-brand-lime/60 transition-all duration-300 cursor-pointer shadow-xl"
            >
              {/* Image Preview with Zoom */}
              <div className="relative h-60 sm:h-72 overflow-hidden">
                <img
                  src={zone.image}
                  alt={zone.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center filter contrast-115 brightness-90 group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161723] via-[#161723]/40 to-transparent" />

                {/* Big Architectural Number */}
                <div className="absolute top-4 left-4 font-heading font-extrabold text-3xl sm:text-4xl text-white/30 group-hover:text-brand-lime transition-colors">
                  {zone.num}
                </div>

                {/* Zone Tag */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-brand-lime text-[10px] font-heading font-extrabold uppercase tracking-wider border border-[#2e3046]">
                  {zone.tag}
                </div>

                {/* Tap to expand icon */}
                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-brand-lime group-hover:text-black transition-colors">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 sm:p-6 space-y-2">
                <div className="text-xs uppercase font-mono text-brand-lime font-bold">
                  {zone.subtitle}
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold uppercase text-white group-hover:text-brand-lime transition-colors">
                  {zone.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  {zone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Photo Preview Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="relative max-w-4xl w-full bg-[#12131c] border border-brand-lime/40 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 text-white hover:text-brand-lime flex items-center justify-center border border-[#242432] cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative max-h-[70vh] overflow-hidden">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 sm:p-6 bg-[#161724] border-t border-[#242432] flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono uppercase text-brand-lime font-bold">
                    {selectedPhoto.tag} • Zone {selectedPhoto.num}
                  </div>
                  <h4 className="text-xl font-heading font-extrabold uppercase text-white mt-0.5">
                    {selectedPhoto.title}
                  </h4>
                </div>
                <span className="text-xs font-mono text-zinc-400">100% Real Facility</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
