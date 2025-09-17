"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer id="footer" className="text-white">
      {/* Supplies Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-20" style={{ backgroundSize: '20px 20px' }}></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-secondary text-lg font-semibold mb-4 block">Essential Tools</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Supplies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-white/80 mx-auto my-6 rounded-full"></div>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/20"
            >
              <div className="md:flex">
                <motion.div 
                  className="md:w-1/3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="relative group">
                    <Image 
                      src="/images/drafting_table.jpg" 
                      alt="Portable Drafting Table" 
                      width={400}
                      height={300}
                      className="w-full object-contain p-4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
                <motion.div 
                  className="p-8 md:w-2/3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                    Required Equipment for the online certificate studio workshop
                  </h3>
                  <div className="mb-4">
                    <p className="font-semibold text-gray-800">Portable Drafting Table (minimum size 20&quot; x 26&quot;) with parallel bar or straightedge</p>
                    <p className="text-gray-700 mt-2">
                      Portable drawing and drafting board with built-in parallel straightedge for all kinds of creative and technical applications. Perfect for students and those who need an accurate drawing surface but don&apos;t have the space for a full-size drafting table.
                    </p>
                    <p className="text-red-700 mt-2">
                      This item is mandatory and can be purchased from various suppliers.
                    </p>
                  </div>
                  
                  <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                    <a href="https://www.amazon.com/Martin-Pro-Draft-Adjustable-Parallel-U-PEB2026K/dp/B004KJECU6/ref=asc_df_B004KJECU6/?tag=hyprod-20&linkCode=df0&hvadid=168221741416&hvpos=&hvnetw=g&hvrand=15363525678410988695&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9031550&hvtargid=pla-273379533822&th=1" className="inline-block bg-secondary text-black font-semibold py-2 px-6 rounded hover:bg-secondary/90 transition-colors">
                      <span className="flex items-center">
                        Amazon
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </a>
                    <a href="https://www.engineersupply.com/Pacific-Arc-Original-PXB-Drawing-Board.aspx?variantId=d8683965-9a5f-4ad7-b645-26517d2a4775" className="inline-block bg-secondary text-black font-semibold py-2 px-6 rounded hover:bg-secondary/90 transition-colors">
                      <span className="flex items-center">
                        Engineer Supply
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </a>
                    <a href="https://www.draftingsuppliesdew.com/alvin-pacific-arc-pxb-portable-parallel-straightedge-board" className="inline-block bg-secondary text-black font-semibold py-2 px-6 rounded hover:bg-secondary/90 transition-colors">
                      <span className="flex items-center">
                        Drafting Supplies
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </a>
                    <a href="https://www.utrechtart.com/products/blick-portable-drafting-board/" className="inline-block bg-secondary text-black font-semibold py-2 px-6 rounded hover:bg-secondary/90 transition-colors">
                      <span className="flex items-center">
                        Utrecht Art
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 text-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <Link href="/" className="inline-block">
                <Image 
                  src="/images/logo.png" 
                  alt="Interior Designers Institute" 
                  width={200}
                  height={64}
                  className="h-16 w-auto"
                />
              </Link>
            </div>
            <div className="flex space-x-6 mb-6">
              <a href="https://www.facebook.com/interiordesignersinstitute/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="https://twitter.com/idistudents?lang=en" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/interiordesignersinstitute/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCI4GyaEGMw_sdJhaMwe_faA" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <p className="text-gray-700">IDI - 2019 ACCSC School <br />of Excellence</p>
          </motion.div>

          {/* Column 2: About Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-700">
              Interior Designers Institute is a boutique college, specializing in teaching interior design and interior architecture. The college&apos;s specialized curriculum, offers each student a personalized education with student-focused faculty, who love teaching. IDI&apos;s mission is to be an exclusive producer of interior design graduates, who become some of the most well-known and successful designers in the country.
            </p>
          </motion.div>

          {/* Column 3: Explore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Explore</h3>
            <nav>
              <ul className="space-y-2">
                <li><a href="#about-section" onClick={(e) => handleScroll(e, '#about-section')} className="text-gray-700 hover:text-primary transition-colors uppercase">Certificate Course</a></li>
                <li><a href="#schedule-cost" onClick={(e) => handleScroll(e, '#schedule-cost')} className="text-gray-700 hover:text-primary transition-colors uppercase">Schedule & Tuition</a></li>
                <li><a href="#footer" onClick={(e) => handleScroll(e, '#footer')} className="text-gray-700 hover:text-primary transition-colors uppercase">Supplies</a></li>
                <li><a href="https://idi.edu" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors uppercase">IDI</a></li>
                <li><a href="https://www.idi.edu/disclosures/bppe-disclosures/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors uppercase">Disclosures</a></li>
                <li><a href="https://idi.edu/contact-us/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors uppercase">Contact Us</a></li>
                <li><a href="https://interiordesignersinstitute.formstack.com/forms/winter_2026_registration" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors uppercase">Sign Up</a></li>
              </ul>
            </nav>
          </motion.div>

          {/* Column 4: Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-700 mb-4">1061 Camelback Street Newport Beach, CA 92660</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-gray-700 font-semibold">Phone:</span>
                <a href="tel:19496754451" className="text-gray-700 hover:text-primary transition-colors">(949) 675-4451</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-700 font-semibold">Email:</span>
                <a href="mailto:contact@idi.edu" className="text-gray-700 hover:text-primary transition-colors">contact@idi.edu</a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-gradient-to-r from-primary to-primary/90 py-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/90 text-sm mb-2 md:mb-0">©2025 Interior Designers Institute. All Rights Reserved.</p>
            <p className="text-white/70 text-sm">Designed with ❤️ for aspiring designers</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
