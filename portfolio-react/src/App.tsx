import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PurrfolioHero } from './components/PurrfolioHero';
import { NotFoundPage } from './components/NotFoundPage';
import { EditorialIdleGame } from './components/EditorialIdleGame';
import { ExperiencePage } from './components/ExperiencePage';
import { ProjectsPage } from './components/ProjectsPage';
import { ContactPage } from './components/ContactPage';
import { AboutPage } from './components/AboutPage';
import { BlogsPage } from './components/BlogsPage';
import { ROUTES } from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.root} element={<PurrfolioHero />} />
        <Route path={ROUTES.editorial} element={<EditorialIdleGame />} />
        <Route path={ROUTES.workBoss} element={<ExperiencePage />} />
        <Route path={ROUTES.projectsBoss} element={<ProjectsPage />} />
        <Route path={ROUTES.contact} element={<ContactPage />} />
        <Route path={ROUTES.about} element={<AboutPage />} />
        <Route path={ROUTES.blogs} element={<BlogsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
