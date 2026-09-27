import React from 'react';
import { motion } from 'framer-motion';
import { gymData } from '../data/gymData';
import { ShieldCheck, ArrowRight, Award, Dumbbell, Star } from 'lucide-react';
import { InstagramIcon, LinkedInIcon } from './SocialIcons';

export default function TrainersSection({ onSelectTrainer }) {
  return (
    <section id="trainers" className="relative py-20 sm:py-28 bg-[#0c0d14] border-t border-[#242432]/70 overflow-hidden">
      {/* Visual Contrast: Ambient Coaching Spotlight */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[350px] bg-brand-lime/[0.05] blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-amber-500/[0.03] blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161724] border border-brand-lime/40 text-brand-lime text-xs font-bold uppercase tracking-widest shadow-glow-lime-sm"
          >
            <Award className="w-3.5 h-3.5" />
            <span>EXPERT FLOOR COACHING</span>
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
            className="text-sm sm:text-base text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed"
          >
            No guesswork and no unqualified advice. Our certified coaches are on the floor daily to refine your lifting mechanics, track your progression, and keep you accountable.
          </motion.p>
        </div>

        {/* 3 Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {gymData.trainers.map((coach, index) => (
            <motion.div
              key={coach.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-[#13141f] border border-[#25273b] hover:border-brand-lime/60 transition-all duration-300 flex flex-col justify-between hover:shadow-card-dark shadow-xl"
            >
              {/* Photo Container */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-110 group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13141f] via-[#13141f]/35 to-transparent" />

                {/* Experience Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-heading font-extrabold uppercase tracking-wider bg-black/80 backdrop-blur-md text-brand-lime border border-[#2e3046]">
                    {coach.experience}
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[11px] font-bold border border-[#2e3046]">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>4.9</span>
                </div>

                {/* Social Links Over Photo */}
                <div className="absolute bottom-3 right-4 z-10 flex items-center gap-2">
                  <a
                    href={coach.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-sm border border-[#2e3046] text-white hover:text-brand-lime hover:border-brand-lime flex items-center justify-center transition-colors"
                    aria-label={`${coach.name} Instagram`}
                  >
                    <InstagramIcon className="w-3.5 h-3.5 fill-current" />
                  </a>
                  <a
                    href={coach.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-sm border border-[#2e3046] text-white hover:text-brand-lime hover:border-brand-lime flex items-center justify-center transition-colors"
                    aria-label={`${coach.name} LinkedIn`}
                  >
                    <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
                  </a>
                </div>
              </div>

              {/* Coach Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <div className="text-xs uppercase font-mono text-brand-lime font-bold">
                    {coach.specialty}
                  </div>
                  <h3 className="text-2xl font-heading font-extrabold uppercase text-white group-hover:text-brand-lime transition-colors">
                    {coach.name}
                  </h3>
                  <div className="text-xs text-zinc-400 font-medium">
                    {coach.role}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 font-light mt-2.5 leading-relaxed">
                    {coach.bio}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#25273b]">
                  {coach.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-[#1a1c2a] text-[10px] uppercase font-mono text-zinc-300 border border-[#2e3148]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={() => onSelectTrainer(coach.name)}
                  className="w-full py-3 rounded-xl bg-[#1d1f30] group-hover:bg-brand-lime text-white group-hover:text-black font-heading font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Train With {coach.name.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coach Guarantee Callout */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#141520] border border-[#242432] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-lime/10 text-brand-lime flex items-center justify-center shrink-0 border border-brand-lime/30">
              <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-heading font-extrabold uppercase text-white">
                Free Coaching Orientation On Day One
              </div>
              <div className="text-xs text-zinc-400 font-light">
                Every 1-day pass guest receives a 15-minute form check and facility walkthrough.
              </div>
            </div>
          </div>
          <button
            onClick={() => onSelectTrainer("General Coach")}
            className="px-5 py-2.5 rounded-xl bg-brand-lime text-black font-heading font-extrabold text-xs uppercase tracking-wider hover:bg-brand-limeHover transition-colors shrink-0 shadow-glow-lime-sm cursor-pointer"
          >
            Claim Free Coach Pass
          </button>
        </div>

      </div>
    </section>
  );
}
