'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { events } from '@/data/tsaData';
import { slugify } from '@/lib/utils';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CompetitionEventPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  
  // Find the event by matching the slug
  const event = events.find(e => slugify(e.name) === slug);

  if (!event) {
    return (
      <div className="App">
        <Navigation />
        <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center pt-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Event Not Found</h1>
            <button 
              onClick={() => router.push('/#events')}
              className="btn-primary"
            >
              Back to Events
            </button>
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
        <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 pt-24">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <button
                onClick={() => router.push('/#events')}
                className="mb-8 text-tsa-navy hover:text-blue-700 font-semibold flex items-center gap-2 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Competition Events
              </button>

              <div className="card">
                <div className="text-center mb-8">
                  <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-6">
                    {event.name}
                  </h1>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 text-sm font-semibold rounded-full border border-blue-200 mb-6">
                    {event.category}
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-heading font-bold text-gray-800 mb-4">Description</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {event.description}
                  </p>
                  
                  <div className="bg-blue-50 rounded-lg p-4 sm:p-6">
                    <p className="text-sm sm:text-base font-semibold text-tsa-navy mb-2">
                      Sponsor Appeal:
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed">
                      {event.sponsorAppeal}
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg p-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Pictures Coming Soon</h2>
                    <p className="text-lg md:text-xl opacity-90">
                      We&apos;re working on adding photos from this competition event. Check back soon!
                    </p>
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

