"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  // On pages other than Home, we might want the navbar to have a solid background by default if they don't have a full screen dark hero
  const navBg = isScrolled || !isHome ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6';
  const textColor = isScrolled || !isHome ? 'text-slate-600' : 'text-white/90';
  const logoTextColor = isScrolled || !isHome ? 'text-slate-900' : 'text-white';
  const menuBtnColor = isScrolled || !isHome ? 'text-slate-900' : 'text-white';

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Activities", path: "/activities" },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg">
              H
            </div>
            <span className={`font-heading font-bold text-xl tracking-tight ${logoTextColor}`}>
              Hilces International
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <div className={`hidden md:flex gap-8 font-medium text-sm ${textColor}`}>
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`hover:text-amber-500 transition-colors ${pathname === link.path ? "text-amber-500 font-semibold" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link href="/admissions" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-amber-500/20">
              Admissions
            </Link>
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className={`md:hidden p-2 rounded-md ${menuBtnColor}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col gap-6 md:hidden">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              href={link.path} 
              onClick={() => setMobileMenuOpen(false)} 
              className={`text-2xl font-heading font-semibold border-b pb-4 ${pathname === link.path ? "text-amber-500" : "text-slate-900"}`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/admissions" onClick={() => setMobileMenuOpen(false)} className="mt-4 bg-amber-500 text-white text-center py-4 rounded-xl font-medium text-lg shadow-lg">
            Admissions
          </Link>
        </div>
      )}
    </>
  );
}
