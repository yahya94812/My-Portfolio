import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = ({ data }) => {
  const experienceData = data?.experience || [];
  
  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  const calculateDuration = (startDate, endDate) => {
    if (!startDate) return '';
    
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    
    const diffTime = Math.abs(end - start);
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;
    
    if (years > 0 && months > 0) {
      return `${years}y ${months}m`;
    } else if (years > 0) {
      return `${years}y`;
    } else {
      return `${months}m`;
    }
  };

  return (
    <section id="experience" className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {experienceData.length > 0 ? (
          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-xl shadow-xl p-8 hover:bg-gray-750 transition-colors duration-200"
              >
                <div className="grid md:grid-cols-4 gap-6">
                  {/* Left Column - Company & Role */}
                  <div className="md:col-span-2">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 p-3 rounded-lg mr-4">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {exp.role || 'Role Title'}
                        </h3>
                        <p className="text-blue-400 font-medium">
                          {exp.company || 'Company Name'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Duration */}
                  <div className="md:col-span-2 md:text-right">
                    <div className="flex items-center md:justify-end mb-2">
                      <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-gray-300">
                        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                      </span>
                    </div>
                    <div className="text-gray-400 text-sm">
                      {calculateDuration(exp.startDate, exp.endDate)}
                    </div>
                  </div>
                </div>

                {/* Contributions */}
                {exp.contributions && exp.contributions.length > 0 && exp.contributions.some(contrib => contrib.trim()) && (
                  <div className="mt-6">
                    <h4 className="text-lg font-medium text-white mb-4">Key Contributions</h4>
                    <div className="space-y-3">
                      {exp.contributions
                        .filter(contrib => contrib.trim())
                        .map((contribution, contribIndex) => (
                        <div 
                          key={contribIndex}
                          className="flex items-start p-3 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                        >
                          <ChevronRight className="w-4 h-4 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 leading-relaxed">
                            {contribution}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Placeholder Content */
          <div className="text-center py-16">
            <div className="bg-gray-800 rounded-xl shadow-xl p-12 max-w-2xl mx-auto">
              <div className="bg-gray-700 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Briefcase className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Experience Coming Soon
              </h3>
              <p className="text-gray-400 mb-6">
                Add your professional experience to the portfolio.json file to showcase your career journey.
              </p>
              
              {/* Sample Experience Card */}
              <div className="bg-gray-900 rounded-lg p-6 text-left opacity-50">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-medium text-gray-300">Software Developer</h4>
                    <p className="text-blue-400">Tech Company</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">Jan 2023 - Present</p>
                    <p className="text-gray-500 text-xs">1y 6m</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                    <span className="text-gray-400 text-sm">
                      Developed and maintained web applications
                    </span>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                    <span className="text-gray-400 text-sm">
                      Collaborated with cross-functional teams
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Timeline Connector (if multiple experiences) */}
        {experienceData.length > 1 && (
          <div className="flex justify-center mt-12">
            <div className="text-center">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 mx-auto rounded-full"></div>
              <p className="text-gray-400 text-sm mt-2">Career Timeline</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;