import { useEffect, useRef } from 'react';
import {
  Video, Music, Image, FileText, RefreshCw, GitMerge, Scissors,
  Trophy, Settings2, BookOpen, Mail, MessageSquare, PenLine,
  AlignLeft, ScanText, Store, Building2, Package, Code2, Terminal, Globe,
} from 'lucide-react';

/* ─── Ring data ───────────────────────────────────────────────────── */
const RINGS = [
  {
    radius: 105, duration: 22, reverse: false, size: 42,
    items: [
      { label: 'SlimVideo',  color: '#06b6d4', Icon: Video,    href: '#' },
      { label: 'SlimAudio',  color: '#06b6d4', Icon: Music,    href: 'https://audio.slim-file.com/' },
      { label: 'SlimImage',  color: '#06b6d4', Icon: Image,    href: 'https://www.slim-file.com/compress' },
      { label: 'SlimDocs',   color: '#06b6d4', Icon: FileText, href: 'https://www.slim-file.com/compress' },
      { label: 'SlimConvert',color: '#22d3ee', Icon: RefreshCw,href: 'https://www.slim-file.com/convert-only' },
      { label: 'SlimMerge',  color: '#22d3ee', Icon: GitMerge, href: 'https://www.slim-file.com/forge' },
      { label: 'SlimSplit',  color: '#22d3ee', Icon: Scissors, href: 'https://www.slim-file.com/forge' },
    ],
  },
  {
    radius: 188, duration: 34, reverse: true, size: 48,
    items: [
      { label: 'STEPsPro',  color: '#8b5cf6', Icon: Trophy,        href: 'https://stepsbuild.com/' },
      { label: 'STEPsOps',  color: '#8b5cf6', Icon: Settings2,     href: 'https://stepsbuild.com/' },
      { label: 'STEPsDocs', color: '#8b5cf6', Icon: BookOpen,      href: 'https://stepsbuild.com/' },
      { label: 'B-Mail',    color: '#3b82f6', Icon: Mail,          href: '#' },
      { label: 'B-Meet',    color: '#3b82f6', Icon: Video,         href: 'https://www.slim-file.com/meet' },
      { label: 'B-Chat',    color: '#3b82f6', Icon: MessageSquare, href: 'https://www.slim-file.com/workspaces' },
      { label: 'B-Docs',    color: '#a78bfa', Icon: FileText,      href: 'https://www.slim-file.com/documents' },
      { label: 'B-Boards',  color: '#a78bfa', Icon: PenLine,       href: 'https://www.slim-file.com/my-whiteboards' },
      { label: 'B-Summ',    color: '#a78bfa', Icon: AlignLeft,     href: 'https://www.slim-file.com/summarize' },
    ],
  },
  {
    radius: 272, duration: 48, reverse: false, size: 52,
    items: [
      { label: 'B-OCR',    color: '#a78bfa', Icon: ScanText,  href: 'https://www.slim-file.com/ocr-tool' },
      { label: 'B-Market', color: '#f59e0b', Icon: Store,     href: '#' },
      { label: 'B-Mall',   color: '#f59e0b', Icon: Building2, href: 'https://mall.beaver-llc.com/' },
      { label: 'B-Mart',   color: '#f59e0b', Icon: Package,   href: '#' },
      { label: 'SF SDK',   color: '#10b981', Icon: Code2,     href: 'https://www.npmjs.com/package/@slimfile/sdk' },
      { label: 'SF CLI',   color: '#10b981', Icon: Terminal,  href: 'https://www.npmjs.com/package/@slimfile/cli' },
      { label: 'API',      color: '#10b981', Icon: Globe,     href: 'https://api.slim-file.com/' },
    ],
  },
];

