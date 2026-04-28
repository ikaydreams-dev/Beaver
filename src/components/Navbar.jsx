import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'Why Beaver', href: '#why' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav>
      {/* Logo */}
      <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 18, color: 'white',
        }}>B</div>
        <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 20, color: '#f1f5f9', letterSpacing: '-0.5px' }}>
          Beaver
        </span>
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
        {links.map(l => (
          <a key={l.label} href={l.href} style={{
            color: 'rgba(241,245,249,0.7)', textDecoration: 'none',
            fontSize: 14, fontWeight: 500, transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.target.style.color = '#f1f5f9'}
            onMouseLeave={e => e.target.style.color = 'rgba(241,245,249,0.7)'}
          >{l.label}</a>
        ))}
      </div>

      {/* CTA */}
      <a href="#contact" className="btn-primary" style={{ padding: '10px 24px', fontSize: 14 }}>
        Get in Touch
      </a>

      {/* Mobile burger */}
      <button
        onClick={() => setOpen(!open)}
        style={{ display: 'none', background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: 4 }}
        className="mobile-burger"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {open
            ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          }
        </svg>
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(5,6,15,0.97)', backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
              color: 'rgba(241,245,249,0.8)', textDecoration: 'none', fontSize: 16, fontWeight: 500,
            }}>{l.label}</a>
          ))}
          <a href="#contact" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>
            Get in Touch
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: flex !important; }
          nav > a:last-of-type.btn-primary:not(.mobile-burger) { display: none; }
        }
      `}</style>
    </nav>
  );
}
