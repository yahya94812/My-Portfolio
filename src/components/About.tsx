import React from "react";
import { Heart, Code, Lightbulb } from "lucide-react";

const About = ({ data }) => {
  const aboutData = data?.about || {};
  const passions =
    aboutData.passions?.filter((passion) => passion.trim()) || [];

  return (
    <section id="about" className="min-h-screen bg-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="bg-gray-900 p-8 rounded-xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  My Journey
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Welcome to my portfolio! I'm passionate about creating
                innovative solutions and bringing ideas to life through code. My
                journey in technology has been driven by curiosity and a
                constant desire to learn and grow.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-purple-600 p-3 rounded-lg mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  What Drives Me
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I believe in the power of technology to solve real-world
                problems and make a positive impact. Every project is an
                opportunity to learn something new and push the boundaries of
                what's possible.
              </p>
            </div>
          </div>

          {/* Right Column - Passions */}
          <div className="space-y-6">
            <div className="bg-gray-900 p-8 rounded-xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-red-600 p-3 rounded-lg mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  My Passions
                </h3>
              </div>

              {passions.length > 0 ? (
                <div className="space-y-3">
                  {passions.map((passion, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-300">{passion}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {[
                    "Web Development",
                    "Problem Solving",
                    "Continuous Learning",
                    "Innovation",
                  ].map((placeholder, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-gray-800 rounded-lg opacity-50"
                    >
                      <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                      <span className="text-gray-500 italic">
                        {placeholder}
                      </span>
                    </div>
                  ))}
                  <p className="text-sm text-gray-500 italic mt-4">
                    Add your passions to the portfolio.json file
                  </p>
                </div>
              )}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900 p-6 rounded-xl text-center shadow-xl">
                <div className="text-3xl font-bold text-blue-500 mb-2">∞</div>
                <div className="text-gray-400 text-sm">Learning Mode</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl text-center shadow-xl">
                <div className="text-3xl font-bold text-green-500 mb-2">
                  24/7
                </div>
                <div className="text-gray-400 text-sm">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
