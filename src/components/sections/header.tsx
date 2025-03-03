"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">IDI</span>
              </div>
              <div>
                <span className="text-primary font-bold text-xl block leading-tight">Interior Designers</span>
                <span className="text-primary font-bold text-xl block leading-tight">Institute</span>
              </div>
            </a>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:block">
            <ul className="text-right">
              <li className="text-gray-700 font-medium">Please Contact us!</li>
              <li className="text-gray-700 font-medium">Call: <a href="tel:(949) 675-4451" className="text-primary hover:text-primary/80 transition-colors">(949) 675-4451</a></li>
              <li className="text-gray-700 font-medium">Email: <a href="mailto:Contact@idi.edu" className="text-primary hover:text-primary/80 transition-colors">Contact@idi.edu</a></li>
            </ul>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors uppercase">Certificate Course</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors uppercase">Schedule AND Tuition</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors uppercase">Supplies</a>
            <a href="https://www.idi.edu" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary font-medium transition-colors uppercase">IDI</a>
            <a href="https://www.idi.edu/disclosures/bppe-disclosures/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary font-medium transition-colors uppercase">Disclosures</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors uppercase">Contact Us</a>
            <Button 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              asChild
            >
              <a href="https://interiordesignersinstitute.formstack.com/forms/online_idi_registration_copy" target="_blank" rel="noopener noreferrer">
                Sign Up
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
            </button>
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
                className="lg:hidden bg-white border-t border-gray-200"
              >
                <div className="container mx-auto px-4 py-4">
                  {/* Mobile Contact Info */}
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <ul>
                      <li className="text-gray-700 font-medium">Please Contact us!</li>
                      <li className="text-gray-700 font-medium">Call: <a href="tel:(949) 675-4451" className="text-primary">(949) 675-4451</a></li>
                      <li className="text-gray-700 font-medium">Email: <a href="mailto:Contact@idi.edu" className="text-primary">Contact@idi.edu</a></li>
                    </ul>
                  </div>
                  
                  <nav className="flex flex-col space-y-4">
                    <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors py-2 uppercase">Certificate Course</a>
                    <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors py-2 uppercase">Schedule AND Tuition</a>
                    <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors py-2 uppercase">Supplies</a>
                    <a href="https://www.idi.edu" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary font-medium transition-colors py-2 uppercase">IDI</a>
                    <a href="https://www.idi.edu/disclosures/bppe-disclosures/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary font-medium transition-colors py-2 uppercase">Disclosures</a>
                    <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors py-2 uppercase">Contact Us</a>
                    <Button 
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full"
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
