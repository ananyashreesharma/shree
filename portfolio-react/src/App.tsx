import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';
import FeedbackForm from './components/FeedbackForm';
import BehindTheScenes from './components/BehindTheScenes';
import Projects from './components/Projects';

interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
}

interface CurrentProject {
  id: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 'better-wellness',
    title: 'Better Wellness',
    description: 'A full-stack wellness web app built with JavaScript, HTML/CSS, and shell scripts — designed to promote healthy habits through a client-server model.',
    githubUrl: 'https://github.com/ananyashreesharma/betterwell'
  },
  {
    id: 'disease-assembler',
    title: 'Disease Assembler',
    description: 'A multi-process C project simulating disease data aggregation using parent-worker architecture and Red-Black Trees for efficient patient record management.',
    githubUrl: 'https://github.com/ananyashreesharma/DiseaseAssembler'
  },
  {
    id: 'medy-needs',
    title: 'Medy-Needs',
    description: 'A database-backed system designed for managing medical inventory and prescriptions, featuring ER diagrams, relational schema in BCNF, and SQL scripts for DDL and data insertion.',
    githubUrl: 'https://github.com/ananyashreesharma/MedyNeeds'
  },
  {
    id: 'social-network-analysis',
    title: 'Social Network Analysis',
    description: 'Visualizes and analyzes character interactions in the Sanskrit epic Ramayana using R, applying network theory to explore structural dynamics and relationships within the epic\'s social graph.',
    githubUrl: 'https://github.com/ananyashreesharma/Social_Network_Analysis'
  },
  {
    id: 'kommunity',
    title: 'Kommunity',
    description: 'A PHP-based social networking platform featuring user authentication, real-time chat, profile management, and dynamic post viewing — backed by a structured MVC-like architecture with modular components and MySQL integration.',
    githubUrl: 'https://github.com/ananyashreesharma/DA_Community'
  }
];

const currentProjects: CurrentProject[] = [
  {
    id: 'work-platform',
    description: 'a work-focused web platform using Spring Boot and Thymeleaf — includes role-based access, clean dashboards, and secure workflows to streamline internal operations.'
  },
  {
    id: 'blogging-system',
    description: 'A lightweight blogging system using Node.js, React, MongoDB, and NATS. Being developed with a microservices architecture, containerized via Docker, orchestrated using Kubernetes, and deployed through GitHub Actions CI/CD.'
  }
];

function Portfolio() {
  const { isDayMode, toggleTheme } = useTheme();

  // Show only the first 2 projects as featured
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="min-h-screen theme-transition">
      <ThemeToggle isDayMode={isDayMode} onToggle={toggleTheme} />

      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <section className="minimal-section">
          <h1 className="signature-text mb-4">
            anannyashree sharma
          </h1>
          <p className="text-base opacity-90">
            IN
          </p>
        </section>

        {/* Introduction */}
        <section className="minimal-section">
          <p className="minimal-text">
            Software engineer who builds systems that scale and perform. I care about clean code, intuitive products, and making things that people actually use.
          </p>
        </section>

        {/* About Me */}
        <section className="minimal-section">
          <h2 className="minimal-heading">me</h2>
          <p className="minimal-text mb-4">
            Wrote my first line of code at 16 and loved it instantly. For the next few years, things just clicked — kind of like Copilot now, but all in my head. Took a break for a while, but got back to coding at 22 and haven't stopped since.
          </p>
          <p className="minimal-text mb-4">
            Got into data structural and algorithmic approaches, explored different stacks, and eventually started a remote job in a corporate gig. There, I got to look at the moving parts, the challenges, and the invisible decisions that make everything just work — for huge, huge numbers of users. That said, I still enjoy tweaking a UI or two — especially when it helps close the loop for the end user.
          </p>
          <p className="minimal-text">
            When I'm not coding, you'll find me reading random articles, overthinking life, crafting real-life outfits, or photographing every funny thing I come across.
          </p>
        </section>

        {/* Experience */}
        <section className="minimal-section">
          <h2 className="minimal-heading">experience</h2>
          <div className="minimal-project border-theme">
            <div className="flex justify-between items-start mb-2">
              <h3 className="minimal-project-title">
                Accenture · Remote
              </h3>
              <span className="text-sm opacity-80">
                Sept 2023 → May 2025
              </span>
            </div>
            <p className="minimal-project-desc mb-3">
              Software Engineer
            </p>
            <ul className="space-y-2 text-sm opacity-90">
              <li>• Wrote a Spring Boot job to clean up stale HR records — saved hours of manual effort</li>
              <li>• Set up real-time data sync for Renault (Brazil & Romania) — reduced lag from 24h to 5m</li>
              <li>• Built a React dashboard to track agent tasks</li>
              <li>• Used Docker and GitHub Actions for deployments</li>
              <li>• Added auto-delete logic for old tickets on Walgreens' platform — helped cut costs</li>
              <li>• Got a Sparkling Star award for making useful stuff across multiple teams</li>
            </ul>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="minimal-section">
          <h2 className="minimal-heading">projects</h2>
          <div>
            {featuredProjects.map((project) => (
              <div key={project.id} className="minimal-project border-theme">
                <div className="flex justify-between items-start mb-2">
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
                <p className="minimal-project-desc">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/projects" className="minimal-link text-sm">
              view all projects →
            </Link>
          </div>
        </section>

        {/* Currently Working On */}
        <section className="minimal-section">
          <h2 className="minimal-heading">currently working on...</h2>
          <div>
            {currentProjects.map((project) => (
              <div key={project.id} className="minimal-project border-theme">
                <p className="minimal-project-desc">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="minimal-section">
          <h2 className="minimal-heading">reach</h2>
          <p className="minimal-contact">
            connect on{' '}
            <a href="https://github.com/anannyashreesharma" target="_blank" rel="noopener noreferrer" className="minimal-contact-link">
              GitHub
            </a>
            {' '}·{' '}
            <a href="https://www.linkedin.com/in/anannyashree-sharma/" target="_blank" rel="noopener noreferrer" className="minimal-contact-link">
              LinkedIn
            </a>
            {' '}— or send me an email at{' '}
            <a href="mailto:anannyashree1425@gmail.com" className="minimal-contact-link">
              anannyashree1425@gmail.com
            </a>
          </p>
        </section>

        {/* Behind the Scenes */}
        <section className="minimal-section">
          <Link to="/behind-the-scenes" className="minimal-link text-sm">
            behind the scenes →
          </Link>
        </section>

        {/* Feedback Section */}
        <section className="minimal-section mt-16">
          <FeedbackForm />
        </section>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/behind-the-scenes" element={<BehindTheScenes />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
