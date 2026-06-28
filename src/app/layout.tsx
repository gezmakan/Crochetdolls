import type { Metadata } from "next";
import { Fraunces, Inter, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
});

const splineSansMono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Wholesale — The Crochet Dolls",
  description:
    "Stock handmade crochet dolls, teddies and baby gifts at 50% off retail. Keystone margin, ready to ship, €150 to start.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${splineSansMono.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>{children}</body>
    </html>
  );
}
