import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';
import './PurrfolioHero.css';

const PUPIL_MOVE = 12;
const PUPIL_MOVE_Y = 8;

export function PurrfolioHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [scleraScale, setScleraScale] = useState(1);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
    const y = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
    setPupilOffset({
      x: x * PUPIL_MOVE,
      y: y * PUPIL_MOVE_Y,
    });
  }, []);

  const blink = useCallback(() => {
    setScleraScale(0.1);
    setTimeout(() => setScleraScale(1), 150);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;
    const scheduleNext = () => {
      const delay = Math.random() * 3000 + 2000;
      id = setTimeout(() => {
        blink();
        scheduleNext();
      }, delay);
    };
    scheduleNext();
    return () => clearTimeout(id);
  }, [blink]);

  const pupilStyle = {
    transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`,
  };
  const scleraStyle = {
    transform: `scaleY(${scleraScale})`,
  };

  return (
    <div className="purrfolio-hero">
      <div className="logo-container" ref={containerRef}>
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" aria-label="Anannya Purrfolio">
          <defs>
            <filter id="rough-paper">
              <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves={2} result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale={3} />
            </filter>
          </defs>

          <g className="art-layer">
            <path
              className="scratch-mark"
              d="M30,150 L60,180 M40,140 L70,170 M50,130 L80,160"
              style={{ animationDelay: '0s' }}
            />
            <path
              className="scratch-mark"
              d="M370,150 L340,180 M360,140 L330,170 M350,130 L320,160"
              style={{ animationDelay: '2.5s' }}
            />
          </g>

          <g transform="translate(200, 100)">
            <g className="tiger-eye">
              <path
                className="eye-sclera"
                d="M-45,0 Q-25,-15 -5,0 Q-25,15 -45,0 Z"
                style={scleraStyle}
              />
              <circle className="eye-pupil" cx={-25} cy={0} r={3} style={pupilStyle} />
            </g>
            <g className="tiger-eye">
              <path className="eye-sclera" d="M5,0 Q25,-15 45,0 Q25,15 5,0 Z" style={scleraStyle} />
              <circle className="eye-pupil" cx={25} cy={0} r={3} style={pupilStyle} />
            </g>
          </g>

          <g transform="translate(25, 200)">
            <g className="letter-group">
              <path
                className="letter-base"
                d="M0,80 L25,0 L50,80 L38,80 L32,60 L18,60 L12,80 Z M25,15 L21,50 L29,50 Z"
              />
              <path className="stripe" d="M10,20 L25,25 L15,40 Z" />
            </g>
            <g className="letter-group" transform="translate(60, 0)">
              <path
                className="letter-base"
                d="M0,0 L12,0 L35,55 L35,0 L47,0 L47,80 L35,80 L12,25 L12,80 L0,80 Z"
              />
              <path className="stripe" d="M0,10 L15,15 L0,30 Z" />
            </g>
            <g className="letter-group" transform="translate(120, 0)">
              <path
                className="letter-base"
                d="M0,80 L25,0 L50,80 L38,80 L32,60 L18,60 L12,80 Z M25,15 L21,50 L29,50 Z"
              />
              <path className="stripe" d="M35,20 L25,25 L40,40 Z" />
            </g>
            <g className="letter-group" transform="translate(180, 0)">
              <path
                className="letter-base"
                d="M0,0 L12,0 L35,55 L35,0 L47,0 L47,80 L35,80 L12,25 L12,80 L0,80 Z"
              />
              <path className="stripe" d="M47,50 L32,55 L47,70 Z" />
            </g>
            <g className="letter-group" transform="translate(240, 0)">
              <path
                className="letter-base"
                d="M0,0 L15,0 L25,35 L35,0 L50,0 L32,45 L32,80 L18,80 L18,45 Z"
              />
              <path className="stripe" d="M0,10 L15,15 L5,30 Z" />
            </g>
            <g className="letter-group" transform="translate(300, 0)">
              <path
                className="letter-base"
                d="M0,80 L25,0 L50,80 L38,80 L32,60 L18,60 L12,80 Z M25,15 L21,50 L29,50 Z"
              />
              <path className="stripe" d="M25,60 L15,70 L35,70 Z" />
            </g>
          </g>

          <text x={200} y={320} textAnchor="middle" className="subtitle">
            PURRFOLIO
          </text>
        </svg>
      </div>
      <Link to={ROUTES.editorial} className="enter-link">
        Enter
      </Link>
    </div>
  );
}

export default PurrfolioHero;
