export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '48px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 16, color: 'white',
              }}>B</div>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 18, color: '#f1f5f9' }}>Beaver</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(241,245,249,0.4)', lineHeight: 1.7, maxWidth: 220 }}>
              We build what matters. Parent company of STEPsBuild and SlimFile.
            </p>
          </div>

          {/* Products */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(241,245,249,0.3)', marginBottom: 16 }}>Products</p>
            {[
              { name: 'STEPsBuild', href: 'https://stepsbuild.com' },
              { name: 'SlimFile', href: 'https://www.slim-file.com' },
            ].map(l => (
              <a key={l.name} href={l.href} target="_blank" rel="noopener noreferrer" style={{
                display: 'block', color: 'rgba(241,245,249,0.5)', textDecoration: 'none',
                fontSize: 14, marginBottom: 10, transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = '#f1f5f9'}
                onMouseLeave={e => e.target.style.color = 'rgba(241,245,249,0.5)'}
              >{l.name}</a>
            ))}
          </div>

          {/* Company */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(241,245,249,0.3)', marginBottom: 16 }}>Company</p>
            {['About', 'Services', 'Why Beaver', 'Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(' ', '')}`} style={{
                display: 'block', color: 'rgba(241,245,249,0.5)', textDecoration: 'none',
                fontSize: 14, marginBottom: 10, transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = '#f1f5f9'}
                onMouseLeave={e => e.target.style.color = 'rgba(241,245,249,0.5)'}
              >{l}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(241,245,249,0.3)', marginBottom: 16 }}>Contact</p>
            {[
              { label: 'info@stepsbuild.com', href: 'mailto:info@stepsbuild.com' },
              { label: 'info@slim-file.com', href: 'mailto:info@slim-file.com' },
            ].map(e => (
              <a key={e.label} href={e.href} style={{
                display: 'block', color: 'rgba(241,245,249,0.5)', textDecoration: 'none',
                fontSize: 14, marginBottom: 10, transition: 'color 0.2s',
              }}
                onMouseEnter={el => el.target.style.color = '#c4b5fd'}
                onMouseLeave={el => el.target.style.color = 'rgba(241,245,249,0.5)'}
              >{e.label}</a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: 13, color: 'rgba(241,245,249,0.3)' }}>
            © {new Date().getFullYear()} Beaver. All rights reserved.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(241,245,249,0.3)' }}>
            Built by Beaver &nbsp;·&nbsp; STEPsBuild &nbsp;·&nbsp; SlimFile
          </p>
        </div>
      </div>
    </footer>
  );
}
