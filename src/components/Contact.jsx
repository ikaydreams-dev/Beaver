import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder — wire up to your preferred service (e.g. Formspree, EmailJS, etc.)
    setSent(true);
  };

  return (
    <section id="contact" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="glow" style={{ width: 500, height: 500, background: '#8b5cf6', bottom: -100, right: -100, opacity: 0.1 }} />
      <div className="glow" style={{ width: 400, height: 400, background: '#06b6d4', top: 0, left: -150, opacity: 0.08 }} />

      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
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
          <p style={{ color: 'rgba(241,245,249,0.5)', fontSize: 16, maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Whether you have a project to discuss, a product question, or a partnership in mind — we want to hear from you.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
          {/* Left — contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: '📧', label: 'Email', value: 'hello@beaverhq.com', href: 'mailto:hello@beaverhq.com' },
              { icon: '🌐', label: 'Products', value: 'stepsbuild.com · slim-file.com', href: null },
              { icon: '🏢', label: 'Company', value: 'Beaver — Parent of STEPsBuild & SlimFile', href: null },
            ].map(item => (
              <div key={item.label} className="glass" style={{ padding: '24px 24px', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
                }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(241,245,249,0.35)', marginBottom: 4 }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} style={{ color: '#c4b5fd', fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>{item.value}</a>
                    : <span style={{ color: 'rgba(241,245,249,0.7)', fontSize: 15, fontWeight: 500 }}>{item.value}</span>
                  }
                </div>
              </div>
            ))}

            {/* Product links */}
            <div className="glass" style={{ padding: '24px', marginTop: 4 }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(241,245,249,0.35)', marginBottom: 16 }}>Our Products</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { name: 'STEPsBuild', url: 'https://stepsbuild.com', color: '#8b5cf6' },
                  { name: 'SlimFile', url: 'https://www.slim-file.com', color: '#06b6d4' },
                ].map(p => (
                  <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '12px 16px', borderRadius: 10, textDecoration: 'none',
                    background: `${p.color}10`, border: `1px solid ${p.color}25`,
                    color: p.color, fontWeight: 600, fontSize: 14,
                    transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = `${p.color}20`; }}
                    onMouseLeave={e => { e.currentTarget.style.background = `${p.color}10`; }}
                  >
                    {p.name}
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="glass-strong" style={{ padding: '40px 36px', border: '1px solid rgba(139,92,246,0.2)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 24, color: '#f1f5f9', marginBottom: 12 }}>Message Received</h3>
                <p style={{ color: 'rgba(241,245,249,0.55)', fontSize: 15 }}>Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[
                    { key: 'name', label: 'Full Name', placeholder: 'Your name', type: 'text' },
                    { key: 'email', label: 'Email Address', placeholder: 'your@email.com', type: 'email' },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: 'rgba(241,245,249,0.5)', marginBottom: 8, display: 'block', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{f.label}</label>
                      <input
                        type={f.type} required placeholder={f.placeholder}
                        value={form[f.key]}
                        onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                        style={{
                          width: '100%', padding: '12px 16px', borderRadius: 10, fontSize: 14,
                          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                          color: '#f1f5f9', outline: 'none', transition: 'border-color 0.2s',
                        }}
                        onFocus={e => e.target.style.borderColor = 'rgba(139,92,246,0.5)'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: 'rgba(241,245,249,0.5)', marginBottom: 8, display: 'block', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Subject</label>
                  <input
                    type="text" placeholder="How can we help?" required
                    value={form.subject}
                    onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: 10, fontSize: 14,
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                      color: '#f1f5f9', outline: 'none', transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(139,92,246,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: 'rgba(241,245,249,0.5)', marginBottom: 8, display: 'block', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Message</label>
                  <textarea
                    rows={5} placeholder="Tell us about your project or enquiry..." required
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: 10, fontSize: 14,
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                      color: '#f1f5f9', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(139,92,246,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                  Send Message
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
