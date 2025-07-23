import React from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const Skills = ({ data }) => {
  const skills = data;
  
  // Placeholder skills for empty state
  const placeholderSkills = [
    { name: "JavaScript", badgeUrl: "", githubRepoUrl: "" },
    { name: "React", badgeUrl: "", githubRepoUrl: "" },
    { name: "Node.js", badgeUrl: "", githubRepoUrl: "" },
    { name: "Python", badgeUrl: "", githubRepoUrl: "" },
    { name: "CSS", badgeUrl: "", githubRepoUrl: "" },
    { name: "Git", badgeUrl: "", githubRepoUrl: "" }
  ];

  const displaySkills = skills.length > 0 ? skills : placeholderSkills;
  const isPlaceholder = skills.length === 0;

  return (
    <section id="skills" className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displaySkills.map((skill, index) => (
            <div 
              key={index}
              className={`bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group ${isPlaceholder ? 'opacity-60' : ''}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-blue-600 p-2 rounded-lg mr-3 group-hover:bg-blue-500 transition-colors duration-200">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold ${isPlaceholder ? 'text-gray-500 italic' : 'text-white'}`}>
                    {skill.name}
                  </h3>
                </div>
                
                {/* Links */}
                <div className="flex space-x-2">
                  {skill.githubRepoUrl && (
                    <a
                      href={skill.githubRepoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      title="View GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {skill.badgeUrl && (
                    <a
                      href={skill.badgeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      title="View Skill Badge"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Badge Display */}
              {skill.badgeUrl && !isPlaceholder ? (
                <div className="mb-4">
                  <img
                    src={skill.badgeUrl}
                    alt={`${skill.name} badge`}
                    className="h-8 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              ) : (
                <div className="mb-4">
                  <div className={`h-8 ${isPlaceholder ? 'bg-gray-700' : 'bg-gray-700'} rounded flex items-center justify-center`}>
                    <span className={`text-sm ${isPlaceholder ? 'text-gray-500' : 'text-gray-400'}`}>
                      {isPlaceholder ? 'Badge placeholder' : 'No badge available'}
                    </span>
                  </div>
                </div>
              )}

              {/* Skill Level Indicator (Visual)
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${isPlaceholder ? 'text-gray-500' : 'text-gray-400'}`}>
                    Proficiency
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${isPlaceholder ? 'bg-gray-600' : 'bg-blue-600'} transition-all duration-500`}
                    style={{ width: isPlaceholder ? '60%' : `${75 + (index % 3) * 8}%` }}
                  ></div>
                </div>
              </div> */}

              {/* Hover Effect */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className={`text-sm ${isPlaceholder ? 'text-gray-500' : 'text-gray-300'} border-t border-gray-700 pt-3`}>
                  {isPlaceholder ? 'Add your skills to showcase your expertise' : 'Click links above for more details'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Message */}
        {isPlaceholder && (
          <div className="text-center mt-12 p-8 bg-gray-800 rounded-xl">
            <Code2 className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              Add Your Skills
            </h3>
            <p className="text-gray-500">
              Update the skills array in your portfolio.json file to showcase your technical expertise
            </p>
          </div>
        )}

        {/* Skills Categories */}
        {!isPlaceholder && (
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Skill Categories</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Frontend', 'Backend', 'Tools', 'Other'].map((category, index) => (
                <div key={category} className="bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-blue-500 font-semibold mb-2">{category}</div>
                  <div className="text-gray-400 text-sm">
                    {Math.floor(displaySkills.length / 4)} skills
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;