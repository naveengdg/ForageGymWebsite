import React from 'react';
import { Flame, Zap, Dumbbell } from 'lucide-react';

export default function VibeMarquee({ theme = 'lime', reverse = false }) {
  const defaultItems = [
    "RAW DISCIPLINE",
    "CALIBRATED ELEIKO PLATES",
    "ZERO SHORTCUTS",
    "COACH-LED EVERY REP",
    "BARGUR'S PREMIER CLUB",
    "SWEAT & REPUTATION",
    "PROGRESSIVE OVERLOAD",
    "5:30 AM – 10:00 PM ACCESS",
  ];

  const isLime = theme === 'lime';

  return (
    <div
      className={`relative overflow-hidden py-3 sm:py-3.5 border-y-2 selection:bg-black selection:text-white transform ${
        reverse ? 'skew-y-1' : '-skew-y-1'
      } my-1 z-20 ${
        isLime
          ? 'bg-brand-lime text-black border-black shadow-glow-lime'
          : 'bg-[#101017] text-white border-brand-lime/30 shadow-card-dark'
      }`}
    >
      <div className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {[...defaultItems, ...defaultItems].map((text, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-3 sm:gap-4 mx-3 sm:mx-6 font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider shrink-0 ${
              isLime ? 'text-black' : 'text-zinc-200'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full animate-pulse ${
                isLime ? 'bg-black' : 'bg-brand-lime'
              }`}
            />
            <span>{text}</span>
            <Flame
              className={`w-4 h-4 shrink-0 ${
                isLime ? 'fill-black stroke-black' : 'fill-brand-lime stroke-brand-lime'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
