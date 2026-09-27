import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gymData } from '../data/gymData';
import { HelpCircle, ChevronDown, Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-[#08080a] border-t border-[#242432]/60 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-lime/[0.03] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141a] border border-[#242432] text-brand-lime text-xs font-bold uppercase tracking-widest"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-heading font-extrabold uppercase text-white tracking-tight"
          >
            COMMON <span className="text-brand-lime">QUESTIONS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-zinc-400 font-light"
          >
            Everything you need to know before stepping foot onto our lifting floor.
          </motion.p>
        </div>

        {/* Animated Accordion List */}
        <div className="space-y-3.5">
          {gymData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-[#14141d] border-brand-lime/50 shadow-lg'
                    : 'bg-[#101016] border-[#242432] hover:border-zinc-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className={`font-heading font-bold text-base sm:text-lg uppercase tracking-wide transition-colors ${
                    isOpen ? 'text-brand-lime' : 'text-white'
                  }`}>
                    {faq.question}
                  </span>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-brand-lime text-black' : 'bg-[#1c1c28] text-zinc-400'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 text-sm sm:text-base text-zinc-300 font-light leading-relaxed border-t border-[#242432]/60 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-[#121218] border border-[#242432] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs sm:text-sm text-zinc-300">
            Have a different question not listed above?
          </span>
          <a
            href="#contact"
            className="text-xs uppercase font-heading font-bold px-4 py-2 rounded-lg bg-[#1c1c28] text-brand-lime hover:bg-brand-lime hover:text-black transition-all"
          >
            Ask Front Desk
          </a>
        </div>

      </div>
    </section>
  );
}
