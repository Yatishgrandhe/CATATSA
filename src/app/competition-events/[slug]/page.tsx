'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { events } from '@/data/tsaData';
import { slugify } from '@/lib/utils';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CompetitionEventPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  
  // Find the event by matching the slug
  const event = events.find(e => slugify(e.name) === slug);

  useEffect(() => {
    setMounted(true);
    // Simulate loading for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [slug]);

  if (!event) {
    return (
      <div className="App">
        <Navigation />
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-blue-50 flex items-center justify-center pt-24">
          <div className="text-center animate-fade-in">
            <div className="mb-6">
              <svg className="w-24 h-24 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-4 font-['Poppins']">Event Not Found</h1>
            <p className="text-gray-600 text-lg mb-8">The event you&apos;re looking for doesn&apos;t exist.</p>
            <button 
              onClick={() => router.push('/#events')}
              className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform duration-200"
            >
              Back to Events
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isLoading || !mounted) {
    return (
      <div className="App">
        <Navigation />
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-blue-50 flex items-center justify-center pt-24">
          <div className="text-center">
            <div className="loading-spinner w-16 h-16 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg font-medium">Loading event...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="App">
      <Navigation />
      <main>
        {/* Content Section */}
        <section className="section-padding bg-white pt-24">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <button
                  onClick={() => router.push('/#events')}
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 transition-all duration-200 hover:translate-x-[-4px] group mb-6"
                >
                  <svg className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Competition Events
                </button>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 font-['Poppins'] leading-tight">
                  {event.name}
                </h1>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full border border-blue-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  {event.category}
                </div>
              </div>
              <div className="card shadow-2xl animate-scale-in">
                {/* Description Section */}
                <div className="mb-10 animate-fade-in animate-delay-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full"></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-['Poppins']">About This Event</h2>
                  </div>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-['Inter'] mb-8">
                    {event.description}
                  </p>
                  
                  {/* Sponsor Appeal Card */}
                  <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 md:p-8 border border-blue-100 shadow-lg overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-tsa-navy font-['Poppins']">Sponsor Appeal</h3>
                      </div>
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed italic font-['Inter']">
                        {event.sponsorAppeal}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pictures Coming Soon Section */}
                <div className="border-t-2 border-gray-200 pt-10 animate-fade-in animate-delay-300">
                  <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white rounded-2xl p-8 md:p-12 text-center overflow-hidden shadow-2xl">
                    {/* Animated Background */}
                    <div className="absolute inset-0">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
                      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
                      <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>

                    <div className="relative z-10">
                      <div className="mb-6">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Poppins']">Pictures Coming Soon</h2>
                      <p className="text-lg md:text-xl opacity-95 font-['Inter'] max-w-2xl mx-auto">
                        We&apos;re working on adding photos from this competition event. Check back soon!
                      </p>
                      <div className="mt-8 flex justify-center">
                        <div className="flex gap-2">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
