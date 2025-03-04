"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about-section" className="pt-20 pb-10 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-10xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-secondary text-lg font-semibold mb-4 block">Your Journey Starts Here</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">
              Connect, Create, and Learn with Real Design Instructors
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto my-6 rounded-full"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-2/3 space-y-8">
              <p className="text-xl leading-relaxed text-gray-700">
                Do you enjoy designing and decorating? Are you creative and are looking for fun and exciting interior design courses? Learn interior design and decorating online or in-person at Interior Designers Institute, a prestigious accredited design college.
              </p>
              <p className="text-xl leading-relaxed text-gray-700">
                Interior Designers Institute offers online and in-person classes that have actual teachers you can engage and interact with as well as other design students. Online classes are live classes with personalized attention and are not just self-taught programs like many other online design schools. After completion of all of the sections of the 12 week course you will receive a Certificate of Interior Design.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Button 
                    className="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white font-extrabold text-lg px-10 py-6 rounded-xl shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  >
                    ENROLL TODAY
                    <span className="ml-3 text-xl">→</span>
                  </Button>
                </motion.div>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-medium">12-Week Course Duration</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <motion.figure 
                className="relative group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-secondary to-primary rounded-2xl opacity-40 blur-lg group-hover:opacity-60 transition duration-300"></div>
                <div className="relative">
                  <Image 
                    src="/images/about.jpg" 
                    alt="Interior Design" 
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-xl shadow-2xl transform transition duration-300 group-hover:scale-[1.01]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl"></div>
                  <figcaption className="absolute bottom-6 left-4 right-4 text-center text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Start creating stunning spaces — enroll today!
                  </figcaption>
                </div>
              </motion.figure>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
