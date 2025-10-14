'use client';

import { useState } from 'react';

const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Gallery items organized by actual content analysis
  const galleryItems = [
    // Team Spirit & Large Group Section
    {
      id: 1,
      title: "Full Team at Competition",
      description: "Our entire TSA chapter showing team spirit and excitement at the competition",
      category: "Team Spirit",
      image: "/images/image copy 12.png" // Large group shot - alternate hero banner
    },
    {
      id: 2,
      title: "Team Celebration",
      description: "Another great team moment capturing our chapter's unity and enthusiasm",
      category: "Team Spirit",
      image: "/images/image copy 13.png" // Large group shot - visual variety
    },
    {
      id: 3,
      title: "Event Recap - Who We Are",
      description: "A perfect representation of our chapter's identity and camaraderie",
      category: "Team Spirit",
      image: "/images/image copy 14.png" // Large group variation - event recap
    },
    {
      id: 4,
      title: "Team Bonding on Stairs",
      description: "Students bonding together in a unique setting, showing our close-knit community",
      category: "Team Bonding",
      image: "/images/image copy 2.png" // Spiral staircase - team bonding/travel
    },
    {
      id: 5,
      title: "Dynamic Team Photo",
      description: "Another dynamic shot on the spiral staircase, reinforcing our team unity",
      category: "Team Bonding",
      image: "/images/image copy.png" // Similar to copy 2 - team/travel theme
    },
    {
      id: 6,
      title: "Presentation Team",
      description: "A smaller group of students working together on their presentation",
      category: "Team Spirit",
      image: "/images/image copy 10.png" // Smaller group - presentation teams
    },
    
    // Competition & Judging Section
    {
      id: 7,
      title: "General Presentation",
      description: "Students presenting their project to judges, showing the competitive environment",
      category: "Competition",
      image: "/images/image copy 9.png" // General presentation shot
    },
    {
      id: 8,
      title: "Active Presenting",
      description: "A student actively engaging with the judge during their presentation",
      category: "Competition",
      image: "/images/image copy 8.png" // Dynamic presentation shot
    },
    {
      id: 9,
      title: "Confident Presentation",
      description: "Another moment of active presenting, showing student confidence and preparation",
      category: "Competition",
      image: "/images/image copy 7.png" // Active presenting moment
    },
    {
      id: 10,
      title: "Excellent Presentation Skills",
      description: "Clear body language and confident explanation during the judging process",
      category: "Competition",
      image: "/images/image copy 6.png" // Excellent presentation shot
    },
    
    // Advisors, Mentors, & Support Section
    {
      id: 11,
      title: "Advisor Recognition",
      description: "Our dedicated adult staff and judges who supported us throughout the event",
      category: "Support",
      image: "/images/image copy 4.png" // Advisor/chaperone recognition
    },
    {
      id: 12,
      title: "Mentor Group Photo",
      description: "The mentors and advisors who guided us to success",
      category: "Support",
      image: "/images/image copy 5.png" // Alternate group photo for advisors
    },
    
    // Social/Breaks Section
    {
      id: 13,
      title: "Social Time",
      description: "Students relaxing and enjoying meals together during downtime",
      category: "Social",
      image: "/images/image copy 3.png" // Social/downtime - dining area
    }
  ];

  const categories = ["All", "Team Spirit", "Team Bonding", "Competition", "Support", "Social"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-gradient mb-8">
            Chapter Gallery
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            See our students in action - from competitions to collaborative projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-tsa-navy text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="card-compact group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              {/* Image */}
              <div className="aspect-video rounded-xl mb-6 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to gradient background if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div 
                  className="w-full h-full bg-gradient-to-br from-tsa-navy to-blue-600 flex items-center justify-center text-white"
                  style={{ display: 'none' }}
                >
                  <div className="text-center spacing-y-sm">
                    <svg className="w-16 h-16 mx-auto opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-lg font-semibold">{item.title}</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-tsa-navy transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {item.description}
              </p>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                {item.category}
              </span>
            </div>
          ))}
        </div>

        {/* Modal for selected image */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="aspect-video overflow-hidden">
                  <img 
                    src={filteredItems[selectedImage]?.image} 
                    alt={filteredItems[selectedImage]?.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to gradient background if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full bg-gradient-to-br from-tsa-navy to-blue-600 flex items-center justify-center text-white"
                    style={{ display: 'none' }}
                  >
                    <div className="text-center spacing-y-sm">
                      <svg className="w-24 h-24 mx-auto opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-2xl font-bold">{filteredItems[selectedImage]?.title}</p>
                      <p className="text-lg opacity-75">{filteredItems[selectedImage]?.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                  {filteredItems[selectedImage]?.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {filteredItems[selectedImage]?.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
