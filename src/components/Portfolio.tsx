"use client";

import React, { useState } from "react";
import { MapPin, Maximize2, X, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";

export interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  status: "Available" | "Coming Soon" | "Sold";
  beds: number;
  baths: number;
  size: string;
  images: string[];
  summary: string;
  features: string[];
}

export const PROPERTIES: Property[] = [
  {
    id: 1,
    name: "The Obsidian Villa",
    location: "Malibu, California",
    price: "$28,500,000",
    status: "Available",
    beds: 5,
    baths: 6.5,
    size: "8,200 sq ft",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    summary: "A striking masterwork of raw architectural concrete and floor-to-ceiling structural glass, dramatically cantilevering over the Pacific Ocean. Designed for intentional indoor-outdoor living.",
    features: [
      "Board-formed architectural concrete walls with thermal insulation",
      "Full-height motorized Fleetwood glass sliding wall system",
      "Negative-edge saltwater infinity pool overlooking the ocean",
      "Imported Italian travertine hearth and custom terrazzo flooring",
      "Automated Lutron Homeworks QSX lighting and shade integration"
    ]
  },
  {
    id: 2,
    name: "Elysian Estate",
    location: "Aspen, Colorado",
    price: "$34,000,000",
    status: "Coming Soon",
    beds: 6,
    baths: 8,
    size: "11,400 sq ft",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    summary: "An organic modern lodge seamlessly integrated into a mature Aspen pine forest. Features direct ski-in/ski-out access, hand-chiseled stone, and expansive mountain vistas.",
    features: [
      "Hand-chiseled Colorado fieldstone masonry and heavy timber trusses",
      "Custom bronze-clad window assemblies with solar heat control",
      "Private wellness spa with cedar sauna, steam bath, and cold plunge",
      "Heated stone motor court and custom copper roofing",
      "Geothermal climate control system with radiant floor heating"
    ]
  },
  {
    id: 3,
    name: "Lumina Heights Penthouse",
    location: "New York, New York",
    price: "$19,200,000",
    status: "Available",
    beds: 3,
    baths: 3.5,
    size: "4,500 sq ft",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    summary: "A dual-floor glass sanctuary floating high above Manhattan. Features 22-foot double-height ceilings, a private elevator foyer, and panoramic city skyline views.",
    features: [
      "22-foot double-height living room gallery with panoramic skyline views",
      "Sculptural architectural staircase crafted from solid burnished bronze",
      "Calacatta Oro marble kitchen island with custom Poliform cabinetry",
      "Private rooftop sky terrace featuring a heated hydrotherapy pool",
      "Acoustic triple-pane curtain wall assembly for supreme quietude"
    ]
  },
  {
    id: 4,
    name: "Vespera Cove",
    location: "Amalfi Coast, Italy",
    price: "$42,000,000",
    status: "Sold",
    beds: 7,
    baths: 9,
    size: "13,000 sq ft",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    summary: "A restored cliffside palazzo combining classic Mediterranean stonework with ultra-modern minimalist luxury interiors overlooking the Tyrrhenian Sea.",
    features: [
      "Private cliffside funicular railway linking main residence to private sea cove",
      "Restored 18th-century limestone exterior walls with contemporary insulation",
      "Custom oiled Italian walnut millwork and minimalist bronzed steel doors",
      "Multiple tiered limestone dining terraces framed by ancient olive groves",
      "Helipad access and private deep-water yacht mooring"
    ]
  }
];

interface PortfolioProps {
  onSelectPropertyForInquiry?: (propertyName: string) => void;
}

