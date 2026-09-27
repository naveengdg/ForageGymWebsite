import React from 'react';
import { MessageCircle, Flame, ArrowUpRight } from 'lucide-react';
import { gymData } from '../data/gymData';

export default function MobileStickyBar({ onOpenJoin }) {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${gymData.contact.whatsapp}&text=${encodeURIComponent(gymData.contact.whatsappMessage)}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0f]/95 backdrop-blur-lg border-t border-[#242432] px-3 py-2.5 shadow-2xl safe-area-bottom">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Direct WhatsApp Callout */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#14141d] border border-[#282838] hover:border-emerald-500/50 text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors active:scale-95"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
          <span>WhatsApp</span>
        </a>

        {/* 1-Day Pass CTA */}
        <button
          onClick={onOpenJoin}
          className="flex-[1.4] inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-brand-lime text-black font-heading font-extrabold text-xs uppercase tracking-wider shadow-glow-lime hover:bg-brand-limeHover transition-all active:scale-95 cursor-pointer"
        >
          <Flame className="w-4 h-4 fill-black stroke-black shrink-0" />
          <span>FREE 1-DAY PASS</span>
        </button>
      </div>
    </div>
  );
}
