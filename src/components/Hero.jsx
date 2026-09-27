import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Dumbbell, Activity, ShieldCheck, Clock, Flame, Zap, Target } from 'lucide-react';
import ChalkParticles from './ChalkParticles';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2000&q=85",
    alt: "Olympic barbell deadlift with chalk smoke",
    tag: "Olympic Strength Deck",
    vibe: "Powerlifting & Barbell Platforms",
  },
  {
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=2000&q=85",
    alt: "High-intensity athletic battle ropes conditioning",
    tag: "Conditioning Turf",
    vibe: "Battle Ropes & Agility Sprints",
  },
  {
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85",
    alt: "Heavy calibrated iron dumbbells and racks",
    tag: "Heavy Iron Bay",
    vibe: "1kg to 60kg Calibrated Dumbbells",
  },
  {
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=2000&q=85",
    alt: "Athletic bodyweight pullups and muscle conditioning",
    tag: "Hypertrophy Arena",
    vibe: "Biomechanic Resistance & Calisthenics",
  },
  {
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=2000&q=85",
    alt: "State of the art gym interior with neon ambiance",
    tag: "Performance Floor",
    vibe: "Illuminated Multi-Station Racks",
  }
];

export default function Hero({ onSelectGoal }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance photo background every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
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
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="home" className="relative min-h-[94dvh] sm:min-h-screen flex items-center justify-center pt-24 pb-14 sm:pt-28 sm:pb-20 overflow-hidden bg-[#08080a]">
      {/* Background Animated Crossfade Slideshow with Ken Burns Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 0.42, scale: 1.0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].alt}
              className="w-full h-full object-cover object-center filter contrast-125 brightness-80 saturate-120"
            />
          </motion.div>
        </AnimatePresence>

        {/* Ambient gym lighting pulse glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-brand-lime/[0.12] blur-[160px] rounded-full pointer-events-none animate-pulse-glow" />

        {/* Floating Gym Chalk & Ember Particles (Confined strictly to Hero) */}
        <ChalkParticles />

        {/* Layered Deep Dark Gradients for Crystal-Clear Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080a]/90 via-[#08080a]/65 to-[#08080a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080a]/90 via-transparent to-[#08080a]/90" />
        
        {/* Soft radial backdrop behind headline for supreme contrast */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[520px] bg-[#08080a]/50 blur-[70px] pointer-events-none rounded-full" />
      </div>

      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-20" />

      {/* Main Content - Centered High-Energy Composition */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-5 sm:space-y-6"
        >
          {/* Live Floor Vibe Status & Audio Equalizer Indicator */}
          <motion.div variants={itemVariants} className="inline-flex items-center flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121218]/90 border border-brand-lime/40 text-brand-lime text-[11px] sm:text-xs font-heading font-bold tracking-wider uppercase shadow-glow-lime-sm backdrop-blur-md">
              {/* Animated sound-wave equalizer bars */}
              <div className="flex items-end gap-0.5 h-3">
                <span className="w-1 bg-brand-lime rounded-full animate-bounce [animation-delay:0ms] h-2.5" />
                <span className="w-1 bg-brand-lime rounded-full animate-bounce [animation-delay:150ms] h-3.5" />
                <span className="w-1 bg-brand-lime rounded-full animate-bounce [animation-delay:300ms] h-2" />
                <span className="w-1 bg-brand-lime rounded-full animate-bounce [animation-delay:75ms] h-3" />
              </div>
              <span className="text-white">LIVE GYM VIBE</span>
              <span className="text-brand-lime font-mono">144 BPM</span>
              <span className="text-zinc-600 hidden xs:inline">•</span>
              <span className="text-zinc-300 hidden xs:inline font-sans font-medium text-[10px]">PEAK ENERGY</span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14141d]/85 border border-[#242432] text-zinc-300 text-[10px] sm:text-[11px] font-heading font-semibold uppercase tracking-wider backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>74 ATHLETES ON FLOOR</span>
            </span>
          </motion.div>

          {/* Headline: Punchy, Condensed, Zero Horizontal Stretch */}
          <motion.div variants={itemVariants} className="space-y-1 max-w-4xl">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold uppercase tracking-tight text-white leading-[0.98] sm:leading-[1.02]">
              BUILD THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-[#d8ff33] to-white text-glow">
                STRONGER VERSION
              </span> <br />
              OF YOU.
            </h1>
          </motion.div>

          {/* Supporting Copy */}
          <motion.p
            variants={itemVariants}
            className="text-sm xs:text-base sm:text-xl text-zinc-300 font-normal max-w-2xl leading-relaxed px-2"
          >
            Strength training, expert coaching and a community built to help you train with purpose.
          </motion.p>

          {/* Quick Customer Goal Selector (Immediate Goal-Focused Value) */}
          <motion.div variants={itemVariants} className="w-full max-w-2xl px-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-brand-lime font-bold mb-2 flex items-center justify-center gap-1.5">
              <Target className="w-3.5 h-3.5" />
              <span>WHAT IS YOUR MAIN FITNESS GOAL?</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
              {[
                { label: "Build Muscle", emoji: "💪", sub: "Hypertrophy & Tone", id: "muscle-building" },
                { label: "Lose Fat", emoji: "🔥", sub: "Metabolic & HIIT", id: "fat-loss" },
                { label: "Gain Strength", emoji: "⚡", sub: "Heavy Barbells", id: "strength-training" },
                { label: "Personal Coach", emoji: "🎯", sub: "1-on-1 Dedicated", id: "personal-training" },
              ].map((g) => (
                <button
                  key={g.label}
                  type="button"
                  onClick={() => {
                    if (onSelectGoal) onSelectGoal(g.label);
                    else scrollTo('services');
                  }}
                  className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-[#12121a]/90 hover:bg-[#1a1a24] border border-[#242432] hover:border-brand-lime transition-all duration-200 group cursor-pointer active:scale-95 shadow-md"
                >
                  <span className="text-xl sm:text-2xl mb-1 group-hover:scale-110 transition-transform">{g.emoji}</span>
                  <span className="text-xs font-heading font-extrabold uppercase text-white group-hover:text-brand-lime tracking-wide">
                    {g.label}
                  </span>
                  <span className="text-[9px] text-zinc-400 font-sans mt-0.5">{g.sub}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Action CTAs - Mobile Thumb-Optimized (Full Width on Mobile) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto pt-2 px-2 sm:px-0"
          >
            <button
              onClick={() => scrollTo('join')}
              className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-xl bg-brand-lime text-black font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider hover:bg-brand-limeHover transition-all duration-300 shadow-glow-lime hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
            >
              <Flame className="w-5 h-5 fill-black stroke-black" />
              <span>CLAIM 1-DAY PASS</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
            </button>

            <button
              onClick={() => scrollTo('programs')}
              className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-xl bg-[#14141d] hover:bg-[#1a1a26] text-white border border-[#242432] hover:border-brand-lime/50 font-heading font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-200 cursor-pointer"
            >
              <span>EXPLORE PROGRAMS</span>
            </button>
          </motion.div>

          {/* 4-Pillar Mobile-Friendly Grid */}
          <motion.div
            variants={itemVariants}
            className="pt-4 sm:pt-6 border-t border-[#242432]/70 w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3"
          >
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#111117]/85 border border-[#242432]/70 text-left backdrop-blur-sm">
              <Dumbbell className="w-4 h-4 text-brand-lime shrink-0" />
              <div>
                <div className="text-[11px] sm:text-xs font-heading font-bold text-white uppercase leading-tight">Olympic Barbells</div>
                <div className="text-[9px] sm:text-[10px] text-zinc-400">Calibrated Plates</div>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#111117]/85 border border-[#242432]/70 text-left backdrop-blur-sm">
              <Activity className="w-4 h-4 text-brand-lime shrink-0" />
              <div>
                <div className="text-[11px] sm:text-xs font-heading font-bold text-white uppercase leading-tight">All Levels</div>
                <div className="text-[9px] sm:text-[10px] text-zinc-400">Guided Progression</div>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#111117]/85 border border-[#242432]/70 text-left backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-brand-lime shrink-0" />
              <div>
                <div className="text-[11px] sm:text-xs font-heading font-bold text-white uppercase leading-tight">Expert Coaching</div>
                <div className="text-[9px] sm:text-[10px] text-zinc-400">Form Audits</div>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#111117]/85 border border-[#242432]/70 text-left backdrop-blur-sm">
              <Clock className="w-4 h-4 text-brand-lime shrink-0" />
              <div>
                <div className="text-[11px] sm:text-xs font-heading font-bold text-white uppercase leading-tight">5:30 AM – 10 PM</div>
                <div className="text-[9px] sm:text-[10px] text-zinc-400">Mon – Sat Open</div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Background Floor Zone Selector Pills */}
          <motion.div variants={itemVariants} className="pt-2 flex flex-col items-center gap-2">
            <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2">
              {heroSlides.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Switch to ${slide.tag}`}
                  className={`group relative flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-heading font-bold uppercase transition-all duration-300 cursor-pointer ${
                    currentSlide === idx
                      ? 'bg-brand-lime text-black shadow-glow-lime-sm scale-105'
                      : 'bg-[#121218]/90 text-zinc-400 hover:text-white border border-[#242432]'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${currentSlide === idx ? 'bg-black animate-pulse' : 'bg-brand-lime/60'}`} />
                  <span>{slide.tag}</span>
                </button>
              ))}
            </div>
            <div className="text-[10px] font-mono uppercase text-brand-lime tracking-wider flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-brand-lime fill-brand-lime" />
              <span>Zone View: {heroSlides[currentSlide].vibe}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
        <button
          onClick={() => scrollTo('programs')}
          aria-label="Scroll to programs section"
          className="p-1 rounded-full text-brand-lime hover:text-white transition-colors"
        >
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
