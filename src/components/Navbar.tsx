"use client";

import React, { useState, useEffect } from "react";
import PolarisLogo from "./PolarisLogo";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "About Polaris", href: "#about" },
    { name: "Inquiries", href: "#inquiries" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-navy/90 backdrop-blur-md border-b border-gold/15 py-4 shadow-xl shadow-navy/20"
            : "bg-gradient-to-b from-navy/80 via-navy/30 to-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo & Wordmark */}
          <a href="#" className="focus:outline-none flex items-center gap-3">
            <PolarisLogo light={true} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-ivory/90 hover:text-gold tracking-[0.2em] text-xs font-sans uppercase transition-colors duration-300 relative group font-light"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Direct CTA */}
          <div className="hidden md:block">
            <a
              href="#inquiries"
              className="inline-flex items-center gap-2 border border-gold/60 hover:border-gold bg-transparent hover:bg-gold/10 text-gold hover:text-gold-light px-5 py-2.5 text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300"
            >
              <span>Inquire</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-ivory hover:text-gold focus:outline-none p-1 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-navy-dark/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full justify-between p-8 pt-28">
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-ivory hover:text-gold text-2xl font-serif tracking-wider transition-colors duration-300 block py-3 border-b border-gold/10"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <a
              href="#inquiries"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center border border-gold bg-gold text-navy font-semibold py-4 text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300 hover:bg-transparent hover:text-gold"
            >
              Submit Inquiry
            </a>
            <div className="text-center text-[10px] text-gold/60 tracking-[0.3em] font-sans uppercase">
              Polaris Properties
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
