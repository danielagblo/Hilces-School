"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code, Music, Calculator, Award, Activity, Star } from "lucide-react";

const activities = [
  {
    title: "Coding and Robotics",
    description: "Preparing students for the digital age through hands-on programming and robotics projects.",
    icon: Code,
    color: "bg-[#0a4da2]", // Brand Blue
    image: "/images/robotics_class.png"
  },
  {
    title: "Practical Music",
    description: "Nurturing musical talent through specialized lessons in various instruments and theory.",
    icon: Music,
    color: "bg-[#d71921]" // Brand Red
  },
  {
    title: "ABACUS",
    description: "Enhancing mental calculation skills and cognitive development through training.",
    icon: Calculator,
    color: "bg-[#f9c423]" // Brand Gold
  },
  {
    title: "Ballet",
    description: "Promoting grace, discipline, and physical fitness through professional ballet instruction.",
    icon: Activity,
    color: "bg-[#0a4da2]"
  },
  {
    title: "Taekwondo",
    description: "Building confidence, discipline, and self-defense skills through martial arts training.",
    icon: Award,
    color: "bg-[#d71921]"
  }
];

export default function Activities() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-primary text-white py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
           <Image src="/images/robotics_class.png" alt="bg" fill className="object-cover" />
        </div>
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight relative z-10">Beyond the Classroom</h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8 relative z-10"></div>
        <p className="text-white/70 max-w-2xl mx-auto text-lg font-medium leading-relaxed relative z-10">
          Discover a world of opportunities through our diverse co-curricular programs.
        </p>
      </div>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Star className="text-gold fill-gold" size={20} />
                <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase">Empowerment</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8 leading-tight">Nurturing Unique Talents</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8 font-medium">
                We believe education extends far beyond textbooks. Our programs help students discover their passions, build confidence, and develop essential life skills.
              </p>
              <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 italic text-primary/70 font-medium text-lg leading-relaxed shadow-sm">
                "Whether it's logical thinking in robotics or creative expression in music, we provide the stage for every child to shine."
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl group"
            >
              <Image 
                src="/images/robotics_class.png" 
                alt="Co-curricular activities" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white animate-pulse">
                  <Star size={40} className="fill-white" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-12 rounded-[3rem] border border-slate-100 hover:shadow-2xl hover:shadow-primary/5 transition-all group flex flex-col items-center text-center"
              >
                <div className={`w-20 h-20 ${activity.color} rounded-3xl flex items-center justify-center mb-10 text-white shadow-2xl transform group-hover:rotate-6 transition-transform`}>
                  <activity.icon size={36} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-6">{activity.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium mb-8">{activity.description}</p>
                <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <Star size={12} className="fill-gold" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
