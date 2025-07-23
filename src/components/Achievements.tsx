import React, { useState } from 'react';
import { Award, Trophy, Calendar, ExternalLink, Medal, Star, Target, Zap } from 'lucide-react';

const Achievements = ({ data }) => {
  const achievementsData = data?.achievements || [];
  const [selectedCategory, setSelectedCategory] = useState('all');

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long',
      day: 'numeric'
    });
  };

  // Get year from date for grouping
  const getYear = (dateString) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).getFullYear();
  };

  // Group achievements by year
  const groupedAchievements = achievementsData.reduce((groups, achievement) => {
    const year = getYear(achievement.date);
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(achievement);
    return groups;
  }, {});

  // Sort years in descending order
  const sortedYears = Object.keys(groupedAchievements).sort((a, b) => {
    if (a === 'Unknown') return 1;
    if (b === 'Unknown') return -1;
    return parseInt(b) - parseInt(a);
  });

  const categories = ['all', 'awards', 'certifications', 'competitions', 'recognition'];

  const getAchievementIcon = (title, index) => {
    const lowerTitle = title?.toLowerCase() || '';
    if (lowerTitle.includes('award') || lowerTitle.includes('winner')) {
      return <Trophy className="w-6 h-6 text-yellow-400" />;
    } else if (lowerTitle.includes('certification') || lowerTitle.includes('certified')) {
      return <Medal className="w-6 h-6 text-blue-400" />;
    } else if (lowerTitle.includes('competition') || lowerTitle.includes('contest')) {
      return <Target className="w-6 h-6 text-green-400" />;
    } else if (lowerTitle.includes('recognition') || lowerTitle.includes('honor')) {
      return <Star className="w-6 h-6 text-purple-400" />;
    } else {
      const colors = ['text-yellow-400', 'text-blue-400', 'text-green-400', 'text-purple-400', 'text-red-400'];
      return <Award className={`w-6 h-6 ${colors[index % colors.length]}`} />;
    }
  };

  const getCardGradient = (index) => {
    const gradients = [
      'from-yellow-500/10 to-orange-500/10 border-yellow-500/20',
      'from-blue-500/10 to-purple-500/10 border-blue-500/20',
      'from-green-500/10 to-teal-500/10 border-green-500/20',
      'from-purple-500/10 to-pink-500/10 border-purple-500/20',
      'from-red-500/10 to-rose-500/10 border-red-500/20'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="achievements" className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Celebrating milestones, recognitions, and accomplishments throughout my journey
          </p>
        </div>

        {achievementsData.length > 0 ? (
          <>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Achievements Timeline */}
            <div className="space-y-12">
              {sortedYears.map((year) => (
                <div key={year} className="relative">
                  {/* Year Header */}
                  <div className="flex items-center mb-8">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-bold text-lg">
                      {year}
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-blue-600 to-transparent ml-4"></div>
                  </div>

                  {/* Achievement Cards */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ml-4">
                    {groupedAchievements[year].map((achievement, index) => (
                      <div
                        key={index}
                        className={`bg-gradient-to-br ${getCardGradient(index)} bg-gray-800 border rounded-xl p-6 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="bg-gray-900 p-3 rounded-lg">
                            {getAchievementIcon(achievement.title, index)}
                          </div>
                          {achievement.url && (
                            <a
                              href={achievement.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-white transition-colors p-1"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          )}
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-3 leading-tight">
                          {achievement.title || 'Achievement Title'}
                        </h3>

                        {achievement.description && (
                          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                            {achievement.description}
                          </p>
                        )}

                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{formatDate(achievement.date)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Achievement Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {achievementsData.length}
                </div>
                <div className="text-gray-400 text-sm">Total Achievements</div>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {sortedYears.length}
                </div>
                <div className="text-gray-400 text-sm">Years Active</div>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {achievementsData.filter(a => a.url).length}
                </div>
                <div className="text-gray-400 text-sm">Verified</div>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {new Date().getFullYear() - Math.min(...achievementsData.map(a => getYear(a.date)).filter(y => y !== 'Unknown'))}+
                </div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>
          </>
        ) : (
          /* Placeholder Content */
          <div className="text-center py-16">
            <div className="bg-gray-800 rounded-xl shadow-xl p-12 max-w-2xl mx-auto">
              <div className="bg-gray-700 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Trophy className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Achievements Coming Soon
              </h3>
              <p className="text-gray-400 mb-8">
                Add your achievements, awards, and recognitions to the portfolio.json file to showcase your accomplishments.
              </p>
              
              {/* Sample Achievement Cards */}
              <div className="grid md:grid-cols-2 gap-4 mb-8 opacity-50">
                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-4 text-left">
                  <div className="flex items-center mb-3">
                    <Trophy className="w-5 h-5 text-yellow-400 mr-2" />
                    <h4 className="text-gray-300 font-medium">Best Project Award</h4>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">
                    Recognized for outstanding innovation
                  </p>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>January 2024</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4 text-left">
                  <div className="flex items-center mb-3">
                    <Medal className="w-5 h-5 text-blue-400 mr-2" />
                    <h4 className="text-gray-300 font-medium">Tech Certification</h4>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">
                    Certified in advanced technologies
                  </p>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>March 2024</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4 text-gray-500">
                <Zap className="w-5 h-5" />
                <span className="text-sm">Ready to showcase your success story</span>
                <Zap className="w-5 h-5" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;