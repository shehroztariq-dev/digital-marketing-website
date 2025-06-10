import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agency One",
  description: "Digital Marketing Agency Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-full md:items-center md:justify-center bg-black/[0.95] antialiased bg-grid-white/[0.02] overflow-y-scroll overflow-hidden`}>
        <Navbar />
        <Spotlight className="left-80 over" fill="white" />
        {children}
      </body>
    </html>
  );
}
