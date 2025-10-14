import React from 'react';
import { chapterInfo } from '../data/tsaData';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container-max">
        <div className="py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* School Information */}
            <div className="space-y-6">
              <div>
                <Logo size="sm" showText={false} className="mb-6" isScrolled={true} />
                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                  {chapterInfo.schoolName}
                </h3>
                <p className="text-lg text-blue-300 font-medium">TSA Chapter</p>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Empowering the next generation of technology leaders through hands-on learning and competitive excellence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-2xl font-heading font-bold mb-8 text-white">Quick Links</h4>
              <div className="space-y-4">
                <a href="#home" className="block text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 text-lg">
                  Home
                </a>
                <a href="#events" className="block text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 text-lg">
                  Events
                </a>
                <a href="#leadership" className="block text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 text-lg">
                  Leadership
                </a>
                <a href="#sponsors" className="block text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 text-lg">
                  Sponsors
                </a>
                <a href="#contact" className="block text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 text-lg">
                  Contact
                </a>
              </div>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-2xl font-heading font-bold mb-8 text-white">Contact Us</h4>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-tsa-navy rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href={`mailto:${chapterInfo.contact.advisorEmail}`} className="text-gray-300 hover:text-white transition-colors text-lg">
                    {chapterInfo.contact.advisorEmail}
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-tsa-navy rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-lg">Room {chapterInfo.meetingInfo.room}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-tsa-navy rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <a href={chapterInfo.contact.socialMedia} className="text-gray-300 hover:text-white transition-colors text-lg" target="_blank" rel="noopener noreferrer">
                    @cata_tsa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-gray-400 text-lg">
              © 2024 {chapterInfo.schoolName} TSA Chapter. All rights reserved.
            </div>
            <div className="flex items-center space-x-8">
              <a 
                href="https://tsaweb.org" 
                className="text-gray-400 hover:text-white transition-colors text-lg font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Official TSA Website
              </a>
              <button 
                className="text-gray-400 hover:text-white transition-colors text-lg font-medium"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;