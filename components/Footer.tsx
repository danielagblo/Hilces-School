"use client";

import Link from "next/link";
import Image from "next/image";
import DynamicImage from "@/components/DynamicImage";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";

const ChildDoodle = () => (
  <svg viewBox="-40 -120 200 280" width="300" height="420" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/20 rotate-[-5deg]">
    {/* ===== THE CHILD ===== */}
    <g className="opacity-40">
      {/* Head */}
      <circle cx="50" cy="40" r="25" />
      {/* Hair */}
      <path d="M 45 10 L 48 15 M 55 12 L 53 16 M 62 18 L 58 20" />
      {/* Ears */}
      <path d="M 25 45 C 20 40 20 35 25 35 M 75 35 C 80 35 80 40 75 45" />
      <path d="M 23 40 C 22 41 22 42 23 43 M 77 40 C 78 41 78 42 77 43" />
      {/* Eyes */}
      <circle cx="40" cy="40" r="2" fill="currentColor" />
      <circle cx="60" cy="40" r="2" fill="currentColor" />
      {/* Smile */}
      <path d="M 42 45 Q 50 52 58 45" />
      {/* Body (T-shirt) */}
      <path d="M 40 65 L 35 85 L 65 85 L 60 65 Z" />
      <path d="M 40 65 L 45 70 L 55 70 L 60 65" />
      {/* Arms */}
      <path d="M 40 70 L 20 80 M 20 80 L 15 75 M 20 80 L 12 80 M 20 80 L 18 85" />
      <path d="M 60 70 L 80 80 M 80 80 L 85 75 M 80 80 L 88 80 M 80 80 L 82 85" />
      {/* Shorts */}
      <path d="M 35 85 L 38 100 L 48 95 L 50 85 L 52 95 L 62 100 L 65 85 Z" />
      <path d="M 38 90 L 45 88 M 40 95 L 46 93 M 55 88 L 62 90 M 54 93 L 60 95" />
      {/* Legs & Feet */}
      <path d="M 42 95 L 42 110 L 35 110 M 58 95 L 60 110 L 68 105" />
    </g>

    {/* ===== SURROUNDING ELEMENTS ===== */}
    {/* 1. Rocket (Top Left) */}
    <g transform="translate(-10, -110) scale(0.6) rotate(15)">
      <path d="M 40,0 C 60,20 60,60 40,80 C 20,60 20,20 40,0 Z" />
      <circle cx="40" cy="35" r="10" />
      <circle cx="40" cy="35" r="4" />
      <path d="M 25,60 L 5,80 L 25,80" />
      <path d="M 55,60 L 75,80 L 55,80" />
      <path d="M 35,80 L 45,80 L 40,95 Z" />
      <path d="M 25,80 Q 40,115 55,80 M 32,80 L 40,105 L 48,80" />
      <path d="M 35,5 L 45,15 M 30,10 L 40,20 M 25,15 L 35,25 M 30,25 L 45,35" strokeWidth="1.5" />
    </g>

    {/* 2. Star (Top Right) */}
    <g transform="translate(60, -90) scale(0.3) rotate(-10)">
      <path d="M 50,0 L 65,35 L 100,40 L 75,65 L 85,100 L 50,80 L 15,100 L 25,65 L 0,40 L 35,35 Z" strokeLinejoin="round"/>
    </g>

    {/* 3. Heart (Upper Right) */}
    <g transform="translate(80, -20) scale(0.35) rotate(-20)">
      <path d="M 50,80 C 50,80 10,50 10,30 C 10,15 25,10 35,20 C 50,35 50,35 50,35 C 50,35 50,35 65,20 C 75,10 90,15 90,30 C 90,50 50,80 50,80 Z" />
      <path d="M 20,30 L 80,40 M 30,50 L 70,60 M 40,65 L 60,75" strokeWidth="2" />
    </g>

    {/* 4. Paper Airplane (Far Right Middle) */}
    <g transform="translate(110, 10) scale(0.35) rotate(-15)">
      <path d="M 10,50 L 90,10 L 60,90 L 40,60 Z" />
      <path d="M 90,10 L 40,60 L 30,80 L 45,65" />
    </g>

    {/* 5. Flower (Far Right Lower) */}
    <g transform="translate(110, 55) scale(0.3)">
      <circle cx="50" cy="50" r="12" />
      <path d="M 50,38 C 30,10 70,10 50,38" />
      <path d="M 62,50 C 90,30 90,70 62,50" />
      <path d="M 50,62 C 70,90 30,90 50,62" />
      <path d="M 38,50 C 10,70 10,30 38,50" />
      <path d="M 58,42 C 80,15 90,35 58,42" />
      <path d="M 58,58 C 90,65 80,85 58,58" />
      <path d="M 42,58 C 20,85 10,65 42,58" />
      <path d="M 42,42 C 10,35 20,15 42,42" />
    </g>

    {/* 6. Block 'A' (Bottom Left) */}
    <g transform="translate(-30, 95) scale(0.5) rotate(15)">
      <path d="M 20,40 L 60,30 L 70,70 L 30,80 Z" />
      <path d="M 20,40 L 40,20 L 80,10 L 60,30 Z" />
      <path d="M 60,30 L 80,10 L 90,50 L 70,70 Z" />
      <path d="M 40,70 L 45,45 L 55,42 L 60,65 M 42,60 L 58,55" />
      <path d="M 25,35 L 45,15 M 35,35 L 55,15 M 45,35 L 65,15" strokeWidth="1.5" />
    </g>

    {/* 7. Music Note (Bottom Right) */}
    <g transform="translate(90, 105) scale(0.3) rotate(-20)">
      <circle cx="30" cy="80" r="15" />
      <path d="M 45,80 L 45,20 L 80,30 L 80,50 L 45,40" />
      <path d="M 20,75 L 40,85 M 25,85 L 35,90" strokeWidth="2" />
    </g>
  </svg>
);

