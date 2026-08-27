import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Polaris Properties | Luxury Architectural Masterworks",
  description: "Experience architectural elegance and unmatched discretion. Discover elite residential portfolios, luxury penthouses, and bespoke coastal estates.",
  keywords: ["Luxury Real Estate", "Polaris Properties", "Modern Architecture", "High-end Estates", "Discreet Property Search"],
  authors: [{ name: "Polaris Properties" }],
  openGraph: {
    title: "Polaris Properties | Luxury Architectural Masterworks",
    description: "Experience architectural elegance and unmatched discretion. Discover elite residential portfolios.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} scroll-smooth`}>
      <body className="bg-ivory text-navy font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
