import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-primary pt-20 pb-10 text-white/80 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16 mb-16">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-8 group">
                <div className="relative w-14 h-14 overflow-hidden rounded-full border-2 border-gold shadow-2xl">
                  <Image 
                    src="/logo.jpeg" 
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
