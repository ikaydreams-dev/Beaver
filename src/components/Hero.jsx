import { useEffect, useRef } from 'react';
import stepsbuildLogo from '../assets/stepsbuild-logomark-white.svg';
import slimfileLogo from '../assets/slimfile-logo.png';

export default function Hero() {
  const canvasRef = useRef(null);

  // Subtle floating particles
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
    const draw = () => {
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
    draw();
    const onResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); };
  }, []);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '120px 24px 80px',
    }}>
      {/* Canvas particles */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }} />

      {/* Deep ambient glows */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)', top: -300, left: -300, opacity: 0.18, filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, #0891b2 0%, transparent 70%)', top: 100, right: -200, opacity: 0.14, filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, #d97706 0%, transparent 70%)', bottom: -100, left: '35%', opacity: 0.1, filter: 'blur(80px)' }} />
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1200, margin: '0 auto' }}>

        {/* Top section — headline */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '7px 18px', borderRadius: 999,
              background: 'rgba(139,92,246,0.1)',
              border: '1px solid rgba(139,92,246,0.3)',
              backdropFilter: 'blur(12px)',
              fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
              color: '#c4b5fd',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a78bfa', display: 'inline-block', boxShadow: '0 0 8px #a78bfa' }} />
              Introducing Beaver
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 800,
            fontSize: 'clamp(52px, 9vw, 96px)',
            lineHeight: 1.02, letterSpacing: '-3px',
            color: '#f1f5f9', marginBottom: 28,
          }}>
            We Build<br />
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa 0%, #38bdf8 50%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>What Matters.</span>
          </h1>

          <p style={{
            fontSize: 'clamp(15px, 2vw, 19px)',
            color: 'rgba(241,245,249,0.55)',
            maxWidth: 580, margin: '0 auto 44px',
            lineHeight: 1.75, fontWeight: 400,
          }}>
            The parent company behind <strong style={{ color: '#c4b5fd', fontWeight: 600 }}>STEPsBuild</strong> and <strong style={{ color: '#67e8f9', fontWeight: 600 }}>SlimFile</strong> — purposeful software built to solve real problems for organisations and individuals across the globe.
          </p>

          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#products" className="btn-primary">
              Explore Our Products
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#services" className="btn-ghost">Software Development</a>
          </div>
        </div>

        {/* Glass cards row — macOS style */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 16,
          maxWidth: 1000,
          margin: '0 auto',
        }}>

          {/* STEPsBuild card */}
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(48px) saturate(180%)',
            WebkitBackdropFilter: 'blur(48px) saturate(180%)',
            borderRadius: 20,
            border: '1px solid rgba(255,255,255,0.12)',
            borderTop: '1px solid rgba(255,255,255,0.22)',
            borderLeft: '1px solid rgba(255,255,255,0.16)',
            padding: '28px 28px 24px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
            position: 'relative', overflow: 'hidden',
            transition: 'all 0.4s ease',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
              e.currentTarget.style.boxShadow = '0 24px 64px rgba(139,92,246,0.3), inset 0 1px 0 rgba(255,255,255,0.15)';
              e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
            }}
          >
            {/* Inner shine */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 60, background: 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 100%)', borderRadius: '20px 20px 0 0', pointerEvents: 'none' }} />
            {/* Accent glow */}
            <div style={{ position: 'absolute', top: -40, right: -40, width: 150, height: 150, borderRadius: '50%', background: '#7c3aed', opacity: 0.15, filter: 'blur(40px)', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <img src={stepsbuildLogo} alt="STEPsBuild" style={{ height: 32, width: 32, objectFit: 'contain', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 18, color: '#f1f5f9' }}>STEPsBuild</span>
              </div>
              <div style={{ fontSize: 13, color: 'rgba(241,245,249,0.5)', lineHeight: 1.6, marginBottom: 20 }}>
                Structured project management from readiness to regenerative impact — with evidence at every step.
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['5-Phase Pathway', 'Evidence-Backed', 'Impact Reports'].map(t => (
                  <span key={t} style={{
                    fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 999,
                    background: 'rgba(139,92,246,0.12)', color: '#c4b5fd',
                    border: '1px solid rgba(139,92,246,0.2)',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* SlimFile card */}
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(48px) saturate(180%)',
            WebkitBackdropFilter: 'blur(48px) saturate(180%)',
            borderRadius: 20,
            border: '1px solid rgba(255,255,255,0.12)',
            borderTop: '1px solid rgba(255,255,255,0.22)',
            borderLeft: '1px solid rgba(255,255,255,0.16)',
            padding: '28px 28px 24px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
            position: 'relative', overflow: 'hidden',
            transition: 'all 0.4s ease',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
              e.currentTarget.style.boxShadow = '0 24px 64px rgba(6,182,212,0.3), inset 0 1px 0 rgba(255,255,255,0.15)';
              e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 60, background: 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 100%)', borderRadius: '20px 20px 0 0', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: -40, right: -40, width: 150, height: 150, borderRadius: '50%', background: '#0891b2', opacity: 0.15, filter: 'blur(40px)', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ marginBottom: 16, display: 'inline-flex', background: 'white', borderRadius: 10, padding: '6px 10px' }}>
                <img src={slimfileLogo} alt="SlimFile" style={{ height: 28, objectFit: 'contain' }} />
              </div>
              <div style={{ fontSize: 13, color: 'rgba(241,245,249,0.5)', lineHeight: 1.6, marginBottom: 20 }}>
                Intelligent file compression and conversion. Fast, browser-based, no installation required.
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['Compress', 'Convert', 'Collaborate'].map(t => (
                  <span key={t} style={{
                    fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 999,
                    background: 'rgba(6,182,212,0.12)', color: '#67e8f9',
                    border: '1px solid rgba(6,182,212,0.2)',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Software Dev card */}
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(48px) saturate(180%)',
            WebkitBackdropFilter: 'blur(48px) saturate(180%)',
            borderRadius: 20,
            border: '1px solid rgba(255,255,255,0.12)',
            borderTop: '1px solid rgba(255,255,255,0.22)',
            borderLeft: '1px solid rgba(255,255,255,0.16)',
            padding: '28px 28px 24px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
            position: 'relative', overflow: 'hidden',
            transition: 'all 0.4s ease',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
              e.currentTarget.style.boxShadow = '0 24px 64px rgba(245,158,11,0.25), inset 0 1px 0 rgba(255,255,255,0.15)';
              e.currentTarget.style.borderColor = 'rgba(245,158,11,0.35)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 60, background: 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 100%)', borderRadius: '20px 20px 0 0', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: -40, right: -40, width: 150, height: 150, borderRadius: '50%', background: '#d97706', opacity: 0.15, filter: 'blur(40px)', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12, marginBottom: 16,
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(245,158,11,0.4)',
                fontSize: 22,
              }}>🛠️</div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 20, color: '#f1f5f9', marginBottom: 8 }}>Software Dev</div>
              <div style={{ fontSize: 13, color: 'rgba(241,245,249,0.5)', lineHeight: 1.6, marginBottom: 20 }}>
                Bespoke software built with the same rigour, craft, and intentionality as our own products.
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['Web', 'Mobile', 'API', 'AI'].map(t => (
                  <span key={t} style={{
                    fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 999,
                    background: 'rgba(245,158,11,0.1)', color: '#fcd34d',
                    border: '1px solid rgba(245,158,11,0.2)',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Stat strip */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 48, marginTop: 56, flexWrap: 'wrap' }}>
          {[
            { value: '2', label: 'Flagship Products' },
            { value: '13+', label: 'Languages Supported' },
            { value: '65+', label: 'Project Templates' },
            { value: '∞', label: 'Impact Potential' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 34,
                background: 'linear-gradient(135deg, #a78bfa, #38bdf8, #fbbf24)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                letterSpacing: '-1px',
              }}>{stat.value}</div>
              <div style={{ fontSize: 12, color: 'rgba(241,245,249,0.4)', marginTop: 4, fontWeight: 500, letterSpacing: '0.03em' }}>{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
