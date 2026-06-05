import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes';
import catTiles from '../assets/cat_tiles.png';
import contactImg from '../assets/getintouch.jpg';
import expImg from '../assets/workk.jpg';
import projectsImg from '../assets/indieprojectss.jpg';
import helloImg from '../assets/hellocat.jpg';
import blogImg from '../assets/blogcat.jpg';
import './EditorialIdleGame.css';

const CAT_H = 120;
const WALK_SPEED = 130;

function WalkingCat() {
  const moverRef = useRef<HTMLDivElement>(null);
  const catRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mover = moverRef.current;
    const cat   = catRef.current;
    if (!mover || !cat) return;

    let cx = window.innerWidth + 50;
    const y = window.innerHeight - CAT_H;
    let interactive = false;
    let purring     = false;

    const freeze = () => {
      cat.style.animation          = 'none';
      cat.style.backgroundPosition = '-240px -600px';
      cat.style.cursor             = 'pointer';
      interactive = true;
    };

    const purr = () => {
      if (purring) return;
      purring = true; interactive = false;
      cat.style.backgroundPosition = '';
      cat.style.animation = 'editorial-cat-pose 0.35s steps(6) 3';
      setTimeout(() => { freeze(); purring = false; }, 1100);
    };

    const walkAway = () => {
      interactive = false;
      cat.style.cursor = '';
      cat.style.backgroundPosition = '';
      cat.className = 'editorial-walking-cat editorial-cat-walk editorial-cat-right';
      const targetX = window.innerWidth + 50;
      const dur = ((targetX - cx) / WALK_SPEED) * 1000;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        mover.style.transition = `transform ${dur}ms linear`;
        mover.style.transform  = `translate(${targetX}px,${y}px)`;
        cx = targetX;
      }));
    };

    const onClick = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const relX = e.clientX - rect.left;
      if (relX > rect.width * 0.75) walkAway();
      else purr();
    };

    cat.addEventListener('click', onClick);

    const startX = window.innerWidth + 50;
    const dur = ((startX - 20) / WALK_SPEED) * 1000;

    mover.style.transition = 'none';
    mover.style.transform  = `translate(${startX}px,${y}px)`;
    cat.className = 'editorial-walking-cat editorial-cat-walk';

    requestAnimationFrame(() => requestAnimationFrame(() => {
      mover.style.transition = `transform ${dur}ms linear`;
      mover.style.transform  = `translate(20px,${y}px)`;
      cx = 20;
      setTimeout(() => {
        cat.className = 'editorial-walking-cat editorial-cat-sit';
        setTimeout(freeze, 1000);
      }, dur);
    }));

    return () => { cat.removeEventListener('click', onClick); };
  }, []);

  return (
    <div ref={moverRef} className="editorial-walking-cat-mover"
         style={{ transform: 'translate(2000px,2000px)' }}>
      <div ref={catRef}
           className="editorial-walking-cat editorial-cat-walk"
           style={{ backgroundImage: `url(${catTiles})` }} />
    </div>
  );
}

type PopupKind = 'about' | 'construction' | null;

