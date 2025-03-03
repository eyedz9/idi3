"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat py-12">
      <div className="absolute inset-0 bg-white opacity-75 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Headline at the top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Learn Interior Design Online or In-Person
          </h1>
        </motion.div>
        
        {/* Centered text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center space-y-4"
        >
          <p className="text-lg text-gray-700 mb-4">
            Explore your passion for interior design with our avocational Certificate Course. This program focuses on 
            residential design and home staging for personal enrichment, not as a career path.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Many of our students later advance to our accredited courses at IDI for professional certification. 
            Whether you prefer online learning or in-person instruction, our flexible program adapts to your lifestyle 
            and learning preferences.
          </p>
          <Button size="lg" className="font-medium">
            Enroll Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
