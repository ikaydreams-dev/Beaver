import { Sun, Moon, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ theme, toggleTheme, currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeColor = theme === 'dark' ? '#3b82f6' : '#1e3a8a';

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        transition: 'all 0.3s ease',
      }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <button
          onClick={() => onNavigate('landing')}
          aria-label="Go to Beaver Technologies homepage"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <img
            src={theme === 'dark' ? '/new-logo-2.jpg' : '/new-logo-1.png'}
            alt="Beaver Technologies Logo - Enterprise Software Solutions"
            width="32"
            height="32"
            style={{ height: 32, flexShrink: 0 }}
          />
          <span style={{
            fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(14px, 4vw, 20px)',
            color: 'var(--text)',
            letterSpacing: '-0.5px',
            whiteSpace: 'nowrap',
          }}>
            Beaver Technologies
          </span>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            color: 'var(--text)',
          }}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav Links & Theme Toggle */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
          className="desktop-nav"
        >
          {/* Navigation Links */}
          <button
            onClick={() => onNavigate('landing')}
            aria-label="Navigate to home page"
            aria-current={currentPage === 'landing' ? 'page' : undefined}
            style={{
              background: 'none',
              border: 'none',
              padding: '8px 16px',
              cursor: 'pointer',
              fontSize: 15,
              fontWeight: 500,
              color: currentPage === 'landing' ? activeColor : 'var(--text-secondary)',
              transition: 'all 0.2s ease',
              borderBottom: currentPage === 'landing' ? `2px solid ${activeColor}` : '2px solid transparent',
            }}
            onMouseEnter={e => {
              if (currentPage !== 'landing') {
                e.currentTarget.style.color = 'var(--text)';
              }
            }}
            onMouseLeave={e => {
              if (currentPage !== 'landing') {
                e.currentTarget.style.color = 'var(--text-secondary)';
              }
            }}
          >
            Home
          </button>

          <button
            onClick={() => onNavigate('products')}
            aria-label="Navigate to products page"
            aria-current={currentPage === 'products' ? 'page' : undefined}
            style={{
              background: 'none',
              border: 'none',
              padding: '8px 16px',
              cursor: 'pointer',
              fontSize: 15,
              fontWeight: 500,
              color: currentPage === 'products' ? activeColor : 'var(--text-secondary)',
              transition: 'all 0.2s ease',
              borderBottom: currentPage === 'products' ? `2px solid ${activeColor}` : '2px solid transparent',
            }}
            onMouseEnter={e => {
              if (currentPage !== 'products') {
                e.currentTarget.style.color = 'var(--text)';
              }
            }}
            onMouseLeave={e => {
              if (currentPage !== 'products') {
                e.currentTarget.style.color = 'var(--text-secondary)';
              }
            }}
          >
            Products
          </button>

          <button
            onClick={() => onNavigate('blog')}
            aria-label="Navigate to blog page"
            aria-current={currentPage === 'blog' ? 'page' : undefined}
            style={{
              background: 'none',
              border: 'none',
              padding: '8px 16px',
              cursor: 'pointer',
              fontSize: 15,
              fontWeight: 500,
              color: currentPage === 'blog' ? activeColor : 'var(--text-secondary)',
              transition: 'all 0.2s ease',
              borderBottom: currentPage === 'blog' ? `2px solid ${activeColor}` : '2px solid transparent',
            }}
            onMouseEnter={e => {
              if (currentPage !== 'blog') {
                e.currentTarget.style.color = 'var(--text)';
              }
            }}
            onMouseLeave={e => {
              if (currentPage !== 'blog') {
                e.currentTarget.style.color = 'var(--text-secondary)';
              }
            }}
          >
            Blog
          </button>

          {/* Email */}
          <a
            href="mailto:admin@beaver-llc.com"
            aria-label="Contact Beaver Technologies via email"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '8px 12px',
              textDecoration: 'none',
              color: 'var(--text-secondary)',
              fontSize: 14,
              fontWeight: 500,
              transition: 'all 0.2s ease',
              borderRadius: 6,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = activeColor;
              e.currentTarget.style.background = 'var(--card-bg)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <Mail size={16} />
            <span>Contact</span>
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '8px 12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              color: 'var(--text)',
              fontSize: 14,
              fontWeight: 500,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.borderColor = 'var(--accent)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--nav-bg)',
              borderBottom: '1px solid var(--border)',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
            className="mobile-menu"
          >
            <button
              onClick={() => { onNavigate('landing'); setMobileMenuOpen(false); }}
              style={{
                background: 'none',
                border: 'none',
                padding: '12px 16px',
                cursor: 'pointer',
                fontSize: 16,
                fontWeight: 500,
                color: currentPage === 'landing' ? activeColor : 'var(--text)',
                textAlign: 'left',
                borderRadius: 8,
                transition: 'all 0.2s ease',
              }}
            >
              Home
            </button>
            <button
              onClick={() => { onNavigate('products'); setMobileMenuOpen(false); }}
              style={{
                background: 'none',
                border: 'none',
                padding: '12px 16px',
                cursor: 'pointer',
                fontSize: 16,
                fontWeight: 500,
                color: currentPage === 'products' ? activeColor : 'var(--text)',
                textAlign: 'left',
                borderRadius: 8,
                transition: 'all 0.2s ease',
              }}
            >
              Products
            </button>
            <button
              onClick={() => { onNavigate('blog'); setMobileMenuOpen(false); }}
              style={{
                background: 'none',
                border: 'none',
                padding: '12px 16px',
                cursor: 'pointer',
                fontSize: 16,
                fontWeight: 500,
                color: currentPage === 'blog' ? activeColor : 'var(--text)',
                textAlign: 'left',
                borderRadius: 8,
                transition: 'all 0.2s ease',
              }}
            >
              Blog
            </button>
            <a
              href="mailto:admin@beaver-llc.com"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 16px',
                textDecoration: 'none',
                color: 'var(--text)',
                fontSize: 16,
                fontWeight: 500,
                borderRadius: 8,
              }}
            >
              <Mail size={18} />
              Contact
            </a>
            <button
              onClick={toggleTheme}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                padding: '12px 16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: 'var(--text)',
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
