import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Products from './components/Products';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [currentPage, setCurrentPage] = useState('landing');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        currentPage={currentPage}
        onNavigate={navigateTo}
      />
      {currentPage === 'landing' ? (
        <Landing onNavigate={navigateTo} />
      ) : (
        <Products />
      )}
    </>
  );
}
