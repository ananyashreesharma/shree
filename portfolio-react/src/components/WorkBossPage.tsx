import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';
import { OrangeBossCat } from './OrangeBossCat';
import './WorkBossPage.css';

const WORK_INTRO_COPY =
  "Recent focus: open source on Firefox iOS at Mozilla—SSL bad-cert flows, clearer messaging for users, and wiring into existing certificate and tracking-protection code. I have also shipped iOS product prototypes, and at Accenture I built automated data jobs, real-time HR sync, regional rollouts, and internal dashboards. I like work that holds up for real people in production.";

function FlyingCoins() {
  const coins = Array.from({ length: 22 }, (_, i) => {
    const size = 11 + (i % 4) * 5;
    return {
      id: i,
      left: `${(i * 17 + 7) % 96}%`,
      top: `${(i * 23 + 5) % 78}%`,
      delay: `${(i * 0.35) % 4.2}s`,
      duration: `${2.8 + (i % 5) * 0.45}s`,
      size,
    };
  });

  return (
    <div className="work-boss-coins" aria-hidden>
      {coins.map((c) => (
        <span
          key={c.id}
          className="work-boss-coin"
          style={{
            left: c.left,
            top: c.top,
            animationDelay: c.delay,
            animationDuration: c.duration,
            width: c.size,
            height: c.size,
          }}
        />
      ))}
    </div>
  );
}

export function WorkBossPage() {
  return (
    <div className="editorial-idle-root work-boss-page">
      <div className="editorial-bg-hex-grid" />
      <div className="editorial-bg-blur" />
      <FlyingCoins />

      <header className="work-boss-top">
        <Link to={ROUTES.editorial} className="work-boss-back">
          ← Editorial
        </Link>
        <span className="work-boss-badge">Lv.2 · Boss floor</span>
        <Link to={ROUTES.projectsBoss} className="work-boss-to-timeline">
          Projects →
        </Link>
      </header>

      <main className="work-boss-main">
        <p className="work-boss-eyebrow">The office cat runs this department</p>
        <h1 className="work-boss-title">Work</h1>

        <div className="work-boss-cat-shell">
          <div className="work-boss-cat-pedestal" aria-hidden />
          <div className="work-boss-cat-wrap">
            <OrangeBossCat boss />
          </div>
        </div>

        <p className="work-boss-lead">{WORK_INTRO_COPY}</p>

        <div className="work-boss-actions">
          <Link to={ROUTES.projectsBoss} className="work-boss-primary">
            Explore projects
          </Link>
          <a href="mailto:anannyashree1425@gmail.com" className="work-boss-secondary">
            Email
          </a>
        </div>
      </main>
    </div>
  );
}

export default WorkBossPage;
