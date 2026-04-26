"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Award, Target, Compass } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Hilces International</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">Discover our commitment to nurturing the next generation of global leaders through holistic education.</p>
      </div>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-amber-500 uppercase mb-3">Who We Are</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 leading-tight">
                Nurturing the <br/>Leaders of Tomorrow
              </h3>
              
              <div className="space-y-12 mt-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 shadow-sm border border-blue-100">
                    <Target className="text-blue-600" size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-heading font-bold text-slate-900 mb-3">Our Mission</h4>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      To provide an enabling and thriving environment, and to produce well-mannered and responsible future leaders.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center flex-shrink-0 shadow-sm border border-amber-100">
                    <Compass className="text-amber-600" size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-heading font-bold text-slate-900 mb-3">Our Vision</h4>
                    <p className="text-slate-600 leading-relaxed text-lg">
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
              className="relative h-[700px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="/images/science_lab.png" 
                alt="Students in laboratory" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 text-white">
                  <p className="font-heading font-bold text-2xl mb-1">Quality Education</p>
                  <p className="text-white/80 text-sm">Practical & Holistic Approach</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
