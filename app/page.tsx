"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  Microscope, 
  Users, 
  Activity,
  ChevronRight,
  ChevronLeft,
  Award,
  Globe,
  Star
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    image: "/slideshow/576274844_122193623714323889_1221105248129116435_n.jpg",
    title: "Excellence in Every Step",
    subtitle: "Where young geniuses are nurtured through holistic education in a serene environment.",
    badge: "Admissions Open: 6 Months+ to JHS 3"
  },
  {
    image: "/slideshow/649175189_122205799340323889_7498047806518144597_n.jpg",
    title: "Global Standards, Local Values",
    subtitle: "A perfect hybrid of the British and GES Curriculums for a well-rounded education.",
    badge: "Hybrid Curriculum"
  },
  {
    image: "/slideshow/649254884_122205798806323889_7129877090498415075_n.jpg",
    title: "Activity-Based Learning",
    subtitle: "Engaging students through practical, hands-on experiences and modern technology.",
    badge: "Practical Focus"
  },
  {
    image: "/slideshow/649576528_122205799154323889_4336832064221734714_n.jpg",
    title: "Serene Living & Learning",
    subtitle: "Modern dormitory facilities and a peaceful campus designed for focus and growth.",
    badge: "Modern Facilities"
  },
  {
    image: "/slideshow/651051850_122205799826323889_9089719439425947692_n.jpg",
    title: "Nurturing Future Leaders",
    subtitle: "Producing well-mannered and responsible leaders ready for global impact.",
    badge: "Holistic Growth"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div>
      {/* Hero Slideshow Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title} 
              fill 
              className="object-cover opacity-40 scale-105 animate-slow-zoom"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
          </motion.div>
        </AnimatePresence>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block py-2 px-5 rounded-full bg-gold/20 border border-gold/30 text-gold font-bold text-xs uppercase tracking-widest mb-8 backdrop-blur-md">
                {slides[currentSlide].badge}
              </span>
              <h1 className="text-5xl md:text-8xl font-heading font-bold text-white mb-8 leading-[1.1] tracking-tight">
                {slides[currentSlide].title.split(" ").slice(0, -2).join(" ")} <br/>
                <span className="text-gold">{slides[currentSlide].title.split(" ").slice(-2).join(" ")}</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                {slides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link href="/admissions" className="bg-gold hover:bg-gold/90 text-primary px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-2xl shadow-gold/20">
                  Apply Today <ChevronRight size={20} />
                </Link>
                <Link href="/about" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-bold transition-all flex items-center justify-center">
                  Our Story
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-primary transition-all backdrop-blur-md"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-primary transition-all backdrop-blur-md"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === idx ? 'w-10 bg-gold' : 'w-4 bg-white/30'}`}
            />
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-10 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold rotate-90 origin-left mb-8">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent"></div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white text-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-4">The Hilces Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">Why Choose Us?</h3>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8"></div>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">We provide an all-encompassing environment tailored for academic excellence and personal growth.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: BookOpen, title: "Hybrid Curriculum", desc: "Perfect blend of GES and British Curriculum." },
              { icon: Activity, title: "Activity-Based", desc: "Interactive, hands-on learning experiences." },
              { icon: Users, title: "Expert Teachers", desc: "Dedicated and highly experienced educators." },
              { icon: Microscope, title: "Equipped Labs", desc: "State-of-the-art science laboratories." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 border border-slate-100 p-10 rounded-[2.5rem] hover:shadow-2xl hover:shadow-primary/5 transition-all hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <feature.icon className="text-primary group-hover:text-white transition-colors" size={32} />
                </div>
                <h4 className="text-2xl font-heading font-bold mb-4 text-primary">{feature.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl text-gold/20 font-serif mb-4 leading-none">“</div>
            <p className="text-2xl md:text-3xl font-heading font-medium italic mb-8 leading-relaxed">
              Our mission is to provide an enabling and thriving environment, and to produce well-mannered and responsible future leaders.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-1 bg-gold rounded-full"></div>
              <span className="uppercase tracking-[0.4em] text-xs font-bold text-gold">Our Mission</span>
              <div className="w-12 h-1 bg-gold rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                title: "Academics", 
                desc: "Explore our hybrid curriculum that blends the best of GES and British educational systems.",
                link: "/academics"
              },
              { 
                title: "Co-Curricular", 
                desc: "From Coding and Robotics to Ballet and Taekwondo, see how we nurture well-rounded leaders.",
                link: "/activities"
              },
              { 
                title: "Admissions", 
                desc: "Ready to join the Hilces family? We admit students from 6 months old through to JHS 3.",
                link: "/admissions"
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-12 rounded-[3rem] hover:shadow-2xl hover:shadow-primary/5 transition-all group">
                <h3 className="text-3xl font-heading font-bold mb-6 text-primary">{card.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed font-medium">{card.desc}</p>
                <Link href={card.link} className="text-primary font-bold hover:text-gold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <ChevronRight size={20} className="text-gold" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
