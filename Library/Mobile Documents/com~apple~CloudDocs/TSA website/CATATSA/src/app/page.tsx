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
