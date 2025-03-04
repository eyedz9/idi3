"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top Bar with Contact Info and Social Icons */}
      <div className="bg-gradient-to-r from-primary to-primary/90 py-2.5 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Contact Info */}
            <div className="flex space-x-8 text-white/90">
              <div className="flex items-center">
                <span className="font-medium">Call: </span>
                <a href="tel:(949) 675-4451" className="ml-1 hover:text-secondary transition-colors">(949) 675-4451</a>
              </div>
              <div className="flex items-center">
                <span className="font-medium">Email: </span>
                <a href="mailto:Contact@idi.edu" className="ml-1 hover:text-secondary transition-colors">Contact@idi.edu</a>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/interiordesignersinstitute/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="https://twitter.com/idistudents?lang=en" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/interiordesignersinstitute/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCI4GyaEGMw_sdJhaMwe_faA" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/images/logo.png" 
                  alt="Interior Designers Institute" 
                  width={200}
                  height={64}
                  className="h-16 w-auto"
                />
              </Link>
            </div>

            {/* Navigation - moved to main header and right-justified */}
            <nav className="hidden lg:flex justify-end items-center">
              <ul className="flex items-center">
                <li className="group relative">
                  <a href="#about-section" className="block px-4 py-2 text-gray-700 hover:text-primary font-medium transition-all duration-300 hover:scale-105">Certificate Course</a>
                </li>
                <li className="group relative">
                  <a href="#schedule-cost" className="block px-4 py-2 text-gray-700 hover:text-primary font-medium transition-all duration-300 hover:scale-105">Schedule &amp; Tuition</a>
                </li>
                <li className="group relative">
                  <a href="#footer" className="block px-4 py-2 text-gray-700 hover:text-primary font-medium transition-all duration-300 hover:scale-105">Supplies</a>
                </li>
                <li className="group relative">
                  <a href="https://idi.edu" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:text-primary font-medium transition-all duration-300 hover:scale-105">IDI</a>
                </li>
                <li className="group relative">
                  <a href="https://www.idi.edu/disclosures/bppe-disclosures/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:text-primary font-medium transition-all duration-300 hover:scale-105">Disclosures</a>
                </li>
                <li className="group relative">
                  <a href="https://idi.edu/contact-us/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:text-primary font-medium transition-all duration-300 hover:scale-105">Contact Us</a>
                </li>
                <li className="ml-4">
                  <Button 
                    className="btn-gradient px-8 py-6 rounded-xl font-extrabold text-lg"
                    asChild
                  >
                    <a href="https://interiordesignersinstitute.formstack.com/forms/online_idi_registration_copy" target="_blank" rel="noopener noreferrer">
                      Enroll Today<span className="ml-2">→</span>
                    </a>
                  </Button>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden relative z-50">
              <motion.button 
                onClick={toggleMenu}
                className="text-gray-700 hover:text-primary focus:outline-none p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>


      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-xl fixed inset-x-0 top-[120px]"
          >
            <div className="container mx-auto px-4 py-4">
              {/* Mobile Contact Info */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                <ul>
                  <li className="text-gray-700 font-medium">Call: <a href="tel:(949) 675-4451" className="text-primary">(949) 675-4451</a></li>
                  <li className="text-gray-700 font-medium">Email: <a href="mailto:Contact@idi.edu" className="text-primary">Contact@idi.edu</a></li>
                </ul>
              </div>
              
              <nav className="flex flex-col space-y-4">
                <a href="#about-section" className="text-gray-700 hover:text-primary font-medium transition-colors py-2">Certificate Course</a>
                <a href="#schedule-cost" className="text-gray-700 hover:text-primary font-medium transition-colors py-2">Schedule &amp; Tuition</a>
                <a href="#footer" className="text-gray-700 hover:text-primary font-medium transition-colors py-2">Supplies</a>
                <a href="https://idi.edu" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary font-medium transition-colors py-2">IDI</a>
                <a href="https://www.idi.edu/disclosures/bppe-disclosures/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary font-medium transition-colors py-2">Disclosures</a>
                <a href="https://idi.edu/contact-us/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary font-medium transition-colors py-2">Contact Us</a>
                
                <Button 
                  className="btn-gradient w-full mt-4 py-4 rounded-lg text-lg font-bold"
                  asChild
                >
                  <a href="https://interiordesignersinstitute.formstack.com/forms/online_idi_registration_copy" target="_blank" rel="noopener noreferrer">
                    Sign Up
                  </a>
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
