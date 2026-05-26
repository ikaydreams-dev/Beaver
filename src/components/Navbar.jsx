import { Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav style={{
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
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="/" style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}>
          <img
            src="/logo-transparent.png"
            alt="Beaver"
            style={{ height: 40 }}
          />
          <span style={{
            fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
            fontWeight: 600,
            fontSize: 20,
            color: 'var(--text)',
            letterSpacing: '-0.5px',
          }}>
            Beaver
          </span>
        </a>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
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
    </nav>
  );
}
