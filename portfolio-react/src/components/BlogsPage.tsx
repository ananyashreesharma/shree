import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';
import './BlogsPage.css';

export function BlogsPage() {
  return (
    <div className="editorial-idle-root blogs-page">
      <div className="editorial-bg-hex-grid" />
      <div className="editorial-bg-blur" />

      <header className="blogs-page-top">
        <Link to={ROUTES.editorial} className="blogs-page-back">
          ← Editorial
        </Link>
        <span className="blogs-page-badge">writing</span>
        <Link to={ROUTES.about} className="blogs-page-nav">
          About →
        </Link>
      </header>

      <main className="blogs-page-main">
        <p className="blogs-page-eyebrow">writing</p>
        <h1 className="blogs-page-title">Blogs</h1>

        <div className="blogs-page-coming-soon">
          <div className="blogs-page-cs-inner">
            <div className="blogs-page-cs-icon">✍️</div>
            <p className="blogs-page-cs-text">Words are being arranged. Check back soon.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BlogsPage;
