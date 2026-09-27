import React, { useState, useEffect } from 'react';
import { gymData } from '../data/gymData';
import { Menu, X, ArrowUpRight, Flame, HelpCircle, Phone, MessageCircle, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenJoinModal, onOpenFAQ }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { num: "01", label: "Home", href: "#home" },
    { num: "02", label: "Services", href: "#services" },
    { num: "03", label: "Coaches", href: "#trainers" },
    { num: "04", label: "Facility", href: "#facility" },
    { num: "05", label: "Pricing", href: "#pricing" },
    { num: "06", label: "Results", href: "#results" },
    { num: "07", label: "Location", href: "#contact" },
  ];

  // Lock body scroll when mobile menu is open to prevent background jitter/blinking
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Track active section on scroll ONLY when mobile menu is closed
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) return;

      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sectionIds = ['home', 'services', 'trainers', 'facility', 'pricing', 'results', 'contact'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.body.style.overflow = 'unset';

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${gymData.contact.whatsapp}&text=${encodeURIComponent(gymData.contact.whatsappMessage)}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08080a]/95 backdrop-blur-md border-b border-[#242432]/80 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#08080a]/90 via-[#08080a]/50 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-brand-lime rounded-lg px-1 py-1"
            >
              <div className="w-10 h-10 rounded-xl bg-[#14141a] border border-[#242432] group-hover:border-brand-lime/60 flex items-center justify-center transition-all duration-300 shadow-md">
                <Flame className="w-5 h-5 text-brand-lime transition-transform group-hover:scale-110" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-extrabold text-2xl tracking-wider text-white group-hover:text-brand-lime transition-colors">
                    {gymData.brand.shortName}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse"></span>
                </div>
                <span className="text-[9px] uppercase tracking-widest text-brand-muted font-bold -mt-1 hidden sm:block">
                  FITNESS CLUB
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#121218]/80 border border-[#242432]/70 px-3 py-1.5 rounded-full backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3.5 py-1.5 text-xs font-heading font-bold uppercase tracking-wider rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-black bg-brand-lime shadow-glow-lime-sm'
                        : 'text-zinc-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenFAQ}
                className="text-xs uppercase font-heading font-bold px-3 py-2 rounded-lg text-zinc-300 hover:text-brand-lime transition-colors cursor-pointer"
              >
                FAQ
              </button>
              <button
                type="button"
                onClick={onOpenJoinModal}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-lime text-black font-heading font-extrabold text-xs uppercase tracking-wider hover:bg-brand-limeHover transition-all duration-200 hover:scale-[1.02] shadow-glow-lime-sm cursor-pointer"
              >
                <span>Free 1-Day Pass</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Mobile Hamburger & Quick Pass Buttons */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={onOpenJoinModal}
                className="text-[11px] font-heading font-extrabold px-3 py-2 bg-brand-lime text-black rounded-xl uppercase tracking-wider shadow-glow-lime-sm cursor-pointer active:scale-95"
              >
                1-Day Pass
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#14141a] border border-[#2e3046] text-white hover:border-brand-lime focus:outline-none focus:ring-2 focus:ring-brand-lime cursor-pointer active:scale-95"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-5 h-5 text-brand-lime" />
                <span className="text-xs font-heading font-bold uppercase tracking-wider">Menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN MOBILE DRAWER (Stable, Zero Blinking, Dedicated [✕ CLOSE] Button) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden flex flex-col bg-[#090a10] animate-in fade-in duration-200">
          {/* Mobile Drawer Top Header Bar with Prominent [ ✕ CLOSE ] */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#222436] bg-[#0d0e16]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-lime text-black flex items-center justify-center">
                <Flame className="w-5 h-5 fill-black stroke-black" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-wider">
                {gymData.brand.name}
              </span>
            </div>

            {/* Prominent Cross / Close Button */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                document.body.style.overflow = 'unset';
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#1c1e2d] hover:bg-brand-lime text-zinc-200 hover:text-black border border-[#2e3048] transition-colors cursor-pointer active:scale-95"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5 text-brand-lime group-hover:text-black stroke-[2.5]" />
              <span className="text-xs font-heading font-bold uppercase tracking-wider">Close</span>
            </button>
          </div>

          {/* Scrollable Navigation Links (All 7 Sections Cleanly Displayed) */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-wider text-brand-lime font-bold px-1">
              NAVIGATION
            </div>

            <div className="space-y-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-150 ${
                      isActive
                        ? 'bg-brand-lime text-black font-extrabold shadow-glow-lime-sm'
                        : 'bg-[#12131d] text-zinc-200 hover:bg-[#1a1c2a] border border-[#202234]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono font-bold ${isActive ? 'text-black/70' : 'text-brand-lime'}`}>
                        {link.num}
                      </span>
                      <span className="font-heading font-extrabold text-base uppercase tracking-wider">
                        {link.label}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-black stroke-[3]' : 'text-zinc-500'}`} />
                  </a>
                );
              })}
            </div>

            {/* Extra Info Accordion Trigger */}
            <div className="pt-3 border-t border-[#202234] space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold px-1">
                MEMBERSHIP SUPPORT
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.body.style.overflow = 'unset';
                  if (onOpenFAQ) onOpenFAQ();
                }}
                className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-[#12131d] text-white border border-[#202234] hover:border-brand-lime/50 transition-colors text-left cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4 text-brand-lime shrink-0" />
                  <span className="font-heading font-bold text-sm uppercase tracking-wide">
                    Frequently Asked Questions (FAQ)
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 shrink-0" />
              </button>
            </div>

            {/* Direct Communication Buttons */}
            <div className="pt-2 border-t border-[#202234] space-y-2.5 pb-6">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${gymData.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#141522] border border-[#24263a] text-white font-heading font-bold text-xs uppercase tracking-wider"
                >
                  <Phone className="w-4 h-4 text-brand-lime" />
                  <span>Call Front Desk</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#141522] border border-[#24263a] text-emerald-400 font-heading font-bold text-xs uppercase tracking-wider"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.body.style.overflow = 'unset';
                  if (onOpenJoinModal) onOpenJoinModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-brand-lime text-black font-heading font-extrabold text-sm tracking-wider uppercase shadow-glow-lime cursor-pointer active:scale-95"
              >
                <Flame className="w-4 h-4 fill-black stroke-black" />
                <span>CLAIM FREE 1-DAY PASS</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
