import React from 'react';

const AboutSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-950 via-black to-emerald-950 py-20">
      <div className="container mx-auto px-4">
        {/* Text Content */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-5xl font-bold text-white">
          Design Harmony for Enterprise
          </h2>
          <p className="text-lg text-gray-300">
          Design Harmony for Enterprise helps teams securely manage and
            organize async video communication at scale
          </p>
          <button className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 
            text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
            <span>Learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Image Stack */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative perspective-1000">
            {/* Stacked Cards Effect */}
            <div className="relative transform translate-z-0 flex justify-center">
              {/* Main Card */}
              <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl 
                transform translate-y-0 z-30 bg-white">
                <img 
                  src="https://www.loom.com/_next/image?url=https%3A%2F%2Fcdn.loom.com%2Fassets%2Fmarketing%2Fhome%2Fenterprise.webp&w=2048&q=75"
                  alt="Enterprise Dashboard"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>

              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-transparent to-green-500 
                opacity-30 blur-3xl -z-10 transform scale-110"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
    </section>
  );
};

export default AboutSection;