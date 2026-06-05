import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';
import helloImg from '../assets/hellocat.jpg';
import './AboutPage.css';

export function AboutPage() {
  document.title = 'About — Anannya';
  return (
    <div className="editorial-idle-root about-page">
      <div className="editorial-bg-hex-grid" />
      <div className="editorial-bg-blur" />

      <header className="about-page-top">
        <Link to={ROUTES.editorial} className="about-page-back">
          ← Editorial
        </Link>
        <span className="about-page-badge">about me</span>
        <Link to={ROUTES.contact} className="about-page-nav">
          Get in Touch →
        </Link>
      </header>

      <main className="about-page-main">
        <p className="about-page-eyebrow">a little about me</p>
        <h1 className="about-page-title">About</h1>

        <div className="about-page-img-shell">
          <div className="about-page-img-wrap">
            <img src={helloImg} alt="Anannya" className="about-page-hero-img" />
          </div>
        </div>

        <div className="about-page-body">
          <p>
            I love taking ideas and turning them into things people can actually use. When I build
            something I try to look at it like a user, not just an engineer. I like putting myself
            in different people's shoes, maybe a parent maybe a school kid, and thinking about
            how they would experience what I'm building.
          </p>
          <p>
            I also care a lot about design. I'm not a designer but I really enjoy noticing things
            like visual hierarchy, affordances and micro-interactions. Lately I've been learning
            more about design too, just to understand the user's eye better and build with more
            empathy.
          </p>
          <p>
            Always happy to collaborate with engineers and designers having the same energy.
            Feel free to reach out :)
          </p>
        </div>

        <div className="about-page-facts">
          <div className="about-page-fact">
            <span className="about-page-fact-label">Based in</span>
            <span className="about-page-fact-value">Pluto (and Earth, and India)</span>
          </div>
          <div className="about-page-fact">
            <span className="about-page-fact-label">Currently into</span>
            <span className="about-page-fact-value">Open source, iOS, design</span>
          </div>
          <div className="about-page-fact">
            <span className="about-page-fact-label">Happiest when</span>
            <span className="about-page-fact-value">Building things that hold up for real people</span>
          </div>
          <div className="about-page-fact">
            <span className="about-page-fact-label">Also</span>
            <span className="about-page-fact-value">Cat person, obviously</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
