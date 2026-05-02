import { useState, useRef } from 'react';
import logo from '../assets/logo.svg';

const MEGA_MENU = [
  {
    title: 'Beaver Office',
    items: [
      { name: 'Docs',        href: 'https://www.slim-file.com/documents' },
      { name: 'Whiteboards', href: 'https://www.slim-file.com/my-whiteboards' },
      { name: 'Summarize',   href: 'https://www.slim-file.com/summarize' },
      { name: 'OCR',         href: 'https://www.slim-file.com/ocr-tool' },
    ],
  },
  {
    title: 'Beaver Connect',
    items: [
      { name: 'Meet', href: 'https://www.slim-file.com/meet' },
      { name: 'Chat', href: 'https://www.slim-file.com/workspaces' },
    ],
  },
  {
    title: 'Beaver Compress',
    items: [
      {
        name: 'SlimFile',
        href: null,
        sub: [
          { name: 'Convert',           href: 'https://www.slim-file.com/convert-only' },
          { name: 'Merger & Splitter', href: 'https://www.slim-file.com/forge' },
        ],
      },
      { name: 'SlimVideo',           href: '#' },
      { name: 'SlimAudio',           href: '#' },
      { name: 'SlimConvert + SlimFile', href: 'https://www.slim-file.com/convert-compress' },
    ],
  },
  {
    title: 'Beaver Developers',
    items: [
      { name: 'SlimFile SDK',  href: 'https://www.npmjs.com/package/@slimfile/sdk' },
      { name: 'SlimFile CLI',  href: 'https://www.npmjs.com/package/@slimfile/cli' },
      { name: 'API Dashboard', href: 'https://api.slim-file.com/' },
    ],
  },
  {
    title: 'Beaver STEPs',
    items: [
      { name: 'STEPsBuild',  href: 'https://stepsbuild.com/' },
      { name: 'STEPsOps',    href: 'https://stepsbuild.com/' },
      { name: 'STEPsReport', href: 'https://stepsbuild.com/' },
    ],
  },
  {
    title: 'Whitelabel',
    items: [
      { name: 'Dockets',            href: 'https://cid.stepsbuild.com/' },
      { name: 'Media Optimization', href: '#' },
    ],
  },
  {
    title: 'Beaver Mall',
    items: [],
  },
];

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'Why Beaver', href: '#why' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen,   setMegaOpen]   = useState(false);
  const [subOpen,    setSubOpen]    = useState(null);
  const megaTimer = useRef(null);
  const subTimer  = useRef(null);
  const navRef    = useRef(null);

  const openMega = () => { clearTimeout(megaTimer.current); setMegaOpen(true); };
  const closeMega = () => {
    megaTimer.current = setTimeout(() => { setMegaOpen(false); setSubOpen(null); }, 150);
  };
  const openSub  = name => { clearTimeout(subTimer.current); setSubOpen(name); };
  const closeSub = ()   => { subTimer.current = setTimeout(() => setSubOpen(null), 120); };

  return (
    <>
      <nav ref={navRef}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src={logo} alt="Beaver" style={{ height: 56 }} />
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 18, color: '#f1f5f9', letterSpacing: '-0.3px' }}>
            Beaver Technologies
          </span>
        </a>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <button
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
            style={{
              display: 'flex', alignItems: 'center', gap: 5,
              background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              color: megaOpen ? '#f1f5f9' : 'rgba(241,245,249,0.7)',
              fontSize: 14, fontWeight: 500, fontFamily: 'Poppins, sans-serif',
              transition: 'color 0.2s',
            }}
          >
            Products
            <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
              style={{ transition: 'transform 0.2s', transform: megaOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} style={{
              color: 'rgba(241,245,249,0.7)', textDecoration: 'none',
              fontSize: 14, fontWeight: 500, transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#f1f5f9'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(241,245,249,0.7)'}
            >{l.label}</a>
          ))}
        </div>

        {/* CTA */}
        <a href="#contact" className="btn-primary" style={{ padding: '10px 24px', fontSize: 14 }}>
          Get in Touch
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: 'none', background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: 4 }}
          className="mobile-burger"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            background: 'rgba(5,6,15,0.98)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            padding: '20px 24px',
            display: 'flex', flexDirection: 'column', gap: 20,
            maxHeight: '70vh', overflowY: 'auto',
          }}>
            {MEGA_MENU.map(cat => (
              <div key={cat.title}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(241,245,249,0.35)', marginBottom: 8 }}>
                  {cat.title}
                </p>
                {cat.items.map(item => item.sub ? (
                  <div key={item.name} style={{ marginBottom: 4 }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: 'rgba(241,245,249,0.5)', padding: '3px 0' }}>{item.name}</p>
                    {item.sub.map(s => (
                      <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                        onClick={() => setMobileOpen(false)}
                        style={{ display: 'block', color: 'rgba(241,245,249,0.65)', textDecoration: 'none', fontSize: 13, padding: '3px 0 3px 14px' }}
                      >{s.name}</a>
                    ))}
                  </div>
                ) : (
                  <a key={item.name} href={item.href}
                    target={item.href !== '#' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    onClick={e => { if (item.href === '#') e.preventDefault(); setMobileOpen(false); }}
                    style={{ display: 'block', color: item.href === '#' ? 'rgba(241,245,249,0.28)' : 'rgba(241,245,249,0.65)', textDecoration: 'none', fontSize: 13, padding: '3px 0' }}
                  >{item.name}</a>
                ))}
                {cat.items.length === 0 && (
                  <span style={{ fontSize: 12, color: 'rgba(241,245,249,0.25)', fontStyle: 'italic' }}>Coming soon</span>
                )}
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {NAV_LINKS.map(l => (
                <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)} style={{
                  color: 'rgba(241,245,249,0.8)', textDecoration: 'none', fontSize: 16, fontWeight: 500,
                }}>{l.label}</a>
              ))}
              <a href="#contact" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}
                onClick={() => setMobileOpen(false)}>
                Get in Touch
              </a>
            </div>
          </div>
        )}

        <style>{`
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .mobile-burger { display: flex !important; }
            nav > a.btn-primary { display: none; }
          }
        `}</style>
      </nav>

      {/* Mega menu panel */}
      {megaOpen && (
        <div
          onMouseEnter={openMega}
          onMouseLeave={closeMega}
          style={{
            position: 'fixed',
            top: navRef.current?.offsetHeight ?? 96,
            left: 0, right: 0,
            background: 'rgba(5,6,15,0.98)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            padding: '28px 40px 32px',
            zIndex: 99,
          }}
        >
          <div style={{
            maxWidth: 1200, margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: 20,
          }}>
            {MEGA_MENU.map(cat => (
              <div key={cat.title}>
                <p style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'rgba(241,245,249,0.35)',
                  marginBottom: 12,
                }}>{cat.title}</p>

                {cat.items.map(item => item.sub ? (
                  /* Sub-dropdown trigger */
                  <div
                    key={item.name}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => openSub(item.name)}
                    onMouseLeave={closeSub}
                  >
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '5px 0', cursor: 'default',
                      color: subOpen === item.name ? '#f1f5f9' : 'rgba(241,245,249,0.65)',
                      fontSize: 13, fontWeight: 500,
                      transition: 'color 0.15s',
                    }}>
                      {item.name}
                      <svg width="9" height="9" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    {subOpen === item.name && (
                      <div
                        onMouseEnter={() => openSub(item.name)}
                        onMouseLeave={closeSub}
                        style={{
                          position: 'absolute',
                          left: '100%', top: -4,
                          background: 'rgba(12,13,24,0.99)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: 10,
                          padding: '8px 0',
                          minWidth: 170,
                          zIndex: 101,
                          boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
                        }}
                      >
                        {item.sub.map(s => (
                          <a
                            key={s.name}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'block', padding: '8px 18px',
                              color: 'rgba(241,245,249,0.65)',
                              textDecoration: 'none',
                              fontSize: 13, fontWeight: 500,
                              transition: 'color 0.15s, background 0.15s',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.color = '#f1f5f9'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(241,245,249,0.65)'; e.currentTarget.style.background = 'transparent'; }}
                          >
                            {s.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  /* Regular item */
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.href !== '#' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    onClick={e => { if (item.href === '#') e.preventDefault(); }}
                    style={{
                      display: 'block', padding: '5px 0',
                      color: item.href === '#' ? 'rgba(241,245,249,0.28)' : 'rgba(241,245,249,0.65)',
                      textDecoration: 'none',
                      fontSize: 13, fontWeight: 500,
                      cursor: item.href === '#' ? 'default' : 'pointer',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={e => { if (item.href !== '#') e.currentTarget.style.color = '#f1f5f9'; }}
                    onMouseLeave={e => { if (item.href !== '#') e.currentTarget.style.color = 'rgba(241,245,249,0.65)'; }}
                  >
                    {item.name}
                    {item.href === '#' && (
                      <span style={{
                        marginLeft: 5, fontSize: 9, fontWeight: 700, letterSpacing: '0.04em',
                        color: '#f59e0b', background: 'rgba(245,158,11,0.1)',
                        border: '1px solid rgba(245,158,11,0.2)',
                        padding: '1px 4px', borderRadius: 3, verticalAlign: 'middle',
                      }}>SOON</span>
                    )}
                  </a>
                ))}

                {cat.items.length === 0 && (
                  <span style={{ fontSize: 12, color: 'rgba(241,245,249,0.22)', fontStyle: 'italic' }}>Coming soon</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
