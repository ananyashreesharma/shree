import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NotFoundPage } from './components/NotFoundPage';
import { EditorialIdleGame } from './components/EditorialIdleGame';
import { WorkBossPage } from './components/WorkBossPage';
import { ProjectsBossPage } from './components/ProjectsBossPage';
import { ROUTES } from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.root} element={<Navigate to={ROUTES.editorial} replace />} />
        <Route path={ROUTES.editorial} element={<EditorialIdleGame />} />
        <Route path={ROUTES.workBoss} element={<WorkBossPage />} />
        <Route path={ROUTES.projectsBoss} element={<ProjectsBossPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
