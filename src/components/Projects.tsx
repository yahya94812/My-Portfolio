import React, { useState } from 'react';
import { ExternalLink, Github, Image as ImageIcon, Code, Eye, Star } from 'lucide-react';

const Projects = ({ data }) => {
  const projects = data?.projects?.filter(project => project.title?.trim()) || [];
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Placeholder projects for empty state
  const placeholderProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI and secure payment processing",
      techStack: ["React", "Node.js", "MongoDB"],
      demoUrl: "",
      repoUrl: "",
      screenshotUrl: ""
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features",
      techStack: ["Vue.js", "Express", "PostgreSQL"],
      demoUrl: "",
      repoUrl: "",
      screenshotUrl: ""
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts and data visualization",
      techStack: ["JavaScript", "API Integration", "Charts.js"],
      demoUrl: "",
      repoUrl: "",
      screenshotUrl: ""
    }
  ];

  const displayProjects = projects.length > 0 ? projects : placeholderProjects;
  const isPlaceholder = projects.length === 0;

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="min-h-screen bg-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <div 
              key={index}
              className={`bg-gray-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group ${isPlaceholder ? 'opacity-70' : ''}`}
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gray-700 flex items-center justify-center overflow-hidden">
                {project.screenshotUrl && !isPlaceholder ? (
                  <img
                    src={project.screenshotUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.parentElement.innerHTML = `
                        <div class="flex items-center justify-center w-full h-full">
                          <svg class="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                          </svg>
                        </div>
                      `;
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-center">
                    <ImageIcon className={`w-12 h-12 ${isPlaceholder ? 'text-gray-600' : 'text-gray-500'}`} />
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${isPlaceholder ? 'text-gray-500 italic' : 'text-white'}`}>
                  {project.title}
                </h3>
                
                <p className={`mb-4 line-clamp-3 ${isPlaceholder ? 'text-gray-500' : 'text-gray-300'}`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          isPlaceholder 
                            ? 'bg-gray-700 text-gray-500' 
                            : 'bg-blue-600 text-white'
                        }`}
                      >
                        {tech}
                      </span>
                    )) || []}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    {project.demoUrl && !isPlaceholder && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400 transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.repoUrl && !isPlaceholder && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                        title="View Source Code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {isPlaceholder && (
                      <div className="flex space-x-3">
                        <ExternalLink className="w-5 h-5 text-gray-600" />
                        <Github className="w-5 h-5 text-gray-600" />
                      </div>
                    )}
                  </div>
                  
                  <button className={`flex items-center space-x-1 ${isPlaceholder ? 'text-gray-600' : 'text-gray-400 hover:text-white'} transition-colors duration-200`}>
                    <Star className="w-4 h-4" />
                    <span className="text-sm">Featured</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Message */}
        {isPlaceholder && (
          <div className="text-center mt-12 p-8 bg-gray-900 rounded-xl">
            <Code className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              Showcase Your Projects
            </h3>
            <p className="text-gray-500">
              Add your projects to the portfolio.json file to display your amazing work
            </p>
          </div>
        )}

        {/* Project Stats */}
        {!isPlaceholder && (
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">{displayProjects.length}</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">
                {displayProjects.reduce((acc, p) => acc + (p.techStack?.length || 0), 0)}
              </div>
              <div className="text-gray-400 text-sm">Technologies Used</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">
                {displayProjects.filter(p => p.demoUrl).length}
              </div>
              <div className="text-gray-400 text-sm">Live Demos</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">
                {displayProjects.filter(p => p.repoUrl).length}
              </div>
              <div className="text-gray-400 text-sm">Open Source</div>
            </div>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300">{selectedProject.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack?.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {selectedProject.repoUrl && (
                    <a
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;