import { useState, useRef } from 'react';
import logo from '../assets/logo.svg';

const MEGA_MENU = [
  {
    title: 'SlimFile',
    span: 2,
    subGroups: [
      {
        title: 'File Compression',
        items: [
          { name: 'SlimVideo', href: '#' },
          { name: 'SlimAudio', href: '#' },
          { name: 'SlimImage', href: 'https://www.slim-file.com/compress' },
          { name: 'SlimDocs',  href: 'https://www.slim-file.com/compress' },
        ],
      },
      {
        title: 'File Conversion',
        items: [
          { name: 'SlimConvert', href: 'https://www.slim-file.com/convert-only' },
          { name: 'SlimMerge',   href: 'https://www.slim-file.com/forge' },
          { name: 'SlimSplit',   href: 'https://www.slim-file.com/forge' },
        ],
      },
    ],
  },
  {
    title: 'STEPsBuild',
    items: [
      { name: 'STEPsPro',  href: 'https://stepsbuild.com/' },
      { name: 'STEPsOps',  href: 'https://stepsbuild.com/' },
      { name: 'STEPsDocs', href: 'https://stepsbuild.com/' },
    ],
  },
  {
    title: 'Beaver Dam',
    items: [
      { name: 'B-Market', href: '#' },
      { name: 'B-Mall',   href: '#' },
      { name: 'B-Mart',   href: '#' },
    ],
  },
  {
    title: 'Developers',
    items: [
      { name: 'SlimFile SDK',  href: 'https://www.npmjs.com/package/@slimfile/sdk' },
      { name: 'SlimFile CLI',  href: 'https://www.npmjs.com/package/@slimfile/cli' },
      { name: 'API Dashboard', href: 'https://api.slim-file.com/' },
    ],
  },
  {
    title: 'Beaver Connect',
    items: [
      { name: 'B-Mail', href: '#' },
      { name: 'B-Meet', href: 'https://www.slim-file.com/meet' },
      { name: 'B-Chat', href: 'https://www.slim-file.com/workspaces' },
    ],
  },
  {
    title: 'Beaver Office',
    items: [
      { name: 'B-Docs',        href: 'https://www.slim-file.com/documents' },
      { name: 'B-Whiteboards', href: 'https://www.slim-file.com/my-whiteboards' },
      { name: 'B-Summarize',   href: 'https://www.slim-file.com/summarize' },
      { name: 'B-OCR',         href: 'https://www.slim-file.com/ocr-tool' },
    ],
  },
];

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'Why Beaver', href: '#why' },
  { label: 'Contact',    href: '#contact' },
];

function MenuLink({ item }) {
  const isHash = item.href === '#';
  return (
    <a
      href={item.href}
      target={!isHash ? '_blank' : undefined}
      rel="noopener noreferrer"
      onClick={e => { if (isHash) e.preventDefault(); }}
      style={{
        display: 'block', padding: '5px 0',
        color: isHash ? 'rgba(241,245,249,0.28)' : 'rgba(241,245,249,0.65)',
        textDecoration: 'none', fontSize: 13, fontWeight: 500,
        cursor: isHash ? 'default' : 'pointer',
        transition: 'color 0.15s',
      }}
      onMouseEnter={e => { if (!isHash) e.currentTarget.style.color = '#f1f5f9'; }}
      onMouseLeave={e => { if (!isHash) e.currentTarget.style.color = 'rgba(241,245,249,0.65)'; }}
    >
      {item.name}
      {isHash && (
        <span style={{
          marginLeft: 5, fontSize: 9, fontWeight: 700, letterSpacing: '0.04em',
          color: '#f59e0b', background: 'rgba(245,158,11,0.1)',
          border: '1px solid rgba(245,158,11,0.2)',
          padding: '1px 4px', borderRadius: 3, verticalAlign: 'middle',
        }}>SOON</span>
      )}
    </a>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen,   setMegaOpen]   = useState(false);
  const megaTimer = useRef(null);
  const navRef    = useRef(null);

  const openMega  = () => { clearTimeout(megaTimer.current); setMegaOpen(true); };
  const closeMega = () => { megaTimer.current = setTimeout(() => setMegaOpen(false), 150); };

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
                {cat.subGroups ? cat.subGroups.map(g => (
                  <div key={g.title} style={{ marginBottom: 10 }}>
                    <p style={{ fontSize: 10, fontWeight: 600, color: 'rgba(241,245,249,0.4)', marginBottom: 4, paddingLeft: 2 }}>{g.title}</p>
                    {g.items.map(item => (
                      <a key={item.name} href={item.href}
                        target={item.href !== '#' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        onClick={e => { if (item.href === '#') e.preventDefault(); setMobileOpen(false); }}
                        style={{ display: 'block', color: item.href === '#' ? 'rgba(241,245,249,0.28)' : 'rgba(241,245,249,0.65)', textDecoration: 'none', fontSize: 13, padding: '3px 0 3px 10px' }}
                      >{item.name}</a>
                    ))}
                  </div>
                )) : cat.items.map(item => (
                  <a key={item.name} href={item.href}
                    target={item.href !== '#' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    onClick={e => { if (item.href === '#') e.preventDefault(); setMobileOpen(false); }}
                    style={{ display: 'block', color: item.href === '#' ? 'rgba(241,245,249,0.28)' : 'rgba(241,245,249,0.65)', textDecoration: 'none', fontSize: 13, padding: '3px 0' }}
                  >{item.name}</a>
                ))}
                {cat.items?.length === 0 && <span style={{ fontSize: 12, color: 'rgba(241,245,249,0.25)', fontStyle: 'italic' }}>Coming soon</span>}
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
            gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr',
            gap: 24,
          }}>
            {MEGA_MENU.map(cat => (
              <div key={cat.title}>
                <p style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'rgba(241,245,249,0.35)',
                  marginBottom: 14,
                }}>{cat.title}</p>

                {cat.subGroups ? (
                  /* SlimFile — two sub-group columns */
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    {cat.subGroups.map(g => (
                      <div key={g.title}>
                        <p style={{ fontSize: 10, fontWeight: 600, color: 'rgba(241,245,249,0.4)', marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{g.title}</p>
                        {g.items.map(item => <MenuLink key={item.name} item={item} />)}
                      </div>
                    ))}
                  </div>
                ) : (
                  cat.items?.map(item => <MenuLink key={item.name} item={item} />)
                )}

                {cat.items?.length === 0 && (
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
