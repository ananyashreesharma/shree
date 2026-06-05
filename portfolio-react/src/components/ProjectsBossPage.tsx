import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';
import './ProjectsBossPage.css';

export function ProjectsBossPage() {
  document.title = 'Projects — Anannya';
  return (
    <div className="editorial-idle-root projects-boss-page">
      <div className="editorial-bg-hex-grid" />
      <div className="editorial-bg-blur" />

      <header className="work-boss-top">
        <Link to={ROUTES.editorial} className="work-boss-back">
          ← Editorial
        </Link>
        <span className="projects-boss-badge">indie projects</span>
      </header>

      <main className="work-boss-main" style={{ textAlign: 'center' }}>
        <p className="work-boss-eyebrow">side projects / work</p>
        <h1 className="work-boss-title">Indie Projects</h1>

        <div className="projects-boss-construction">
          <div className="projects-boss-cs-icon">🚧</div>
          <p className="projects-boss-cs-text">under construction — website not finished yet</p>
        </div>
      </main>
    </div>
  );
}

export default ProjectsBossPage;
