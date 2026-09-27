import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gymData } from '../data/gymData';
import { LayoutGrid, Maximize2, X, Eye } from 'lucide-react';

export default function GymGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="relative py-20 sm:py-28 bg-[#08080a] border-t border-[#242432]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141a] border border-[#242432] text-brand-lime text-xs font-bold uppercase tracking-widest"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>The Training Facility</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold uppercase text-white tracking-tight"
          >
            THE GYM <span className="text-brand-lime">EXPERIENCE</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed"
          >
            A look inside our high-performance facility: Olympic lifting platforms, turf sprints, and state-of-the-art conditioning zones.
          </motion.p>
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          {gymData.gallery.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedImage(item)}
              className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border border-[#242432] hover:border-brand-lime/70 transition-all duration-300 min-h-[240px] sm:min-h-[300px] ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/95 transition-all" />

              {/* Hover icon */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-[#242432] text-white group-hover:text-brand-lime group-hover:border-brand-lime flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                <Eye className="w-4 h-4" />
              </div>

              {/* Title & Category caption */}
              <div className="absolute bottom-5 left-5 right-5 z-10">
                <span className="text-[11px] uppercase tracking-wider font-bold text-brand-lime">
                  {item.area}
                </span>
                <h3 className="font-heading font-extrabold uppercase text-white text-lg sm:text-2xl mt-0.5">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full bg-[#121218] border border-brand-lime/40 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 text-white hover:text-brand-lime flex items-center justify-center border border-[#242432]"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative max-h-[75vh] overflow-hidden">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain mx-auto"
                />
              </div>

              <div className="p-6 bg-[#0e0e14] border-t border-[#242432] flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-brand-lime">
                    {selectedImage.area}
                  </div>
                  <h4 className="text-xl font-heading font-extrabold uppercase text-white mt-1">
                    {selectedImage.title}
                  </h4>
                </div>
                <span className="text-xs text-brand-lime font-mono font-medium">
                  Forge Facility Floor
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
