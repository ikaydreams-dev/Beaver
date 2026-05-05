import { useEffect, useRef } from 'react';

const CATEGORIES = [
  {
    title: 'SlimFile',
    color: '#06b6d4',
    href: 'https://www.slim-file.com',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 2v7h7M9 13h6M9 17h4" />
      </svg>
    ),
    groups: [
      { label: 'File Compression', items: ['SlimVideo', 'SlimAudio', 'SlimImage', 'SlimDocs'] },
      { label: 'File Conversion',  items: ['SlimConvert', 'SlimMerge', 'SlimSplit'] },
    ],
  },
  {
    title: 'STEPsBuild',
    color: '#8b5cf6',
    href: 'https://stepsbuild.com/',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 20h18M5 20V14h3v6M10 20V8h3v12M17 20V4h3v16" />
      </svg>
    ),
    items: ['STEPsPro', 'STEPsOps', 'STEPsDocs'],
  },
  {
    title: 'Beaver Connect',
    color: '#3b82f6',
    href: '#',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    items: ['B-Mail', 'B-Meet', 'B-Chat'],
  },
  {
    title: 'Beaver Office',
    color: '#a78bfa',
    href: '#',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    items: ['B-Docs', 'B-Whiteboards', 'B-Summarize', 'B-OCR'],
  },
  {
    title: 'Beaver Dam',
    color: '#f59e0b',
    href: '#',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 22V12h6v10" />
      </svg>
    ),
    items: ['B-Market', 'B-Mall', 'B-Mart'],
  },
  {
    title: 'Developers',
    color: '#10b981',
    href: 'https://api.slim-file.com/',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16M18 6l4 6-4 6M6 6L2 12l4 6" />
      </svg>
    ),
    items: ['SlimFile SDK', 'SlimFile CLI', 'API Dashboard'],
  },
];

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    let animId;
    let visible = true;

    const draw = () => {
      if (!visible) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,160,255,${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting; if (visible) draw(); },
      { threshold: 0.01 }
    );
    observer.observe(canvas);
    draw();

    const onResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); observer.disconnect(); };
  }, []);

  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      padding: '120px 24px 80px',
    }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }} />

      {/* Ambient glows */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle, #7c3aed 0%, transparent 65%)', top: -300, left: -300, opacity: 0.22 }} />
        <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, #0891b2 0%, transparent 65%)', top: 100, right: -200, opacity: 0.16 }} />
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, #d97706 0%, transparent 65%)', bottom: -100, left: '35%', opacity: 0.12 }} />
      </div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto' }}>

        {/* Headline */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '7px 18px', borderRadius: 999,
              background: 'rgba(139,92,246,0.1)',
              border: '1px solid rgba(139,92,246,0.3)',
              backdropFilter: 'blur(8px)',
              fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
              color: '#c4b5fd',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a78bfa', display: 'inline-block', boxShadow: '0 0 8px #a78bfa' }} />
              Beaver Technologies
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 800,
            fontSize: 'clamp(48px, 8vw, 88px)',
            lineHeight: 1.02, letterSpacing: '-3px',
            color: '#f1f5f9', marginBottom: 24,
          }}>
            We Build<br />
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa 0%, #38bdf8 50%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>What Matters.</span>
          </h1>

          <p style={{
            fontSize: 'clamp(15px, 2vw, 18px)',
            color: 'rgba(241,245,249,0.55)',
            maxWidth: 560, margin: '0 auto 40px',
            lineHeight: 1.75, fontWeight: 400,
          }}>
            The parent company behind <strong style={{ color: '#c4b5fd', fontWeight: 600 }}>STEPsBuild</strong> and <strong style={{ color: '#67e8f9', fontWeight: 600 }}>SlimFile</strong> — purposeful software built to solve real problems.
          </p>

          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#about" className="btn-primary">
              Learn More
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#contact" className="btn-ghost">Get in Touch</a>
          </div>
        </div>

        {/* Product grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 16,
        }}>
          {CATEGORIES.map(cat => {
            const isLive = cat.href !== '#';
            return (
              <a
                key={cat.title}
                href={cat.href}
                target={isLive ? '_blank' : undefined}
                rel="noopener noreferrer"
                onClick={e => { if (!isLive) e.preventDefault(); }}
                style={{
                  display: 'block',
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid rgba(255,255,255,0.07)`,
                  borderTop: `2px solid ${cat.color}`,
                  borderRadius: 16,
                  padding: '24px 24px 20px',
                  textDecoration: 'none',
                  cursor: isLive ? 'pointer' : 'default',
                  transition: 'all 0.25s ease',
                  position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  if (!isLive) return;
                  e.currentTarget.style.background = `rgba(255,255,255,0.05)`;
                  e.currentTarget.style.borderColor = `${cat.color}50`;
                  e.currentTarget.style.borderTopColor = cat.color;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 16px 48px ${cat.color}18`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.borderTopColor = cat.color;
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${cat.color}15`,
                  border: `1px solid ${cat.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: cat.color, marginBottom: 14,
                }}>
                  {cat.icon}
                </div>

                {/* Title row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 15, color: '#f1f5f9' }}>
                    {cat.title}
                  </span>
                  {!isLive && (
                    <span style={{
                      fontSize: 9, fontWeight: 700, letterSpacing: '0.05em',
                      color: '#f59e0b', background: 'rgba(245,158,11,0.1)',
                      border: '1px solid rgba(245,158,11,0.2)',
                      padding: '2px 6px', borderRadius: 4,
                    }}>SOON</span>
                  )}
                </div>

                {/* Items */}
                {cat.groups ? (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 12px' }}>
                    {cat.groups.map(g => (
                      <div key={g.label}>
                        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: `${cat.color}99`, marginBottom: 4 }}>{g.label}</p>
                        {g.items.map(i => (
                          <p key={i} style={{ fontSize: 12, color: 'rgba(241,245,249,0.45)', lineHeight: 1.8 }}>{i}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px' }}>
                    {cat.items.map(i => (
                      <span key={i} style={{ fontSize: 12, color: 'rgba(241,245,249,0.45)', lineHeight: 1.8 }}>{i}</span>
                    ))}
                  </div>
                )}
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
