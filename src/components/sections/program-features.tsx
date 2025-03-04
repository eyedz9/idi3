"use client";

import React from 'react';
import { motion } from 'framer-motion';

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
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">12-Week Certificate Course12-Week Certificate Course</h2>
          <div className="w-20 h-1 bg-secondary mx-auto my-6"></div>
          <p className="text-gray-700 text-xl mt-6">The Certificate Course explores residential design and home staging and is avocational. Students learn the most current design and techniques from a faculty of successful working professionals. Small class size and personal attention are offered in an industry current facility.</p>
          
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4 text-secondary">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-primary">{service.title}</h3>
              {Array.isArray(service.description) ? (
                <div className="grid grid-cols-2 gap-2">
                  <ul className="list-disc pl-5 text-gray-700">
                    {service.description.slice(0, Math.ceil(service.description.length / 2)).map((item, i) => (
                      <li key={i} className="mb-2">{item}</li>
                    ))}
                  </ul>
                  <ul className="list-disc pl-5 text-gray-700">
                    {service.description.slice(Math.ceil(service.description.length / 2)).map((item, i) => (
                      <li key={i} className="mb-2">{item}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-gray-700 mb-6">{service.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
