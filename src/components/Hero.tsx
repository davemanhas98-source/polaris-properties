import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-navy-dark">
      {/* Background Image with Parallax & Ken Burns effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 scale-105 animate-subtle-zoom"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />

      {/* Deep Navy/Champagne Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/35 via-transparent to-navy/35" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-ivory flex flex-col items-center">
        <span className="text-gold tracking-[0.4em] font-sans text-xs md:text-sm uppercase mb-4 opacity-90 block tracking-widest animate-[fadeInUp_1s_ease-out_0.2s_both]">
          Bespoke Living & Architectural Masterpieces
        </span>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-wide leading-tight mb-8 max-w-4xl text-shadow-sm animate-[fadeInUp_1.2s_ease-out_0.4s_both]">
          Where Vision Meets <br />
          <span className="italic font-normal text-gold-light">Refined Reality</span>
        </h1>

        <p className="font-sans text-ivory/70 text-sm md:text-lg max-w-2xl mb-12 tracking-wide font-light leading-relaxed animate-[fadeInUp_1.4s_ease-out_0.6s_both]">
          Polaris Properties brokers the world's most prestigious real estate, representing exceptional design and providing absolute discretion for discerning clientele.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-center animate-[fadeInUp_1.6s_ease-out_0.8s_both]">
          <a
            href="#portfolio"
            className="group relative inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-4 text-xs font-sans tracking-[0.25em] uppercase transition-all duration-500 shadow-xl shadow-gold/10"
          >
            <span>Explore Portfolio</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-ivory/30 hover:border-gold hover:bg-ivory/5 text-ivory hover:text-gold px-8 py-4 text-xs font-sans tracking-[0.25em] uppercase transition-all duration-500"
          >
            <span>Private Inquiry</span>
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-ivory/40 animate-bounce">
        <span className="text-[9px] tracking-[0.3em] font-sans uppercase mb-2">Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}
