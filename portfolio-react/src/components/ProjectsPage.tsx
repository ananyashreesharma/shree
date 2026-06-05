import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';
import './ProjectsPage.css';

export function ProjectsPage() {
  document.title = 'Projects — Anannya';
  return (
    <div className="editorial-idle-root projects-page">
      <div className="editorial-bg-hex-grid" />
      <div className="editorial-bg-blur" />

      <header className="exp-top">
        <Link to={ROUTES.editorial} className="exp-back">
          ← Editorial
        </Link>
        <span className="projects-badge">indie projects</span>
      </header>

      <main className="exp-main" style={{ textAlign: 'center' }}>
        <p className="exp-eyebrow">side projects / work</p>
        <h1 className="exp-title">Indie Projects</h1>

        <div className="projects-construction">
          <div className="projects-cs-icon">🚧</div>
          <p className="projects-cs-text">under construction — website not finished yet</p>
        </div>
      </main>
    </div>
  );
}

export default ProjectsPage;
