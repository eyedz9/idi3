"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function RegistrationForm() {
  return (
    <section className="py-20 bg-[url('/images/schedule-bg.jpg')] bg-cover bg-center bg-no-repeat text-white relative">
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule and Cost</h2>
            <div className="w-20 h-1 bg-secondary mx-auto my-6"></div>
          </motion.div>
          
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-white text-center">Schedule of Certificate Course</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2 text-secondary text-center">In Person Combined Certificate Course</h4>
                  <p className="text-center mb-2">Lectures &amp; Studio Workshops May 5-July 24, 2025</p>
                  <p className="text-center font-medium mb-1">Classes meet:</p>
                  <p className="text-center">Tues. &amp; Wed. 9 A.M. – 11:30 A.M.</p>
                  <p className="text-center">Tues. &amp; Thur. 9 A.M. – 11:30 A.M.</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2 text-secondary text-center">Evening Combined Certificate Course</h4>
                  <p className="text-center mb-2">Lectures &amp; Studio Workshops May 5-July 24, 2025</p>
                  <p className="text-center font-medium mb-1">Classes meet:</p>
                  <p className="text-center">Tues. 6 P.M. – 8:30 P.M In-Person. &amp; Thur. 6 P.M. – 8:30 P.M. Online</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-white text-center">Tuition for Certificate Course</h3>
              
              <div className="bg-white/10 p-4 rounded-lg mb-4">
                <h4 className="text-xl font-semibold mb-2 text-secondary text-center">
                  Lectures $1,200.00 &amp; Studio Workshops $1,200.00
                  <br />or<br />
                  3 months payments of $800.00
                </h4>
                <p className="text-center mb-3">+ $95 Registration Fee NonRefundable.</p>
                <p className="text-center italic">
                  The tuition does not include the supply kit purchased from the school for $300 and payable with the first payment. Additional miscellaneous supplies to be purchased outside of school are estimated at $250.
                </p>
              </div>
            </div>
          </div>
        </div>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">            
            <Button 
              className="mx-auto bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white font-extrabold text-lg px-8 py-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl"
              asChild
            >
              <a href="https://interiordesignersinstitute.formstack.com/forms/online_idi_registration_copy" target="_blank" rel="noopener noreferrer">
                Enroll Today<span className="ml-2">→</span>
              </a>
            </Button>
          </div>
      </div>
    </section>
  );
}
