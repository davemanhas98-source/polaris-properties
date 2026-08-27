import React from "react";
import { ShieldCheck, Landmark, Gem, Globe } from "lucide-react";

const VALUES = [
  {
    id: "01",
    title: "Absolute Discretion",
    icon: ShieldCheck,
    description: "We guard our clients' privacy with absolute diligence. Polaris offers exclusive off-market listings and complete confidentiality at every stage of negotiation.",
  },
  {
    id: "02",
    title: "Architectural Vision",
    icon: Landmark,
    description: "We curate properties that are true architectural masterworks. Our listings feature premium materials, thoughtful scale, and exceptional craftsmanship.",
  },
  {
    id: "03",
    title: "Bespoke Guidance",
    icon: Gem,
    description: "Our advisory is deeply tailored. We align with your precise lifestyle parameters, aesthetic expectations, and investment strategies to source the ideal estate.",
  },
  {
    id: "04",
    title: "Global Reach",
    icon: Globe,
    description: "With connections in the world's most coveted markets, we bridge the gap between discerning global citizens and extraordinary real estate holdings.",
  },
];

export default function Values() {
  return (
    <section id="values" className="py-24 bg-navy text-ivory relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-light/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-gold tracking-[0.3em] font-sans text-xs uppercase mb-3 block">
            Our Foundation
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide">
            The Pillars of Polaris
          </h2>
          <div className="h-[1px] w-20 bg-gold mx-auto mt-4" />
          <p className="font-sans text-ivory/60 text-sm mt-6 font-light leading-relaxed">
            Our commitment to excellence is governed by values that ensure an unmatched brokerage experience for our elite clientele.
          </p>
        </div>

        {/* Grid of Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.id}
                className="group relative border border-gold/10 bg-navy-light/35 p-8 lg:p-10 transition-all duration-500 hover:border-gold/30 hover:bg-navy-light/60 flex flex-col justify-between h-[320px] lg:h-[350px]"
              >
                {/* Border Hover Accent */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold to-gold/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div>
                  <div className="flex justify-between items-start mb-8">
                    {/* Icon container */}
                    <div className="text-gold group-hover:text-gold-light transition-colors duration-300">
                      <Icon size={32} strokeWidth={1} />
                    </div>
                    {/* Number styling in elegant Cormorant italic */}
                    <span className="font-serif text-3xl italic text-gold/35 font-light">
                      {val.id}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-light tracking-wide text-ivory group-hover:text-gold transition-colors duration-300 mb-4">
                    {val.title}
                  </h3>
                </div>

                <p className="font-sans text-xs text-ivory/60 group-hover:text-ivory/80 leading-relaxed font-light transition-colors duration-300">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
