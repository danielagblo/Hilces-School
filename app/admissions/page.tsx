"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, MapPin, MessageCircle, Phone, ArrowRight, ShieldCheck, UserPlus, ClipboardCheck, GraduationCap } from "lucide-react";
import SchoolDoodles from "@/components/SchoolDoodles";
import EnrollmentForm from "@/components/EnrollmentForm";

export default function Admissions() {
  return (
    <div className="pb-0">
      {/* Cinematic Hero */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden bg-primary">
        <SchoolDoodles />
        <div className="absolute inset-0">
           <Image src="/images/hero_school.png" alt="Admissions Hero" fill className="object-cover opacity-30" priority />
           <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-gold font-bold text-[10px] uppercase tracking-widest mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Admissions Now Open
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 tracking-tight leading-tight">
              Begin Your Journey <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200 italic pr-2">at Hilces</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
              We are currently accepting applications from Creche (6 months+) through to Junior High School. Join a community built on academic excellence and strong moral values.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Admissions Process */}
      <section className="py-32 bg-white relative overflow-hidden">
        <SchoolDoodles className="text-primary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
             <h2 className="text-xs font-bold tracking-[0.3em] text-gold uppercase mb-4">Simple Steps</h2>
             <h3 className="text-4xl font-heading font-bold text-primary">The Admission Process</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: UserPlus, step: "01", title: "Inquire & Visit", desc: "Reach out to our admissions office to schedule a campus tour or ask any questions you might have." },
              { icon: ClipboardCheck, step: "02", title: "Apply Online", desc: "Fill out the detailed enrollment form below to officially submit your child's application." },
              { icon: GraduationCap, step: "03", title: "Enroll & Start", desc: "Once reviewed, you'll receive an admission letter and the necessary materials to start the term." }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 relative group hover:shadow-2xl transition-all">
                <div className="absolute top-10 right-10 text-6xl font-heading font-bold text-slate-200 group-hover:text-gold/20 transition-colors">{item.step}</div>
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl group-hover:scale-110 transition-transform">
                  <item.icon size={32} />
                </div>
                <h4 className="text-2xl font-heading font-bold text-primary mb-4 relative z-10">{item.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Application Form */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-16">
             <h2 className="text-xs font-bold tracking-[0.3em] text-gold uppercase mb-4">Apply Now</h2>
             <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Online Enrollment</h3>
             <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
               Ready to join the family? Complete our comprehensive online form and our admissions team will contact you immediately.
             </p>
           </div>
           
           <EnrollmentForm />
        </div>
      </section>

      {/* Location & Inquiry (Map Section) */}
      <section className="py-32 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Contact Info */}
              <div>
                <h2 className="text-xs font-bold tracking-[0.3em] text-gold uppercase mb-4">Visit Us</h2>
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8 leading-tight">Inquiry & Location</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-12 font-medium">
                  Our doors are always open for prospective parents. Use the map to locate our campus, or reach out directly to schedule an appointment.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center shadow-inner group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <Phone className="text-primary group-hover:text-white transition-colors" size={28} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</p>
                      <a href="tel:0247704801" className="text-2xl font-bold text-primary hover:text-gold transition-colors">0247704801</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center shadow-inner group-hover:bg-[#25D366] group-hover:text-white transition-all duration-500">
                      <MessageCircle className="text-[#25D366] group-hover:text-white transition-colors" size={28} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp</p>
                      <a href="https://wa.me/233247704801" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-primary hover:text-[#25D366] transition-colors">Admission Chat</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center shadow-inner group-hover:bg-gold group-hover:text-white transition-all duration-500">
                      <MapPin className="text-primary group-hover:text-white transition-colors" size={28} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Campus Location</p>
                      <p className="text-lg font-bold text-primary">Hilces International School, Ghana</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Map */}
              <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-50">
                 <iframe 
                    src="https://maps.google.com/maps?q=Hilces%20International%20School%20Ghana&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                 ></iframe>
              </div>
            </div>
         </div>
      </section>

      {/* Boarding Image Section (Footer anchor) */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <SchoolDoodles className="text-white/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative h-[500px] rounded-[4rem] overflow-hidden shadow-2xl group image-shine border border-white/10">
            <Image 
              src="/images/modern_dorm.png" 
              alt="Modern Dormitory Facilities" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
            <div className="absolute bottom-16 left-16 text-white max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                 <ShieldCheck className="text-gold" size={32} />
                 <div className="bg-gold/20 backdrop-blur-md text-gold inline-block px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest border border-gold/30">Secure Boarding</div>
              </div>
              <h4 className="text-4xl md:text-5xl font-heading font-bold mb-4 leading-tight">A Home Away From Home</h4>
              <p className="text-white/80 text-lg font-medium leading-relaxed">
                Our serene and secure boarding facilities are designed for the comfort, well-being, and academic focus of our students.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
