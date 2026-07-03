import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Products from './components/Products';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [currentPage, setCurrentPage] = useState('landing');
  const [currentBlogPost, setCurrentBlogPost] = useState(null);

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
    setCurrentBlogPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const viewBlogPost = (slug) => {
    setCurrentBlogPost(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToBlog = () => {
    setCurrentBlogPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    if (currentPage === 'blog') {
      return currentBlogPost ? (
        <BlogPost slug={currentBlogPost} onBack={backToBlog} />
      ) : (
        <Blog onNavigate={navigateTo} onViewPost={viewBlogPost} />
      );
    }

    if (currentPage === 'products') {
      return <Products />;
    }

    return <Landing onNavigate={navigateTo} />;
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
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}
