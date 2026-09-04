"use client";

import React, { useState } from "react";
import { Compass, Sparkles, Heart, Shield, Users } from "lucide-react";

interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
}

const PILLARS: Pillar[] = [
  {
    id: "intentional-living",
    title: "Intentional Living",
    subtitle: "Purposeful design",
    description: "We believe thoughtful design begins with intention. From the orientation of a home to the fine material details. Every detail should enhance the way people live.",
    icon: Compass,
  },
  {
    id: "human-centric",
    title: "Human Centric",
    subtitle: "Designed around people",
    description: "A home should serve the people who live in it. We prioritize comfort, functionality and individuality in a way that makes everyday living feel effortless.",
    icon: Users,
  },
  {
    id: "endurance",
    title: "Endurance",
    subtitle: "Built for generations",
    description: "We build beyond the moment. Through architecture, quality, thoughtful construction and design. We create homes meant to age beautifully with you.",
    icon: Shield,
  },
  {
    id: "connection",
    title: "Connection",
    subtitle: "Creating places to belong",
    description: "A home is part of something larger. We consider the people, home and neighbourhoods to create a genuine sense of belonging.",
    icon: Heart,
  },
  {
    id: "intelligent-luxury",
    title: "Intelligent Luxury",
    subtitle: "Exceptional, never excessive",
    description: "We believe luxury is not about having more. It is about making better choices through intentional materials, meaningful details and thoughtful functionality, in a space curated to you.",
    icon: Sparkles,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    step: "Discover",
    text: "We begin with the land, the neighbourhood and the people who will call it home.",
  },
  {
    number: "02",
    step: "Design",
    text: "Architecture is shaped around light, movement, proportion and everyday living.",
  },
  {
    number: "03",
    step: "Curate",
    text: "Every material, finish and detail is selected with purpose.",
  },
  {
    number: "04",
    step: "Build",
    text: "Quality is carried through from structure to finishing details.",
  },
  {
    number: "05",
    step: "Belong",
    text: "We create homes that feel connected to the people and places around them.",
  },
];

export default function Values() {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  const togglePillar = (id: string) => {
    setActivePillar((prev) => (prev === id ? null : id));
  };

  return (
    <section id="about" className="py-28 bg-navy text-ivory relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy-light/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold tracking-[0.3em] font-sans text-xs uppercase mb-3 block font-semibold">
            About Polaris
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-4">
            Our Foundation
          </h2>
          <p className="font-serif text-xl sm:text-2xl text-gold-light italic font-normal tracking-wide">
            Designed for Living. Built for Generations.
          </p>
          <div className="h-[1px] w-24 bg-gold mx-auto mt-6" />
        </div>

        {/* Our Mission Box with Rotating Animated Gold Border Beam & Ambient Glow */}
        <div className="animated-border-beam max-w-4xl mx-auto mb-24 border border-gold/30 bg-navy-light/40 p-8 sm:p-12 text-center relative shadow-xl hover:shadow-2xl hover:shadow-gold/20 hover:border-gold/60 transition-all duration-500 group rounded-none">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-navy px-5 text-gold text-xs tracking-[0.25em] uppercase font-sans font-semibold border border-gold/30">
            Our Mission
          </div>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-ivory/95 leading-relaxed italic">
            To design and engineer timeless, intentionally curated communities that bring everyday luxury to life, putting the people who live in them at the forefront of every square foot we build.
          </p>
        </div>

        {/* Our Philosophies & Pillars (Centered Grid with Fixed Uniform Height and Hover Reveal) */}
        <div className="mb-28">
          <div className="text-center mb-12">
            <span className="text-gold tracking-[0.25em] font-sans text-xs uppercase block mb-2 font-semibold">
              Our Philosophies
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-wide">
              The Pillars of Polaris
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              const isSelected = activePillar === pillar.id;

              return (
                <div
                  key={pillar.id}
                  onClick={() => togglePillar(pillar.id)}
                  className={`group cursor-pointer relative border transition-all duration-500 ease-out p-8 flex flex-col justify-between w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] h-[300px] overflow-hidden ${
                    isSelected
                      ? "border-gold bg-navy-light/75 shadow-2xl shadow-gold/20"
                      : "border-gold/20 bg-navy-light/30 hover:border-gold/60 hover:bg-navy-light/65 hover:shadow-xl hover:shadow-gold/10"
                  }`}
                >
                  {/* Subtle Accent Top Line */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold via-gold-light to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Header line with Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="text-gold group-hover:text-gold-light transition-colors p-2.5 bg-navy-dark/50 border border-gold/30">
                        <Icon size={22} strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Title & Subtitle (Permanently Displayed) */}
                    <h4 className="font-serif text-2xl font-light text-ivory group-hover:text-gold transition-colors mb-1">
                      {pillar.title}
                    </h4>
                    <p className="font-serif italic text-xs text-gold-light/90">
                      {pillar.subtitle}
                    </p>
                  </div>

                  {/* Smooth Hover / Tap Revealed Description with Standardized Divider Rule */}
                  <div
                    className={`transition-all duration-500 ease-out ${
                      isSelected
                        ? "opacity-100 max-h-40"
                        : "opacity-80 md:opacity-0 max-h-0 md:group-hover:opacity-100 md:group-hover:max-h-40"
                    } overflow-hidden`}
                  >
                    <div className="border-t border-gold/25 pt-3.5 mt-3">
                      <p className="font-sans text-xs text-ivory/75 leading-relaxed font-light">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* The Polaris Approach (Process Steps) */}
        <div>
          <div className="text-center mb-16">
            <span className="text-gold tracking-[0.25em] font-sans text-xs uppercase block mb-2 font-semibold">
              Our Methodology
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-wide">
              The Polaris Approach
            </h3>
            <div className="h-[1px] w-16 bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {PROCESS_STEPS.map((stepItem) => (
              <div
                key={stepItem.number}
                className="relative border-l md:border-l-0 md:border-t border-gold/20 pt-6 pl-6 md:pl-0 md:pt-8 flex flex-col justify-between group hover:border-gold transition-colors duration-300"
              >
                <div>
                  <span className="font-serif text-3xl italic text-gold font-light block mb-2">
                    {stepItem.number}
                  </span>
                  <h4 className="font-serif text-xl font-light text-ivory group-hover:text-gold-light transition-colors mb-3">
                    {stepItem.step}
                  </h4>
                </div>
                <p className="font-sans text-xs text-ivory/60 leading-relaxed font-light">
                  {stepItem.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
