import { useEffect, useRef } from 'react';

const PRODUCTS = [
  { name: 'SlimFile',       color: '#06b6d4', href: 'https://www.slim-file.com' },
  { name: 'STEPsBuild',     color: '#8b5cf6', href: 'https://stepsbuild.com' },
  { name: 'Beaver Connect', color: '#3b82f6', href: '#' },
  { name: 'Beaver Office',  color: '#a78bfa', href: '#' },
  { name: 'Beaver Dam',     color: '#f59e0b', href: '#' },
  { name: 'Developers',     color: '#10b981', href: 'https://api.slim-file.com/' },
];

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.2,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.3 + 0.05,
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
      ([e]) => { visible = e.isIntersecting; if (visible) draw(); },
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
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '120px 24px 100px',
    }}>

      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
      }} />

      {/* Particles */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }} />

      {/* Animated glow blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div className="hero-blob blob-1" style={{
          position: 'absolute', width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(circle, #7c3aed 0%, transparent 65%)',
          top: -250, left: -250, opacity: 0.25,
        }} />
        <div className="hero-blob blob-2" style={{
          position: 'absolute', width: 550, height: 550, borderRadius: '50%',
          background: 'radial-gradient(circle, #0891b2 0%, transparent 65%)',
          top: 80, right: -180, opacity: 0.18,
        }} />
        <div className="hero-blob blob-3" style={{
          position: 'absolute', width: 450, height: 450, borderRadius: '50%',
          background: 'radial-gradient(circle, #d97706 0%, transparent 65%)',
          bottom: -80, left: '38%', opacity: 0.14,
        }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>

        {/* Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 20px', borderRadius: 999,
            background: 'rgba(139,92,246,0.1)',
            border: '1px solid rgba(139,92,246,0.35)',
            fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#c4b5fd',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a78bfa', boxShadow: '0 0 8px #a78bfa' }} />
            Beaver Technologies
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'Poppins, sans-serif', fontWeight: 800,
          fontSize: 'clamp(52px, 9vw, 100px)',
          lineHeight: 1.0, letterSpacing: '-4px',
          color: '#f1f5f9', marginBottom: 28,
        }}>
          We Build<br />
          <span style={{
            background: 'linear-gradient(135deg, #a78bfa 0%, #38bdf8 50%, #fbbf24 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>What Matters.</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(16px, 2vw, 20px)',
          color: 'rgba(241,245,249,0.5)',
          maxWidth: 540, margin: '0 auto 48px',
          lineHeight: 1.7, fontWeight: 400,
        }}>
          The parent company behind{' '}
          <strong style={{ color: '#c4b5fd', fontWeight: 600 }}>STEPsBuild</strong> and{' '}
          <strong style={{ color: '#67e8f9', fontWeight: 600 }}>SlimFile</strong>{' '}
          — purposeful software built to solve real problems.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64 }}>
          <a href="#about" className="btn-primary" style={{ padding: '14px 36px', fontSize: 15 }}>
            Explore
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#contact" className="btn-ghost" style={{ padding: '14px 36px', fontSize: 15 }}>Get in Touch</a>
        </div>

        {/* Product strip */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          paddingTop: 32,
          display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 10,
        }}>
          {PRODUCTS.map(p => (
            <a
              key={p.name}
              href={p.href === '#' ? undefined : p.href}
              target={p.href !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              onClick={e => { if (p.href === '#') e.preventDefault(); }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                padding: '7px 16px', borderRadius: 999,
                background: `${p.color}0d`,
                border: `1px solid ${p.color}25`,
                color: p.href === '#' ? 'rgba(241,245,249,0.35)' : 'rgba(241,245,249,0.65)',
                fontSize: 13, fontWeight: 500,
                textDecoration: 'none',
                cursor: p.href === '#' ? 'default' : 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                if (p.href === '#') return;
                e.currentTarget.style.background = `${p.color}20`;
                e.currentTarget.style.borderColor = `${p.color}50`;
                e.currentTarget.style.color = '#f1f5f9';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = `${p.color}0d`;
                e.currentTarget.style.borderColor = `${p.color}25`;
                e.currentTarget.style.color = p.href === '#' ? 'rgba(241,245,249,0.35)' : 'rgba(241,245,249,0.65)';
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: p.color, opacity: p.href === '#' ? 0.4 : 1, flexShrink: 0 }} />
              {p.name}
            </a>
          ))}
        </div>

      </div>

      {/* Scroll cue */}
      <div className="scroll-cue" style={{
        position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        color: 'rgba(241,245,249,0.2)', zIndex: 2,
      }}>
        <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(40px, -30px) scale(1.06); }
          66%       { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(-30px, 25px) scale(1.08); }
          66%       { transform: translate(25px, -15px) scale(0.96); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(20px, 30px) scale(1.07); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.2; }
          50%       { transform: translateX(-50%) translateY(6px); opacity: 0.4; }
        }
        .blob-1 { animation: blob1 9s ease-in-out infinite; }
        .blob-2 { animation: blob2 11s ease-in-out infinite; }
        .blob-3 { animation: blob3 13s ease-in-out infinite; }
        .scroll-cue { animation: scrollBounce 2.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
