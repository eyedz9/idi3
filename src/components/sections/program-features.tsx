"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ProgramFeatures() {
  const services = [
    {
      title: "Certificate Course",
      description: "The Certificate Course explores residential design and home staging and is avocational. Students learn the most current design and techniques from a faculty of successful working professionals.",
      icon: "🏠"
    },
    {
      title: "Lecture Topics",
      description: "Beautiful Kitchens, Luxury Bathrooms, Magic of Color, Natural and Healthy Home, Outdoor Spaces, High-Tech Home, Home Staging, and more.",
      icon: "📚"
    },
    {
      title: "Studio Workshops",
      description: "Color & Styles, Furniture Selections, Textile Specifications, Drafting & Spaceplanning, Developing the Design Concept and Solution.",
      icon: "🎨"
    },
    {
      title: "Field Trips",
      description: "Optional field trips to the Laguna Design Center and Stonemill Design Center to study sources of purchase for furniture, floorcoverings, and accessories.",
      icon: "🚌"
    },
    {
      title: "Online Learning",
      description: "Online classes are live classes with personalized attention and are not just self-taught programs like many other online design schools.",
      icon: "💻"
    },
    {
      title: "In-Person Classes",
      description: "Small class size and personal attention are offered in an industry current facility with hands-on learning experiences.",
      icon: "👥"
    }
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">Our Best Services</h2>
          <div className="w-20 h-1 bg-secondary mx-auto my-6"></div>
          <div className="flex justify-center mt-8">
            <a href="#" className="text-primary hover:text-secondary font-medium transition-colors border-b-2 border-secondary pb-1">
              More Services
            </a>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <p className="text-gray-700 mb-6">{service.description}</p>
              <a href="#" className="text-primary hover:text-secondary font-medium transition-colors inline-block">
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
