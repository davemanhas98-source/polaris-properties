import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Compass, CalendarDays, Award, Star } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Brand Intro / Editorial Section */}
      <section id="about" className="py-24 bg-ivory text-navy relative overflow-hidden border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Editorial Narrative */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-gold tracking-[0.3em] font-sans text-xs uppercase block">
                The Polaris Narrative
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight tracking-wide">
                Securing Legacies, <br />
                <span className="italic font-normal text-gold-dark">One Masterpiece at a Time.</span>
              </h2>
              <div className="h-[1px] w-20 bg-gold my-2" />
              
              <p className="font-sans text-sm text-navy/70 leading-relaxed font-light mt-2">
                Polaris Properties represents a curated approach to high-value real estate. We specialize in uniting elite buyers with architectural masterworks that embody timeless sophistication, technical excellence, and investment resilience.
              </p>
              <p className="font-sans text-sm text-navy/70 leading-relaxed font-light">
                Our advisors act as trusted fiduciaries, navigating complex international transactions with total anonymity, unmatched data-driven insights, and absolute clarity. For us, real estate is not merely a transaction—it is the curation of space, history, and legacy.
              </p>

              {/* Stats / Highlights */}
              <div className="grid grid-cols-2 gap-6 mt-6 border-t border-gold/20 pt-8">
                <div className="flex gap-4 items-start">
                  <div className="text-gold mt-1">
                    <Award size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="font-serif text-3xl font-light text-navy">$8.5B+</span>
                    <span className="block text-[10px] text-navy/40 uppercase tracking-widest font-semibold mt-1">Career Volume</span>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="text-gold mt-1">
                    <Star size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="font-serif text-3xl font-light text-navy">150+</span>
                    <span className="block text-[10px] text-navy/40 uppercase tracking-widest font-semibold mt-1">Off-Market Sales</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Graphic/Image frame */}
            <div className="lg:col-span-6 relative">
              <div className="border border-gold/20 p-3 bg-ivory-dark/20 relative">
                {/* Visual border accents */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold/40 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold/40 pointer-events-none" />
                
                <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden bg-navy">
                  <img
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
                    alt="Luxury Mansion Interior"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-navy/10" />
                </div>
              </div>

              {/* Small floating badge */}
              <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-4 bg-navy text-ivory border border-gold/25 p-5 shadow-2xl">
                <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold">
                  <Compass className="animate-spin-[15s_linear_infinite]" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-gold">Beverly Hills Desk</h4>
                  <p className="text-[10px] text-ivory/50 uppercase tracking-widest mt-0.5">Active Representation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <Portfolio />

      {/* Pillars of Polaris / Values Grid Section */}
      <Values />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </>
  );
}
