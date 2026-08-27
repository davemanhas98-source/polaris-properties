import React from "react";

interface PolarisLogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

export default function PolarisLogo({ className = "", iconOnly = false, light = false }: PolarisLogoProps) {
  const primaryColor = light ? "text-ivory" : "text-navy";
  const accentColor = "text-gold";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 4-Point Compass Star Icon */}
      <div className={`relative flex-shrink-0 w-8 h-8 ${accentColor}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          {/* North Point */}
          <path d="M 50,0 L 53,47 L 50,50 Z" />
          <path d="M 50,0 L 47,47 L 50,50 Z" className="opacity-70" />
          {/* South Point */}
          <path d="M 50,100 L 53,53 L 50,50 Z" className="opacity-70" />
          <path d="M 50,100 L 47,53 L 50,50 Z" />
          {/* East Point */}
          <path d="M 100,50 L 53,47 L 50,50 Z" />
          <path d="M 100,50 L 53,53 L 50,50 Z" className="opacity-70" />
          {/* West Point */}
          <path d="M 0,50 L 47,47 L 50,50 Z" className="opacity-70" />
          <path d="M 0,50 L 47,53 L 50,50 Z" />
        </svg>
      </div>

      {/* Wordmark */}
      {!iconOnly && (
        <div className="flex flex-col tracking-[0.25em] leading-none">
          <span className={`font-serif text-lg font-bold ${primaryColor}`}>
            POLARIS
          </span>
          <span className={`text-[8px] font-sans tracking-[0.45em] ${light ? "text-gold-light" : "text-gold-dark"}`}>
            PROPERTIES
          </span>
        </div>
      )}
    </div>
  );
}
