import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Flame, Target, Zap } from 'lucide-react';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=2400&q=90",
    alt: "Muscular bodybuilder dumbbell training",
    tag: "HYPERTROPHY & MUSCLE",
    caption: "Bodybuilding & Muscle Sculpting",
  },
  {
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2400&q=90",
    alt: "Heavy barbell deadlift with chalk smoke",
    tag: "POWERLIFTING & STRENGTH",
    caption: "Heavy Compound Barbell Platforms",
  },
  {
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=2400&q=90",
    alt: "High intensity battle ropes training",
    tag: "ATHLETIC CONDITIONING",
    caption: "High-Output Agility & Cardio Turf",
  },
  {
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=90",
    alt: "Heavy calibrated iron dumbbells",
    tag: "FREE WEIGHT ARSENAL",
    caption: "Calibrated 1kg to 60kg Iron Dumbbells",
  },
  {
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=2400&q=90",
    alt: "State of the art gym interior with neon ambiance",
    tag: "PREMIER GYM FLOOR",
    caption: "Multi-Station Olympic Training Bays",
  }
];

export default function Hero({ onSelectGoal }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fast sequential photo rotation (changes smoothly every 2 seconds in order)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="home" className="relative min-h-[92dvh] sm:min-h-screen flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden bg-[#08080a]">
      {/* HIGHLY VISIBLE, BRIGHT, BIG BODYBUILDING & GYM BACKGROUND SLIDESHOW */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 0.88, scale: 1.0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].alt}
              className="w-full h-full object-cover object-center filter brightness-95 contrast-115 saturate-110"
            />
          </motion.div>
        </AnimatePresence>

        {/* Smart Vignettes: Kept transparent in center so bodybuilding photos are bright & clear, dark at edges for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-black/35 to-[#08080a]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-transparent to-black/75" />
        
        {/* Soft center text backdrop glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-black/45 blur-[80px] pointer-events-none rounded-full" />
      </div>

      {/* Main Content - Streamlined & Centered (Photos take center stage) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-4 sm:space-y-5"
        >
          {/* Authentic Gym Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 border border-brand-lime/60 text-brand-lime text-xs sm:text-sm font-heading font-extrabold tracking-wider uppercase shadow-glow-lime-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
              <span>ELITE BODYBUILDING & STRENGTH CLUB</span>
            </span>
          </motion.div>

          {/* Headline: Punchy, Condensed, High Contrast */}
          <motion.div variants={itemVariants} className="space-y-1 max-w-3xl">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-heading font-extrabold uppercase tracking-tight text-white leading-[0.98] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              BUILD THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-[#d8ff33] to-white text-glow">
                STRONGER VERSION
              </span> <br />
              OF YOU.
            </h1>
          </motion.div>

          {/* Supporting Copy - Short & Punchy */}
          <motion.p
            variants={itemVariants}
            className="text-sm xs:text-base sm:text-lg text-zinc-200 font-medium max-w-xl leading-relaxed px-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
          >
            Olympic lifting bays, calibrated dumbbells, and expert coaching on the floor daily.
          </motion.p>

          {/* Quick Customer Goal Selector (4 Clean Buttons) */}
          <motion.div variants={itemVariants} className="w-full max-w-xl px-2 pt-1">
            <div className="text-[11px] font-mono uppercase tracking-wider text-brand-lime font-bold mb-2 flex items-center justify-center gap-1.5 drop-shadow">
              <Target className="w-3.5 h-3.5" />
              <span>WHAT IS YOUR FITNESS GOAL?</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { label: "Build Muscle", emoji: "💪", sub: "Hypertrophy" },
                { label: "Lose Fat", emoji: "🔥", sub: "Metabolic HIIT" },
                { label: "Gain Strength", emoji: "⚡", sub: "Barbell PRs" },
                { label: "Personal Coach", emoji: "🎯", sub: "1-on-1 Guidance" },
              ].map((g) => (
                <button
                  key={g.label}
                  type="button"
                  onClick={() => {
                    if (onSelectGoal) onSelectGoal(g.label);
                    else scrollTo('services');
                  }}
                  className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-black/80 hover:bg-black/95 border border-white/20 hover:border-brand-lime transition-all duration-200 group cursor-pointer active:scale-95 shadow-xl backdrop-blur-md"
                >
                  <span className="text-xl sm:text-2xl mb-0.5 group-hover:scale-110 transition-transform">{g.emoji}</span>
                  <span className="text-xs font-heading font-extrabold uppercase text-white group-hover:text-brand-lime tracking-wide">
                    {g.label}
                  </span>
                  <span className="text-[9px] text-zinc-300 font-sans mt-0.5">{g.sub}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto pt-2 px-2 sm:px-0"
          >
            <button
              onClick={() => scrollTo('join')}
              className="w-full sm:w-auto min-h-[50px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-brand-lime text-black font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider hover:bg-brand-limeHover transition-all duration-300 shadow-glow-lime hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Flame className="w-5 h-5 fill-black stroke-black" />
              <span>CLAIM FREE 1-DAY PASS</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={() => scrollTo('services')}
              className="w-full sm:w-auto min-h-[50px] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-black/80 hover:bg-black text-white border border-white/25 hover:border-brand-lime font-heading font-bold text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer backdrop-blur-md"
            >
              <span>EXPLORE SERVICES</span>
            </button>
          </motion.div>

          {/* Photo Slide Sequencer: Numbered Indicators & Active Photo Name */}
          <motion.div variants={itemVariants} className="pt-3 flex flex-col items-center gap-2">
            <div className="flex items-center justify-center gap-2">
              {heroSlides.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Switch to slide ${idx + 1}`}
                  className={`group relative flex items-center justify-center rounded-full text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${
                    currentSlide === idx
                      ? 'px-3 py-1 bg-brand-lime text-black shadow-glow-lime-sm scale-110'
                      : 'w-7 h-7 bg-black/75 text-zinc-300 hover:text-white border border-white/20'
                  }`}
                >
                  <span>0{idx + 1}</span>
                </button>
              ))}
            </div>

            {/* Active Photo Caption Tag */}
            <div className="text-xs font-mono uppercase tracking-wider text-brand-lime flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 border border-brand-lime/30 backdrop-blur-sm drop-shadow">
              <Zap className="w-3.5 h-3.5 text-brand-lime fill-brand-lime" />
              <span>{heroSlides[currentSlide].tag} • {heroSlides[currentSlide].caption}</span>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
        <button
          onClick={() => scrollTo('services')}
          aria-label="Scroll to services"
          className="p-1 rounded-full text-brand-lime hover:text-white transition-colors cursor-pointer"
        >
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
