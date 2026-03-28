import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';
import { BlackProjectCat } from './BlackProjectCat';
import { PORTFOLIO_PROJECTS } from './portfolioProjects';
import './WorkBossPage.css';
import './ProjectsBossPage.css';

const PROJECTS_INTRO =
  "This is where side quests and lab work live—things I have shipped or shaped alongside my roles, plus what I am tinkering with now. The cards below are themed buckets (branding, UI/UX, motion).";

const STAR_PATH = 'M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z';

function FloatingStars() {
  const stars = Array.from({ length: 26 }, (_, i) => ({
    id: i,
    left: `${(i * 19 + 5) % 95}%`,
    top: `${(i * 11 + 6) % 80}%`,
    delay: `${(i * 0.26) % 4}s`,
    duration: `${3.4 + (i % 5) * 0.42}s`,
    size: 14 + (i % 5) * 6,
    stroke: i % 4 === 0 ? '#c29545' : i % 4 === 1 ? '#1a1a1a' : '#5b7c99',
    spinReverse: i % 2 === 1,
  }));

  return (
    <div className="projects-boss-stars" aria-hidden>
      {stars.map((s) => (
        <svg
          key={s.id}
          className={`projects-boss-star${s.spinReverse ? ' projects-boss-star--alt' : ''}`}
          viewBox="0 0 24 24"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
          aria-hidden
        >
          <path d={STAR_PATH} fill="none" stroke={s.stroke} strokeWidth="1" vectorEffect="non-scaling-stroke" />
        </svg>
      ))}
    </div>
  );
}

export function ProjectsBossPage() {
  return (
    <div className="editorial-idle-root projects-boss-page">
      <div className="editorial-bg-hex-grid" />
      <div className="editorial-bg-blur" />
      <FloatingStars />

      <header className="work-boss-top projects-boss-top">
        <Link to={ROUTES.editorial} className="work-boss-back">
          ← Editorial
        </Link>
        <span className="projects-boss-badge">Lv.4 · Project lab</span>
        <Link to={ROUTES.workBoss} className="work-boss-to-timeline">
          Work floor →
        </Link>
      </header>

      <main className="work-boss-main projects-boss-main">
        <p className="work-boss-eyebrow">Coffee break is over—this cat curates the backlog</p>
        <h1 className="work-boss-title">Projects</h1>

        <div className="work-boss-cat-shell projects-boss-cat-shell">
          <div className="work-boss-cat-pedestal" aria-hidden />
          <div className="projects-boss-cat-wrap">
            <BlackProjectCat boss />
          </div>
        </div>

        <p className="work-boss-lead">{PROJECTS_INTRO}</p>

        <section className="projects-boss-grid" aria-label="Project themes">
          {PORTFOLIO_PROJECTS.map((project) => {
            const { Mascot } = project;
            return (
              <article key={project.id} className="projects-boss-card">
                <div className="projects-boss-card-mascot" aria-hidden>
                  <Mascot />
                </div>
                <h2 className="projects-boss-card-name">{project.name}</h2>
                <p className="projects-boss-card-tag">{project.tag}</p>
                <p className="projects-boss-card-blurb">{project.blurb}</p>
              </article>
            );
          })}
        </section>

        <div className="work-boss-actions">
          <Link to={ROUTES.workBoss} className="work-boss-primary">
            Open work floor
          </Link>
          <a href="mailto:anannyashree1425@gmail.com" className="work-boss-secondary">
            Email
          </a>
        </div>
      </main>
    </div>
  );
}

export default ProjectsBossPage;
