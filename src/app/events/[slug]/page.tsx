'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { specialEvents } from '@/data/tsaData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function EventPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  
  const event = specialEvents.find(e => e.slug === slug);

  if (!event) {
    return (
      <div className="App">
        <Navigation />
        <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Event Not Found</h1>
            <button 
              onClick={() => router.push('/')}
              className="btn-primary"
            >
              Go Home
            </button>
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
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => router.push('/#events')}
              className="mb-8 text-tsa-navy hover:text-blue-700 font-semibold flex items-center gap-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Events
            </button>

            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  {event.name}
                </h1>
                <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-lg font-semibold">{event.date}</span>
                  </div>
                </div>
              </div>

              {event.comingSoon && (
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg p-6 mb-8 text-center">
                  <h2 className="text-3xl font-bold mb-2">Event Coming Soon</h2>
                  <p className="text-lg opacity-90">{event.description}</p>
                </div>
              )}

              <div className="text-center space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {event.description}
                </p>

                <div className="pt-8 border-t border-gray-200">
                  <button
                    onClick={handleViewPictures}
                    className="btn-primary text-lg px-8 py-4"
                  >
                    View Pictures
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

