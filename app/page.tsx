"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  BookOpen, 
  Microscope, 
  Home, 
  Users, 
  Activity,
  Code,
  Music,
  Calculator,
  MessageCircle,
  ChevronRight,
  Menu,
  X,
  Globe,
  Award
} from "lucide-react";
import { useState, useEffect } from "react";

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

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-white font-heading font-bold text-xl">
              H
            </div>
            <span className={`font-heading font-bold text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Hilces International
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className={`hidden md:flex gap-8 font-medium text-sm ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>
            <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
            <a href="#academics" className="hover:text-amber-500 transition-colors">Academics</a>
            <a href="#activities" className="hover:text-amber-500 transition-colors">Activities</a>
            <a href="#admissions" className="hover:text-amber-500 transition-colors">Admissions</a>
          </div>

          <div className="hidden md:block">
            <a href="#admissions" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-amber-500/20">
              Apply Today
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col gap-6 md:hidden">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-heading font-semibold text-slate-900 border-b pb-4">About</a>
          <a href="#academics" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-heading font-semibold text-slate-900 border-b pb-4">Academics</a>
          <a href="#activities" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-heading font-semibold text-slate-900 border-b pb-4">Activities</a>
          <a href="#admissions" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-heading font-semibold text-slate-900 border-b pb-4">Admissions</a>
          <a href="#admissions" onClick={() => setMobileMenuOpen(false)} className="mt-4 bg-slate-900 text-white text-center py-4 rounded-xl font-medium text-lg">
            Apply Today
          </a>
        </div>
      )}

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
              <a href="#admissions" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                Apply Today <ChevronRight size={18} />
              </a>
              <a href="#about" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center">
                Discover Our School
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h2 variants={fadeIn} className="text-sm font-bold tracking-widest text-amber-500 uppercase mb-3">Who We Are</motion.h2>
              <motion.h3 variants={fadeIn} className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 leading-tight">
                Nurturing the <br/>Leaders of Tomorrow
              </motion.h3>
              
              <div className="space-y-8">
                <motion.div variants={fadeIn} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Globe className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-slate-900 mb-2">Our Mission</h4>
                    <p className="text-slate-600 leading-relaxed">
                      To provide an enabling and thriving environment, and to produce well-mannered and responsible future leaders.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Award className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-slate-900 mb-2">Our Vision</h4>
                    <p className="text-slate-600 leading-relaxed">
                      To be the leading providers of quality, practical and holistic education in an atmosphere of love and respect for global impact.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.div variants={fadeIn} className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
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
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-amber-500 uppercase mb-3">The Hilces Advantage</h2>
            <h3 className="text-4xl font-heading font-bold mb-4">Why Choose Hilces?</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">We provide an all-encompassing environment tailored for academic excellence and personal growth.</p>
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
              <motion.div key={idx} variants={fadeIn} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-amber-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="text-amber-500" size={28} />
                </div>
                <h4 className="text-xl font-heading font-bold mb-3">{feature.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Facilities & Boarding */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeIn} className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1">
              <Image 
                src="/images/modern_dorm.png" 
                alt="Modern Dormitory" 
                fill 
                className="object-cover"
              />
            </motion.div>

            <div className="order-1 md:order-2">
              <motion.h2 variants={fadeIn} className="text-sm font-bold tracking-widest text-amber-500 uppercase mb-3">Our Facilities</motion.h2>
              <motion.h3 variants={fadeIn} className="text-4xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                Serene Learning & <br/>Living Environment
              </motion.h3>
              <motion.p variants={fadeIn} className="text-slate-600 mb-8 text-lg">
                We believe that the environment dictates the quality of learning. Our campus is meticulously designed to provide peace, focus, and comfort.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="space-y-4">
                <motion.div variants={fadeIn} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <Home className="text-blue-600" size={24} />
                  <div>
                    <h5 className="font-bold text-slate-900">Modern Dormitories</h5>
                    <p className="text-sm text-slate-500">Serene and luxurious boarding facilities.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <Activity className="text-green-600" size={24} />
                  <div>
                    <h5 className="font-bold text-slate-900">Serene Environment</h5>
                    <p className="text-sm text-slate-500">Spacious, clean, and green campus.</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Co-Curricular Activities */}
      <section id="activities" className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-amber-500 uppercase mb-3">Beyond The Classroom</h2>
              <h3 className="text-4xl font-heading font-bold text-slate-900">Co-Curricular Activities</h3>
            </div>
            <p className="text-slate-600 max-w-md">Developing well-rounded individuals through diverse and engaging extracurricular programs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 relative h-[400px] rounded-3xl overflow-hidden group"
            >
              <Image src="/images/robotics_class.png" alt="Robotics Class" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">Featured</div>
                <h4 className="text-3xl font-heading font-bold text-white mb-2">Coding & Robotics</h4>
                <p className="text-slate-200 max-w-md">Preparing students for the digital future with practical, hands-on tech education.</p>
              </div>
            </motion.div>

            <div className="space-y-4">
              {[
                { icon: Music, title: "Practical Music", desc: "Lessons & Instrumentals" },
                { icon: Calculator, title: "ABACUS", desc: "Mental Math Mastery" },
                { icon: Activity, title: "Ballet", desc: "Grace & Coordination" },
                { icon: Award, title: "Taekwondo", desc: "Discipline & Fitness" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-2xl flex items-center gap-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center">
                    <item.icon className="text-slate-700" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{item.title}</h5>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Admissions */}
      <section id="admissions" className="py-24 bg-amber-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-400 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">Start Your Child's Journey Today</h2>
          <p className="text-xl text-slate-800 mb-10 max-w-2xl mx-auto">
            We are currently admitting students from <strong className="font-bold">6 months+ to JHS 3</strong>. Join the Hilces family for a transformative educational experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/233247704801" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-xl"
            >
              <MessageCircle size={20} className="text-green-400" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 pt-20 pb-10 text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center text-white font-heading font-bold">
                  H
                </div>
                <span className="font-heading font-bold text-xl text-white">
                  Hilces International
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Leading providers of quality, practical and holistic education in an atmosphere of love and respect for global impact.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 font-heading tracking-wide">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#about" className="hover:text-amber-500 transition-colors">About Us</a></li>
                <li><a href="#academics" className="hover:text-amber-500 transition-colors">Academics</a></li>
                <li><a href="#activities" className="hover:text-amber-500 transition-colors">Co-Curricular</a></li>
                <li><a href="#admissions" className="hover:text-amber-500 transition-colors">Admissions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 font-heading tracking-wide">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MessageCircle size={18} className="text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-1">WhatsApp / Call</p>
                    <a href="tel:0247704801" className="hover:text-amber-500 transition-colors">0247704801</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} Hilces International School. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/233247704801" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-white text-slate-900 text-sm font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none">
          Chat with us
        </span>
      </a>
    </div>
  );
}
