import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { ThemeToggle } from './ThemeToggle';

interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  techStack?: string[];
}

const projects: Project[] = [
  {
    id: 'better-wellness',
    title: 'Better Wellness',
    description: 'A full-stack wellness web app built with JavaScript, HTML/CSS, and shell scripts — designed to promote healthy habits through a client-server model.',
    githubUrl: 'https://github.com/ananyashreesharma/betterwell',
    techStack: ['JavaScript', 'HTML/CSS', 'Shell Scripts', 'Client-Server Architecture']
  },
  {
    id: 'disease-assembler',
    title: 'Disease Assembler',
    description: 'A multi-process C project simulating disease data aggregation using parent-worker architecture and Red-Black Trees for efficient patient record management.',
    githubUrl: 'https://github.com/ananyashreesharma/DiseaseAssembler',
    techStack: ['C', 'Multi-process Architecture', 'Red-Black Trees', 'Data Structures']
  },
  {
    id: 'medy-needs',
    title: 'Medy-Needs',
    description: 'A database-backed system designed for managing medical inventory and prescriptions, featuring ER diagrams, relational schema in BCNF, and SQL scripts for DDL and data insertion.',
    githubUrl: 'https://github.com/ananyashreesharma/MedyNeeds',
    techStack: ['SQL', 'Database Design', 'ER Diagrams', 'BCNF Schema']
  },
  {
    id: 'social-network-analysis',
    title: 'Social Network Analysis',
    description: 'Visualizes and analyzes character interactions in the Sanskrit epic Ramayana using R, applying network theory to explore structural dynamics and relationships within the epic\'s social graph.',
    githubUrl: 'https://github.com/ananyashreesharma/Social_Network_Analysis',
    techStack: ['R', 'Network Analysis', 'Data Visualization', 'Social Network Theory']
  },
  {
    id: 'kommunity',
    title: 'Kommunity',
    description: 'A PHP-based social networking platform featuring user authentication, real-time chat, profile management, and dynamic post viewing — backed by a structured MVC-like architecture with modular components and MySQL integration.',
    githubUrl: 'https://github.com/ananyashreesharma/DA_Community',
    techStack: ['PHP', 'MySQL', 'MVC Architecture', 'Real-time Chat', 'User Authentication']
  }
];

const Projects = () => {
  const { isDayMode, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen theme-transition">
      <ThemeToggle isDayMode={isDayMode} onToggle={toggleTheme} />

      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <section className="minimal-section">
          <h1 className="signature-text mb-4">
            projects
          </h1>
          <p className="text-base opacity-90">
            Things I've built and learned from
          </p>
        </section>

        {/* Projects */}
        <section className="minimal-section">
          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project.id} className="minimal-project border-theme">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="minimal-project-title">
                    {project.title}
                  </h3>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="minimal-link text-sm"
                  >
                    GitHub
                  </a>
                </div>
                <p className="minimal-project-desc mb-4">
                  {project.description}
                </p>
                {project.techStack && (
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-1 border border-current/20 rounded opacity-70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Back to Portfolio */}
        <section className="minimal-section mt-16">
          <a 
            href="/" 
            className="minimal-link text-sm"
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
          >
            ← back to portfolio
          </a>
        </section>
      </div>
    </div>
  );
};

export default Projects; 