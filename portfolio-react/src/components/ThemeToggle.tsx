import React from 'react';

interface ThemeToggleProps {
  isDayMode: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDayMode, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-8 right-8 z-50 text-sm underline decoration-current underline-offset-4 hover:no-underline transition-all duration-200"
      title={isDayMode ? 'Switch to night mode' : 'Switch to day mode'}
    >
      {isDayMode ? 'night' : 'day'}
    </button>
  );
}; 