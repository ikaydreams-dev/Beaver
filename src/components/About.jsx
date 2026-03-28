export default function About() {
  return (
    <section id="about" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="glow" style={{ width: 500, height: 500, background: '#8b5cf6', top: '50%', left: -200, opacity: 0.08 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>

        {/* Left — text */}
        <div>
          <span className="chip" style={{ background: 'rgba(245,158,11,0.1)', color: '#fcd34d', border: '1px solid rgba(245,158,11,0.25)', marginBottom: 20 }}>
            Our Mission
          </span>
          <div className="divider" style={{ background: 'linear-gradient(90deg, #f59e0b, #8b5cf6)' }} />
          <h2 style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.1,
            letterSpacing: '-1px', marginBottom: 24, color: '#f1f5f9',
          }}>
            Built with purpose.<br />
            <span className="grad-text-purple">Delivered with precision.</span>
          </h2>
          <p style={{ color: 'rgba(241,245,249,0.6)', fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
            Beaver exists because the world has enough software. What it lacks is software that actually solves the right problems — with the depth, rigour, and elegance they deserve. We are a software company driven by one conviction: that the tools people use every day should make them more capable, more accountable, and more impactful.
          </p>
          <p style={{ color: 'rgba(241,245,249,0.6)', fontSize: 16, lineHeight: 1.8 }}>
            Every product we build is the result of deep research into a real problem. We don't iterate on what already exists — we rethink from first principles and build what genuinely needs to exist.
          </p>
        </div>

        {/* Right — glass card grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[
            { icon: '🎯', title: 'Purpose-First', desc: 'Every product begins with a real, verified problem worth solving.' },
            { icon: '🔬', title: 'Rigorous by Design', desc: 'We build structure and accountability into the foundation, not as an afterthought.' },
            { icon: '🌍', title: 'Global Reach', desc: 'Our software serves users across industries, sectors, and continents.' },
            { icon: '♾️', title: 'Lasting Impact', desc: 'We measure success by the change our products create in the world.' },
          ].map(card => (
            <div key={card.title} className="glass" style={{ padding: '24px 20px', transition: 'all 0.3s ease' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.borderColor = 'rgba(139,92,246,0.35)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 12 }}>{card.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 14, color: '#f1f5f9', marginBottom: 8 }}>{card.title}</div>
              <div style={{ fontSize: 13, color: 'rgba(241,245,249,0.5)', lineHeight: 1.6 }}>{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
