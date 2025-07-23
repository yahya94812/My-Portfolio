import React from 'react';
import { User } from 'lucide-react';

const Hero = ({ data }) => {
  const heroData = data;
  
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Picture */}
        <div className="mb-8">
          {heroData.headshotUrl ? (
            <img
              src={heroData.headshotUrl}
              alt={heroData.name || "Profile"}
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500 shadow-2xl"
            />
          ) : (
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-700 border-4 border-blue-500 shadow-2xl flex items-center justify-center">
              <User className="w-16 h-16 text-gray-400" />
            </div>
          )}
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          {heroData.name || (
            <span className="text-gray-400">Your Name</span>
          )}
        </h1>

        {/* Current Status */}
        <div className="mb-6">
          {heroData.currentStatus ? (
            <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-medium">
              {heroData.currentStatus}
            </span>
          ) : (
            <span className="inline-block bg-gray-700 text-gray-400 px-4 py-2 rounded-full text-lg font-medium">
              Current Status
            </span>
          )}
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          {heroData.tagline || (
            <span className="text-gray-500 italic">Add your professional tagline here</span>
          )}
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            className="w-6 h-6 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;