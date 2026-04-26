"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Home, MessageCircle, Phone, ArrowRight, ShieldCheck } from "lucide-react";

export default function Admissions() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-primary text-white py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
           <Image src="/images/hero_school.png" alt="bg" fill className="object-cover" />
        </div>
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight relative z-10">Join Our Family</h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8 relative z-10"></div>
        <p className="text-white/70 max-w-2xl mx-auto text-lg font-medium leading-relaxed relative z-10">
          We are currently admitting students from 6 months to JHS 3. Start your child's journey today.
        </p>
      </div>

      {/* Admissions Info */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-xs font-bold tracking-[0.3em] text-gold uppercase mb-4">Enrollment</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8 leading-tight">Welcome to Hilces</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-12 font-medium">
                We provide a nurturing environment for children at every stage of their early development. Our admissions are currently open for:
              </p>
              
              <div className="space-y-6 mb-16">
                {[
                  "Early Childhood (from 6 months+)",
                  "Primary Department",
                  "Junior High School (up to JHS 3)"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-5 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <CheckCircle2 className="text-primary group-hover:text-white transition-colors" size={24} />
                    </div>
                    <span className="text-xl font-bold text-primary/80 group-hover:text-primary transition-colors">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary text-white p-12 rounded-[3.5rem] border border-primary relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700">
                   <Home size={120} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6 flex items-center gap-4">
                    <ShieldCheck className="text-gold" size={32} />
                    Boarding House
                  </h3>
                  <p className="text-white/70 leading-relaxed text-lg font-medium">
                    Our serene boarding facilities feature modern dormitories, providing a safe and comfortable 'home away from home'. Designed to foster discipline and community.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-12 md:p-16 rounded-[4rem] border border-slate-100 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-3xl font-heading font-bold text-primary mb-8">Inquiry Office</h3>
              <p className="text-slate-500 mb-12 font-medium">Ready to take the first step? Schedule a tour or begin the registration process with our admissions office.</p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Phone className="text-primary group-hover:text-white transition-colors" size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</p>
                    <a href="tel:0247704801" className="text-2xl font-bold text-primary hover:text-gold transition-colors">0247704801</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-xl group-hover:bg-[#25D366] group-hover:text-white transition-all duration-500">
                    <MessageCircle className="text-[#25D366] group-hover:text-white transition-colors" size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp</p>
                    <a href="https://wa.me/233247704801" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-primary hover:text-[#25D366] transition-colors">Admission Chat</a>
                  </div>
                </div>

                <div className="pt-10">
                  <a 
                    href="https://wa.me/233247704801" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-gold hover:bg-gold/90 text-primary py-6 rounded-[2rem] font-bold text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] shadow-2xl shadow-gold/20"
                  >
                    <Calendar size={26} />
                    Schedule a Visit <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dormitory Image Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[600px] rounded-[4rem] overflow-hidden shadow-2xl group">
            <Image 
              src="/images/modern_dorm.png" 
              alt="Modern Dormitory Facilities" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/20 transition-colors"></div>
            <div className="absolute bottom-16 left-16 text-white max-w-xl">
              <div className="bg-gold text-primary inline-block px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6">World Class Facilities</div>
              <h4 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">Modern Living Spaces</h4>
              <p className="text-white/80 text-xl font-medium leading-relaxed">
                A serene and secure environment designed for the comfort, well-being, and academic focus of our boarding students.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
