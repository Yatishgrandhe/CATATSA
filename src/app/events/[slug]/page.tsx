'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { specialEvents } from '@/data/tsaData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function EventPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const event = specialEvents.find((e) => e.slug === slug);

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
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <button
                  onClick={() => router.push('/tsa-events')}
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 transition-all duration-200 hover:translate-x-[-4px] group mb-6"
                >
                  <svg className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to TSA Conferences
                </button>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 font-['Poppins'] leading-tight">
                  {event.name}
                </h1>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full border border-blue-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-lg font-semibold font-['Inter']">{event.date}</span>
                  </div>
                </div>
              </div>

              <div className="card shadow-2xl animate-scale-in p-8 md:p-12">
                {/* Coming Soon Banner */}
                {event.comingSoon && (
                  <div className="mb-10 animate-fade-in">
                    <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white rounded-2xl p-8 md:p-10 text-center overflow-hidden shadow-2xl">
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
                <div className="mb-12 animate-fade-in animate-delay-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full"></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-['Poppins']">About This Event</h2>
                  </div>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-['Inter'] mb-8">
                    {event.description}
                  </p>
                </div>

                {/* Image Gallery Section */}
                {event.images && event.images.length > 0 && (
                  <div className="border-t-2 border-gray-100 pt-12 animate-fade-in animate-delay-300">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full"></div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-['Poppins']">Conference Pictures</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                      {event.images.map((image: string, index: number) => (
                        <div
                          key={index}
                          className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gray-100"
                          onClick={() => setSelectedImage(image)}
                        >
                          <Image
                            src={image}
                            alt={`${event.name} picture ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <span className="text-white font-semibold flex items-center gap-2">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                              View Larger
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full max-w-5xl aspect-[4/3] rounded-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
              <Image
                src={selectedImage}
                alt="Selected conference picture"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
