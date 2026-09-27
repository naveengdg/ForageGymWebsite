import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, HelpCircle, Plus, Minus, MessageCircle, Phone } from 'lucide-react';
import { gymData } from '../data/gymData';

export default function FAQModal({ isOpen, onClose, onOpenJoin }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[#0f1017] border border-brand-lime/40 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 bg-[#141520] border-b border-[#242432] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-lime text-black flex items-center justify-center">
                <HelpCircle className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-heading font-extrabold uppercase text-white tracking-wide">
                  Gym FAQ & Policies
                </h3>
                <p className="text-xs text-zinc-400">Everything you need to know before visiting</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#1e1f2d] hover:bg-brand-lime hover:text-black text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close FAQ modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* FAQ Accordion List */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-3 flex-1">
            {gymData.faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all ${
                    isOpen
                      ? 'bg-[#161724] border-brand-lime/50 shadow-md'
                      : 'bg-[#12131c] border-[#242432] hover:border-zinc-600'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full py-3.5 px-4 text-left flex items-center justify-between gap-3 cursor-pointer"
                  >
                    <span
                      className={`text-sm sm:text-base font-heading font-bold uppercase tracking-wide ${
                        isOpen ? 'text-brand-lime' : 'text-white'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                        isOpen ? 'bg-brand-lime text-black' : 'bg-[#202230] text-zinc-400'
                      }`}
                    >
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="px-4 pb-4 pt-1 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed border-t border-[#242432]/60">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Footer Quick Action */}
          <div className="p-4 bg-[#141520] border-t border-[#242432] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-zinc-400">Still have a question?</span>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={`https://api.whatsapp.com/send?phone=${gymData.contact.whatsapp}&text=Hi%20Forge%20Fitness!%20I%20have%20a%20question.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#202230] hover:bg-[#282a3d] text-brand-lime text-xs font-heading font-bold uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Desk</span>
              </a>
              <button
                onClick={() => {
                  onClose();
                  if (onOpenJoin) onOpenJoin();
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center px-4 py-2 rounded-xl bg-brand-lime text-black text-xs font-heading font-bold uppercase tracking-wider hover:bg-brand-limeHover transition-colors cursor-pointer"
              >
                Claim 1-Day Pass
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
