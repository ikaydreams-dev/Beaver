import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Products from './components/Products';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [currentPage, setCurrentPage] = useState('landing');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
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
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        currentPage={currentPage}
        onNavigate={navigateTo}
      />
      <div style={{ flex: 1 }}>
        {currentPage === 'landing' ? (
          <Landing onNavigate={navigateTo} />
        ) : (
          <Products />
        )}
      </div>
      <Footer />
    </div>
  );
}
