
export default function Products() {
  const products = [
    {
      name: 'STEPsBuild',
      tagline: 'From intention to verified impact.',
      description: 'STEPsBuild is a structured project management platform that guides organisations and individuals through every stage of a project — from initial readiness assessment through to regenerative impact. Where conventional planning stops at sustainability, STEPsBuild goes further: every activity is assessed, every gap becomes a structured action plan, every outcome is backed by evidence, and every project concludes with a formal, publishable report.',
      gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
      glow: 'rgba(139,92,246,0.25)',
      border: 'rgba(139,92,246,0.3)',
      chip: { bg: 'rgba(139,92,246,0.12)', color: '#c4b5fd', border: 'rgba(139,92,246,0.3)' },
      link: 'https://stepsbuild.com',
      features: [
        'Five-stage structured project pathway',
        'Evidence-backed activity completion',
        'Formal report generation on demand',
        'Beyond sustainability — to Regenerative Impact',
        '65+ sector-specific templates',
        'Role-based team collaboration',
      ],
      accent: '#8b5cf6',
    },
    {
      name: 'SlimFile',
      tagline: 'Compress. Convert. Collaborate. And more.',
      description: 'SlimFile is a comprehensive productivity platform built for professionals and remote teams. It combines powerful file tools — compression, conversion, PDF management, and OCR — with real-time collaboration features including team workspaces, video meetings, shared whiteboards, and a built-in word processor. Everything you need to work smarter, in one place. No installation required.',
      gradient: 'linear-gradient(135deg, #06b6d4, #0284c7)',
      glow: 'rgba(6,182,212,0.25)',
      border: 'rgba(6,182,212,0.3)',
      chip: { bg: 'rgba(6,182,212,0.12)', color: '#67e8f9', border: 'rgba(6,182,212,0.3)' },
      link: 'https://www.slim-file.com',
      features: [
        'Compress images (JPEG, PNG, WebP) and documents (PDF, DOCX)',
        'Convert between image formats, Office docs to PDF, and PDF to images',
        'Convert & Compress in one step — format change with size reduction',
        'Team workspaces with real-time chat, voice messages, and member management',
        'OCR — extract text from images and scanned PDFs in multiple languages',
        'PDF Merger & Splitter — combine up to 20 PDFs or split by page range',
        'PDF Password Protect with 128-bit encryption',
        'Video meetings with HD calls and screen sharing — no downloads needed',
        'Personal whiteboards and a full word processor with DOCX import/export',
        'Live activity feed across workspaces with real-time team notifications',
      ],
      accent: '#06b6d4',
    },
  ];

  return (
    <section id="products" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="glow" style={{ width: 600, height: 600, background: '#06b6d4', top: '30%', right: -250, opacity: 0.07 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="chip" style={{ background: 'rgba(6,182,212,0.1)', color: '#67e8f9', border: '1px solid rgba(6,182,212,0.25)', marginBottom: 20 }}>
            Our Products
          </span>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.1,
            letterSpacing: '-1px', color: '#f1f5f9', marginBottom: 16,
          }}>
            Two products.<br />
            <span className="grad-text">One uncompromising standard.</span>
          </h2>
          <p style={{ color: 'rgba(241,245,249,0.5)', fontSize: 16, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            Each product under the Beaver umbrella is built to solve a distinct, well-defined problem — with depth, elegance, and long-term impact at its core.
          </p>
        </div>

        {/* Product cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {products.map((p, i) => (
            <div key={p.name} className="glass" style={{
              padding: 0, overflow: 'hidden',
              border: `1px solid ${p.border}`,
              transition: 'all 0.4s ease',
              boxShadow: `0 0 60px ${p.glow}`,
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 100px ${p.glow}`; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 0 60px ${p.glow}`; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {/* Top accent bar */}
              <div style={{ height: 3, background: p.gradient }} />

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 0,
              }}>
                {/* Left panel */}
                <div style={{ padding: '48px 40px', borderRight: `1px solid ${p.border}` }}>
                  <span className="chip" style={{
                    background: p.chip.bg, color: p.chip.color,
                    border: `1px solid ${p.chip.border}`, marginBottom: 24,
                  }}>
                    Flagship Product
                  </span>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif', fontWeight: 800,
                    fontSize: 40, letterSpacing: '-1px', marginBottom: 8,
                    background: p.gradient, WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>{p.name}</h3>
                  <p style={{ color: 'rgba(241,245,249,0.45)', fontSize: 14, fontStyle: 'italic', marginBottom: 24 }}>{p.tagline}</p>
                  <p style={{ color: 'rgba(241,245,249,0.65)', fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>{p.description}</p>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '12px 28px', borderRadius: 10, fontWeight: 600, fontSize: 14,
                    background: p.gradient, color: 'white', textDecoration: 'none',
                    boxShadow: `0 0 24px ${p.glow}`, transition: 'all 0.3s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 40px ${p.glow}`; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 0 24px ${p.glow}`; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    Visit {p.name}
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* Right panel — features */}
                <div style={{ padding: '48px 40px' }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(241,245,249,0.35)', textTransform: 'uppercase', marginBottom: 24 }}>Key Capabilities</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {p.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                        <div style={{
                          width: 20, height: 20, borderRadius: 6, flexShrink: 0, marginTop: 1,
                          background: p.chip.bg, border: `1px solid ${p.border}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <svg width="10" height="10" fill="none" stroke={p.accent} strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span style={{ fontSize: 14, color: 'rgba(241,245,249,0.7)', lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
