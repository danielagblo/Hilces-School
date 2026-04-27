"use client";

import Image from "next/image";
import DynamicImage from "@/components/DynamicImage";
import { motion } from "framer-motion";
import { Target, Compass, Award, Globe } from "lucide-react";
import SchoolDoodles from "@/components/SchoolDoodles";

export default function About() {
  return (
    <div className="pb-16">
      {/* Header */}
      <div className="bg-primary text-white py-32 px-4 text-center relative overflow-hidden">
        <SchoolDoodles />
        <div className="absolute inset-0 opacity-10">
          <DynamicImage sectionId="about-hero" defaultSrc="/images/hero_school.png" alt="background" fill className="object-cover" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight">About Hilces</h1>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8"></div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Nurturing the next generation of global leaders through holistic, practical education.
          </p>
        </div>
      </div>

      {/* Core Philosophy / Introduction */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <SchoolDoodles className="text-primary/5" />
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-gold mb-8 flex justify-center">
              <Award size={60} strokeWidth={1.5} className="drop-shadow-lg" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-10 leading-[1.15] tracking-tight">
              A school built on <span className="text-gold italic">Christ</span> the solid rock.
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-10 shadow-[0_0_15px_rgba(249,196,35,0.4)]"></div>
            <p className="text-2xl text-slate-600 font-medium leading-relaxed mb-8 px-4 border-l-4 border-r-4 border-gold/30">
              We uphold love, hard work, determination, respect, team work and discipline.
            </p>
            <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">
              We provide quality, practical and all round Education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-white relative overflow-hidden">
        <SchoolDoodles className="text-primary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-xs font-bold tracking-[0.3em] text-gold uppercase mb-4">Our Foundation</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-12 leading-tight">
                Empowering Minds, <br/>Inspiring Futures
              </h3>
              
              <div className="space-y-12">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-center gap-6 mb-4">
                    <motion.div 
                      whileInView={{ backgroundColor: ["rgba(10,77,162,0.05)", "rgba(10,77,162,1)", "rgba(10,77,162,0.05)"] }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      className="w-16 h-16 rounded-3xl bg-primary/5 flex items-center justify-center flex-shrink-0 shadow-sm border border-primary/10 group-hover:bg-primary transition-all duration-500"
                    >
                      <Target className="text-primary group-hover:text-white transition-colors" size={28} />
                    </motion.div>
                    <h4 className="text-2xl font-heading font-bold text-primary">Our Mission</h4>
                  </div>
                  <p className="text-slate-500 leading-relaxed text-lg font-medium">
                    To provide an enabling and thriving environment, and to produce well-mannered and responsible future leaders.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group"
                >
                  <div className="flex items-center gap-6 mb-4">
                    <motion.div 
                      whileInView={{ backgroundColor: ["rgba(249,196,35,0.1)", "rgba(249,196,35,1)", "rgba(249,196,35,0.1)"] }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      className="w-16 h-16 rounded-3xl bg-gold/10 flex items-center justify-center flex-shrink-0 shadow-sm border border-gold/20 group-hover:bg-gold transition-all duration-500"
                    >
                      <Compass className="text-gold group-hover:text-white transition-colors" size={28} />
                    </motion.div>
                    <h4 className="text-2xl font-heading font-bold text-primary">Our Vision</h4>
                  </div>
                  <p className="text-slate-500 leading-relaxed text-lg font-medium">
                    To be the leading providers of quality, practical and holistic education in an atmosphere of love and respect for global impact.
                  </p>
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[450px] md:h-[700px] rounded-[3rem] overflow-hidden shadow-2xl order-1 md:order-2 image-shine"
            >
              <DynamicImage 
                sectionId="about-philosophy"
                defaultSrc="/images/science_lab.png" 
                alt="Students in laboratory" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-transparent md:bg-gradient-to-t md:from-primary/60 md:to-transparent"></div>
              <div className="absolute top-0 md:top-auto md:bottom-0 left-0 p-6 md:p-12 w-full md:w-auto">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/20 text-white shadow-2xl">
                  <p className="font-heading font-bold text-2xl md:text-3xl mb-1 md:mb-2">Quality First</p>
                  <p className="text-white/80 font-medium text-sm md:text-base">Holistic Education for a Global Impact</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
