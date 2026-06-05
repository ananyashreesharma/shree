import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';
import expImg from '../assets/workk.jpg';
import './WorkBossPage.css';

const EXPERIENCES = [
  {
    role: 'Open Source iOS Developer',
    company: 'Mozilla',
    period: 'Oct 2025 – Present · 8 mos',
    tags: ['Swift', 'UIKit', 'iOS Development', 'Nimbus'],
    bullets: [
      'Built native SSL/certificate error pages for Firefox iOS end-to-end in Swift/UIKit, replacing the old web-based fallback.',
      'Added certificate error detection to identify specific failure types (wrong host, bad domain) and route to the right UI.',
      'Built the error page UI with multiple view modes, action buttons and accessibility identifiers.',
      'Fixed tab restore and back navigation bugs as part of integrating the error pages into the browser\'s existing coordinator flow.',
      'Feature-flagged the rollout via Nimbus with an in-app debug toggle for safe staging.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Accenture',
    period: 'Sep 2023 – May 2025 · 1 yr 9 mos',
    tags: ['SQL Server', 'React.js', 'Data Pipelines'],
    bullets: [
      'Set up automated data cleanup jobs (scheduled tasks, batch processing) so we weren\'t sitting on stale or redundant data and things stayed performant.',
      'Built real-time data sync pipelines so HR data stayed consistent across global systems instead of drifting out of date.',
      'Rolled out HR website segments in multiple countries, helped with deployment and making sure things didn\'t break in each region.',
      'Built an internal dashboard so the team could track tasks and status in one place.',
      'Added backend jobs that purge outdated content and trim legacy data so the system stays fast and storage stays under control.',
      'Received the Sparkling Star award — a nice nod from management\'s side.',
    ],
  },
];

function FloatingDots() {
  const dots = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    left: `${(i * 17 + 7) % 96}%`,
    top: `${(i * 23 + 5) % 78}%`,
    delay: `${(i * 0.35) % 4.2}s`,
    duration: `${2.8 + (i % 5) * 0.45}s`,
    size: 8 + (i % 4) * 5,
  }));

  return (
    <div className="work-boss-dots" aria-hidden>
      {dots.map((d) => (
        <span
          key={d.id}
          className="work-boss-dot"
          style={{
            left: d.left,
            top: d.top,
            animationDelay: d.delay,
            animationDuration: d.duration,
            width: d.size,
            height: d.size,
          }}
        />
      ))}
    </div>
  );
}

export function WorkBossPage() {
  document.title = 'Experience — Anannya';
  return (
    <div className="editorial-idle-root work-boss-page">
      <div className="editorial-bg-hex-grid" />
      <div className="editorial-bg-blur" />
      <FloatingDots />

      <header className="work-boss-top">
        <Link to={ROUTES.editorial} className="work-boss-back">
          ← Editorial
        </Link>
        <span className="work-boss-badge">experience</span>
        <span />
      </header>

      <main className="work-boss-main">
        <p className="work-boss-eyebrow">a few years of shipping things</p>
        <h1 className="work-boss-title">Experience</h1>

        <div className="work-boss-cat-shell">
          <div className="work-boss-cat-wrap work-boss-img-wrap">
            <img src={expImg} alt="Experience" className="work-boss-hero-img" />
          </div>
        </div>

        <p className="work-boss-lead">
          I've shipped open-source iOS features at Mozilla, built data infrastructure at Accenture,
          and made things from scratch as an independent product engineer. I like work that holds up
          for real people in production.
        </p>

        <div className="work-boss-timeline">
          {EXPERIENCES.map((exp) => (
            <div key={exp.role + exp.company} className="work-boss-exp-card">
              <div className="work-boss-exp-header">
                <div>
                  <div className="work-boss-exp-role">{exp.role}</div>
                  <div className="work-boss-exp-company">{exp.company}</div>
                  <div className="work-boss-exp-period">{exp.period}</div>
                </div>
              </div>
              <ul className="work-boss-exp-bullets">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="work-boss-exp-tags">
                {exp.tags.map((t) => (
                  <span key={t} className="work-boss-exp-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default WorkBossPage;
