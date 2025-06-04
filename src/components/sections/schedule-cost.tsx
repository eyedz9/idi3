"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function RegistrationForm() {
  return (
    <section id="schedule-cost" className="py-24 bg-[url('/images/schedule-bg.jpg')] bg-cover bg-fixed bg-center bg-no-repeat text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/80 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-secondary text-lg font-semibold mb-4 block">Plan Your Journey</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Schedule and Cost</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto my-6 rounded-full"></div>
          </motion.div>
          
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-8 text-white text-center bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Schedule of Certificate Course
              </h3>
              
              <div className="space-y-8">
                <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300">
                  <div className="flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="text-xl font-semibold text-secondary">Class Schedule Options</h4>
                  </div>
                  <div className="space-y-3">
                    <p className="text-center text-lg">September 9 - December 4, 2025</p>
                    <p className="text-center text-lg">Choose the days and times that work best for you:</p>
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-center">Tuesday Lecture in-person: 9:00 A.M. – 11:30 A.M.</p>
                      <p className="text-center">Wednesday Studio in-person: 9:00 A.M. – 11:30 A.M.</p>
                      <p className="text-center">Thursday Studio in-person: 9:00 A.M. – 11:30 A.M.</p>
                      <p className="text-center">Tuesday Studio online or in person 6:00 P.M. – 8:30 P.M.</p>
                      <p className="text-center">Thursday Lecture online 6:00 P.M. – 8:30 P.M.</p>
                    </div>
                    <p className="text-center text-lg">You select your schedule — mix and match—to create a schedule that fits your needs.</p>
                    <p className="text-center text-lg">Hybrid online option is also available!</p>
                    <p className="text-center text-lg">Students are eligible to earn the Certificate of Completion when both lectures & studios are successfully completed.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-8 text-white text-center bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Tuition for Certificate Course
              </h3>
              
              <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300">
                <div className="text-center space-y-6">
                  <div>
                    <h4 className="text-2xl font-bold text-secondary mb-2">Full Payment Option</h4>
                    <div className="flex justify-center items-baseline gap-2">
                      <span className="text-3xl font-bold">$2,400</span>
                      <span className="text-white/70">total</span>
                    </div>
                    <p className="text-sm text-white/70 mt-1">(Lectures $1,200 + Studio Workshops $1,200)</p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white/10 px-4 text-sm text-white/70">or</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-2xl font-bold text-secondary mb-2">Payment Plan</h4>
                    <div className="flex justify-center items-baseline gap-2">
                      <span className="text-3xl font-bold">$800</span>
                      <span className="text-white/70">/ month</span>
                    </div>
                    <p className="text-sm text-white/70 mt-1">for 3 months</p>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-2 text-white/90">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>$95 Registration Fee (Non-Refundable)</p>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>Supply kit from school: $300 (due with first payment)</p>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>Additional supplies (purchased separately): ~$250</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center mt-12"
          >            
            <Button 
              className="btn-gradient px-10 py-6 rounded-xl font-extrabold text-lg"
              asChild
            >
              <a href="https://interiordesignersinstitute.formstack.com/forms/online_idi_registration_copy" target="_blank" rel="noopener noreferrer">
                Start Your Journey<span className="ml-3 text-xl">→</span>
              </a>
            </Button>
            <p className="mt-6 text-white/70 font-medium">Transform your passion into a career</p>
          </motion.div>
      </div>
    </section>
  );
}
