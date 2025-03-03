"use client";

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProgramFeatures() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Image */}
          <motion.div 
            className="lg:w-1/4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-gray-200 rounded-lg shadow-md aspect-[3/4] overflow-hidden">
              <Image 
                src="/images/course.jpg"
                alt="Student with Certificate"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          
          {/* Right side - Content */}
          <motion.div 
            className="lg:w-3/4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">12-Week Certificate Course</h2>
            <p className="text-lg text-gray-700 mb-8">
              The Certificate Course explores residential design and home staging and is avocational. Students learn the most current design and techniques from a faculty of successful working professionals. Small class size and personal attention are offered in an industry current facility.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Lecture Topics */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">Lecture Topics</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Beautiful Kitchens</li>
                  <li>The Luxury Bathroom</li>
                  <li>Magic of Color</li>
                  <li>The Natural and Healthy Home</li>
                  <li>Outdoor Spaces</li>
                  <li>The High-Tech Home</li>
                  <li>Home Staging</li>
                  <li>Design Resources</li>
                  <li>Floors That Rock</li>
                  <li>Indoor Plantscaping</li>
                  <li>Principles &amp; Elements of Design</li>
                  <li>Planning The Space</li>
                  <li>Great Windows and Walls</li>
                  <li>The History of the Chair</li>
                </ul>
              </div>
              
              {/* Studio Workshops */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">Studio Workshops</h4>
                <ul className="space-y-2 text-gray-700 mb-8">
                  <li>Color &amp; Styles</li>
                  <li>Furniture Selections</li>
                  <li>Textile Specifications</li>
                  <li>Drafting &amp; Spaceplanning</li>
                  <li>Developing the Design Concept and Solution</li>
                </ul>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-2 text-primary">Field Trips - Optional</h4>
                  <p className="text-gray-700">
                    Field Trips to the Laguna Design Center and Stonemill Design Center to study sources of purchase for furniture, floorcoverings, wallcoverings, and accessories.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
