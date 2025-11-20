<<<<<<< HEAD
'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhyJoinSection from '@/components/WhyJoinSection';
import EventsSection from '@/components/EventsSection';
import PhotoGallery from '@/components/PhotoGallery';
import LeadershipSection from '@/components/LeadershipSection';
import SponsorsSection from '@/components/SponsorsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SponsorForm from '@/components/SponsorForm';
import AdminPanel from '@/components/AdminPanel';
import { useOperaOptimization } from '@/hooks/useOperaOptimization';

export default function Home() {
  const [isSponsorFormOpen, setIsSponsorFormOpen] = useState(false);
  const [isAdminPage, setIsAdminPage] = useState(false);
  
  // Apply Opera optimizations
  useOperaOptimization();

  useEffect(() => {
    // Check if we're on the admin page
    const checkAdminPage = () => {
      const admin = window.location.pathname === '/admin' || window.location.search.includes('admin=true');
      setIsAdminPage(admin);
    };

    checkAdminPage();
    
    // Listen for URL changes
    window.addEventListener('popstate', checkAdminPage);
    return () => window.removeEventListener('popstate', checkAdminPage);
  }, []);

  const openSponsorForm = () => {
    setIsSponsorFormOpen(true);
  };

  const closeSponsorForm = () => {
    setIsSponsorFormOpen(false);
  };

  // Add event listener for sponsor form buttons
  useEffect(() => {
    const handleSponsorClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const button = target.closest('button');
      
      // Check if the clicked element or its parent is a "Sponsor Us" button
      if (button && button.textContent?.includes('Sponsor Us')) {
        e.preventDefault();
        e.stopPropagation();
        openSponsorForm();
      }
    };

    document.addEventListener('click', handleSponsorClick, true);
    return () => document.removeEventListener('click', handleSponsorClick, true);
  }, []);

  if (isAdminPage) {
    return <AdminPanel />;
  }

  return (
    <div className="App">
      <Navigation />
      <main>
        <HeroSection />
        <WhyJoinSection />
        <EventsSection />
        <PhotoGallery />
        <LeadershipSection />
        <SponsorsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
      <SponsorForm isOpen={isSponsorFormOpen} onClose={closeSponsorForm} />
    </div>
  );
}
=======
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            CATA TSA
          </h1>
          <p className="text-xl text-gray-600">
            Technology Student Association
          </p>
        </header>
        
        <main className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Welcome to CATA TSA
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              The Technology Student Association (TSA) is a national organization of students 
              engaged in science, technology, engineering, and mathematics (STEM). Our chapter 
              at CATA is dedicated to fostering innovation, leadership, and technical skills 
              among our members.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To prepare students for careers in technology by providing opportunities 
                for leadership, teamwork, and technical skill development through 
                competitive events and community service.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Get Involved
              </h3>
              <p className="text-gray-600">
                Join our chapter to participate in exciting competitions, develop 
                technical skills, and connect with like-minded students passionate 
                about technology and innovation.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
>>>>>>> 8d5a374 (Initial commit: CATA TSA Next.js project)
