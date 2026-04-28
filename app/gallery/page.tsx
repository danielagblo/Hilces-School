"use client";

import PageHero from "@/components/PageHero";
import { getGlobalImageMap } from "@/components/DynamicImage";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GalleryPage() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const map = await getGlobalImageMap();
      const section = map['gallery-main'];
      if (section && section.images && section.images.length > 0) {
        setImages(section.images);
      } else if (section && section.imageUrl) {
        setImages([section.imageUrl]);
      } else {
        setImages([]);
      }
      setLoading(false);
    };
    init();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <PageHero 
          sectionIdPrefix="gallery-hero" 
          defaultSrc="/images/hero_school.png" 
          opacity={0.4} 
        />
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6 drop-shadow-lg">
              Our <span className="text-gold">Gallery</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-medium drop-shadow-md">
              A glimpse into life at Hilces International School.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-primary border-t-gold rounded-full animate-spin"></div>
          </div>
        ) : images.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 10) * 0.1 }}
                className="relative break-inside-avoid overflow-hidden rounded-3xl shadow-lg group"
              >
                <div className="relative w-full" style={{ paddingBottom: `${(idx % 3 === 0 ? 120 : idx % 2 === 0 ? 80 : 100)}%` }}>
                   <Image 
                     src={img} 
                     alt={`Gallery Image ${idx + 1}`} 
                     fill 
                     className="object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-heading font-bold text-slate-800 mb-2">Check back soon!</h3>
            <p className="text-slate-500">We are currently curating our photo gallery.</p>
          </div>
        )}
      </section>
    </div>
  );
}
