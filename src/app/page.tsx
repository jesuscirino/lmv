"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import { Projects } from "@/components/sections/Projects";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Projects />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