function Popup({ kind, onClose }: { kind: PopupKind; onClose: () => void }) {
  if (!kind) return null;
  return (
    <div className="hub-popup-backdrop" onClick={onClose}>
      <div className="hub-popup-panel" onClick={(e) => e.stopPropagation()}>
        <button className="hub-popup-close" onClick={onClose} aria-label="Close">×</button>
        {kind === 'about' && (
          <>
            <img src={helloImg} alt="Anannya" className="hub-popup-img" />
            <h2 className="hub-popup-title">hey it&apos;s me Anannya</h2>
            <div className="hub-popup-body">
              <p>
                I love taking ideas and turning them into things people can actually use. When I
                build something I try to look at it like a user, not just an engineer. I like
                putting myself in different people's shoes, maybe a parent maybe a school kid,
                and thinking about how they would experience what I'm building.
              </p>
              <p>
                I also care a lot about design. I'm not a designer but I really enjoy noticing
                things like visual hierarchy, affordances and micro-interactions. Lately I've been
                learning more about design too, just to understand the user's eye better and build
                with more empathy.
              </p>
              <p>Always happy to collaborate with engineers and designers having the same energy. Feel free to reach out :)</p>
            </div>
          </>
        )}
        {kind === 'construction' && (
          <div className="hub-popup-construction">
            <div className="hub-popup-cs-icon">🚧</div>
            <h2 className="hub-popup-title">Under Construction</h2>
            <p className="hub-popup-cs-text">website not finished yet — check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function EditorialIdleGame() {
  document.title = 'Anannya — Portfolio';
  const navigate = useNavigate();
  const [popup, setPopup] = useState<PopupKind>(null);

  return (
    <div className="editorial-idle-root">
      <div className="editorial-bg-hex-grid" />
      <div className="editorial-bg-blur" />

      <div className="editorial-hatching">
        <div className="editorial-hatch-block editorial-hatch-1" />
        <div className="editorial-hatch-block editorial-hatch-2" />
        <div className="editorial-hatch-block editorial-hatch-3" />
      </div>

      <WalkingCat />

      <Popup kind={popup} onClose={() => setPopup(null)} />

      <div className="editorial-app-container">
        <main className="editorial-stage">
          {/* Node 2 — Experience */}
          <div className="editorial-node editorial-node-2" onClick={() => navigate(ROUTES.workBoss)}>
            <svg className="editorial-svg-text-ring" viewBox="0 0 100 100" aria-hidden>
              <defs>
                <path id="editorial-curve-2" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
              </defs>
              <text fontSize="6" fill="#666666" letterSpacing="4">
                <textPath href="#editorial-curve-2">work life over the years ·</textPath>
              </text>
            </svg>
            <div className="editorial-cta-node-inner editorial-cta-node-inner--node2">
              <div className="editorial-cta-node-title">Experience</div>
              <div className="editorial-cta-node-scene editorial-cta-node-scene--compact">
                <img src={expImg} alt="Experience" className="editorial-node-img" />
              </div>
            </div>
          </div>

          {/* Node 3 — Get in Touch */}
          <div className="editorial-node editorial-node-3" onClick={() => navigate(ROUTES.contact)}>
            <svg className="editorial-svg-text-ring" viewBox="0 0 100 100" aria-hidden>
              <defs>
                <path id="editorial-curve-3" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
              </defs>
              <text fontSize="6" fill="#666666" letterSpacing="4">
                <textPath href="#editorial-curve-3">reach out · say hello ·</textPath>
              </text>
            </svg>
            <div className="editorial-cta-node-inner editorial-cta-node-inner--node3">
              <div className="editorial-cta-node-title">Get in Touch</div>
              <div className="editorial-cta-node-scene">
                <img src={contactImg} alt="Contact" className="editorial-node-img" />
              </div>
            </div>
          </div>

          {/* Node 4 — center card → about popup */}
          <div className="editorial-node editorial-node-4" onClick={() => setPopup('about')}>
            <div className="editorial-center-content">
              <div className="editorial-brand-title editorial-brand-title-compact">
                hey it&apos;s me Anannya
              </div>
              <img src={helloImg} alt="Anannya" className="editorial-center-img" />
            </div>
          </div>

          {/* Node 5 — Indie Projects → under construction */}
          <div className="editorial-node editorial-node-5" onClick={() => setPopup('construction')}>
            <svg className="editorial-svg-text-ring" viewBox="0 0 100 100" aria-hidden>
              <defs>
                <path id="editorial-curve-5" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
              </defs>
              <text fontSize="6" fill="#666666" letterSpacing="4">
                <textPath href="#editorial-curve-5">side projects/work ·</textPath>
              </text>
            </svg>
            <div className="editorial-projects-node-inner">
              <div className="editorial-brand-title editorial-projects-node-title">Indie Projects</div>
              <div className="editorial-projects-node-scene">
                <img src={projectsImg} alt="Projects" className="editorial-node-img" />
              </div>
            </div>
          </div>

          {/* Node 6 — Blogs */}
          <div className="editorial-node editorial-node-6" onClick={() => navigate(ROUTES.blogs)}>
            <svg className="editorial-svg-text-ring" viewBox="0 0 100 100" aria-hidden>
              <defs>
                <path id="editorial-curve-6" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
              </defs>
              <text fontSize="6" fill="#666666" letterSpacing="4">
                <textPath href="#editorial-curve-6">thoughts & words ·</textPath>
              </text>
            </svg>
            <div className="editorial-projects-node-inner">
              <div className="editorial-brand-title editorial-projects-node-title">Blogs</div>
              <div className="editorial-projects-node-scene">
                <img src={blogImg} alt="Blogs" className="editorial-node-img" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default EditorialIdleGame;
