"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Compass, Award, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="pb-16">
      {/* Header */}
      <div className="bg-primary text-white py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/hero_school.png" alt="background" fill className="object-cover" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight">About Hilces</h1>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8"></div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Nurturing the next generation of global leaders through holistic, practical education.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  className="flex gap-8 group"
                >
                  <div className="w-20 h-20 rounded-3xl bg-primary/5 flex items-center justify-center flex-shrink-0 shadow-sm border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Target className="text-primary group-hover:text-white transition-colors" size={36} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-heading font-bold text-primary mb-3">Our Mission</h4>
                    <p className="text-slate-500 leading-relaxed text-lg font-medium">
                      To provide an enabling and thriving environment, and to produce well-mannered and responsible future leaders.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-8 group"
                >
                  <div className="w-20 h-20 rounded-3xl bg-gold/10 flex items-center justify-center flex-shrink-0 shadow-sm border border-gold/20 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                    <Compass className="text-gold group-hover:text-white transition-colors" size={36} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-heading font-bold text-primary mb-3">Our Vision</h4>
                    <p className="text-slate-500 leading-relaxed text-lg font-medium">
                      To be the leading providers of quality, practical and holistic education in an atmosphere of love and respect for global impact.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[700px] rounded-[3rem] overflow-hidden shadow-2xl order-1 md:order-2"
            >
              <Image 
                src="/images/science_lab.png" 
                alt="Students in laboratory" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-12">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 text-white shadow-2xl">
                  <p className="font-heading font-bold text-3xl mb-2">Quality First</p>
                  <p className="text-white/80 font-medium">Holistic Education for a Global Impact</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
