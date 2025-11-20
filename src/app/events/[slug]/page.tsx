'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { specialEvents } from '@/data/tsaData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function EventPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  
  const event = specialEvents.find(e => e.slug === slug);

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
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 flex items-center justify-center pt-24">
          <div className="text-center animate-fade-in">
            <div className="mb-6">
              <svg className="w-24 h-24 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-4 font-['Poppins']">Event Not Found</h1>
            <p className="text-gray-600 text-lg mb-8">The event you&apos;re looking for doesn&apos;t exist.</p>
            <button 
              onClick={() => router.push('/')}
              className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform duration-200"
            >
              Go Home
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
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 flex items-center justify-center pt-24">
          <div className="text-center">
            <div className="loading-spinner w-16 h-16 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg font-medium">Loading event...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleViewPictures = () => {
    router.push('/');
    setTimeout(() => {
      const galleryElement = document.getElementById('gallery');
      if (galleryElement) {
        galleryElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="App">
      <Navigation />
      <main>
        {/* Hero Section with Gradient Background */}
        <section className="relative min-h-[60vh] bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 pt-24 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="container-max relative z-10 py-20">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <button
                onClick={() => router.push('/tsa-events')}
                className="mb-8 text-white/90 hover:text-white font-semibold flex items-center gap-2 transition-all duration-200 hover:translate-x-[-4px] group"
              >
                <svg className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to TSA Conferences
              </button>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-['Poppins'] leading-tight animate-delay-100">
                {event.name}
              </h1>
              
              <div className="flex items-center justify-center gap-4 text-white/90 mb-8 animate-delay-200">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-lg font-semibold font-['Inter']">{event.date}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 -mt-20">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <div className="card shadow-2xl animate-scale-in">
                {/* Coming Soon Banner */}
                {event.comingSoon && (
                  <div className="mb-10 animate-fade-in">
                    <div className="relative bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-700 text-white rounded-2xl p-8 md:p-10 text-center overflow-hidden shadow-2xl">
                      <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
                        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
                        <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                      </div>
                      <div className="relative z-10">
                        <div className="mb-4">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3 font-['Poppins']">Event Coming Soon</h2>
                        <p className="text-lg md:text-xl opacity-95 font-['Inter']">{event.description}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Description Section */}
                <div className="mb-10 animate-fade-in animate-delay-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-['Poppins']">About This Event</h2>
                  </div>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-['Inter'] mb-8">
                    {event.description}
                  </p>
                </div>

                {/* View Pictures Button */}
                <div className="border-t-2 border-gray-200 pt-10 animate-fade-in animate-delay-300">
                  <div className="text-center">
                    <button
                      onClick={handleViewPictures}
                      className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-tsa-navy to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        View Pictures
                        <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </button>
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
