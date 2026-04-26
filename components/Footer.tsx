import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <>
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
                <li><Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
                <li><Link href="/academics" className="hover:text-amber-500 transition-colors">Academics</Link></li>
                <li><Link href="/activities" className="hover:text-amber-500 transition-colors">Co-Curricular</Link></li>
                <li><Link href="/admissions" className="hover:text-amber-500 transition-colors">Admissions</Link></li>
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
    </>
  );
}
