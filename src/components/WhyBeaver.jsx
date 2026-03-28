export default function WhyBeaver() {
  const pillars = [
    {
      number: '01',
      title: 'We only build what needs to exist.',
      desc: 'Every Beaver product begins with a clear, verified gap. We do not build to compete — we build because something genuinely needs to be built. That discipline is why our products have depth that iterative tools rarely achieve.',
      accent: '#8b5cf6',
    },
    {
      number: '02',
      title: 'Structure is not optional.',
      desc: 'Great software does not just give users a space to work — it gives them a framework to work well. Whether managing a complex multi-phase project or compressing a thousand files, Beaver products impose the right structure so that quality is the default, not the exception.',
      accent: '#06b6d4',
    },
    {
      number: '03',
      title: 'Impact has to be provable.',
      desc: 'We are obsessed with verifiability. Outcomes that cannot be demonstrated are just intentions. Every product we build creates a trail — of decisions made, actions taken, and results achieved — that can be presented to any audience with confidence.',
      accent: '#f59e0b',
    },
    {
      number: '04',
      title: 'We think beyond the brief.',
      desc: 'Sustainability is the floor, not the ceiling. Our products are designed to take users beyond what they thought was possible — from simply maintaining operations, all the way to creating regenerative conditions that outlast the original scope of the work.',
      accent: '#10b981',
    },
  ];

  return (
    <section id="why" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="glow" style={{ width: 500, height: 500, background: '#10b981', top: '20%', right: -200, opacity: 0.07 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="chip" style={{ background: 'rgba(16,185,129,0.1)', color: '#6ee7b7', border: '1px solid rgba(16,185,129,0.25)', marginBottom: 20 }}>
            Why Beaver
          </span>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.1,
            letterSpacing: '-1px', color: '#f1f5f9', marginBottom: 16,
          }}>
            A different kind<br />
            <span style={{
              background: 'linear-gradient(135deg, #6ee7b7, #10b981)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>of software company.</span>
          </h2>
          <p style={{ color: 'rgba(241,245,249,0.5)', fontSize: 16, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            There is no shortage of software in the world. There is, however, a significant shortage of software built with genuine intention, intellectual rigour, and a commitment to long-term impact.
          </p>
        </div>

        {/* Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 64 }}>
          {pillars.map(p => (
            <div key={p.number} className="glass" style={{
              padding: '36px 28px', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = p.accent + '50';
                e.currentTarget.style.boxShadow = `0 20px 60px ${p.accent}15`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Large number watermark */}
              <div style={{
                position: 'absolute', top: -10, right: 16,
                fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 80,
                color: p.accent, opacity: 0.06, lineHeight: 1, pointerEvents: 'none',
              }}>{p.number}</div>

              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
                color: p.accent, textTransform: 'uppercase', marginBottom: 16,
              }}>{p.number}</div>
              <h3 style={{ fontWeight: 700, fontSize: 17, color: '#f1f5f9', marginBottom: 14, lineHeight: 1.4 }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: 'rgba(241,245,249,0.55)', lineHeight: 1.7 }}>{p.desc}</p>

              {/* Bottom accent line */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
                background: `linear-gradient(90deg, ${p.accent}60, transparent)`,
                opacity: 0, transition: 'opacity 0.3s',
              }} className="card-bottom-line" />
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div className="glass-strong" style={{
          padding: '52px 48px', textAlign: 'center',
          border: '1px solid rgba(255,255,255,0.1)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div className="glow" style={{ width: 300, height: 300, background: '#8b5cf6', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.1 }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 48, marginBottom: 8, opacity: 0.3 }}>"</div>
            <p style={{
              fontFamily: 'Poppins, sans-serif', fontWeight: 700,
              fontSize: 'clamp(20px, 3.5vw, 30px)', color: '#f1f5f9',
              lineHeight: 1.4, maxWidth: 700, margin: '0 auto 24px',
            }}>
              The goal was never to build the most features. It was to build the right ones — and build them properly.
            </p>
            <p style={{ color: 'rgba(241,245,249,0.4)', fontSize: 14, fontWeight: 500 }}>— Beaver founding principle</p>
          </div>
        </div>
      </div>
    </section>
  );
}
