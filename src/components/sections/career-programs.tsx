"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function CareerPrograms() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-20" style={{ backgroundSize: '20px 20px' }}></div>
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center">
              Advance Your Career in Interior Design
            </h2>
            <p className="text-lg md:text-xl text-center mb-8 leading-relaxed">
              Explore our comprehensive career-oriented programs:
              <span className="block mt-4 font-semibold text-foreground/80">
                • Associate of Arts Degree in Interior Design<br/>
                • Bachelor of Arts in Interior Design<br/>
                • Master of Interior Architecture Program
              </span>
            </p>
            <div className="flex justify-center">
              <a 
                href="https://idi.edu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Learn More at IDI.edu
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
