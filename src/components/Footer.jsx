import React from 'react';
import { gymData } from '../data/gymData';
import { Flame, ArrowUp, Heart } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';

export default function Footer() {
  const { brand, contact, navLinks } = gymData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-[#060608] border-t border-[#242432] pt-16 pb-12 overflow-hidden text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#242432]/60">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#14141d] border border-brand-lime/40 flex items-center justify-center text-brand-lime shadow-glow-lime-sm">
                <Flame className="w-5 h-5 fill-brand-lime" />
              </div>
              <span className="font-heading font-extrabold text-2xl uppercase tracking-wider text-white">
                {brand.name}
              </span>
            </div>

            <p className="text-sm text-zinc-300 font-medium italic">
              "{brand.tagline}"
            </p>

            <p className="text-xs text-zinc-500 leading-relaxed max-w-sm">
              A high-performance modern fitness facility built for strength training, biomechanical discipline, and supportive athletic community.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-[#14141a] border border-[#242432] text-zinc-400 hover:text-black hover:bg-brand-lime hover:border-brand-lime flex items-center justify-center transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-[#14141a] border border-[#242432] text-zinc-400 hover:text-black hover:bg-brand-lime hover:border-brand-lime flex items-center justify-center transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={contact.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-[#14141a] border border-[#242432] text-zinc-400 hover:text-black hover:bg-brand-lime hover:border-brand-lime flex items-center justify-center transition-all"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-1 hover:text-brand-lime transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Hours & Amenities Summary */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white">
              Floor Access & Hours
            </h4>
            <div className="p-4 rounded-xl bg-[#0f0f15] border border-[#242432] text-xs space-y-2">
              <div className="flex items-center justify-between text-zinc-300">
                <span>Mon – Sat:</span>
                <span className="font-heading font-bold text-white">5:30 AM – 10 PM</span>
              </div>
              <div className="flex items-center justify-between text-zinc-300">
                <span>Sunday:</span>
                <span className="font-heading font-bold text-white">6:00 AM – 12 PM</span>
              </div>
              <p className="text-[11px] text-brand-lime font-medium pt-1 border-t border-[#242432]/60">
                12 Performance Avenue, Bargur
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-zinc-500">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-zinc-500">
              Built for Strength, Discipline & Human Performance
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#14141d] border border-[#242432] text-zinc-400 hover:text-brand-lime hover:border-brand-lime transition-all flex items-center gap-1.5"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[10px] uppercase font-bold tracking-wider">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
