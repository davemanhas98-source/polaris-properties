"use client";

import React, { useState } from "react";
import { Maximize2, MapPin, DollarSign, Home, Compass, X } from "lucide-react";

interface Property {
  id: number;
  title: string;
  category: "coastal" | "mountain" | "metropolitan";
  location: string;
  price: string;
  beds: number;
  baths: number;
  size: string;
  image: string;
  description: string;
}

const PROPERTIES: Property[] = [
  {
    id: 1,
    title: "The Obsidian Villa",
    category: "coastal",
    location: "Malibu, California",
    price: "$28,500,000",
    beds: 5,
    baths: 6.5,
    size: "8,200 sq ft",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "A striking masterwork of raw architectural concrete and floor-to-ceiling structural glass, dramatically cantilevering over the Pacific Ocean. Features a cascading negative-edge pool and private beach access.",
  },
  {
    id: 2,
    title: "Elysian Estate",
    category: "mountain",
    location: "Aspen, Colorado",
    price: "$34,000,000",
    beds: 6,
    baths: 8,
    size: "11,400 sq ft",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    description: "An organic modern estate integrating locally sourced stone, heavy timber, and dark bronze. Nestled within a mature forest with direct ski-in/ski-out access and framed mountain vistas.",
  },
  {
    id: 3,
    title: "Lumina Heights Penthouse",
    category: "metropolitan",
    location: "New York, New York",
    price: "$19,200,000",
    beds: 3,
    baths: 3.5,
    size: "4,500 sq ft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description: "A dual-floor glass sanctuary floating above Manhattan. Featuring soaring double-height ceilings, a custom sculptural staircase, and a private sky deck with a plunge pool.",
  },
  {
    id: 4,
    title: "Vespera Cove",
    category: "coastal",
    location: "Amalfi Coast, Italy",
    price: "$42,000,000",
    beds: 7,
    baths: 9,
    size: "13,000 sq ft",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    description: "A historic cliffside palazzo restored into a contemporary masterpiece. Overlooks the Tyrrhenian Sea with multiple tiered limestone terraces, olive groves, and a private funicular.",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const filteredProperties = filter === "all" 
    ? PROPERTIES 
    : PROPERTIES.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-ivory-dark/30 border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-gold tracking-[0.3em] font-sans text-xs uppercase mb-3 block">
              Curated Showcase
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-navy tracking-wide">
              Architectural Masterworks
            </h2>
            <div className="h-[1px] w-20 bg-gold mt-4" />
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-4 font-sans text-xs tracking-[0.2em] uppercase">
            {["all", "coastal", "mountain", "metropolitan"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 border transition-all duration-300 ${
                  filter === cat
                    ? "border-gold bg-gold text-navy font-semibold"
                    : "border-navy/10 hover:border-gold/50 text-navy/70 hover:text-navy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              onClick={() => setSelectedProperty(property)}
              className="group relative cursor-pointer overflow-hidden border border-gold/10 bg-ivory"
            >
              {/* Image with hover scale */}
              <div className="relative h-[350px] lg:h-[450px] w-full overflow-hidden bg-navy">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute top-6 right-6 border border-gold/20 bg-navy/60 backdrop-blur-sm text-gold px-3.5 py-1.5 text-[10px] tracking-[0.2em] uppercase">
                  {property.category}
                </div>
              </div>

              {/* Text Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-ivory translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-2 text-gold text-xs tracking-widest uppercase mb-2">
                  <MapPin size={12} />
                  <span>{property.location}</span>
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl font-light tracking-wide mb-2">
                  {property.title}
                </h3>
                <div className="text-gold font-serif text-lg lg:text-xl font-light mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {property.price}
                </div>

                {/* Card footer details */}
                <div className="flex justify-between items-center pt-4 border-t border-ivory/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                  <div className="flex gap-6 text-xs text-ivory/60 font-light tracking-wide">
                    <span>{property.beds} Beds</span>
                    <span>{property.baths} Baths</span>
                    <span>{property.size}</span>
                  </div>
                  <div className="text-gold flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-semibold">
                    <span>View Details</span>
                    <Maximize2 size={12} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Property Details Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/95 backdrop-blur-md transition-opacity duration-300">
          <div className="relative w-full max-w-4xl bg-ivory border border-gold/20 shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh] md:max-h-none overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-6 right-6 z-10 text-navy hover:text-gold transition-colors p-2 bg-ivory/80 backdrop-blur-sm"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal Image */}
            <div className="w-full md:w-1/2 h-[300px] md:h-auto min-h-[300px] relative bg-navy">
              <img
                src={selectedProperty.image}
                alt={selectedProperty.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
            </div>

            {/* Modal Details */}
            <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-between text-navy bg-ivory">
              <div>
                <span className="text-gold tracking-[0.25em] text-xs font-semibold uppercase block mb-2">
                  Exclusive Representation
                </span>
                <h3 className="font-serif text-3xl lg:text-4xl font-light tracking-wide mb-1">
                  {selectedProperty.title}
                </h3>
                <p className="text-gold font-serif text-xl font-light mb-6">
                  {selectedProperty.price}
                </p>

                <div className="flex items-center gap-2 text-navy/60 text-sm mb-6">
                  <MapPin size={16} className="text-gold" />
                  <span>{selectedProperty.location}</span>
                </div>

                <p className="font-sans text-sm text-navy/70 leading-relaxed font-light mb-8">
                  {selectedProperty.description}
                </p>

                {/* Specs Details Grid */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-gold/25 text-center mb-8">
                  <div>
                    <span className="text-[10px] text-navy/40 font-semibold tracking-widest uppercase block mb-1">Bedrooms</span>
                    <span className="font-serif text-lg text-navy">{selectedProperty.beds}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-navy/40 font-semibold tracking-widest uppercase block mb-1">Bathrooms</span>
                    <span className="font-serif text-lg text-navy">{selectedProperty.baths}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-navy/40 font-semibold tracking-widest uppercase block mb-1">Area</span>
                    <span className="font-serif text-lg text-navy">{selectedProperty.size}</span>
                  </div>
                </div>
              </div>

              {/* Inquiry Button */}
              <a
                href="#contact"
                onClick={() => setSelectedProperty(null)}
                className="w-full text-center bg-navy hover:bg-gold text-ivory hover:text-navy py-4 text-xs font-sans tracking-[0.25em] uppercase font-semibold transition-all duration-500 border border-navy hover:border-gold"
              >
                Request Private Viewing
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
