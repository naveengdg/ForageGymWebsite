import React from 'react';
import { motion } from 'framer-motion';
import { gymData } from '../data/gymData';
import { MapPin, Phone, Mail, Clock, Navigation, Flame, Info } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';

export default function Contact() {
  const { contact, brand } = gymData;

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#08080a] border-t border-[#242432]/60 overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-lime/[0.04] blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141a] border border-[#242432] text-brand-lime text-xs font-bold uppercase tracking-widest"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Facility Location</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold uppercase text-white tracking-tight"
          >
            COME TRAIN <span className="text-brand-lime">WITH US</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed"
          >
            Conveniently situated in Bargur, featuring dedicated locker rooms, recovery amenities, and Olympic strength bays.
          </motion.p>

          <div className="pt-2 flex justify-center">
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-300 bg-[#12121a] px-3.5 py-1.5 rounded-full border border-brand-lime/30">
              <span className="w-2 h-2 rounded-full bg-brand-lime" />
              <span>Dedicated On-Site Parking • Climate Controlled Facility</span>
            </span>
          </div>
        </div>

        {/* 2-Column Info & Stylized Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#121218] border border-[#242432] hover:border-brand-lime/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1a1a26] text-brand-lime flex items-center justify-center shrink-0 border border-[#242432]">
                  <MapPin className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-brand-lime">
                    Facility Address
                  </div>
                  <div className="text-lg font-heading font-bold text-white mt-1">
                    {brand.name}
                  </div>
                  <div className="text-sm text-zinc-300 mt-1">
                    {contact.address}, {contact.city}
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 rounded-2xl bg-[#121218] border border-[#242432] hover:border-brand-lime/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1a1a26] text-brand-lime flex items-center justify-center shrink-0 border border-[#242432]">
                  <Clock className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase font-bold tracking-wider text-brand-lime">
                    Opening Hours
                  </div>
                  <div className="space-y-2 mt-2">
                    {contact.hours.map((h, i) => (
                      <div key={i} className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-zinc-400">{h.days}</span>
                        <span className="font-heading font-bold text-white">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#121218] border border-[#242432]">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-lime" />
                  <span className="text-xs font-bold uppercase text-zinc-400">Phone</span>
                </div>
                <div className="font-heading font-bold text-white text-sm mt-2">
                  {contact.phoneDisplay}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#121218] border border-[#242432]">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-lime" />
                  <span className="text-xs font-bold uppercase text-zinc-400">Email</span>
                </div>
                <div className="font-mono text-xs text-white mt-2 truncate">
                  {contact.email}
                </div>
              </div>
            </div>

            {/* Social Connection Banner */}
            <div className="p-5 rounded-2xl bg-[#14141e] border border-[#242432] flex items-center justify-between">
              <span className="text-xs text-zinc-300 font-medium">Follow Our Training Feed:</span>
              <div className="flex items-center gap-2">
                <a
                  href={contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg bg-[#1c1c28] text-zinc-300 hover:text-black hover:bg-brand-lime flex items-center justify-center transition-all"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg bg-[#1c1c28] text-zinc-300 hover:text-black hover:bg-brand-lime flex items-center justify-center transition-all"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={contact.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-lg bg-[#1c1c28] text-zinc-300 hover:text-black hover:bg-brand-lime flex items-center justify-center transition-all"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Stylized Dark Map Visual (Fictional concept, no real maps copy) */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[380px] rounded-3xl overflow-hidden border border-[#242432] bg-[#0c0c12] p-8 flex flex-col justify-between">
              
              {/* Radar Grid Pattern background */}
              <div className="absolute inset-0 bg-subtle-grid opacity-30" />
              <div className="absolute -top-1/4 -right-1/4 w-96 h-96 rounded-full border border-brand-lime/10" />
              <div className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full border border-brand-lime/5" />
              <div className="absolute -top-1/4 -right-1/4 w-[650px] h-[650px] rounded-full border border-brand-lime/5" />

              {/* Map header */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-[#242432] text-xs font-mono text-brand-lime">
                  <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                  <span>GPS: 12.541° N, 78.361° E (Bargur Hub)</span>
                </div>

                <span className="text-[10px] uppercase font-bold text-brand-lime bg-[#161622] px-2.5 py-1 rounded-md border border-brand-lime/30">
                  Facility Hub
                </span>
              </div>

              {/* Center Map Pin Graphic */}
              <div className="relative z-10 my-10 flex flex-col items-center justify-center text-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-brand-lime/20 animate-ping absolute inset-0" />
                  <div className="relative w-16 h-16 rounded-2xl bg-brand-lime text-black flex items-center justify-center shadow-glow-lime">
                    <Flame className="w-8 h-8 fill-black" />
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-brand-lime/40 max-w-xs shadow-xl">
                  <div className="font-heading font-extrabold uppercase text-white text-base">
                    {brand.name} HQ
                  </div>
                  <div className="text-xs text-zinc-300 mt-1">
                    12 Performance Avenue, Bargur
                  </div>
                  <div className="text-[10px] text-brand-lime mt-1 font-semibold uppercase">
                    Free Parking • Air Conditioned
                  </div>
                </div>
              </div>

              {/* Bottom CTA for Directions (Non-functional as per prompt) */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#242432]/60">
                <span className="text-xs text-zinc-400">
                  Easy accessibility right off the main Bargur corridor.
                </span>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Bargur+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1c1c28] hover:bg-brand-lime text-white hover:text-black font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-[#242432]"
                >
                  <Navigation className="w-4 h-4 stroke-[2.5]" />
                  <span>GET DIRECTIONS</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
