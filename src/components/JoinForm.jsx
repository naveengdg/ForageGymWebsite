import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gymData } from '../data/gymData';
import confetti from 'canvas-confetti';
import { CheckCircle2, X, Phone, User, Clock, ArrowRight, ShieldCheck, Dumbbell, Sparkles } from 'lucide-react';

export default function JoinForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    timeSlot: 'Morning (6:00 AM – 9:00 AM)',
    focus: 'Olympic Barbells & Strength'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowModal(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ccff00', '#ffffff', '#10b981', '#38bdf8']
      });
    }, 500);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({
      name: '',
      phone: '',
      timeSlot: 'Morning (6:00 AM – 9:00 AM)',
      focus: 'Olympic Barbells & Strength'
    });
  };

  const timeSlots = [
    "Morning (6:00 AM – 9:00 AM)",
    "Midday (11:00 AM – 3:00 PM)",
    "Evening (5:30 PM – 9:30 PM)"
  ];

  const focusOptions = [
    "Olympic Barbells & Strength",
    "Functional Agility & Turf",
    "Coach Guidance & Form Check"
  ];

  return (
    <section id="join" className="relative py-20 sm:py-28 bg-[#0b0b10] border-t border-[#242432]/60 overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-lime/[0.05] blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141a] border border-brand-lime/40 text-brand-lime text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complimentary Guest Access</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold uppercase text-white tracking-tight"
          >
            EXPERIENCE <span className="text-brand-lime">DAY ONE</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-xl mx-auto"
          >
            Step onto our training floor for your first session. Test our calibrated Eleiko bars, meet our coaches, and train with zero commitment.
          </motion.p>
        </div>

        {/* 1st Day Pass Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-10 rounded-3xl bg-[#121218] border border-[#242432] shadow-2xl relative"
        >
          {/* Card Header Strip */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#242432]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-lime/10 border border-brand-lime/30 flex items-center justify-center text-brand-lime">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-heading font-bold text-base uppercase">
                  1-Day VIP Pass Registration
                </h3>
                <span className="text-xs text-zinc-400">
                  Instant confirmation • No payment required
                </span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-brand-lime text-black uppercase">
              100% Free
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider font-bold text-zinc-300">
                  Full Name <span className="text-brand-lime">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#0a0a0f] border border-[#242432] text-white placeholder-zinc-600 focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime text-sm transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider font-bold text-zinc-300">
                  Phone Number <span className="text-brand-lime">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#0a0a0f] border border-[#242432] text-white placeholder-zinc-600 focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime text-sm transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Time Slot Selection */}
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-wider font-bold text-zinc-300">
                Preferred Time Slot
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {timeSlots.map((slot) => {
                  const isSelected = formData.timeSlot === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeSlot: slot })}
                      className={`p-3 rounded-xl border text-xs font-semibold transition-all text-center flex items-center justify-center gap-2 ${
                        isSelected
                          ? 'bg-brand-lime text-black border-brand-lime font-bold shadow-glow-lime-sm'
                          : 'bg-[#0a0a0f] text-zinc-400 border-[#242432] hover:border-zinc-600 hover:text-white'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span>{slot}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Day One Focus */}
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-wider font-bold text-zinc-300">
                Primary Goal for Day One
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {focusOptions.map((opt) => {
                  const isSelected = formData.focus === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFormData({ ...formData, focus: opt })}
                      className={`p-3 rounded-xl border text-xs font-semibold transition-all text-center ${
                        isSelected
                          ? 'bg-brand-lime text-black border-brand-lime font-bold shadow-glow-lime-sm'
                          : 'bg-[#0a0a0f] text-zinc-400 border-[#242432] hover:border-zinc-600 hover:text-white'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-xl bg-brand-lime text-black font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider hover:bg-brand-limeHover transition-all duration-300 flex items-center justify-center gap-3 shadow-glow-lime hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 cursor-pointer"
            >
              {isSubmitting ? (
                <span>RESERVING YOUR PASS...</span>
              ) : (
                <>
                  <span>CLAIM MY FIRST DAY PASS</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </>
              )}
            </button>

            {/* Reassurance text */}
            <div className="flex items-center justify-center gap-2 text-center text-xs text-zinc-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-brand-lime shrink-0" />
              <span>Valid for full floor access • Locker & shower amenities included</span>
            </div>
          </form>
        </motion.div>

      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-md w-full bg-[#12121a] border-2 border-brand-lime rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1c1c28] text-zinc-300 hover:text-white flex items-center justify-center border border-[#242432]"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-brand-lime/20 border border-brand-lime text-brand-lime flex items-center justify-center mx-auto shadow-glow-lime-sm">
                <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
              </div>

              {/* Headings */}
              <div className="text-center space-y-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-brand-lime text-black inline-block">
                  FIRST DAY PASS CONFIRMED
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-white tracking-wide">
                  YOU'RE ON THE ROSTER.
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed pt-1">
                  Your first day visit pass has been issued. Show this screen or provide your phone number at the front desk when you arrive.
                </p>
              </div>

              {/* Pass Ticket Card */}
              <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-[#242432] space-y-2.5 text-left font-mono text-xs">
                <div className="flex items-center justify-between border-b border-[#242432] pb-2 text-zinc-400">
                  <span>NAME:</span>
                  <span className="text-white font-bold">{formData.name || 'Member Guest'}</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#242432] pb-2 text-zinc-400">
                  <span>PHONE:</span>
                  <span className="text-white font-bold">{formData.phone || '+91 90000 00000'}</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#242432] pb-2 text-zinc-400">
                  <span>TIME SLOT:</span>
                  <span className="text-brand-lime font-bold">{formData.timeSlot.split(' ')[0]}</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span>ACCESS:</span>
                  <span className="text-brand-lime font-bold">1-Day VIP Pass (Free)</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={`https://api.whatsapp.com/send?phone=${gymData.contact.whatsapp}&text=${encodeURIComponent(`Hi Forge Fitness! I booked my 1-Day Pass under the name ${formData.name}. Looking forward to training.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-brand-lime text-black font-heading font-extrabold text-xs uppercase tracking-wider hover:bg-brand-limeHover transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Confirm on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full py-2.5 text-xs uppercase font-heading font-bold text-zinc-400 hover:text-white transition-colors"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
