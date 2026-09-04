"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, Building, X } from "lucide-react";

interface ContactProps {
  preselectedProperty?: string;
  onClearPreselectedProperty?: () => void;
}

export default function Contact({ preselectedProperty, onClearPreselectedProperty }: ContactProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interests: ["CURRENT HOMES"] as string[],
    keepInformed: true,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedProperty) {
      setFormData((prev) => ({
        ...prev,
        interests: prev.interests.includes("CURRENT HOMES") ? prev.interests : [...prev.interests, "CURRENT HOMES"],
        message: `I am interested in receiving detailed architectural specifications and inquiry information for ${preselectedProperty}.`,
      }));
    }
  }, [preselectedProperty]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        interests: ["CURRENT HOMES"],
        keepInformed: true,
        message: "",
      });
      if (onClearPreselectedProperty) {
        onClearPreselectedProperty();
      }
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const toggleInterest = (opt: string) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(opt);
      if (exists) {
        if (prev.interests.length === 1) return prev; // Maintain at least one selection
        return { ...prev, interests: prev.interests.filter((item) => item !== opt) };
      } else {
        return { ...prev, interests: [...prev.interests, opt] };
      }
    });
  };

  const interestsOptions = [
    "CURRENT HOMES",
    "UPCOMING PROJECTS",
    "FUTURE OPPORTUNITIES",
    "GENERAL INQUIRIES",
  ];

  return (
    <section id="inquiries" className="py-28 bg-ivory text-navy border-b border-gold/10">
      {/* Anchor alias for #contact */}
      <div id="contact" className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Information & Office Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-gold tracking-[0.3em] font-sans text-xs uppercase mb-3 block font-semibold">
                Private Consultation
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight mb-4">
                Begin a Conversation
              </h2>
              <div className="h-[1px] w-20 bg-gold mb-6" />
              <p className="font-sans text-sm text-navy/70 leading-relaxed font-light mb-10 max-w-md">
                Whether you are looking for a place to call home, seeking information about an upcoming project, or simply wish to stay connected, we welcome your inquiry.
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="text-gold mt-1 p-2 bg-navy-light/5 border border-gold/20">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-widest uppercase mb-1">Direct Desk</h4>
                  <p className="font-serif text-lg hover:text-gold transition-colors">+1 (310) 555-0188</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-gold mt-1 p-2 bg-navy-light/5 border border-gold/20">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-widest uppercase mb-1">Electronic Correspondence</h4>
                  <p className="font-serif text-lg hover:text-gold transition-colors">inquiries@polarisproperties.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-gold mt-1 p-2 bg-navy-light/5 border border-gold/20">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-widest uppercase mb-1">Architectural Office</h4>
                  <p className="font-sans text-xs text-navy/70 leading-relaxed font-light">
                    8440 Wilshire Blvd, Suite 1200<br />
                    Beverly Hills, California 90211
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiries Form */}
          <div className="lg:col-span-7 bg-navy-light/5 border border-gold/20 p-8 sm:p-12 shadow-xl relative">
            
            {/* Preselected Property Tag Banner */}
            {preselectedProperty && !isSubmitted && (
              <div className="mb-8 p-4 bg-navy text-ivory border border-gold/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Building size={18} className="text-gold" />
                  <div>
                    <span className="text-[10px] text-gold uppercase tracking-widest block font-semibold">Selected Residence</span>
                    <span className="font-serif text-base text-ivory">{preselectedProperty}</span>
                  </div>
                </div>
                {onClearPreselectedProperty && (
                  <button
                    onClick={onClearPreselectedProperty}
                    className="text-ivory/60 hover:text-gold transition-colors p-1"
                    aria-label="Clear selected property"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            )}

            {isSubmitted ? (
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <div className="text-gold mb-6 animate-bounce">
                  <CheckCircle2 size={56} strokeWidth={1} />
                </div>
                <h3 className="font-serif text-3xl font-light mb-3">
                  Inquiry Received
                </h3>
                <p className="font-sans text-xs text-navy/70 font-light max-w-md mx-auto leading-relaxed mb-8">
                  Thank you for reaching out to Polaris Properties. An executive advisor will contact you directly to discuss your inquiry.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center gap-2 border border-navy/30 hover:border-gold hover:bg-gold/10 text-navy hover:text-gold px-6 py-3 text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                
                {/* First Name & Last Name Side-by-Side */}
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder=" "
                      className="w-full border-b border-navy/25 bg-transparent pt-4 pb-2 text-sm font-sans tracking-wide text-navy outline-none transition-all duration-300 focus:border-gold peer"
                    />
                    <label
                      htmlFor="firstName"
                      className="absolute left-0 top-4 origin-left -translate-y-4 scale-75 transform text-xs font-sans tracking-[0.2em] uppercase text-navy/40 transition-all duration-300 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gold peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
                    >
                      First Name
                    </label>
                  </div>

                  <div className="relative group">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder=" "
                      className="w-full border-b border-navy/25 bg-transparent pt-4 pb-2 text-sm font-sans tracking-wide text-navy outline-none transition-all duration-300 focus:border-gold peer"
                    />
                    <label
                      htmlFor="lastName"
                      className="absolute left-0 top-4 origin-left -translate-y-4 scale-75 transform text-xs font-sans tracking-[0.2em] uppercase text-navy/40 transition-all duration-300 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gold peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
                    >
                      Last Name
                    </label>
                  </div>
                </div>

                {/* Email & Phone Number */}
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      className="w-full border-b border-navy/25 bg-transparent pt-4 pb-2 text-sm font-sans tracking-wide text-navy outline-none transition-all duration-300 focus:border-gold peer"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 top-4 origin-left -translate-y-4 scale-75 transform text-xs font-sans tracking-[0.2em] uppercase text-navy/40 transition-all duration-300 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gold peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
                    >
                      Email Address
                    </label>
                  </div>

                  <div className="relative group">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder=" "
                      className="w-full border-b border-navy/25 bg-transparent pt-4 pb-2 text-sm font-sans tracking-wide text-navy outline-none transition-all duration-300 focus:border-gold peer"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-0 top-4 origin-left -translate-y-4 scale-75 transform text-xs font-sans tracking-[0.2em] uppercase text-navy/40 transition-all duration-300 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gold peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
                    >
                      Phone Number
                    </label>
                  </div>
                </div>

                {/* Multi-Select Interest Fields */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-xs font-sans tracking-[0.2em] uppercase text-navy/60 font-semibold">
                      I&apos;M INTERESTED IN:
                    </label>
                    <span className="text-[10px] text-navy/40 tracking-wider font-sans uppercase">
                      Select all that apply
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {interestsOptions.map((opt) => {
                      const isActive = formData.interests.includes(opt);
                      return (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => toggleInterest(opt)}
                          className={`px-3 py-2.5 text-[10px] font-sans tracking-wider uppercase border transition-all duration-300 text-center ${
                            isActive
                              ? "border-gold bg-navy text-gold font-semibold shadow-md ring-1 ring-gold/40"
                              : "border-navy/15 bg-transparent text-navy/70 hover:border-gold/50 hover:text-navy"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Optional Message Field */}
                <div className="relative group">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    className="w-full border-b border-navy/25 bg-transparent pt-4 pb-2 text-sm font-sans tracking-wide text-navy outline-none transition-all duration-300 focus:border-gold resize-none peer"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 top-4 origin-left -translate-y-4 scale-75 transform text-xs font-sans tracking-[0.2em] uppercase text-navy/40 transition-all duration-300 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gold peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
                  >
                    Additional Details / Inquiries (Optional)
                  </label>
                </div>

                {/* Checkbox: Keep Me Informed */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="keepInformed"
                    name="keepInformed"
                    checked={formData.keepInformed}
                    onChange={handleChange}
                    className="mt-1 accent-gold w-4 h-4 rounded-none cursor-pointer"
                  />
                  <label htmlFor="keepInformed" className="text-xs font-sans text-navy/70 font-light cursor-pointer select-none">
                    Keep me informed about upcoming Polaris Properties Developments
                  </label>
                </div>

                {/* Editorial Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative flex items-center justify-center gap-3 bg-navy hover:bg-gold text-ivory hover:text-navy font-semibold py-4 text-xs font-sans tracking-[0.25em] uppercase transition-all duration-500 shadow-xl shadow-navy/10 border border-navy hover:border-gold disabled:opacity-75"
                >
                  <span>{isSubmitting ? "Sending Inquiry..." : "Submit Inquiry"}</span>
                  {!isSubmitting && (
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
