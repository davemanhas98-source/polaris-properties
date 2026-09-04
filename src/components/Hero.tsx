"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tagline fade out and translate down as user scrolls down past 0 to ~200px
  const taglineOpacity = Math.max(0, 1 - scrollY / 180);
  const taglineTranslateY = Math.min(24, scrollY / 6);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-navy-dark">
      {/* Background Image with Ken Burns subtle animation */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 scale-105 animate-subtle-zoom"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />

      {/* Dark Luxury Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-navy/60" />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-ivory flex flex-col items-center justify-center h-full pt-16">
        
        {/* Subtitle Badge */}
        <span className="text-gold tracking-[0.4em] font-sans text-xs md:text-sm uppercase mb-6 opacity-90 block">
          Architectural Real Estate
        </span>

        {/* Pinned / Steady Headline */}
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-ivory tracking-tight leading-none mb-6">
          Polaris Properties
        </h1>

        {/* Scroll Fading Tagline */}
        <div
          style={{
            opacity: taglineOpacity,
            transform: `translateY(${taglineTranslateY}px)`,
          }}
          className="transition-opacity duration-150 ease-out flex flex-col items-center"
        >
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-gold-light italic font-normal tracking-wide max-w-3xl mb-10">
            Designed for Living. Built for Generations.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <a
              href="#portfolio"
              className="group relative inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-4 text-xs font-sans tracking-[0.25em] uppercase transition-all duration-300 shadow-2xl shadow-gold/20"
            >
              <span>Explore Our Homes</span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#inquiries"
              className="inline-flex items-center gap-2 border border-ivory/30 hover:border-gold hover:bg-ivory/5 text-ivory hover:text-gold px-8 py-4 text-xs font-sans tracking-[0.25em] uppercase transition-all duration-300"
            >
              <span>Private Inquiries</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        style={{ opacity: taglineOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-ivory/50 transition-opacity duration-200"
      >
        <span className="text-[9px] tracking-[0.3em] font-sans uppercase mb-2">Scroll</span>
        <ChevronDown size={16} className="animate-bounce text-gold" />
      </div>
    </section>
  );
}
