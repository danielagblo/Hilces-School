"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Microscope, Globe, LayoutList, CheckCircle2, Star, Lightbulb, Compass, Users } from "lucide-react";

export default function Academics() {
  return (
    <div className="pb-16">
      {/* Header */}
      <div className="bg-primary text-white py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight relative z-10">Academic Excellence</h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8 relative z-10"></div>
        <p className="text-white/70 max-w-2xl mx-auto text-lg font-medium leading-relaxed relative z-10">
          Empowering students through a robust curriculum and hands-on practical experiences.
        </p>
      </div>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 mb-32 items-center">
            <div>
              <h2 className="text-xs font-bold tracking-[0.3em] text-gold uppercase mb-4">Our Curriculum</h2>
              <h3 className="text-4xl font-heading font-bold text-primary mb-8 leading-tight">A Global Foundation <br/>with Local Roots</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                At Hilces International School, we offer a comprehensive hybrid of the <strong className="text-primary font-bold">Ghana Education Service (GES)</strong> and <strong className="text-primary font-bold">British Curriculums</strong>. 
                This powerful combination ensures our students meet local standards while being fully prepared for international success.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mt-12">
                {[
                  { icon: Globe, title: "British Standards", color: "text-blue-600", bg: "bg-blue-50" },
                  { icon: LayoutList, title: "GES Excellence", color: "text-green-600", bg: "bg-green-50" },
                  { icon: BookOpen, title: "Activity-Based", color: "text-gold", bg: "bg-gold/10" },
                  { icon: CheckCircle2, title: "Practical Focus", color: "text-primary", bg: "bg-primary/5" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-primary/5 transition-all">
                    <div className={`w-12 h-12 ${item.bg} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
                      <item.icon className={item.color} size={24} />
                    </div>
                    <span className="font-bold text-primary text-sm">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl group">
              <Image src="/images/science_lab.png" alt="Laboratory" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
              <div className="absolute top-10 right-10">
                <div className="bg-gold text-primary p-6 rounded-3xl shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500 font-heading font-bold">
                  Practical <br/>First
                </div>
              </div>
            </div>
          </div>

          {/* Curriculum Deep Dive */}
          <div className="mb-32">
            <div className="text-center mb-20">
              <h2 className="text-xs font-bold tracking-[0.3em] text-gold uppercase mb-4">Core Areas</h2>
              <h3 className="text-4xl font-heading font-bold text-primary">Hybrid Learning Framework</h3>
              <p className="text-slate-500 max-w-2xl mx-auto mt-6 font-medium">How we integrate the best of both worlds for your child's success.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Early Years (EYFS)",
                  desc: "Based on British EYFS principles. We focus on Communication, Language, Physical Development, and Personal, Social, and Emotional growth.",
                  icon: Star,
                  areas: ["Phonics & Literacy", "Mathematical Fluency", "Understanding the World", "Creative Expression"]
                },
                {
                  title: "Primary (Cambridge + GES)",
                  desc: "A blend of Cambridge Primary and the GES standard. We emphasize enquiry-based learning while meeting national requirements.",
                  icon: Lightbulb,
                  areas: ["English & Numeracy", "Integrated Science", "ICT & Digital Literacy", "Local Language & Culture"]
                },
                {
                  title: "Junior High (BECE + Global)",
                  desc: "Intensive preparation for the BECE (GES) alongside British critical thinking models for global competitiveness.",
                  icon: Compass,
                  areas: ["Advanced Mathematics", "Scientific Enquiry", "Social Studies", "Pre-Technical Skills"]
                }
              ].map((stage, idx) => (
                <div key={idx} className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 hover:shadow-2xl transition-all group">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8 text-white shadow-xl group-hover:rotate-6 transition-transform">
                    <stage.icon size={32} />
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-primary mb-6">{stage.title}</h4>
                  <p className="text-slate-500 mb-8 font-medium leading-relaxed">{stage.desc}</p>
                  <ul className="space-y-3">
                    {stage.areas.map((area, aIdx) => (
                      <li key={aIdx} className="flex items-center gap-3 text-primary/80 font-bold text-sm">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Integration Features */}
          <div className="grid md:grid-cols-2 gap-10 mb-32">
            <div className="bg-primary p-12 md:p-16 rounded-[4rem] text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-12 opacity-5 transform group-hover:scale-150 transition-transform duration-1000">
                  <Globe size={200} />
               </div>
               <div className="relative z-10">
                 <h3 className="text-3xl font-heading font-bold mb-8">British Pedagogical Model</h3>
                 <p className="text-white/70 text-lg leading-relaxed mb-10 font-medium">
                   We adopt the enquiry-based learning model from the British curriculum. This encourages students to ask "Why?" and "How?", fostering critical thinking and problem-solving skills from a very young age.
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-1 bg-gold rounded-full"></div>
                    <span className="text-gold uppercase tracking-widest text-xs font-bold">Critical Thinking</span>
                 </div>
               </div>
            </div>
            <div className="bg-slate-900 p-12 md:p-16 rounded-[4rem] text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-12 opacity-5 transform group-hover:scale-150 transition-transform duration-1000">
                  <LayoutList size={200} />
               </div>
               <div className="relative z-10">
                 <h3 className="text-3xl font-heading font-bold mb-8">GES Value Foundation</h3>
                 <p className="text-white/70 text-lg leading-relaxed mb-10 font-medium">
                   Our integration of the GES curriculum ensures that our students are deeply rooted in their cultural identity, local languages, and the moral values that are essential for building responsible future leaders in Ghana.
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-1 bg-gold rounded-full"></div>
                    <span className="text-gold uppercase tracking-widest text-xs font-bold">Cultural Heritage</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Lab Focus */}
          <div className="bg-primary rounded-[4rem] overflow-hidden shadow-2xl flex flex-col md:flex-row items-stretch">
            <div className="md:w-1/2 p-16 md:p-24 text-white flex flex-col justify-center">
              <div className="w-20 h-20 bg-gold/20 rounded-3xl flex items-center justify-center mb-10">
                <Microscope className="text-gold" size={44} />
              </div>
              <h3 className="text-4xl font-heading font-bold mb-8 leading-tight">Well-Equipped <br/>Laboratories</h3>
              <p className="text-white/70 leading-relaxed text-lg font-medium mb-12">
                Our commitment to practical education is reflected in our state-of-the-art science laboratories. 
                Students are encouraged to experiment, discover, and innovate in a safe environment under the guidance of dedicated educators.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-0.5 w-12 bg-gold"></div>
                <span className="uppercase tracking-[0.3em] text-xs font-bold text-gold">Innovation Hub</span>
              </div>
            </div>
            <div className="md:w-1/2 relative h-[500px] md:h-auto">
              <Image src="/images/science_lab.png" alt="Science Laboratory" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent md:block hidden"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
