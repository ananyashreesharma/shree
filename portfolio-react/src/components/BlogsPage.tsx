import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';
import './BlogsPage.css';

const BLOGS = [
  {
    title: 'Redux Is My Friend',
    tag: 'Engineering',
    description:
      'A deep dive into Redux — state management, why it exists, and how to actually make it feel like a friend rather than a chore.',
    url: 'https://ananyashreesharma.github.io/ReduxIsMyFriend/',
    accent: 'var(--c-accent-orange)',
  },
  {
    title: 'Outreachy × Firefox',
    tag: 'Open Source',
    description:
      'My experience contributing to Firefox iOS through the Outreachy internship program — what I worked on, what I learned and what open source really feels like from the inside.',
    url: 'https://ananyashreesharma.github.io/outreachyXfirefox/',
    accent: 'var(--c-accent-blue)',
  },
  {
    title: 'Wavy Hair',
    tag: 'Personal',
    description:
      'Something a little different. Words about things that aren\'t code.',
    url: 'https://ananyashreesharma.github.io/WavyHair/',
    accent: 'var(--c-accent-green)',
  },
];

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

        <div className="blogs-page-grid">
          {BLOGS.map((blog) => (
            <a
              key={blog.title}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="blogs-page-card"
              style={{ '--blog-accent': blog.accent } as React.CSSProperties}
            >
              <div className="blogs-page-card-tag">{blog.tag}</div>
              <h2 className="blogs-page-card-title">{blog.title}</h2>
              <p className="blogs-page-card-desc">{blog.description}</p>
              <span className="blogs-page-card-read">Read →</span>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

export default BlogsPage;
