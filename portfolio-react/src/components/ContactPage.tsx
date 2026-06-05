import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';
import contactImg from '../assets/getintouch.jpg';
import './ContactPage.css';

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'anannyashree1425@gmail.com',
    href: 'mailto:anannyashree1425@gmail.com',
    description: 'Best way to reach me. I usually reply within a day.',
  },
  {
    label: 'GitHub',
    value: 'ananyashreesharma',
    href: 'https://github.com/ananyashreesharma',
    description: 'Open-source work, projects, and contribution history.',
  },
  {
    label: 'Twitter / X',
    value: '@anannyashree_',
    href: 'https://twitter.com/anannyashree_',
    description: 'Thoughts, updates, and the occasional cat post.',
  },
  {
    label: 'Website',
    value: 'shree-ochre.vercel.app',
    href: 'https://shree-ochre.vercel.app/',
    description: 'You\'re already here — but here\'s the link anyway.',
  },
];

function FloatingDots() {
  const dots = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${(i * 19 + 11) % 94}%`,
    top: `${(i * 27 + 8) % 80}%`,
    delay: `${(i * 0.4) % 3.8}s`,
    duration: `${2.6 + (i % 4) * 0.5}s`,
    size: 8 + (i % 3) * 5,
  }));

  return (
    <div className="contact-page-dots" aria-hidden>
      {dots.map((d) => (
        <span
          key={d.id}
          className="contact-page-dot"
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

export function ContactPage() {
  document.title = 'Get in Touch — Anannya';
  return (
    <div className="editorial-idle-root contact-page">
      <div className="editorial-bg-hex-grid" />
      <div className="editorial-bg-blur" />
      <FloatingDots />

      <header className="contact-page-top">
        <Link to={ROUTES.editorial} className="contact-page-back">
          ← Editorial
        </Link>
        <span className="contact-page-badge">contact</span>
        <Link to={ROUTES.workBoss} className="contact-page-nav">
          Experience →
        </Link>
      </header>

      <main className="contact-page-main">
        <p className="contact-page-eyebrow">let's talk</p>
        <h1 className="contact-page-title">Get in Touch</h1>

        <div className="contact-page-img-shell">
          <div className="contact-page-img-wrap">
            <img src={contactImg} alt="Get in Touch" className="contact-page-hero-img" />
          </div>
        </div>

        <p className="contact-page-lead">
          I'm based on Pluto but my inbox is very much on Earth. Whether it's about a project,
          a collaboration, or just to say hi — I'd love to hear from you.
        </p>

        <div className="contact-page-cards">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="contact-page-card"
            >
              <div className="contact-page-card-label">{link.label}</div>
              <div className="contact-page-card-value">{link.value}</div>
              <div className="contact-page-card-desc">{link.description}</div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ContactPage;
