"use client";

import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { 
  BookOpen, 
  Microscope, 
  Users, 
  Activity,
  ChevronRight,
  ChevronLeft,
  Award,
  Globe,
  Star,
  Music,
  PenTool,
  Zap
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useCallback, useRef, useMemo } from "react";

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
    image: "/slideshow/650919053_122205798848323889_6911637195678904279_n.jpg",
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

function WhimsicalBubble({ feature, idx }: { feature: any, idx: number }) {
  const isEven = idx % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 20, 
        delay: idx * 0.05 
      }}
      className={`relative flex flex-col items-center group ${isEven ? 'md:translate-y-16' : ''}`}
    >
      {/* Bobbing Wrapper */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3 + idx,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative z-10"
      >
        {/* The Hover Bubble - Snappy Transition */}
        <motion.div
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.15, ease: [0.23, 1, 0.32, 1] } 
          }}
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-[3.5rem] overflow-hidden shadow-[0_15px_40px_rgba(10,77,162,0.12)] border-[3px] border-white group-hover:border-gold transition-colors duration-150 isolate bg-slate-900"
          style={{ transform: "translate3d(0,0,0)", backfaceVisibility: "hidden" }}
        >
          <Image 
            src={feature.image} 
            alt={feature.title} 
            fill 
            sizes="(max-width: 768px) 256px, 320px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/60 opacity-60"></div>
          
          {/* Floating Icon inside bubble */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-white shadow-2xl transition-transform duration-300 group-hover:scale-110">
              <feature.icon size={48} />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Whimsical Text Label */}
      <div className="mt-8 text-center max-w-[280px]">
        <h4 className="text-xl md:text-2xl font-heading font-bold text-primary mb-3 group-hover:text-gold transition-colors duration-150">
          {feature.title}
        </h4>
        <div className="overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-300 ease-out">
          <p className="text-slate-500 text-sm font-medium leading-relaxed pb-4 px-2">
            {feature.desc}
          </p>
        </div>
      </div>

      {/* Decorative Sparkle */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.8, 0.4],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -top-2 -right-2 text-gold z-20 pointer-events-none"
      >
        <Star size={24} className="fill-gold" />
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Pre-calculated random values to avoid hydration mismatch
  const iconPositions = useMemo(() => {
    return [...Array(12)].map((_, i) => ({
      left: `${(i * 15 + 7) % 100}%`,
      top: `${(i * 23 + 12) % 100}%`,
      type: i % 4
    }));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Slideshow Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#03152d]">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1.5 },
              scale: { duration: 8, ease: "linear" }
            }}
            className="absolute inset-0"
          >
            <Image 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title} 
              fill 
              sizes="100vw"
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#03152d] via-transparent to-transparent"></div>
          </motion.div>
        </AnimatePresence>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-black/20 backdrop-blur-md p-10 md:p-14 rounded-[3rem] border border-white/10 shadow-2xl"
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-gold/20 border border-gold/30 text-gold font-bold text-[10px] uppercase tracking-widest mb-6 backdrop-blur-md">
                {slides[currentSlide].badge}
              </span>
              <h1 className="text-4xl md:text-7xl font-heading font-bold text-white mb-6 leading-[1.1] tracking-tight">
                {slides[currentSlide].title.split(" ").slice(0, -2).join(" ")} <br />
                <span className="text-gold">{slides[currentSlide].title.split(" ").slice(-2).join(" ")}</span>
              </h1>
              <p className="text-base md:text-lg text-white/90 mb-10 max-w-xl mx-auto font-medium leading-relaxed">
                {slides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admissions" className="bg-gold hover:bg-gold/90 text-primary px-8 py-3.5 rounded-full font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-2xl shadow-gold/20">
                  Apply Today <ChevronRight size={20} />
                </Link>
                <Link href="/about" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-3.5 rounded-full font-bold transition-all flex items-center justify-center">
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
      </section>

      {/* WHY CHOOSE US - STABILIZED WHIMSICAL EDITION */}
      <section className="py-48 bg-white relative overflow-hidden">
        {/* Animated Background Doodles - Fixed Hydration */}
        <div className="absolute inset-0 pointer-events-none">
          {mounted && iconPositions.map((pos, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, 20, -20, 0],
                y: [0, -20, 20, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 15 + i,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: pos.left,
                top: pos.top,
              }}
              className="absolute opacity-5 text-primary"
            >
              {pos.type === 0 ? <Music size={48} /> : pos.type === 1 ? <PenTool size={32} /> : pos.type === 2 ? <Globe size={40} /> : <Zap size={24} />}
            </motion.div>
          ))}
          
          {/* Animated Connective Path */}
          <svg className="absolute inset-0 w-full h-full opacity-5">
            <motion.path
              d="M 100,300 Q 400,100 700,300 T 1300,300"
              fill="transparent"
              stroke="#0a4da2"
              strokeWidth="2"
              strokeDasharray="10 10"
              animate={{ strokeDashoffset: [-100, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-32">
            <motion.h3 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-5xl md:text-7xl font-heading font-black text-primary tracking-tight"
            >
              Why Choose <span className="text-gold">Hilces?</span>
            </motion.h3>
            <div className="w-20 h-1 bg-gold mx-auto mt-6 rounded-full opacity-50"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
            {[
              { 
                icon: BookOpen, 
                title: "Hybrid Curriculum", 
                desc: "A blend of British standards and GES local values for global success.",
                image: "/images/curriculum_feature.png"
              },
              { 
                icon: Activity, 
                title: "Activity Learning", 
                desc: "Hands-on projects that make complex concepts fun and memorable.",
                image: "/images/activity_feature.png"
              },
              { 
                icon: Users, 
                title: "Expert Mentors", 
                desc: "Dedicated teachers who nurture every child's individual genius.",
                image: "/images/teacher_feature.png"
              },
              { 
                icon: Microscope, 
                title: "Modern Labs", 
                desc: "Equipped Hubs for science, tech, and practical exploration.",
                image: "/images/lab_feature.png"
              }
            ].map((feature, idx) => (
              <WhimsicalBubble key={idx} feature={feature} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 opacity-5 text-primary pointer-events-none">
          <Star size={300} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold tracking-[0.3em] text-gold uppercase mb-4">Voice of Parents</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary tracking-tight">What Our Family <br/>Has to Say</h3>
            </div>
            <div className="flex gap-4">
               <div className="w-16 h-1 bg-gold rounded-full mb-2"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Mrs. Ama Boateng",
                role: "Parent",
                content: "Hilces has transformed my child's confidence. The hybrid curriculum is truly world-class, and I've seen remarkable improvement in her critical thinking skills."
              },
              {
                name: "Mr. Kwabena Mensah",
                role: "Parent",
                content: "The best decision we made for our son. The teachers are dedicated and the environment is serene. He's always excited to share what he learned in the lab!"
              },
              {
                name: "Dr. Sarah Appiah",
                role: "Parent",
                content: "I love the focus on practical learning. My daughter is always excited about her science experiments! The activity-based model really works."
              }
            ].map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-12 rounded-[3.5rem] shadow-xl shadow-primary/5 relative group hover:bg-primary transition-all duration-500 overflow-hidden"
              >
                {/* Large Background Quote Icon */}
                <div className="absolute top-0 right-0 p-8 text-primary/5 group-hover:text-white/10 transition-colors pointer-events-none">
                  <Star size={120} className="fill-current" />
                </div>

                <div className="relative z-10">
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-gold text-gold" />
                    ))}
                  </div>
                  
                  <div className="text-4xl font-serif text-gold/30 mb-4 leading-none">“</div>
                  
                  <p className="text-slate-600 text-xl leading-relaxed mb-10 font-medium group-hover:text-white/90 transition-colors">
                    {t.content}
                  </p>
                  
                  <div className="border-t border-slate-100 pt-8 group-hover:border-white/20 transition-colors">
                    <h4 className="text-2xl font-heading font-bold text-primary group-hover:text-white transition-colors">{t.name}</h4>
                    <span className="text-gold text-sm font-bold uppercase tracking-[0.3em]">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-32 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-7xl text-gold/20 font-serif mb-6 leading-none">“</div>
            <p className="text-3xl md:text-4xl font-heading font-medium italic mb-10 leading-relaxed">
              Our mission is to provide an enabling and thriving environment, and to produce well-mannered and responsible future leaders.
            </p>
            <div className="flex items-center justify-center gap-6">
              <div className="w-16 h-1 bg-gold rounded-full"></div>
              <span className="uppercase tracking-[0.5em] text-xs font-bold text-gold">Our Mission</span>
              <div className="w-16 h-1 bg-gold rounded-full"></div>
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
