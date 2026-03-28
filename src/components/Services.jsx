export default function Services() {
  const services = [
    {
      icon: '🏗️',
      title: 'Product Design & Architecture',
      desc: 'We translate complex problems into elegant, scalable product structures — from information architecture and user flows to full system design. We build the blueprint before a single line of code is written.',
    },
    {
      icon: '⚡',
      title: 'Full-Stack Web Development',
      desc: 'End-to-end web application development using modern frameworks and best practices. From interactive frontends to robust, secure backends — we build products that perform at scale.',
    },
    {
      icon: '📱',
      title: 'Mobile Application Development',
      desc: 'Native and cross-platform mobile applications built for performance and usability. We deliver mobile experiences that feel intuitive from the very first interaction.',
    },
    {
      icon: '🔌',
      title: 'API Development & Integration',
      desc: 'Secure, well-documented APIs that power your products and connect your systems. Whether building from scratch or integrating with third-party services, we make data flow reliably.',
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure & DevOps',
      desc: 'Deployment pipelines, cloud architecture, and infrastructure management that ensure your products are always available, always secure, and always ready to scale.',
    },
    {
      icon: '🤖',
      title: 'AI & Intelligent Systems',
      desc: 'We integrate intelligent capabilities into products that learn, adapt, and improve — from recommendation engines and automation to language models embedded in real-world workflows.',
    },
  ];

  return (
    <section id="services" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="glow" style={{ width: 600, height: 600, background: '#f59e0b', bottom: -200, left: -200, opacity: 0.06 }} />
      <div className="glow" style={{ width: 400, height: 400, background: '#8b5cf6', top: 0, right: 0, opacity: 0.07 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="chip" style={{ background: 'rgba(245,158,11,0.1)', color: '#fcd34d', border: '1px solid rgba(245,158,11,0.25)', marginBottom: 20 }}>
            Software Development
          </span>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.1,
            letterSpacing: '-1px', color: '#f1f5f9', marginBottom: 16,
          }}>
            We build software<br />
            <span style={{
              background: 'linear-gradient(135deg, #fcd34d, #f59e0b)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>for the problems that matter.</span>
          </h2>
          <p style={{ color: 'rgba(241,245,249,0.5)', fontSize: 16, maxWidth: 580, margin: '0 auto', lineHeight: 1.7 }}>
            Beyond our own products, Beaver delivers bespoke software development services to organisations that need solutions built with the same rigour, craft, and intentionality we apply to everything we create.
          </p>
        </div>

        {/* Service grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
          {services.map(s => (
            <div key={s.title} className="glass" style={{
              padding: '32px 28px', transition: 'all 0.3s ease', cursor: 'default',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.borderColor = 'rgba(245,158,11,0.3)';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(245,158,11,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 24, marginBottom: 20,
              }}>{s.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: 16, color: '#f1f5f9', marginBottom: 12 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: 'rgba(241,245,249,0.55)', lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="glass-strong" style={{
          marginTop: 48, padding: '40px 40px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 24, border: '1px solid rgba(245,158,11,0.2)',
        }}>
          <div>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 22, color: '#f1f5f9', marginBottom: 8 }}>
              Have a problem worth solving?
            </h3>
            <p style={{ color: 'rgba(241,245,249,0.5)', fontSize: 15 }}>
              Tell us about it. We will tell you if we are the right team to build it.
            </p>
          </div>
          <a href="#contact" className="btn-primary" style={{
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            boxShadow: '0 0 30px rgba(245,158,11,0.3)',
          }}>
            Start a Conversation
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
