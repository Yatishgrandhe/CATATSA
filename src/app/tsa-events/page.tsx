'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { specialEvents } from '@/data/tsaData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TSAConferencesPage() {
  const router = useRouter();

  const handleEventClick = (slug: string) => {
    router.push(`/events/${slug}`);
  };

  return (
    <div className="App">
      <Navigation />
      <main>
        <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 pt-24">
          <div className="container-max">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-gradient mb-8">
                TSA Conferences
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Join us for exciting TSA chapter conferences, trips, and special events
              </p>
            </div>

            {specialEvents.length === 0 ? (
              <div className="card text-center p-12">
                <p className="text-gray-600 text-lg">No conferences scheduled at this time. Check back soon!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {specialEvents.map((event) => (
                  <div 
                    key={event.slug}
                    onClick={() => handleEventClick(event.slug)}
                    className="card-compact group opera-optimize cursor-pointer hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                      <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-900 flex-1 group-hover:text-tsa-navy transition-colors duration-200 pr-2">
                        {event.name}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm sm:text-base font-semibold">{event.date}</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    
                    {event.comingSoon && (
                      <div className="mb-4 sm:mb-6">
                        <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-800 text-xs sm:text-sm font-semibold rounded-full border border-orange-200">
                          Event Coming Soon
                        </span>
                      </div>
                    )}
                    
                    <div className="mt-4 text-tsa-navy font-semibold text-sm sm:text-base group-hover:underline flex items-center gap-2">
                      Learn More
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

