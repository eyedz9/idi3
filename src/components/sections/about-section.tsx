"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-accent">Connect, Create, and Learn with Real Design Instructors</h2>
            <div className="w-20 h-1 bg-secondary mx-auto my-6"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-2/3">
              <p className="text-lg text-gray-700 mb-6">
                Do you enjoy designing and decorating? Are you creative and are looking for fun and exciting interior design courses? Learn interior design and decorating online or in-person at Interior Designers Institute, a prestigious accredited design college.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Interior Designers Institute offers online and in-person classes that have actual teachers you can engage and interact with as well as other design students. Online classes are live classes with personalized attention and are not just self-taught programs like many other online design schools. After completion of all of the sections of the 12 week course you will receive a Certificate of Interior Design.
              </p>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="mt-8 mb-4"
              >
                <Button 
                  className="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white font-extrabold text-lg px-8 py-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl"
                >
                  ENROLL TODAY
                  <span className="ml-2">→</span>
                </Button>
              </motion.div>
            </div>
            
            <div className="lg:w-1/3 space-y-8">
              <figure className="relative">
                <img 
                  src="/images/about.jpg" 
                  alt="Interior Design" 
                  className="w-full h-auto rounded-lg shadow-lg" 
                />
                <figcaption className="text-center text-sm text-gray-600 mt-2 italic">
                  Start creating stunning spaces — enroll today!
                </figcaption>
              </figure>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
