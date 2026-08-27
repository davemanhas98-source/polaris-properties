"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "coastal",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyType: "coastal",
        message: "",
      });
    }, 1800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-ivory text-navy border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct Office Connections */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-gold tracking-[0.3em] font-sans text-xs uppercase mb-3 block">
                Establish Connection
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-6">
                Private Inquiries
              </h2>
              <div className="h-[1px] w-20 bg-gold mb-8" />
              <p className="font-sans text-sm text-navy/70 leading-relaxed font-light mb-12 max-w-md">
                Whether seeking to acquire an architectural masterwork or list an elite property, our advisors provide discrete, data-driven counsel worldwide.
              </p>
            </div>

            {/* Office Details */}
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="text-gold mt-1">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-widest uppercase mb-1">Direct Advisory</h4>
                  <p className="font-serif text-lg hover:text-gold transition-colors">+1 (310) 555-0188</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-gold mt-1">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-widest uppercase mb-1">Electronic Mail</h4>
                  <p className="font-serif text-lg hover:text-gold transition-colors">advisor@polarisproperties.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-gold mt-1">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-widest uppercase mb-1">Headquarters</h4>
                  <p className="font-sans text-sm text-navy/70 leading-relaxed font-light">
                    8440 Wilshire Blvd, Suite 1200<br />
                    Beverly Hills, California 90211
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-gold mt-1">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-widest uppercase mb-1">Operating Hours</h4>
                  <p className="font-sans text-sm text-navy/70 font-light">
                    Monday — Friday: 9:00 AM — 6:00 PM PST<br />
                    Saturday: By Appointment Only
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-navy-light/5 border border-gold/10 p-8 md:p-12">
            {isSubmitted ? (
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <div className="text-gold mb-6 animate-bounce">
                  <CheckCircle2 size={56} strokeWidth={1} />
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl font-light mb-4">
                  Inquiry Successfully Registered
                </h3>
                <p className="font-sans text-sm text-navy/60 font-light max-w-md mx-auto leading-relaxed mb-8">
                  Your request has been routed to our Beverly Hills desk. An executive advisor will initiate contact within two business hours to verify credentials and schedule a consultation.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center gap-2 border border-navy/20 hover:border-gold hover:bg-gold/10 text-navy hover:text-gold px-6 py-3 text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Name Input */}
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=" "
                      className="w-full border-b border-navy/25 bg-transparent pt-4 pb-2 text-sm font-sans tracking-wide text-navy outline-none transition-all duration-300 focus:border-gold placeholder-transparent"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 top-4 origin-left -translate-y-4 scale-75 transform text-xs font-sans tracking-[0.2em] uppercase text-navy/40 transition-all duration-300 group-focus-within:-translate-y-4 group-focus-within:scale-75 group-focus-within:text-gold peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
                    >
                      Full Name
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      className="w-full border-b border-navy/25 bg-transparent pt-4 pb-2 text-sm font-sans tracking-wide text-navy outline-none transition-all duration-300 focus:border-gold placeholder-transparent"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 top-4 origin-left -translate-y-4 scale-75 transform text-xs font-sans tracking-[0.2em] uppercase text-navy/40 transition-all duration-300 group-focus-within:-translate-y-4 group-focus-within:scale-75 group-focus-within:text-gold"
                    >
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Phone Input */}
                  <div className="relative group">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder=" "
                      className="w-full border-b border-navy/25 bg-transparent pt-4 pb-2 text-sm font-sans tracking-wide text-navy outline-none transition-all duration-300 focus:border-gold placeholder-transparent"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-0 top-4 origin-left -translate-y-4 scale-75 transform text-xs font-sans tracking-[0.2em] uppercase text-navy/40 transition-all duration-300 group-focus-within:-translate-y-4 group-focus-within:scale-75 group-focus-within:text-gold"
                    >
                      Telephone (Optional)
                    </label>
                  </div>

                  {/* Portfolio Interest */}
                  <div className="relative group">
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full border-b border-navy/25 bg-transparent pt-4 pb-2 text-sm font-sans tracking-wide text-navy outline-none transition-all duration-300 focus:border-gold cursor-pointer"
                    >
                      <option value="coastal" className="bg-ivory text-navy">Coastal Collection</option>
                      <option value="mountain" className="bg-ivory text-navy">Mountain Retreats</option>
                      <option value="metropolitan" className="bg-ivory text-navy">Metropolitan Estates</option>
                      <option value="general" className="bg-ivory text-navy">General Advisory</option>
                    </select>
                    <label
                      htmlFor="propertyType"
                      className="absolute left-0 top-0 -translate-y-4 scale-75 transform text-xs font-sans tracking-[0.2em] uppercase text-gold"
                    >
                      Area of Interest
                    </label>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="relative group mt-2">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    className="w-full border-b border-navy/25 bg-transparent pt-4 pb-2 text-sm font-sans tracking-wide text-navy outline-none transition-all duration-300 focus:border-gold resize-none placeholder-transparent"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 top-4 origin-left -translate-y-4 scale-75 transform text-xs font-sans tracking-[0.2em] uppercase text-navy/40 transition-all duration-300 group-focus-within:-translate-y-4 group-focus-within:scale-75 group-focus-within:text-gold"
                  >
                    Specify Request / Architectural Interests
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative flex items-center justify-center gap-3 bg-navy hover:bg-navy-light text-ivory font-semibold py-4 text-xs font-sans tracking-[0.25em] uppercase transition-all duration-500 shadow-xl shadow-navy/10 mt-4 disabled:opacity-75"
                >
                  <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Confidential Inquiry"}</span>
                  {!isSubmitting && (
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
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
