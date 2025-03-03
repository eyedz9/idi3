"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

// Testimonial data - this would typically come from a CMS or API
const testimonials = [
  {
    id: 1,
    name: 'Jeorge Fernando',
    role: 'Interior Theme',
    quote: "By far the best theme I've ever purchased. They truly understood the look I was going for and completely nailed it! You how all this mistaken idea of denouncing pleasure pain was born and I will give you I would highly recommend Interior Designers Institute.",
    image: '/images/about.jpg', // Using existing image as placeholder
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Residential Designer',
    quote: "After completing the certificate program, I was able to immediately apply what I learned to real-world projects. The hands-on approach and industry connections provided by IDI were invaluable to launching my career.",
    image: '/images/about.jpg', // Using existing image as placeholder
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Design Consultant',
    quote: "As someone who was changing careers, I found the certificate program to be the perfect entry point into interior design. The flexible schedule allowed me to continue working while I studied, and the comprehensive curriculum gave me the confidence to start my own business.",
    image: '/images/about.jpg', // Using existing image as placeholder
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Commercial Designer',
    quote: "The certificate program at IDI opened doors for me in the commercial design sector. The faculty's industry connections and the practical skills I gained made it possible for me to transition into a fulfilling career designing office spaces and retail environments.",
    image: '/images/about.jpg', // Using existing image as placeholder
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Carousel 
            className="w-full"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="p-6"
                  >
                    <Card className="bg-white shadow-lg border-none">
                      <CardContent className="p-8">
                        <div className="flex flex-col items-center text-center">
                          <div className="mb-6">
                            <svg className="w-10 h-10 text-secondary mx-auto" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                          </div>
                          <p className="mb-6 text-gray-700 text-lg italic">{testimonial.quote}</p>
                          <div className="flex items-center">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div className="text-left">
                              <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                              <p className="text-secondary">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative inset-0 translate-y-0 bg-white hover:bg-gray-100 border-gray-200 text-primary" />
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeIndex ? 'bg-secondary w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <CarouselNext className="relative inset-0 translate-y-0 bg-white hover:bg-gray-100 border-gray-200 text-primary" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
