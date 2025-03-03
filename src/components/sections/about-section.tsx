"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Receive a Certificate of Interior Design</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src="/images/about.jpg" 
                alt="Interior Design Certificate Program" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 prose prose-lg max-w-none text-gray-700 md:text-left text-center">
              <p>
                Do you enjoy designing and decorating? Are you creative and are looking for fun and exciting interior design courses? Learn interior design and decorating online or in-person at Interior Designers Institute, a prestigious accredited design college.
              </p>
              <p>
                Interior Designers Institute offers online and in-person classes that have actual teachers you can engage and interact with as well as other design students. Online classes are live classes with personalized attention and are not just self-taught programs like many other online design schools. After completion of all of the sections of the 12 week course you will receive a Certificate of Interior Design.
              </p>
            </div>
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                className="bg-primary text-white hover:bg-primary/90 px-8 py-3 rounded-md"
                asChild
              >
                <a href="#" className="inline-flex items-center">
                  Learn more
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                className="bg-secondary text-white hover:bg-secondary/90 px-8 py-3 rounded-md"
                asChild
              >
                <a href="https://interiordesignersinstitute.formstack.com/forms/online_idi_registration_copy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  Sign Up
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
