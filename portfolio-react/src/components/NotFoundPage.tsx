import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';
import './NotFoundPage.css';

export function NotFoundPage() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setParallax({ x, y });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="notfound-shell">
      <div className="notfound-error-container">
        <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" className="notfound-svg">
          <defs>
            <filter id="notfound-rough-paper">
              <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves={3} result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale={3} xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>

          <g className="notfound-art-layer notfound-scrambled">
            <g
              className="notfound-letter-group"
              style={{
                transform: `translate(40px, 100px) rotate(-15deg) translate(${parallax.x * 0.2}px, ${parallax.y * 0.2}px)`,
              }}
            >
              <path
                className="notfound-letter-base"
                d="M30,80 C10,80 -10,70 -10,40 C-10,10 70,10 70,-30 C70,-50 50,-60 30,-60 C10,-60 0,-50 -5,-40 L-30,-60 C-20,-80 0,-100 30,-100 C70,-100 110,-70 110,-30 C110,20 30,20 30,50 C30,70 50,70 60,70 C80,70 90,60 100,50 L120,80 C100,100 70,110 40,110 L30,100 Z"
              />
              <path className="notfound-stripe" d="M10,20 L40,30 L10,50 Z" />
            </g>

            <g
              className="notfound-letter-group"
              style={{
                transform: `translate(180px, 120px) rotate(20deg) translate(${parallax.x * 0.4}px, ${parallax.y * 0.4}px)`,
              }}
            >
              <path
                className="notfound-letter-base"
                d="M0,-80 L80,-80 C120,-80 130,-50 130,-20 C130,10 110,30 80,30 L100,130 L50,130 L35,40 L40,40 L40,-40 L70,-40 C80,-40 85,-30 85,-20 C85,-10 80,0 70,0 L40,0 L40,130 L0,130 Z"
              />
              <path className="notfound-stripe" d="M130,-30 L90,-30 L120,0 Z" />
            </g>

            <g
              className="notfound-letter-group"
              style={{
                transform: `translate(280px, 80px) rotate(-10deg) translate(${parallax.x * 0.6}px, ${parallax.y * 0.6}px)`,
              }}
            >
              <path
                className="notfound-letter-base"
                d="M0,-100 L40,-100 L40,-10 L90,-100 L140,-100 L80,0 L150,110 L90,110 L40,20 L40,110 L0,110 Z"
              />
              <path className="notfound-stripe" d="M140,-90 L90,-60 L130,-40 Z" />
            </g>
          </g>

          <g transform="translate(200, 50)" className="notfound-art-layer">
            <g className="notfound-tiger-eye">
              <path className="notfound-eye-sclera" d="M-50,0 Q-30,-15 -10,0 Q-30,15 -50,0 Z" />
              <line className="notfound-eye-x" x1="-35" y1="-5" x2="-25" y2="5" strokeWidth={3} />
              <line className="notfound-eye-x" x1="-25" y1="-5" x2="-35" y2="5" strokeWidth={3} />
            </g>
            <g className="notfound-tiger-eye">
              <path className="notfound-eye-sclera" d="M10,0 Q30,-15 50,0 Q30,15 10,0 Z" />
              <line className="notfound-eye-x" x1="25" y1="-5" x2="35" y2="5" strokeWidth={3} />
              <line className="notfound-eye-x" x1="35" y1="-5" x2="25" y2="5" strokeWidth={3} />
            </g>
            <path d="M-5,15 L0,25 L5,15" fill="none" stroke="#000" strokeWidth={2} opacity={0.4} />
          </g>
        </svg>

        <div className="notfound-error-msg">
          <h1 className="notfound-code-404">404</h1>
          <p className="notfound-sub-text">You got lost in the jungle</p>
          <div className="notfound-back-links">
            <Link to={ROUTES.editorial} className="notfound-back-link">
              Back to editorial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
