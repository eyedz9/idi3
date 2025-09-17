"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const heroContent = {
    title: "Learn Interior Design Online or In-Person.",
    subtitle: "Complete Course in 12 Weeks",
    description: "Explore your passion for interior design with our avocational Certificate Course. This program focuses on residential design and home staging for personal enrichment.",
    bgImage: "/images/hero-bg.jpg"
  };

  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url(${heroContent.bgImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>
        
        <div className="relative h-full flex items-center z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {heroContent.subtitle && (
                  <p className="text-xl md:text-2xl text-secondary mb-2 font-medium">
                    {heroContent.subtitle}
                  </p>
                )}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {heroContent.title}
                </h2>
                <p className="text-lg text-white mb-8 mx-auto">
                  {heroContent.description}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    className="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white font-extrabold text-lg px-8 py-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl"
                    asChild
                  >
                    <a href="https://interiordesignersinstitute.formstack.com/forms/winter_2026_registration" target="_blank" rel="noopener noreferrer">
                      Enroll Today<span className="ml-2">→</span>
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
