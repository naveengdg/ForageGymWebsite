import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { gymData } from '../data/gymData';

export default function WhatsAppButton() {
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const url = `https://api.whatsapp.com/send?phone=${gymData.contact.whatsapp}&text=${encodeURIComponent(gymData.contact.whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end">
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-black font-heading font-extrabold text-xs uppercase tracking-wider shadow-2xl hover:bg-[#20ba59] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
        aria-label="Chat with Forge Fitness front desk on WhatsApp"
      >
        {/* Subtle pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />
        
        <MessageCircle className="w-5 h-5 fill-black stroke-black shrink-0" />
        <span className="hidden sm:inline font-bold">Chat With Us</span>
      </motion.button>
    </div>
  );
}
