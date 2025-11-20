import React from 'react';
import { chapterInfo } from '../data/tsaData';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-gradient mb-8">
            Get Involved
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to join? We welcome all students with an interest in technology!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {/* Meeting Information - Mobile Optimized */}
          <div className="card opera-optimize">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6 sm:mb-8">
              Meeting Information
            </h3>
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-tsa-navy to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base sm:text-lg">Meeting Day</p>
                  <p className="text-gray-600 text-base sm:text-lg">{chapterInfo.meetingInfo.day}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-tsa-navy to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base sm:text-lg">Meeting Time</p>
                  <p className="text-gray-600 text-base sm:text-lg">{chapterInfo.meetingInfo.time}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-tsa-navy to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base sm:text-lg">Location</p>
                  <p className="text-gray-600 text-base sm:text-lg">{chapterInfo.meetingInfo.room}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information - Mobile Optimized */}
          <div className="card opera-optimize">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6 sm:mb-8">
              Contact Information
            </h3>
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-2 sm:mb-3">Faculty Advisor</h4>
                <p className="text-gray-600 text-base sm:text-lg mb-2">{chapterInfo.contact.advisorName}</p>
                <a 
                  href={`mailto:${chapterInfo.contact.advisorEmail}`}
                  className="text-tsa-navy hover:text-blue-700 font-semibold text-base sm:text-lg transition-colors duration-200 break-all"
                >
                  {chapterInfo.contact.advisorEmail}
                </a>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-2 sm:mb-3">Chapter President</h4>
                <a 
                  href={`mailto:${chapterInfo.contact.presidentEmail}`}
                  className="text-tsa-navy hover:text-blue-700 font-semibold text-base sm:text-lg transition-colors duration-200 break-all"
                >
                  {chapterInfo.contact.presidentEmail}
                </a>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-2 sm:mb-3">Follow Our Journey</h4>
                <a 
                  href={chapterInfo.contact.socialMedia}
                  className="flex items-center space-x-3 text-tsa-navy hover:text-blue-700 font-semibold text-base sm:text-lg transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>@cata_tsa</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action - Mobile Optimized */}
        <div className="text-center">
          <div className="gradient-bg rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 xl:p-16 shadow-2xl opera-optimize">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-6 sm:mb-8">
              Ready to Join TSA?
            </h3>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-blue-100 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
              Take the first step towards becoming part of the next generation of technology leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button className="btn-secondary text-base sm:text-lg touch-manipulation">
                Sponsor Us
              </button>
              <button className="btn-outline text-base sm:text-lg touch-manipulation">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;