"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedPropertyForInquiry, setSelectedPropertyForInquiry] = useState<string | undefined>(undefined);

  const handleSelectPropertyForInquiry = (propertyName: string) => {
    setSelectedPropertyForInquiry(propertyName);
  };

  const handleClearPreselectedProperty = () => {
    setSelectedPropertyForInquiry(undefined);
  };

  return (
    <>
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Hero Section with Title Pinning & Scroll Tagline Fade */}
      <Hero />

      {/* Portfolio Section ("Our Homes") */}
      <Portfolio onSelectPropertyForInquiry={handleSelectPropertyForInquiry} />

      {/* About Polaris Section (Our Foundation, Mission, 5 Pillars, 5-Step Process) */}
      <Values />

      {/* Inquiries Section ("Let's Connect!") */}
      <Contact
        preselectedProperty={selectedPropertyForInquiry}
        onClearPreselectedProperty={handleClearPreselectedProperty}
      />

      {/* Footer */}
      <Footer />
    </>
  );
}
