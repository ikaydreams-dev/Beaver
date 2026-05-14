import { useEffect, useRef } from 'react';
import {
  FileArchive, BarChart3, MessageSquare,
  LayoutGrid, ShoppingBag, Code2,
} from 'lucide-react';

const INNER = [
  { name: 'SlimFile',   color: '#06b6d4', icon: FileArchive, href: 'https://www.slim-file.com' },
  { name: 'STEPsBuild', color: '#8b5cf6', icon: BarChart3,   href: 'https://stepsbuild.com' },
  { name: 'Developers', color: '#10b981', icon: Code2,        href: 'https://api.slim-file.com/' },
];

const OUTER = [
  { name: 'Beaver Connect', color: '#3b82f6', icon: MessageSquare, href: '#' },
  { name: 'Beaver Office',  color: '#a78bfa', icon: LayoutGrid,    href: '#' },
  { name: 'Beaver Dam',     color: '#f59e0b', icon: ShoppingBag,   href: '#' },
];

/* Place N items evenly on a ring using CSS transform */
function Ring({ items, radius, duration, reverse, size = 52 }) {
  const ringSize = radius * 2 + size;
  return (
    <div style={{
      position: 'absolute',
      width: ringSize, height: ringSize,
      top: '50%', left: '50%',
      transform: `translate(-50%, -50%)`,
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,0.07)',
    }}>
      {items.map((item, i) => {
        const Icon = item.icon;
        const isLive = item.href !== '#';
        return (
          <div
            key={item.name}
            className={`orbit-item orbit-item-${reverse ? 'ccw' : 'cw'}`}
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              width: size, height: size,
              marginTop: -(size / 2),
              marginLeft: -(size / 2),
              '--r': `${radius}px`,
              animationDuration: `${duration}s`,
              animationDelay: `-${(duration / items.length) * i}s`,
            }}
          >
            <a
              href={isLive ? item.href : undefined}
              target={isLive ? '_blank' : undefined}
              rel="noopener noreferrer"
              onClick={e => { if (!isLive) e.preventDefault(); }}
              title={item.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
                width: '100%', height: '100%',
                borderRadius: '50%',
                background: `${item.color}15`,
                border: `1.5px solid ${item.color}40`,
                color: item.color,
                textDecoration: 'none',
                cursor: isLive ? 'pointer' : 'default',
                transition: 'all 0.25s ease',
                boxShadow: `0 0 0 0 ${item.color}`,
              }}
              onMouseEnter={e => {
                if (!isLive) return;
                e.currentTarget.style.background = `${item.color}28`;
                e.currentTarget.style.borderColor = `${item.color}80`;
                e.currentTarget.style.boxShadow = `0 0 20px ${item.color}40`;
                e.currentTarget.style.transform = 'scale(1.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = `${item.color}15`;
                e.currentTarget.style.borderColor = `${item.color}40`;
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Icon size={18} strokeWidth={1.8} />
              <span style={{
                fontSize: 8, fontWeight: 700, letterSpacing: '0.03em',
                color: item.color, opacity: 0.85, whiteSpace: 'nowrap',
                lineHeight: 1,
              }}>
                {item.name.replace('Beaver ', '')}
              </span>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.2,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.25 + 0.05,
    }));

    let animId, visible = true;
    const draw = () => {
      if (!visible) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;  if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
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
      position: 'relative',
      overflow: 'hidden',
      padding: '120px 40px 80px',
    }}>
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
      }} />

      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }} />

      {/* Animated blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div className="hero-blob blob-1" style={{ position: 'absolute', width: 650, height: 650, borderRadius: '50%', background: 'radial-gradient(circle, #7c3aed 0%, transparent 65%)', top: -250, left: -200, opacity: 0.22 }} />
        <div className="hero-blob blob-2" style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, #0891b2 0%, transparent 65%)', top: 60, right: -150, opacity: 0.16 }} />
        <div className="hero-blob blob-3" style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, #d97706 0%, transparent 65%)', bottom: -80, left: '42%', opacity: 0.13 }} />
      </div>

      {/* Split layout */}
      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: 1200, width: '100%', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 40,
        alignItems: 'center',
      }}>

        {/* LEFT — text */}
        <div>
          <div style={{ marginBottom: 28 }}>
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

          <h1 style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 800,
            fontSize: 'clamp(44px, 6vw, 80px)',
            lineHeight: 1.0, letterSpacing: '-3px',
            color: '#f1f5f9', marginBottom: 24,
          }}>
            We Build<br />
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa 0%, #38bdf8 50%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>What Matters.</span>
          </h1>

          <p style={{
            fontSize: 'clamp(15px, 1.6vw, 18px)',
            color: 'rgba(241,245,249,0.5)',
            maxWidth: 460,
            lineHeight: 1.75, fontWeight: 400,
            marginBottom: 40,
          }}>
            The parent company behind{' '}
            <strong style={{ color: '#c4b5fd', fontWeight: 600 }}>STEPsBuild</strong> and{' '}
            <strong style={{ color: '#67e8f9', fontWeight: 600 }}>SlimFile</strong>{' '}
            — purposeful software built to solve real problems.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#about" className="btn-primary" style={{ padding: '14px 36px', fontSize: 15 }}>
              Explore
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#contact" className="btn-ghost" style={{ padding: '14px 36px', fontSize: 15 }}>Get in Touch</a>
          </div>
        </div>

        {/* RIGHT — orbital rings */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          height: 520,
          position: 'relative',
        }}>
          {/* Rings container */}
          <div style={{ position: 'relative', width: 480, height: 480 }}>

            {/* Outer ring track */}
            <div style={{
              position: 'absolute', inset: 0,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.06)',
            }} />

            {/* Inner ring track */}
            <div style={{
              position: 'absolute',
              top: '50%', left: '50%',
              width: 300, height: 300,
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.06)',
            }} />

            {/* Center orb */}
            <div style={{
              position: 'absolute',
              top: '50%', left: '50%',
              width: 64, height: 64,
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 24, color: 'white',
              boxShadow: '0 0 40px rgba(139,92,246,0.5), 0 0 80px rgba(139,92,246,0.2)',
              zIndex: 3,
            }}>B</div>

            {/* Inner orbit — 3 items, radius 150 */}
            <Ring items={INNER} radius={150} duration={22} reverse={false} size={56} />

            {/* Outer orbit — 3 items, radius 225 */}
            <Ring items={OUTER} radius={225} duration={32} reverse={true} size={60} />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="scroll-cue" style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
        color: 'rgba(241,245,249,0.2)', zIndex: 2,
      }}>
        <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(0deg)   translateX(var(--r)) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(var(--r)) rotate(-360deg); }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(0deg)    translateX(var(--r)) rotate(0deg); }
          to   { transform: rotate(-360deg) translateX(var(--r)) rotate(360deg); }
        }
        .orbit-item-cw {
          --r: 0px;
          animation: orbit-cw linear infinite;
        }
        .orbit-item-ccw {
          --r: 0px;
          animation: orbit-ccw linear infinite;
        }
        @keyframes blob1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(40px,-30px) scale(1.06); }
          66%      { transform: translate(-20px,20px) scale(0.95); }
        }
        @keyframes blob2 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(-30px,25px) scale(1.08); }
          66%      { transform: translate(25px,-15px) scale(0.96); }
        }
        @keyframes blob3 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(20px,30px) scale(1.07); }
        }
        @keyframes scrollBounce {
          0%,100% { transform: translateX(-50%) translateY(0); opacity: 0.2; }
          50%      { transform: translateX(-50%) translateY(6px); opacity: 0.4; }
        }
        .blob-1 { animation: blob1 9s ease-in-out infinite; }
        .blob-2 { animation: blob2 11s ease-in-out infinite; }
        .blob-3 { animation: blob3 13s ease-in-out infinite; }
        .scroll-cue { animation: scrollBounce 2.5s ease-in-out infinite; }
        @media (max-width: 768px) {
          .hero-rings { display: none; }
        }
      `}</style>
    </section>
  );
}
