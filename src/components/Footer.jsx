import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      style={{
      background: 'var(--card-bg)',
      borderTop: '1px solid var(--border)',
      padding: '60px 24px 32px',
      marginTop: 'auto',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 48,
          marginBottom: 48,
        }}>
          {/* Company Info */}
          <div>
            <h3 style={{
              fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
              fontSize: 20,
              fontWeight: 600,
              color: 'var(--text)',
              marginBottom: 16,
            }}>
              Beaver Technologies
            </h3>
            <p style={{
              fontSize: 15,
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: 24,
            }}>
              Building purposeful software that solves real problems for organizations across the globe.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
              fontSize: 16,
              fontWeight: 600,
              color: 'var(--text)',
              marginBottom: 16,
            }}>
              Contact Us
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}>
              {/* Email */}
              <a
                href="mailto:admin@beaver-llc.com"
                aria-label="Email Beaver Technologies at admin@beaver-llc.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  textDecoration: 'none',
                  color: 'var(--text-secondary)',
                  fontSize: 15,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--navy)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                <Mail size={18} />
                <span>admin@beaver-llc.com</span>
              </a>

              {/* Location */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                color: 'var(--text-secondary)',
                fontSize: 15,
              }}>
                <MapPin size={18} />
                <span>Global</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: 32,
          borderTop: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
        }}>
          <p style={{
            fontSize: 14,
            color: 'var(--text-secondary)',
            textAlign: 'center',
            margin: 0,
          }}>
            © {currentYear} Beaver Technologies. All rights reserved.
          </p>
          <p style={{
            fontSize: 13,
            color: 'var(--text-secondary)',
            textAlign: 'center',
            margin: 0,
          }}>
            Built with purpose. Delivered with excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
