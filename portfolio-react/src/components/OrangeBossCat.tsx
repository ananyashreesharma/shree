import React from 'react';
import './EditorialIdleGame.css';

type OrangeBossCatProps = {
  compact?: boolean;
  /** Larger “corner office” scale for full-page hero */
  boss?: boolean;
  className?: string;
};

/**
 * Orange Lv.2 desk cat (glasses, tie, laptop) — editorial capsule, modals, Work boss page.
 */
export function OrangeBossCat({ compact, boss, className = '' }: OrangeBossCatProps) {
  const rootClass = [
    'editorial-desk-scene',
    'editorial-orange-desk-cat',
    compact ? 'editorial-orange-desk-cat--compact' : '',
    boss ? 'editorial-orange-desk-cat--boss' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClass}>
      <div className="editorial-float-coin" style={{ top: '20%', left: '30%' }} />
      <div className="editorial-float-coin" style={{ top: '15%', right: '40%', animationDelay: '1s' }} />
      <div className="editorial-cat-head editorial-cat-orange">
        <div className="editorial-cat-ear l editorial-cat-orange-ear" />
        <div className="editorial-cat-ear r editorial-cat-orange-ear" />
        <div className="editorial-cat-face">
          <div className="editorial-cat-glasses" />
          <div className="editorial-cat-eye l" />
          <div className="editorial-cat-eye r" />
        </div>
      </div>
      <div className="editorial-cat-body editorial-cat-orange">
        <div className="editorial-cat-tie" />
      </div>
      <div className="editorial-desk">
        <div className="editorial-desk-acc editorial-laptop" />
      </div>
    </div>
  );
}
