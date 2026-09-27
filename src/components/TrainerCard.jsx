import React from 'react';
import { motion } from 'framer-motion';
import { Award, Dumbbell } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from './SocialIcons';

export default function TrainerCard({ trainer, index, onSelectTrainer }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group relative rounded-2xl overflow-hidden bg-[#121218] border border-[#242432] hover:border-brand-lime/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card-dark flex flex-col justify-between h-full"
    >
      {/* Image container */}
      <div className="relative h-80 sm:h-96 overflow-hidden">
        <img
          src={trainer.image}
          alt={trainer.name}
          loading="lazy"
          className="w-full h-full object-cover object-top filter brightness-95 contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        {/* Layered dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121218] via-[#121218]/30 to-transparent" />
        
        {/* Experience Pill */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md border border-[#242432] text-brand-lime flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-brand-lime" />
            {trainer.experience}
          </span>
        </div>

        {/* Social Icons that transition in */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
          <a
            href={trainer.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${trainer.name} Instagram profile`}
            className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-[#242432] text-zinc-300 hover:text-black hover:bg-brand-lime hover:border-brand-lime flex items-center justify-center transition-all duration-200"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href={trainer.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${trainer.name} LinkedIn profile`}
            className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-[#242432] text-zinc-300 hover:text-black hover:bg-brand-lime hover:border-brand-lime flex items-center justify-center transition-all duration-200"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom tags */}
        <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-1.5 z-10">
          {trainer.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-md text-[10px] uppercase font-bold tracking-wider bg-black/70 text-zinc-300 border border-[#242432]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-brand-lime">
            {trainer.role}
          </div>
          <h3 className="text-2xl font-heading font-extrabold uppercase text-white mt-1 group-hover:text-brand-lime transition-colors">
            {trainer.name}
          </h3>
          <div className="text-xs font-medium text-zinc-400 mt-1 flex items-center gap-1.5">
            <Dumbbell className="w-3.5 h-3.5 text-brand-lime" />
            <span>Specialty: {trainer.specialty}</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-[#242432]/60 pt-3">
          {trainer.bio}
        </p>

        <button
          type="button"
          onClick={() => onSelectTrainer(trainer.name)}
          className="w-full py-2.5 px-4 rounded-xl bg-[#1c1c26] text-white hover:bg-brand-lime hover:text-black font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
        >
          <span>Train with {trainer.name.split(' ')[0]}</span>
        </button>
      </div>
    </motion.article>
  );
}
