"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Microscope, 
  Users, 
  Activity,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <Image 
            src="/images/hero_school.png" 
            alt="Hilces International School Campus" 
            fill 
            className="object-cover opacity-50 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 font-medium text-sm mb-6 backdrop-blur-md">
              Admissions Open: 6 Months+ to JHS 3
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              With Excellence in <br/><span className="text-amber-500">Every Step</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light">
              Where young geniuses are nurtured. Experience a holistic approach to learning in a serene, world-class environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                Apply Today <ChevronRight size={18} />
              </Link>
              <Link href="/about" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center">
                Discover Our School
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-amber-500 uppercase mb-3">The Hilces Advantage</h2>
            <h3 className="text-4xl font-heading font-bold mb-4">Why Choose Hilces?</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">We provide an all-encompassing environment tailored for academic excellence and personal growth.</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: BookOpen, title: "Hybrid Curriculum", desc: "Perfect blend of GES and British Curriculum." },
              { icon: Activity, title: "Activity-Based", desc: "Interactive, hands-on learning experiences." },
              { icon: Users, title: "Expert Teachers", desc: "Dedicated and highly experienced educators." },
              { icon: Microscope, title: "Equipped Labs", desc: "State-of-the-art science laboratories." }
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeIn} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="text-amber-500" size={28} />
                </div>
                <h4 className="text-xl font-heading font-bold mb-3">{feature.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-heading font-bold mb-4">Academics</h3>
              <p className="text-slate-400 mb-6">Explore our hybrid curriculum that blends the best of GES and British educational systems.</p>
              <Link href="/academics" className="text-amber-500 font-medium hover:text-amber-400 flex items-center gap-2">Learn More <ChevronRight size={16}/></Link>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-heading font-bold mb-4">Co-Curricular</h3>
              <p className="text-slate-400 mb-6">From Coding and Robotics to Ballet and Taekwondo, see how we nurture well-rounded leaders.</p>
              <Link href="/activities" className="text-amber-500 font-medium hover:text-amber-400 flex items-center gap-2">Explore Activities <ChevronRight size={16}/></Link>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-heading font-bold mb-4">Admissions</h3>
              <p className="text-slate-400 mb-6">Ready to join the Hilces family? We admit students from 6 months old through to JHS 3.</p>
              <Link href="/admissions" className="text-amber-500 font-medium hover:text-amber-400 flex items-center gap-2">Apply Now <ChevronRight size={16}/></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
