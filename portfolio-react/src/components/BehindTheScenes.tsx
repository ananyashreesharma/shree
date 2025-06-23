import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { ThemeToggle } from './ThemeToggle';

const BehindTheScenes = () => {
  const { isDayMode, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen theme-transition">
      <ThemeToggle isDayMode={isDayMode} onToggle={toggleTheme} />

      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <section className="minimal-section">
          <h1 className="signature-text mb-4">
            behind the scenes
          </h1>
          <p className="text-base opacity-90">
            Technical details & design decisions
          </p>
        </section>

        {/* Tech Stack */}
        <section className="minimal-section">
          <h2 className="minimal-heading">tech stack</h2>
          <div className="minimal-project border-theme">
            <h3 className="minimal-project-title mb-3">Frontend Framework</h3>
            <p className="minimal-project-desc mb-4">
              React 18 with TypeScript for type safety and better development experience
            </p>
            
            <h3 className="minimal-project-title mb-3">Styling</h3>
            <p className="minimal-project-desc mb-4">
              Tailwind CSS v3 for utility-first styling with custom CSS variables for theme switching
            </p>
            
            <h3 className="minimal-project-title mb-3">Animations</h3>
            <p className="minimal-project-desc mb-4">
              Framer Motion for smooth animations and transitions
            </p>
            
            <h3 className="minimal-project-title mb-3">Build Tool</h3>
            <p className="minimal-project-desc mb-4">
              Create React App with custom PostCSS configuration
            </p>
            
            <h3 className="minimal-project-title mb-3">Form Handling</h3>
            <p className="minimal-project-desc">
              Formspree for serverless form submissions without backend setup
            </p>
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="minimal-section">
          <h2 className="minimal-heading">design philosophy</h2>
          <div className="minimal-project border-theme">
            <p className="minimal-project-desc mb-4">
              Minimalism with purpose. Every element serves a function while maintaining visual harmony.
            </p>
            <p className="minimal-project-desc mb-4">
              Inspired by the principle that less is more — focusing on content over decoration.
            </p>
            <p className="minimal-project-desc">
              Accessibility-first approach with proper contrast ratios and semantic HTML.
            </p>
          </div>
        </section>

        {/* Color Palette */}
        <section className="minimal-section">
          <h2 className="minimal-heading">color palette</h2>
          <div className="minimal-project border-theme">
            <h3 className="minimal-project-title mb-3">Day Mode</h3>
            <p className="minimal-project-desc mb-4">
              Background: Pastel yellow gradient (from #fefce8 to #fef3c7)<br/>
              Text: Pure black (#000000)<br/>
              Accents: Black with 20-80% opacity for borders and subtle elements
            </p>
            
            <h3 className="minimal-project-title mb-3">Night Mode</h3>
            <p className="minimal-project-desc">
              Background: Pure black (#000000)<br/>
              Text: Pure white (#ffffff)<br/>
              Accents: White with 20-80% opacity for borders and subtle elements
            </p>
          </div>
        </section>

        {/* Typography */}
        <section className="minimal-section">
          <h2 className="minimal-heading">typography</h2>
          <div className="minimal-project border-theme">
            <h3 className="minimal-project-title mb-3">Font Stack</h3>
            <p className="minimal-project-desc mb-4">
              Primary: 'Courier New', monospace — for that robotic, congested feel<br/>
              Fallback: system monospace fonts for consistency across platforms
            </p>
            
            <h3 className="minimal-project-title mb-3">Text Hierarchy</h3>
            <p className="minimal-project-desc mb-4">
              Signature: Large, bold monospace for the main heading<br/>
              Headings: Medium weight monospace for section titles<br/>
              Body: Regular weight monospace for readable content<br/>
              Accents: Smaller, lighter weight for secondary information
            </p>
            
            <h3 className="minimal-project-title mb-3">Spacing</h3>
            <p className="minimal-project-desc">
              Consistent 1rem (16px) base unit with 1.5rem line height for optimal readability
            </p>
          </div>
        </section>

        {/* Layout System */}
        <section className="minimal-section">
          <h2 className="minimal-heading">layout system</h2>
          <div className="minimal-project border-theme">
            <h3 className="minimal-project-title mb-3">Reading Experience</h3>
            <p className="minimal-project-desc mb-4">
              Single column layout with comfortable reading width — makes content easy to scan and digest<br/>
              Consistent spacing throughout creates a calm, organized feeling
            </p>
            
            <h3 className="minimal-project-title mb-3">Visual Structure</h3>
            <p className="minimal-project-desc mb-4">
              Each section follows the same pattern with subtle borders — helps your eye flow naturally through the content<br/>
              Projects and experience items look like cards, making them easy to distinguish
            </p>
            
            <h3 className="minimal-project-title mb-3">Mobile-Friendly</h3>
            <p className="minimal-project-desc">
              Works beautifully on phones, tablets, and desktops — text and spacing adjust automatically for the best experience on any device
            </p>
          </div>
        </section>

        {/* Animations */}
        <section className="minimal-section">
          <h2 className="minimal-heading">animations</h2>
          <div className="minimal-project border-theme">
            <h3 className="minimal-project-title mb-3">Theme Switching</h3>
            <p className="minimal-project-desc mb-4">
              Smooth color transitions when switching between day and night modes — feels polished and intentional<br/>
              Toggle button responds instantly to your clicks with subtle hover effects
            </p>
            
            <h3 className="minimal-project-title mb-3">Interactive Elements</h3>
            <p className="minimal-project-desc mb-4">
              Send button appears smoothly when you start typing feedback — provides clear visual feedback<br/>
              Links and buttons have gentle hover effects that make them feel responsive
            </p>
            
            <h3 className="minimal-project-title mb-3">Accessibility</h3>
            <p className="minimal-project-desc">
              All interactive elements have clear focus states — works well with keyboard navigation and screen readers
            </p>
          </div>
        </section>

        {/* Design Inspirations */}
        <section className="minimal-section">
          <h2 className="minimal-heading">design inspirations</h2>
          <div className="minimal-project border-theme">
            <h3 className="minimal-project-title mb-3">Minimalist Philosophy</h3>
            <p className="minimal-project-desc mb-4">
              Inspired by Lee Robinson, Andrés Martínez, and Zaid Mukaddam who champion extreme minimalism<br/>
              Focus on typography and whitespace over decorative elements
            </p>
            
            <h3 className="minimal-project-title mb-3">Monospace Aesthetic</h3>
            <p className="minimal-project-desc mb-4">
              Terminal/console aesthetic for that technical, developer-friendly feel<br/>
              Consistent character width creates a structured, grid-like appearance
            </p>
            
            <h3 className="minimal-project-title mb-3">Content-First Approach</h3>
            <p className="minimal-project-desc">
              Information architecture inspired by technical documentation and developer blogs<br/>
              Clear hierarchy that guides the eye naturally through the content
            </p>
          </div>
        </section>

        {/* Attribution */}
        <section className="minimal-section">
          <h2 className="minimal-heading">attribution</h2>
          <div className="minimal-project border-theme">
            <p className="minimal-project-desc mb-4">
              Stole designs from these amazing creators:
            </p>
            <ul className="space-y-2 text-sm opacity-90">
              <li>• <a href="https://leerob.com" target="_blank" rel="noopener noreferrer" className="minimal-link">Lee Robinson</a></li>
              <li>• <a href="https://www.andrs.me" target="_blank" rel="noopener noreferrer" className="minimal-link">Andrés Martínez</a></li>
              <li>• <a href="https://zaidmukaddam.com" target="_blank" rel="noopener noreferrer" className="minimal-link">Zaid Mukaddam</a></li>
            </ul>
          </div>
        </section>

        {/* Implementation Details */}
        <section className="minimal-section">
          <h2 className="minimal-heading">implementation details</h2>
          <div className="minimal-project border-theme">
            <h3 className="minimal-project-title mb-3">Theme System</h3>
            <p className="minimal-project-desc mb-4">
              Custom React hook (useTheme) manages theme state with localStorage persistence<br/>
              CSS custom properties enable dynamic theme switching without page reload
            </p>
            
            <h3 className="minimal-project-title mb-3">Component Architecture</h3>
            <p className="minimal-project-desc mb-4">
              Modular component structure with clear separation of concerns<br/>
              Reusable styling classes for consistent design patterns
            </p>
            
            <h3 className="minimal-project-title mb-3">Performance</h3>
            <p className="minimal-project-desc">
              Optimized bundle size by removing unused dependencies<br/>
              Efficient re-renders with proper React patterns and memoization
            </p>
          </div>
        </section>

        {/* Back to Portfolio */}
        <section className="minimal-section mt-16">
          <a 
            href="/" 
            className="minimal-link text-sm"
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
          >
            ← back to portfolio
          </a>
        </section>
      </div>
    </div>
  );
};

export default BehindTheScenes; 