"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

// Testimonial data - this would typically come from a CMS or API
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Interior Designer',
    company: 'Design Studio LA',
    quote: "The Certificate in Interior Design program at IDI provided me with the perfect foundation to start my career. The instructors were knowledgeable and supportive, and the curriculum covered everything I needed to know to succeed in the industry.",
    image: '/images/testimonial-1.jpg', // Placeholder - will be replaced with actual image
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Residential Designer',
    company: 'Modern Home Interiors',
    quote: "After completing the certificate program, I was able to immediately apply what I learned to real-world projects. The hands-on approach and industry connections provided by IDI were invaluable to launching my career.",
    image: '/images/testimonial-2.jpg', // Placeholder - will be replaced with actual image
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Design Consultant',
    company: 'Rodriguez Interiors',
    quote: "As someone who was changing careers, I found the certificate program to be the perfect entry point into interior design. The flexible schedule allowed me to continue working while I studied, and the comprehensive curriculum gave me the confidence to start my own business.",
    image: '/images/testimonial-3.jpg', // Placeholder - will be replaced with actual image
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Commercial Designer',
    company: 'Workspace Design Group',
    quote: "The certificate program at IDI opened doors for me in the commercial design sector. The faculty's industry connections and the practical skills I gained made it possible for me to transition into a fulfilling career designing office spaces and retail environments.",
    image: '/images/testimonial-4.jpg', // Placeholder - will be replaced with actual image
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Hear from our graduates who have successfully launched their careers in interior design after completing our certificate program.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-20 h-20 rounded-full bg-gray-300 mb-4 overflow-hidden">
                            {/* Placeholder for testimonial image */}
                            <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
                              Photo
                            </div>
                          </div>
                          <div className="mb-4">
                            <svg className="w-8 h-8 text-secondary mx-auto" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                          </div>
                          <p className="mb-4 italic">{testimonial.quote}</p>
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-white/80">{testimonial.role}</p>
                          <p className="text-white/80">{testimonial.company}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative inset-0 translate-y-0 bg-white/10 hover:bg-white/20 border-white/20" />
              <CarouselNext className="relative inset-0 translate-y-0 bg-white/10 hover:bg-white/20 border-white/20" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