export default function Portfolio({ onSelectPropertyForInquiry }: PortfolioProps) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openModal = (property: Property) => {
    setSelectedProperty(property);
    setActiveImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProperty(null);
  };

  const handleNextImage = () => {
    if (!selectedProperty) return;
    setActiveImageIndex((prev) => (prev + 1) % selectedProperty.images.length);
  };

  const handlePrevImage = () => {
    if (!selectedProperty) return;
    setActiveImageIndex((prev) => (prev - 1 + selectedProperty.images.length) % selectedProperty.images.length);
  };

  const handleRequestInfo = (propertyName: string) => {
    closeModal();
    if (onSelectPropertyForInquiry) {
      onSelectPropertyForInquiry(propertyName);
    }
    const inquirySection = document.getElementById("inquiries");
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getStatusBadgeStyle = (status: Property["status"]) => {
    switch (status) {
      case "Available":
        return "bg-navy/80 text-gold border border-gold/40 backdrop-blur-sm";
      case "Coming Soon":
        return "bg-gold/90 text-navy border border-gold font-semibold backdrop-blur-sm";
      case "Sold":
        return "bg-navy-dark/90 text-ivory/50 border border-ivory/20 backdrop-blur-sm";
      default:
        return "bg-navy/80 text-gold border border-gold/30";
    }
  };

  return (
    <section id="portfolio" className="py-28 bg-ivory text-navy border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-gold tracking-[0.3em] font-sans text-xs uppercase mb-3 block font-semibold">
              Curated Portfolio
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-navy tracking-tight">
              Our Homes
            </h2>
            <div className="h-[1px] w-20 bg-gold mt-4" />
          </div>

          <p className="font-sans text-xs text-navy/60 max-w-md font-light leading-relaxed">
            A limited collection of residential architectural masterworks built for endurance, quiet beauty, and refined daily living.
          </p>
        </div>

        {/* Square Cards Grid with Gold Gradient Borders & Soft Ambient Hover Glow */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {PROPERTIES.map((property) => (
            <div
              key={property.id}
              onClick={() => openModal(property)}
              className="group relative cursor-pointer overflow-hidden border border-gold/25 bg-navy-light/20 shadow-xl hover:shadow-2xl hover:shadow-gold/20 hover:border-gold/60 transition-all duration-500"
            >
              {/* Subtle Gold Gradient Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold via-gold-light to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              {/* Square Aspect Image Container */}
              <div className="relative aspect-square w-full overflow-hidden bg-navy-dark">
                <img
                  src={property.images[0]}
                  alt={property.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                
                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Status Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <span className={`px-3.5 py-1.5 text-[10px] font-sans tracking-[0.25em] uppercase ${getStatusBadgeStyle(property.status)}`}>
                    {property.status}
                  </span>
                </div>

                {/* Card Information Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-ivory flex flex-col justify-end">
                  <div className="flex items-center gap-2 text-gold text-xs tracking-widest uppercase mb-2">
                    <MapPin size={12} />
                    <span>{property.location}</span>
                  </div>

                  <h3 className="font-serif text-3xl font-light tracking-wide mb-2 group-hover:text-gold-light transition-colors">
                    {property.name}
                  </h3>

                  <div className="flex items-center justify-between pt-4 border-t border-ivory/20">
                    <span className="text-gold font-serif text-xl font-light">
                      {property.price}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] tracking-[0.2em] uppercase font-semibold text-ivory/80 group-hover:text-gold transition-colors">
                      <span>Explore Detail</span>
                      <Maximize2 size={12} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal Drawer with Slightly Transparent Backdrop & Strict Aspect-Ratio Carousel Frame */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-navy/80 backdrop-blur-md transition-all duration-300">
          <div className="relative w-full max-w-5xl bg-ivory border border-gold/30 shadow-2xl flex flex-col lg:flex-row overflow-hidden max-h-[90vh] lg:max-h-[85vh]">
            
            {/* Close Modal Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 text-navy hover:text-gold transition-colors p-2.5 bg-ivory/90 backdrop-blur-md rounded-none border border-gold/20"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Left/Top: Interactive Photo Carousel with Fixed Uniform Aspect-Ratio Frame */}
            <div className="w-full lg:w-3/5 relative bg-navy-dark aspect-[16/10] overflow-hidden flex items-center justify-center">
              <img
                src={selectedProperty.images[activeImageIndex]}
                alt={`${selectedProperty.name} view ${activeImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
              />

              {/* Status Badge in Carousel */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1 text-[10px] font-sans tracking-[0.2em] uppercase ${getStatusBadgeStyle(selectedProperty.status)}`}>
                  {selectedProperty.status}
                </span>
              </div>

              {/* Carousel Next/Prev Controls */}
              {selectedProperty.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-navy/70 hover:bg-navy text-gold p-2 border border-gold/30 transition-all duration-300 z-10"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-navy/70 hover:bg-navy text-gold p-2 border border-gold/30 transition-all duration-300 z-10"
                    aria-label="Next photo"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Thumbnail Gallery Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-navy/80 p-1.5 backdrop-blur-md border border-gold/20">
                {selectedProperty.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-2.5 h-2.5 transition-all duration-300 ${
                      activeImageIndex === idx ? "bg-gold w-6" : "bg-ivory/40 hover:bg-ivory/80"
                    }`}
                    aria-label={`View photo ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right/Bottom: Property Specifications & Architectural Details */}
            <div className="w-full lg:w-2/5 p-8 lg:p-10 flex flex-col justify-between overflow-y-auto bg-ivory text-navy">
              <div>
                <span className="text-gold tracking-[0.25em] text-xs font-semibold uppercase block mb-1">
                  Architectural Residence
                </span>
                <h3 className="font-serif text-3xl lg:text-4xl font-light tracking-wide mb-1">
                  {selectedProperty.name}
                </h3>
                <p className="text-gold font-serif text-2xl font-light mb-4">
                  {selectedProperty.price}
                </p>

                <div className="flex items-center gap-2 text-navy/60 text-xs mb-6">
                  <MapPin size={14} className="text-gold" />
                  <span>{selectedProperty.location}</span>
                </div>

                {/* Specs Pill Grid */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-gold/20 text-center mb-6 bg-navy-light/5">
                  <div>
                    <span className="text-[9px] text-navy/50 tracking-widest uppercase block">Bedrooms</span>
                    <span className="font-serif text-base text-navy font-semibold">{selectedProperty.beds}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-navy/50 tracking-widest uppercase block">Bathrooms</span>
                    <span className="font-serif text-base text-navy font-semibold">{selectedProperty.baths}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-navy/50 tracking-widest uppercase block">Footage</span>
                    <span className="font-serif text-base text-navy font-semibold">{selectedProperty.size}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="font-sans text-xs text-navy/70 leading-relaxed font-light mb-6">
                  {selectedProperty.summary}
                </p>

                {/* Architectural Features Bullet List */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold tracking-widest uppercase mb-3 text-navy border-b border-gold/15 pb-1">
                    Architectural Specifications & Finishes
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {selectedProperty.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-navy/80 font-light">
                        <CheckCircle2 size={13} className="text-gold mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Request More Information CTA Button */}
              <button
                onClick={() => handleRequestInfo(selectedProperty.name)}
                className="w-full flex items-center justify-center gap-2 bg-navy hover:bg-gold text-ivory hover:text-navy py-4 text-xs font-sans tracking-[0.25em] uppercase font-semibold transition-all duration-300 border border-navy hover:border-gold shadow-lg"
              >
                <span>Request More Information</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