/* ─── Orbit ring ──────────────────────────────────────────────────── */
function Ring({ radius, duration, reverse, size, items }) {
  return (
    <>
      {/* Ring track */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        width: radius * 2, height: radius * 2,
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.06)',
        pointerEvents: 'none',
      }} />

      {/* Orbiting items */}
      {items.map((item, i) => {
        const isLive = item.href !== '#';
        return (
          <div
            key={item.label}
            className={reverse ? 'orbit-ccw' : 'orbit-cw'}
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
              title={item.label}
              style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: 3,
                width: '100%', height: '100%',
                borderRadius: '50%',
                background: `${item.color}14`,
                border: `1.5px solid ${item.color}35`,
                color: item.color,
                textDecoration: 'none',
                cursor: isLive ? 'pointer' : 'default',
                transition: 'background 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                opacity: isLive ? 1 : 0.45,
              }}
              onMouseEnter={e => {
                if (!isLive) return;
                e.currentTarget.style.background = `${item.color}28`;
                e.currentTarget.style.borderColor = `${item.color}70`;
                e.currentTarget.style.boxShadow = `0 0 18px ${item.color}50`;
                e.currentTarget.style.transform = 'scale(1.18)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = `${item.color}14`;
                e.currentTarget.style.borderColor = `${item.color}35`;
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <item.Icon size={size > 46 ? 17 : 15} strokeWidth={1.8} />
              <span style={{
                fontSize: size > 46 ? 7.5 : 7,
                fontWeight: 700,
                letterSpacing: '0.02em',
                color: item.color,
                whiteSpace: 'nowrap',
                lineHeight: 1,
              }}>
                {item.label}
              </span>
            </a>
          </div>
        );
      })}
    </>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────── */
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
      alpha: Math.random() * 0.2 + 0.04,
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
        <div className="blob-1" style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, #7c3aed 0%, transparent 65%)', top: -220, left: -180, opacity: 0.2 }} />
        <div className="blob-2" style={{ position: 'absolute', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, #0891b2 0%, transparent 65%)', top: 80, right: -140, opacity: 0.15 }} />
        <div className="blob-3" style={{ position: 'absolute', width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, #d97706 0%, transparent 65%)', bottom: -60, left: '40%', opacity: 0.12 }} />
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
            fontSize: 'clamp(15px, 1.5vw, 18px)',
            color: 'rgba(241,245,249,0.5)',
            maxWidth: 460, lineHeight: 1.75,
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 620 }}>
          <div style={{ position: 'relative', width: 580, height: 580 }}>

            {RINGS.map((ring, i) => (
              <Ring key={i} {...ring} />
            ))}

            {/* Center orb */}
            <div style={{
              position: 'absolute',
              top: '50%', left: '50%',
              width: 96, height: 96,
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
              background: 'rgba(5,6,15,0.9)',
              border: '1.5px solid rgba(139,92,246,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 40px rgba(139,92,246,0.5), 0 0 80px rgba(139,92,246,0.15)',
              zIndex: 3,
              padding: 16,
            }}>
              <img src="/logo-icon.png" alt="Beaver Technologies" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />
            </div>

          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="scroll-cue" style={{
        position: 'absolute', bottom: 28, left: '50%',
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
        .orbit-cw  { animation: orbit-cw  linear infinite; }
        .orbit-ccw { animation: orbit-ccw linear infinite; }
        @keyframes blob1 {
          0%,100% { transform: translate(0,0) scale(1); }
          40%     { transform: translate(35px,-25px) scale(1.05); }
        }
        @keyframes blob2 {
          0%,100% { transform: translate(0,0) scale(1); }
          40%     { transform: translate(-28px,22px) scale(1.07); }
        }
        @keyframes blob3 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%     { transform: translate(18px,28px) scale(1.06); }
        }
        @keyframes scrollBounce {
          0%,100% { transform: translateX(-50%) translateY(0); opacity: 0.2; }
          50%     { transform: translateX(-50%) translateY(6px); opacity: 0.4; }
        }
        .blob-1 { animation: blob1 9s ease-in-out infinite; }
        .blob-2 { animation: blob2 11s ease-in-out infinite; }
        .blob-3 { animation: blob3 13s ease-in-out infinite; }
        .scroll-cue { animation: scrollBounce 2.5s ease-in-out infinite; }
        @media (max-width: 900px) {
          .orbit-rings-wrap { display: none; }
        }
      `}</style>
    </section>
  );
}
