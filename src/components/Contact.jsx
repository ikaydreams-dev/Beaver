export default function Contact() {
  const emails = [
    { label: 'STEPsBuild', address: 'info@stepsbuild.com', color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)', border: 'rgba(139,92,246,0.25)' },
    { label: 'SlimFile', address: 'info@slim-file.com', color: '#06b6d4', bg: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.25)' },
  ];

  return (
    <section id="contact" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="glow" style={{ width: 500, height: 500, background: '#8b5cf6', bottom: -100, right: -100, opacity: 0.1 }} />
      <div className="glow" style={{ width: 400, height: 400, background: '#06b6d4', top: 0, left: -150, opacity: 0.08 }} />

      <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
        <span className="chip" style={{ background: 'rgba(139,92,246,0.1)', color: '#c4b5fd', border: '1px solid rgba(139,92,246,0.25)', marginBottom: 20 }}>
          Get in Touch
        </span>
        <h2 style={{
          fontFamily: 'Poppins, sans-serif', fontWeight: 800,
          fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.1,
          letterSpacing: '-1px', color: '#f1f5f9', marginBottom: 16,
        }}>
          Let's build something<br />
          <span className="grad-text">worth building.</span>
        </h2>
        <p style={{ color: 'rgba(241,245,249,0.5)', fontSize: 16, lineHeight: 1.7, marginBottom: 48 }}>
          Whether you have a project to discuss, a product question, or a partnership in mind — we want to hear from you.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {emails.map(e => (
            <a key={e.label} href={`mailto:${e.address}`} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '24px 28px', borderRadius: 16, textDecoration: 'none',
              background: e.bg, border: `1px solid ${e.border}`,
              transition: 'all 0.25s ease',
            }}
              onMouseEnter={el => {
                el.currentTarget.style.transform = 'translateY(-3px)';
                el.currentTarget.style.boxShadow = `0 12px 40px ${e.border}`;
              }}
              onMouseLeave={el => {
                el.currentTarget.style.transform = 'translateY(0)';
                el.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(241,245,249,0.4)', marginBottom: 4 }}>{e.label}</div>
                <div style={{ fontSize: 18, fontWeight: 600, color: e.color }}>{e.address}</div>
              </div>
              <svg width="18" height="18" fill="none" stroke={e.color} strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