const GirlDoodle = () => (
  <svg viewBox="-40 -120 200 280" width="300" height="420" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/20 rotate-[5deg]">
    {/* ===== THE GIRL ===== */}
    <g className="opacity-40">
      {/* Head */}
      <circle cx="50" cy="40" r="25" />
      {/* Hair (Pigtails) */}
      <path d="M 25 30 C 10 35 0 20 10 10 C 20 0 30 10 40 15" />
      <path d="M 75 30 C 90 35 100 20 90 10 C 80 0 70 10 60 15" />
      <path d="M 20 20 C 10 15 5 25 15 35" />
      <path d="M 80 20 C 90 15 95 25 85 35" />
      {/* Bangs */}
      <path d="M 30 20 C 40 25 50 25 60 20 C 65 20 70 25 70 30" />
      {/* Eyes */}
      <path d="M 35 38 C 38 35 42 35 45 38" /> 
      <path d="M 55 38 C 58 35 62 35 65 38" /> 
      <circle cx="40" cy="42" r="1" fill="currentColor" stroke="none" />
      <circle cx="60" cy="42" r="1" fill="currentColor" stroke="none" />
      {/* Smile */}
      <path d="M 42 50 C 45 55 55 55 58 50" />
      {/* Dress / Body */}
      <path d="M 45 65 L 30 120 L 70 120 L 55 65" /> 
      <path d="M 35 120 C 45 125 55 125 65 120" /> 
      <path d="M 40 90 L 60 90" /> 
      {/* Arms holding a star */}
      <path d="M 42 75 C 20 85 20 50 30 45" /> 
      <path d="M 58 75 C 80 85 80 50 70 45" />
      {/* Legs */}
      <path d="M 40 120 C 40 140 35 160 30 170" />
      <path d="M 60 120 C 60 140 65 160 70 170" />
      {/* Shoes */}
      <path d="M 30 170 C 20 170 20 180 35 180 L 35 170" />
      <path d="M 70 170 C 80 170 80 180 65 180 L 65 170" />
    </g>

    {/* The Star she's holding */}
    <g transform="translate(-5, 20) scale(0.3)">
       <path d="M 50,10 L 60,40 L 90,40 L 65,60 L 75,90 L 50,70 L 25,90 L 35,60 L 10,40 L 40,40 Z" />
    </g>
    
    {/* ===== SURROUNDING ELEMENTS ===== */}
    {/* 1. Rocket (Upper Left) */}
    <g transform="translate(-20, -20) scale(0.3) rotate(-15)">
      <path d="M 50,10 L 70,40 L 70,80 L 30,80 L 30,40 Z" />
      <path d="M 30,60 L 10,80 L 30,80" />
      <path d="M 70,60 L 90,80 L 70,80" />
      <path d="M 40,80 L 45,95 L 55,95 L 60,80" strokeWidth="2" />
      <circle cx="50" cy="45" r="8" />
    </g>

    {/* 2. Star (Far Upper Right) */}
    <g transform="translate(110, -40) scale(0.2) rotate(15)">
      <path d="M 50,10 L 60,40 L 90,40 L 65,60 L 75,90 L 50,70 L 25,90 L 35,60 L 10,40 L 40,40 Z" />
    </g>

    {/* 3. Heart (Far Left Middle) */}
    <g transform="translate(-30, 45) scale(0.3) rotate(-25)">
      <path d="M 50,80 C 50,80 10,50 10,30 C 10,15 25,10 35,20 C 50,35 50,35 50,35 C 50,35 50,35 65,20 C 75,10 90,15 90,30 C 90,50 50,80 50,80 Z" />
    </g>

    {/* 4. Paper Airplane (Right Middle) */}
    <g transform="translate(95, 30) scale(0.25) rotate(35)">
      <path d="M 10,50 L 90,10 L 60,90 L 40,60 Z" />
      <path d="M 90,10 L 40,60 L 30,80 L 45,65" />
    </g>

    {/* 5. Flower (Bottom Left) */}
    <g transform="translate(-15, 125) scale(0.25)">
      <circle cx="50" cy="50" r="12" />
      <path d="M 50,38 C 30,10 70,10 50,38" />
      <path d="M 62,50 C 90,30 90,70 62,50" />
      <path d="M 50,62 C 70,90 30,90 50,62" />
      <path d="M 38,50 C 10,70 10,30 38,50" />
    </g>

    {/* 6. Block 'B' (Bottom Center) */}
    <g transform="translate(30, 155) scale(0.3) rotate(-15)">
      <path d="M 20,40 L 60,30 L 70,70 L 30,80 Z" />
      <path d="M 20,40 L 40,20 L 80,10 L 60,30 Z" />
      <path d="M 60,30 L 80,10 L 90,50 L 70,70 Z" />
      <path d="M 35,65 L 35,45 L 45,45 C 50,45 50,55 45,55 L 35,55 L 45,55 C 50,55 50,65 45,65 L 35,65" strokeWidth="2" />
    </g>

    {/* 7. Music Note (Far Right Lower) */}
    <g transform="translate(90, 105) scale(0.25) rotate(-20)">
      <circle cx="30" cy="80" r="15" />
      <path d="M 45,80 L 45,20 L 80,30 L 80,50 L 45,40" />
      <path d="M 20,75 L 40,85 M 25,85 L 35,90" strokeWidth="2" />
    </g>

    {/* ===== NEW ADDITIONS ===== */}
    {/* 8. Sun (Top Center) */}
    <g transform="translate(35, -40) scale(0.25)">
      <circle cx="50" cy="50" r="20" />
      <path d="M 50 10 L 50 20 M 50 80 L 50 90 M 10 50 L 20 50 M 80 50 L 90 50" />
      <path d="M 22 22 L 30 30 M 78 78 L 70 70 M 22 78 L 30 70 M 78 22 L 70 30" />
    </g>

    {/* 9. Butterfly (Far Left) */}
    <g transform="translate(-35, -15) scale(0.2) rotate(15)">
      <path d="M 50 50 C 30 20 10 30 30 50 C 10 70 30 80 50 50" />
      <path d="M 50 50 C 70 20 90 30 70 50 C 90 70 70 80 50 50" />
      <path d="M 50 30 L 50 70 M 50 30 C 45 20 40 25 40 25 M 50 30 C 55 20 60 25 60 25" />
    </g>

    {/* 10. Paint Palette (Middle Right) */}
    <g transform="translate(100, 70) scale(0.2) rotate(-10)">
      <path d="M 50 20 C 80 20 90 50 70 80 C 50 90 20 80 20 50 C 20 30 30 20 50 20 Z" />
      <circle cx="35" cy="40" r="5" />
      <circle cx="50" cy="35" r="5" />
      <circle cx="65" cy="45" r="5" />
      <circle cx="60" cy="65" r="5" />
      <circle cx="35" cy="60" r="10" /> {/* Thumb hole */}
    </g>

    {/* 11. Pencil (Bottom Right) */}
    <g transform="translate(90, 140) scale(0.25) rotate(-45)">
      <path d="M 20 20 L 60 20 L 60 80 L 40 100 L 20 80 Z" />
      <path d="M 20 30 L 60 30" />
      <path d="M 40 100 L 40 90" strokeWidth="2" />
    </g>

    {/* 12. Cloud (Far Top Right) */}
    <g transform="translate(120, 5) scale(0.2)">
      <path d="M 30 60 C 20 60 10 50 15 40 C 15 25 35 20 45 30 C 55 10 85 15 85 35 C 95 40 90 60 80 60 Z" />
    </g>
  </svg>
);

