import React, { useState } from 'react';
import { GraduationCap, Calendar, Award, ExternalLink, BookOpen, School, BadgeCheck, Star } from 'lucide-react';

const Education = ({ data }) => {
  const educationData = data?.education || [];
  const [expandedIndex, setExpandedIndex] = useState(null);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long'
    });
  };

  const getGPAColor = (gpa) => {
    if (!gpa) return 'text-gray-400';
    const numericGPA = parseFloat(gpa);
    if (numericGPA >= 3.5) return 'text-green-400';
    if (numericGPA >= 3.0) return 'text-yellow-400';
    return 'text-orange-400';
  };

  const toggleExpansion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="education" className="min-h-screen bg-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My academic journey and continuous learning path that shaped my expertise
          </p>
        </div>

        {educationData.length > 0 ? (
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className="bg-gray-900 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Left Column - Institution & Degree */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start mb-6">
                      <div className="bg-blue-600 p-3 rounded-lg mr-4 flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                          {edu.degree || 'Degree Program'}
                        </h3>
                        <div className="flex items-center text-blue-400 font-medium mb-2">
                          <School className="w-4 h-4 mr-2" />
                          <span>{edu.institution || 'Institution Name'}</span>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <div className="flex items-center text-gray-300">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>Graduated {formatDate(edu.graduationDate)}</span>
                          </div>
                          
                          {edu.gpa && (
                            <div className="flex items-center">
                              <Star className="w-4 h-4 mr-2 text-yellow-400" />
                              <span className="text-gray-300 mr-1">GPA:</span>
                              <span className={`font-semibold ${getGPAColor(edu.gpa)}`}>
                                {edu.gpa}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Quick Stats */}
                  <div className="lg:col-span-1">
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="text-center mb-4">
                        <div className="text-2xl font-bold text-blue-400">
                          {edu.certifications?.length || 0}
                        </div>
                        <div className="text-gray-400 text-sm">Certifications</div>
                      </div>
                      
                      {edu.certifications && edu.certifications.length > 0 && (
                        <button
                          onClick={() => toggleExpansion(index)}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-lg transition-colors duration-200"
                        >
                          {expandedIndex === index ? 'Hide Details' : 'View Details'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Certifications Section */}
                {edu.certifications && edu.certifications.length > 0 && (
                  <div className={`transition-all duration-300 overflow-hidden ${
                    expandedIndex === index ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-gray-700 pt-6">
                      <div className="flex items-center mb-4">
                        <BadgeCheck className="w-5 h-5 text-purple-400 mr-2" />
                        <h4 className="text-lg font-semibold text-white">Certifications</h4>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        {edu.certifications.map((cert, certIndex) => (
                          <div 
                            key={certIndex}
                            className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors duration-200"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h5 className="font-medium text-white mb-1">
                                  {cert.name || 'Certification Name'}
                                </h5>
                                <p className="text-purple-400 text-sm mb-2">
                                  {cert.provider || 'Provider'}
                                </p>
                                <div className="flex items-center text-gray-400 text-xs">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  <span>{formatDate(cert.date)}</span>
                                </div>
                              </div>
                              
                              {cert.url && (
                                <a
                                  href={cert.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-400 hover:text-white transition-colors p-1 ml-2"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Education Summary Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gray-900 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {educationData.length}
                </div>
                <div className="text-gray-400 text-sm">Degrees</div>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {educationData.reduce((total, edu) => total + (edu.certifications?.length || 0), 0)}
                </div>
                <div className="text-gray-400 text-sm">Certifications</div>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {educationData.filter(edu => edu.gpa && parseFloat(edu.gpa) >= 3.5).length}
                </div>
                <div className="text-gray-400 text-sm">High GPA</div>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {educationData.filter(edu => 
                    edu.certifications?.some(cert => cert.url)
                  ).length}
                </div>
                <div className="text-gray-400 text-sm">Verified</div>
              </div>
            </div>
          </div>
        ) : (
          /* Placeholder Content */
          <div className="text-center py-16">
            <div className="bg-gray-900 rounded-xl shadow-xl p-12 max-w-2xl mx-auto">
              <div className="bg-gray-800 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <GraduationCap className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Education Details Coming Soon
              </h3>
              <p className="text-gray-400 mb-8">
                Add your educational background, degrees, and certifications to the portfolio.json file to showcase your academic achievements.
              </p>
              
              {/* Sample Education Card */}
              <div className="bg-gray-800 rounded-lg p-6 text-left opacity-50 mb-8">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-600 p-2 rounded-lg mr-3">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-gray-300 mb-1">
                      Bachelor of Computer Science
                    </h4>
                    <p className="text-blue-400 text-sm mb-2">University Name</p>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>Graduated May 2023</span>
                      <Star className="w-3 h-3 ml-3 mr-1 text-yellow-400" />
                      <span>GPA: 3.8</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex items-center mb-2">
                    <BadgeCheck className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-gray-300 text-sm font-medium">Sample Certification</span>
                  </div>
                  <p className="text-gray-400 text-xs">Provider Name • January 2023</p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4 text-gray-500">
                <BookOpen className="w-5 h-5" />
                <span className="text-sm">Ready to showcase your academic journey</span>
                <BookOpen className="w-5 h-5" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;