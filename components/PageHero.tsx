"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import DynamicImage, { getGlobalImageMap } from "./DynamicImage";

interface PageHeroProps {
  sectionIdPrefix: string;
  defaultSrc: string;
  className?: string;
  opacity?: number;
}

export default function PageHero({ sectionIdPrefix, defaultSrc, className = "", opacity = 0.2 }: PageHeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<string[]>([defaultSrc]);
  
  useEffect(() => {
    const init = async () => {
      const map = await getGlobalImageMap();
      const section = map[sectionIdPrefix];
      if (section && section.images && section.images.length > 0) {
        setSlides(section.images);
      } else if (section && section.imageUrl) {
        setSlides([section.imageUrl]);
      } else {
        setSlides([defaultSrc]);
      }
    };
    init();
  }, [sectionIdPrefix, defaultSrc]);

  const nextSlide = useCallback(() => {
    if (slides.length > 1) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  }, [slides]);

  useEffect(() => {
    if (slides.length > 1) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [nextSlide, slides]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${sectionIdPrefix}-${slides[currentSlide]}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image 
            src={slides[currentSlide]}
            alt="Hero Background"
            fill
            priority
            className="object-cover"
            style={{ opacity }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
