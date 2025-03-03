"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function RegistrationForm() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule and Tuition</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="bg-white text-gray-800 shadow-lg h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-primary text-center">Schedule of Certificate Course</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2 text-primary text-center">In Person Combined Certificate Course</h4>
                    <p className="text-center mb-2">Lectures &amp; Studio Workshops May 5-July 24, 2025</p>
                    <p className="text-center font-medium mb-1">Classes meet:</p>
                    <p className="text-center">Tues. &amp; Wed. 9 A.M. – 11:30 A.M.</p>
                    <p className="text-center">Tues. &amp; Thur. 9 A.M. – 11:30 A.M.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2 text-primary text-center">Evening Combined Certificate Course</h4>
                    <p className="text-center mb-2">Lectures &amp; Studio Workshops May 5-July 24, 2025</p>
                    <p className="text-center font-medium mb-1">Classes meet:</p>
                    <p className="text-center">Tues. 6 P.M. – 8:30 P.M In-Person. &amp; Thur. 6 P.M. – 8:30 P.M. Online</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Tuition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white text-gray-800 shadow-lg h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-primary text-center">Tuition for Certificate Course</h3>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="text-xl font-semibold mb-2 text-primary text-center">
                    Lectures $1,200.00 &amp; Studio Workshops $1,200.00
                    <br />or<br />
                    3 months payments of $800.00
                  </h4>
                  <p className="text-center mb-3">+ $95 Registration Fee NonRefundable.</p>
                  <p className="text-center italic">
                    The tuition does not include the supply kit purchased from the school for $300 and payable with the first payment. Additional miscellaneous supplies to be purchased outside of school are estimated at $250.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