export default function Footer() {
  const pathname = usePathname();
  const [mounted, setMounted] = (require('react').useState)(false);

  (require('react').useEffect)(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isAdminPage = pathname?.startsWith('/hilces-admin');
  if (isAdminPage) return null;

  return (
    <>
      <footer className="bg-primary pt-20 pb-10 text-white/80 border-t border-white/10 relative overflow-hidden">
        {/* Playful Child Doodle (Boy) - Scaled for Mobile */}
        <div className="absolute right-0 top-0 pointer-events-none translate-x-[20%] md:translate-x-[10%] scale-50 md:scale-100 origin-top-right">
          <ChildDoodle />
        </div>

        {/* Playful Child Doodle (Girl) - Responsive Positioning */}
        <div className="absolute left-[70%] md:left-[55%] top-[42%] md:top-[45%] pointer-events-none -translate-x-1/2 -translate-y-1/2 scale-[0.6] md:scale-100">
          <GirlDoodle />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-16 mb-16">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-8 group">
                <div className="relative w-14 h-14 overflow-hidden rounded-full border-2 border-gold shadow-2xl">
                  <DynamicImage 
                    sectionId="global-logo"
                    defaultSrc="/logo.jpeg" 
                    alt="Hilces Logo" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-2xl tracking-tight leading-none text-white">
                    Hilces
                  </span>
                  <span className="font-heading font-medium text-[12px] uppercase tracking-[0.2em] text-gold">
                    International
                  </span>
                </div>
              </Link>
              <p className="text-sm leading-relaxed mb-8 text-white/70 max-w-sm italic">
                "To be the leading providers of quality, practical and holistic education in an atmosphere of love and respect for global impact."
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-8 font-heading tracking-widest uppercase text-sm border-l-4 border-gold pl-4">Quick Links</h4>
              <ul className="grid grid-cols-1 gap-4 text-sm font-medium">
                <li><Link href="/about" className="hover:text-gold transition-colors flex items-center gap-2">About Us</Link></li>
                <li><Link href="/academics" className="hover:text-gold transition-colors flex items-center gap-2">Academics</Link></li>
                <li><Link href="/activities" className="hover:text-gold transition-colors flex items-center gap-2">Co-Curricular</Link></li>
                <li><Link href="/admissions" className="hover:text-gold transition-colors flex items-center gap-2">Admissions</Link></li>
                <li><Link href="/gallery" className="hover:text-gold transition-colors flex items-center gap-2">Gallery</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 font-heading tracking-widest uppercase text-sm border-l-4 border-gold pl-4">Connect With Us</h4>
              <ul className="space-y-6 text-sm">
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs uppercase tracking-tighter mb-1 opacity-50">Call Us</p>
                    <a href="tel:0247704801" className="text-white hover:text-gold transition-colors font-semibold text-base">0247704801</a>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                    <MessageCircle size={18} className="text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs uppercase tracking-tighter mb-1 opacity-50">WhatsApp</p>
                    <a href="https://wa.me/233247704801" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#25D366] transition-colors font-semibold text-base">Chat with us</a>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#EA4335]/20 transition-colors">
                    <Mail size={18} className="text-[#EA4335]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs uppercase tracking-tighter mb-1 opacity-50">Email</p>
                    <a href="mailto:hilcesinternational@gmail.com" className="text-white hover:text-[#EA4335] transition-colors font-semibold text-sm sm:text-base break-all">hilcesinternational@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#1877F2]/20 transition-colors">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-[#1877F2]">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs uppercase tracking-tighter mb-1 opacity-50">Facebook</p>
                    <a href="https://web.facebook.com/people/Hilces-International-School/61559716695743/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#1877F2] transition-colors font-semibold text-base">Follow Us</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-white/40">
            <p>&copy; {new Date().getFullYear()} Hilces International School. Designed by <a href="https://skytechghana.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">SkyTech Ghana</a>.</p>
            <div className="flex gap-8">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/233247704801" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-white text-primary text-xs font-bold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-2xl pointer-events-none uppercase tracking-widest">
          Need Help? Chat Now
        </span>
      </a>
    </>
  );
}
