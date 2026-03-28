import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes';
import { OrangeBossCat } from './OrangeBossCat';
import { BlackProjectCat } from './BlackProjectCat';
import './EditorialIdleGame.css';

/** White executive cat + desk (center card) */
function EditorialExecutiveWhiteCat() {
  return (
    <div
      className="editorial-desk-scene editorial-executive-white-cat"
      style={{ height: '100px', paddingBottom: 0, marginTop: '10px' }}
    >
      <div className="editorial-cat-head editorial-cat-white">
        <div className="editorial-cat-ear l editorial-cat-white-ear" />
        <div className="editorial-cat-ear r editorial-cat-white-ear" />
        <div className="editorial-cat-face">
          <div
            style={{
              position: 'absolute',
              width: '16px',
              height: '8px',
              background: '#e6a8b7',
              top: '-4px',
              left: '40px',
              borderRadius: '2px',
              transform: 'rotate(15deg)',
              border: '1px solid #000',
            }}
          />
          <div className="editorial-cat-eye l" />
          <div className="editorial-cat-eye r" />
        </div>
      </div>
      <div className="editorial-cat-body editorial-cat-white" />
      <div className="editorial-desk" style={{ background: 'var(--c-bg)' }}>
        <div
          className="editorial-desk-acc editorial-laptop"
          style={{ background: 'var(--c-text)', borderColor: 'var(--c-bg)' }}
        />
      </div>
    </div>
  );
}

export function EditorialIdleGame() {
  const navigate = useNavigate();

  return (
    <div className="editorial-idle-root">
      <div className="editorial-bg-hex-grid" />
      <div className="editorial-bg-blur" />

      <div className="editorial-hatching">
        <div className="editorial-hatch-block editorial-hatch-1" />
        <div className="editorial-hatch-block editorial-hatch-2" />
        <div className="editorial-hatch-block editorial-hatch-3" />
      </div>

      <div className="editorial-app-container">
        <main className="editorial-stage">
          {/* Node 1 — orange cat + glasses + Work */}
          <div className="editorial-node editorial-node-1">
            <div className="editorial-badge editorial-badge-node-1">Lv.2 ⬆</div>
            <div className="editorial-work-node-inner">
              <div className="editorial-brand-title editorial-work-node-title">Work</div>
              <div className="editorial-work-node-scene">
                <OrangeBossCat compact />
              </div>
              <button
                type="button"
                className="editorial-manage-floor-btn"
                onClick={() => navigate(ROUTES.workBoss)}
              >
                VIEW WORK
              </button>
            </div>
          </div>

          {/* Node 2 — gray cat + ring text + Experience */}
          <div className="editorial-node editorial-node-2">
            <svg className="editorial-svg-text-ring" viewBox="0 0 100 100" aria-hidden>
              <defs>
                <path
                  id="editorial-curve-2"
                  d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  fill="transparent"
                />
              </defs>
              <text fontSize="6" fill="#666666" letterSpacing="4">
                <textPath href="#editorial-curve-2">productivity hour · focused mind ·</textPath>
              </text>
            </svg>
            <div className="editorial-cta-node-inner editorial-cta-node-inner--node2">
              <div className="editorial-cta-node-title">Experience</div>
              <div className="editorial-cta-node-scene editorial-cta-node-scene--compact">
                <div className="editorial-desk-scene editorial-gray-node-scene">
                  <div className="editorial-cat-head editorial-cat-gray">
                    <div className="editorial-cat-ear l editorial-cat-gray-ear" />
                    <div className="editorial-cat-ear r editorial-cat-gray-ear" />
                    <div className="editorial-cat-face">
                      <div className="editorial-cat-eye l" />
                      <div className="editorial-cat-eye r" />
                    </div>
                  </div>
                  <div className="editorial-cat-body editorial-cat-gray">
                    <div className="editorial-cat-tie" style={{ background: '#5b7c99' }} />
                  </div>
                  <div className="editorial-desk">
                    <div className="editorial-desk-acc editorial-monitor" />
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="editorial-manage-floor-btn"
                onClick={() => navigate(ROUTES.workBoss)}
              >
                VIEW EXPERIENCE
              </button>
            </div>
          </div>

          {/* Node 3 — B&W headphones cat + Contact */}
          <div className="editorial-node editorial-node-3">
            <div className="editorial-cta-node-inner editorial-cta-node-inner--node3">
              <div className="editorial-cta-node-title">Contact</div>
              <div className="editorial-cta-node-scene">
                <div className="editorial-desk-scene editorial-bw-node-scene">
                  <svg className="editorial-sparkle" style={{ top: '10%', right: '20%', stroke: '#000' }} viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" fill="none" strokeWidth="1" />
                  </svg>
                  <div className="editorial-cat-head editorial-cat-bw">
                    <div className="editorial-cat-ear l editorial-cat-bw-ear" />
                    <div className="editorial-cat-ear r editorial-cat-bw-ear" />
                    <div
                      style={{
                        position: 'absolute',
                        width: '70px',
                        height: '40px',
                        border: '2px solid #000',
                        borderBottom: 'none',
                        borderRadius: '35px 35px 0 0',
                        top: '-5px',
                        left: '-5px',
                      }}
                    />
                    <div className="editorial-cat-face">
                      <div className="editorial-cat-eye l" style={{ background: '#fff' }} />
                      <div className="editorial-cat-eye r" style={{ background: '#fff' }} />
                    </div>
                  </div>
                  <div className="editorial-cat-body editorial-cat-bw">
                    <div className="editorial-cat-tie" />
                  </div>
                  <div className="editorial-desk">
                    <div className="editorial-desk-acc editorial-monitor" style={{ width: '40px' }} />
                    <div className="editorial-desk-acc editorial-laptop" style={{ width: '20px', left: '60px', right: 'auto' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Node 4 — center card */}
          <div className="editorial-node editorial-node-4">
            <div className="editorial-badge editorial-badge-node-4">Lv.3 ⭐⭐⭐ EP</div>
            <div className="editorial-center-content">
              <div className="editorial-brand-title editorial-brand-title-compact">
                hey it&apos;s me Anannya
              </div>
              <EditorialExecutiveWhiteCat />
            </div>
          </div>

          {/* Node 5 — black cat + coffee + Projects */}
          <div className="editorial-node editorial-node-5">
            <svg className="editorial-svg-text-ring" viewBox="0 0 100 100" aria-hidden>
              <defs>
                <path
                  id="editorial-curve-5"
                  d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  fill="transparent"
                />
              </defs>
              <text fontSize="6" fill="#666666" letterSpacing="4">
                <textPath href="#editorial-curve-5">coffee break · endless tasks ·</textPath>
              </text>
            </svg>
            <div className="editorial-badge editorial-badge-node-5">Lv.4</div>
            <div className="editorial-projects-node-inner">
              <div className="editorial-brand-title editorial-projects-node-title">Projects</div>
              <div className="editorial-projects-node-scene">
                <BlackProjectCat compact />
              </div>
              <button
                type="button"
                className="editorial-manage-floor-btn"
                onClick={() => navigate(ROUTES.projectsBoss)}
              >
                VIEW PROJECTS
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default EditorialIdleGame;
