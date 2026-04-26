"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Microscope, Globe, LayoutList } from "lucide-react";

export default function Academics() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Academic Excellence</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">Empowering students through a robust curriculum and hands-on practical experiences.</p>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">A Hybrid Curriculum</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                At Hilces International School, we offer a comprehensive hybrid of the <strong className="text-slate-900">Ghana Education Service (GES)</strong> and <strong className="text-slate-900">British Curriculums</strong>. 
                This powerful combination ensures our students meet local standards while being fully prepared for global opportunities.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <Globe className="text-blue-600" size={24} />
                  <span className="font-medium text-slate-900">Global Perspective (British Curriculum)</span>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <LayoutList className="text-green-600" size={24} />
                  <span className="font-medium text-slate-900">Local Foundation (GES)</span>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 rounded-3xl p-8 flex items-center justify-center border border-amber-100 relative overflow-hidden">
              <BookOpen size={120} className="text-amber-500/20 absolute -right-10 -bottom-10" />
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-amber-900 mb-2">Activity-Based Learning</h3>
                <p className="text-amber-800">We move beyond rote memorization. Our teaching methodology involves practical, interactive, and engaging activities that make learning stick.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 text-white flex flex-col justify-center">
              <Microscope className="text-amber-500 mb-6" size={48} />
              <h3 className="text-3xl font-heading font-bold mb-4">Well-Equipped Laboratories</h3>
              <p className="text-slate-300 leading-relaxed">
                Our commitment to practical education is reflected in our state-of-the-art science laboratories. 
                Students are encouraged to experiment, discover, and innovate in a safe and supportive environment under the guidance of dedicated and experienced teachers.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] md:h-auto">
              <Image src="/images/science_lab.png" alt="Science Laboratory" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
