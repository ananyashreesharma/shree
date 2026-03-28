import React from 'react';
import './EditorialIdleGame.css';

type BlackProjectCatProps = {
  compact?: boolean;
  boss?: boolean;
  className?: string;
};

/** Black coffee-break cat (glasses, suit lines, coffee) — editorial node + Projects boss page */
export function BlackProjectCat({ compact, boss, className = '' }: BlackProjectCatProps) {
  const rootClass = [
    'editorial-desk-scene',
    'editorial-black-project-cat',
    compact ? 'editorial-black-project-cat--compact' : '',
    boss ? 'editorial-black-project-cat--boss' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClass}>
      <svg className="editorial-sparkle editorial-black-project-sparkle" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" fill="none" strokeWidth="1" />
      </svg>
      <div className="editorial-cat-head editorial-cat-black">
        <div className="editorial-cat-ear l editorial-cat-black-ear" />
        <div className="editorial-cat-ear r editorial-cat-black-ear" />
        <div className="editorial-cat-face">
          <div className="editorial-cat-glasses" style={{ borderColor: '#fff' }} />
          <div className="editorial-cat-eye l" style={{ background: '#fff' }} />
          <div className="editorial-cat-eye r" style={{ background: '#fff' }} />
        </div>
      </div>
      <div className="editorial-cat-body editorial-cat-black">
        <div
          className="editorial-black-project-suit"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderLeft: '2px solid #333',
            borderRight: '2px solid #333',
            top: '10px',
          }}
        />
      </div>
      <div className="editorial-desk">
        <div className="editorial-desk-acc editorial-coffee" />
      </div>
    </div>
  );
}
