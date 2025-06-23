import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDayMode, setIsDayMode] = useState(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'day';
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDayMode ? 'day' : 'night');
    
    // Apply theme class to body
    if (isDayMode) {
      document.body.classList.add('day-mode');
    } else {
      document.body.classList.remove('day-mode');
    }
  }, [isDayMode]);

  const toggleTheme = () => {
    setIsDayMode(!isDayMode);
  };

  return { isDayMode, toggleTheme };
}; 