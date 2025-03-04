"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function ProgramFeatures() {
  const services = [
    {
      title: "Lecture Topics",
      description: [
        "Beautiful Kitchens", 
        "The Luxury Bathroom", 
        "Magic of Color", 
        "The Natural and Healthy Home", 
        "Outdoor Spaces", 
        "The High-Tech Home", 
        "Home Staging", 
        "Design Resources", 
        "Floors That Rock", 
        "Indoor Plantscaping", 
        "Principles & Elements of Design", 
        "Planning The Space", 
        "Great Windows and Walls", 
        "The History of the Chair"
      ],
      icon: "📚"
    },
    {
      title: "Studio Workshops",
      description: [
        "Color & Styles", 
        "Furniture Selections", 
        "Textile Specifications", 
        "Drafting & Spaceplanning", 
        "Developing the Design Concept and Solution"
      ],
      icon: "🎨"
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-background via-muted to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-lg font-semibold mb-4 block">Comprehensive Curriculum</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent via-primary to-secondary">
            12-Week Certificate Course
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto my-6 rounded-full"></div>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto text-gray-700">
            The Certificate Course explores residential design and home staging and is avocational. Students learn the most current design and techniques from a faculty of successful working professionals. Small class size and personal attention are offered in an industry current facility.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4 bg-gradient-to-br from-secondary to-primary text-transparent bg-clip-text">{service.icon}</div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{service.title}</h3>
              </div>
              {Array.isArray(service.description) ? (
                <div className="grid grid-cols-2 gap-4">
                  <ul className="space-y-3 text-gray-700">
                    {service.description.slice(0, Math.ceil(service.description.length / 2)).map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-3 text-gray-700">
                    {service.description.slice(Math.ceil(service.description.length / 2)).map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-gray-700 mb-6">{service.description}</p>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Button 
            className="btn-gradient px-10 py-6 rounded-xl font-extrabold text-lg"
            asChild
          >
            <a href="https://interiordesignersinstitute.formstack.com/forms/online_idi_registration_copy" target="_blank" rel="noopener noreferrer">
              Begin Your Journey<span className="ml-3 text-xl">→</span>
            </a>
          </Button>
          <p className="mt-6 text-gray-600 font-medium">Transform your passion for design into expertise</p>
        </motion.div>
      </div>
    </section>
  );
}
