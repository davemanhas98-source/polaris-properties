"use client";

import React from "react";
import PolarisLogo from "./PolarisLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-dark text-ivory/60 pt-20 pb-12 border-t border-gold/10 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-ivory/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <PolarisLogo light={true} />
            <p className="text-xs text-ivory/70 leading-relaxed font-light mt-2 max-w-sm">
              Designed for Living. Built for Generations. Securing architectural masterworks and establishing legacy residential developments across premier global locations.
            </p>
            <div className="flex gap-4 items-center">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-ivory/20 hover:border-gold hover:text-gold transition-colors bg-navy-light/10"
                aria-label="Polaris Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-ivory/20 hover:border-gold hover:text-gold transition-colors bg-navy-light/10"
                aria-label="Polaris LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-ivory/20 hover:border-gold hover:text-gold transition-colors bg-navy-light/10"
                aria-label="Polaris YouTube"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.41z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 lg:col-start-6 flex flex-col gap-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-ivory">Navigation</h4>
            <a href="#portfolio" className="text-xs hover:text-gold font-light transition-colors">Portfolio</a>
            <a href="#about" className="text-xs hover:text-gold font-light transition-colors">About Polaris</a>
            <a href="#inquiries" className="text-xs hover:text-gold font-light transition-colors">Inquiries</a>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-ivory">Our Pillars</h4>
            <a href="#about" className="text-xs hover:text-gold font-light transition-colors">Intentional Living</a>
            <a href="#about" className="text-xs hover:text-gold font-light transition-colors">Human Centric</a>
            <a href="#about" className="text-xs hover:text-gold font-light transition-colors">Endurance</a>
            <a href="#about" className="text-xs hover:text-gold font-light transition-colors">Intelligent Luxury</a>
          </div>

          {/* Regulatory Info */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-ivory">Regulatory Info</h4>
            <p className="text-xs font-light leading-relaxed">
              Polaris Properties is a licensed architectural real estate development & advisory firm.
            </p>
            <p className="text-xs font-light text-ivory/40">
              CA DRE License #01995588 <br />
              Equal Housing Opportunity
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-12 gap-6">
          <div className="flex flex-wrap gap-8 text-xs font-light">
            <span>&copy; {currentYear} Polaris Properties. All rights reserved.</span>
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Representation</a>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-ivory/60 hover:text-gold transition-colors group focus:outline-none"
          >
            <span>Top</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
