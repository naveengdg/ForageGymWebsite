import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ShieldCheck, Dumbbell } from 'lucide-react';
import { gymData } from '../data/gymData';

export default function TrainersModal({ isOpen, onClose, onSelectTrainer }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-[#0f1017] border border-brand-lime/40 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 bg-[#141520] border-b border-[#242432] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-lime text-black flex items-center justify-center">
                <Award className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-heading font-extrabold uppercase text-white tracking-wide">
                  Certified Coaching Staff
                </h3>
                <p className="text-xs text-zinc-400">100% floor-certified strength & conditioning coaches</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#1e1f2d] hover:bg-brand-lime hover:text-black text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close coaches modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Coaches List */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {gymData.trainers.map((trainer) => (
                <div
                  key={trainer.name}
                  className="rounded-2xl bg-[#141520] border border-[#242432] overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover object-center filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141520] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-heading font-bold uppercase text-brand-lime border border-[#242432]">
                      {trainer.experience}
                    </span>
                  </div>

                  <div className="p-4 space-y-2">
                    <div>
                      <h4 className="text-base font-heading font-extrabold uppercase text-white">
                        {trainer.name}
                      </h4>
                      <p className="text-xs text-brand-lime font-medium">{trainer.role}</p>
                    </div>

                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {trainer.bio}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {trainer.certifications.map((cert, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-[#1e1f2d] text-[10px] text-zinc-300 border border-[#242432]"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        onClose();
                        if (onSelectTrainer) onSelectTrainer(trainer.name);
                      }}
                      className="w-full mt-2 py-2 rounded-xl bg-[#202230] hover:bg-brand-lime hover:text-black text-brand-lime text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Train With {trainer.name.split(' ')[0]}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
