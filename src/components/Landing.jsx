import { ArrowRight, Building2, GraduationCap, Landmark } from 'lucide-react';
import SEO from './SEO';

export default function Landing({ onNavigate }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Beaver Technologies - Enterprise Software Solutions",
    "description": "Beaver Technologies builds purposeful software for companies, institutions, and governments. 14+ enterprise products serving organizations globally.",
    "url": "https://www.beaver-llc.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "Beaver Technologies",
      "url": "https://www.beaver-llc.com",
      "logo": "https://www.beaver-llc.com/new-logo-1.png",
      "email": "admin@beaver-llc.com"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.beaver-llc.com"
      }]
    }
  };

  return (
    <>
      <SEO
        title="Beaver Technologies — We Build What Matters | Enterprise Software Solutions"
        description="Beaver Technologies builds purposeful software for companies, institutions, and governments. 14+ enterprise products including STEPsBuild, SlimFile, LogBook, and more. Contact: admin@beaver-llc.com"
        keywords="Beaver Technologies, enterprise software, business software solutions, STEPsBuild, SlimFile, project management, document management, SaaS solutions, custom software development"
        canonical="https://www.beaver-llc.com"
        ogTitle="Beaver Technologies — We Build What Matters"
        ogDescription="14+ enterprise software products built for companies, institutions, and governments worldwide. Solutions for project management, document handling, and business automation."
        structuredData={structuredData}
      />
      <main style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      transition: 'background 0.3s ease',
    }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 60px',
      }}>
        <div style={{
          maxWidth: 1200,
          width: '100%',
          textAlign: 'center',
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 16px',
            background: 'var(--card-bg)',
            border: '1px solid var(--border)',
            borderRadius: 24,
            marginBottom: 32,
            fontSize: 14,
            color: 'var(--text-secondary)',
            fontWeight: 500,
          }}>
            <div style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#22c55e',
            }} />
            Building software that matters
          </div>

          {/* Main Headline */}
          <h1 style={{
            fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(48px, 8vw, 96px)',
            lineHeight: 1.1,
            letterSpacing: '-3px',
            color: 'var(--text)',
            marginBottom: 24,
            maxWidth: 1000,
            margin: '0 auto 24px',
          }}>
            Purposeful software for{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              organizations
            </span>
            {' '}that build the future
          </h1>

          {/* Subheadline */}
          <p style={{
            fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            color: 'var(--text-secondary)',
            maxWidth: 700,
            margin: '0 auto 48px',
            lineHeight: 1.6,
          }}>
            We build intelligent platforms that solve real problems for companies, institutions, and governments across the globe.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => onNavigate('products')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              padding: '16px 32px',
              background: 'var(--navy)',
              color: '#ffffff',
              border: 'none',
              borderRadius: 12,
              fontSize: 18,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 14px rgba(30, 58, 138, 0.3)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(30, 58, 138, 0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(30, 58, 138, 0.3)';
            }}
          >
            Explore Our Products
            <ArrowRight size={20} />
          </button>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 48,
            maxWidth: 800,
            margin: '80px auto 0',
            padding: '48px 0',
            borderTop: '1px solid var(--border)',
          }}>
            <div>
              <div style={{
                fontSize: 'clamp(36px, 5vw, 48px)',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: 8,
              }}>
                14+
              </div>
              <div style={{
                fontSize: 16,
                color: 'var(--text-secondary)',
              }}>
                Products Launched
              </div>
            </div>
            <div>
              <div style={{
                fontSize: 'clamp(36px, 5vw, 48px)',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: 8,
              }}>
                100%
              </div>
              <div style={{
                fontSize: 16,
                color: 'var(--text-secondary)',
              }}>
                Purpose-Built
              </div>
            </div>
            <div>
              <div style={{
                fontSize: 'clamp(36px, 5vw, 48px)',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: 8,
              }}>
                Global
              </div>
              <div style={{
                fontSize: 16,
                color: 'var(--text-secondary)',
              }}>
                Impact & Reach
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section style={{
        padding: '80px 24px',
        background: 'var(--card-bg)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
        }}>
          <h2 style={{
            fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 48px)',
            lineHeight: 1.2,
            letterSpacing: '-1.5px',
            color: 'var(--text)',
            textAlign: 'center',
            marginBottom: 64,
          }}>
            Built for those who build the future
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 32,
          }}>
            {/* Companies */}
            <div style={{
              padding: 40,
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              transition: 'all 0.3s ease',
            }}>
              <div style={{
                width: 56,
                height: 56,
                borderRadius: 12,
                background: 'var(--navy)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
              }}>
                <Building2 size={28} color="#ffffff" />
              </div>
              <h3 style={{
                fontSize: 24,
                fontWeight: 600,
                color: 'var(--text)',
                marginBottom: 12,
              }}>
                Companies
              </h3>
              <p style={{
                fontSize: 16,
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
              }}>
                From startups to enterprises, we build platforms that scale with your ambition and streamline your operations.
              </p>
            </div>

            {/* Institutions */}
            <div style={{
              padding: 40,
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              transition: 'all 0.3s ease',
            }}>
              <div style={{
                width: 56,
                height: 56,
                borderRadius: 12,
                background: 'var(--navy)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
              }}>
                <GraduationCap size={28} color="#ffffff" />
              </div>
              <h3 style={{
                fontSize: 24,
                fontWeight: 600,
                color: 'var(--text)',
                marginBottom: 12,
              }}>
                Institutions
              </h3>
              <p style={{
                fontSize: 16,
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
              }}>
                Educational and healthcare institutions trust our systems to manage complex workflows and serve communities.
              </p>
            </div>

            {/* Government */}
            <div style={{
              padding: 40,
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              transition: 'all 0.3s ease',
            }}>
              <div style={{
                width: 56,
                height: 56,
                borderRadius: 12,
                background: 'var(--navy)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
              }}>
                <Landmark size={28} color="#ffffff" />
              </div>
              <h3 style={{
                fontSize: 24,
                fontWeight: 600,
                color: 'var(--text)',
                marginBottom: 12,
              }}>
                Government
              </h3>
              <p style={{
                fontSize: 16,
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
              }}>
                Secure, compliant platforms that help public sector organizations deliver better services to citizens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{
        padding: '120px 24px',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: 800,
          margin: '0 auto',
        }}>
          <h2 style={{
            fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 56px)',
            lineHeight: 1.2,
            letterSpacing: '-2px',
            color: 'var(--text)',
            marginBottom: 24,
          }}>
            Ready to see what we've built?
          </h2>
          <p style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: 'var(--text-secondary)',
            marginBottom: 40,
            lineHeight: 1.6,
          }}>
            Explore our portfolio of products designed to solve real-world challenges.
          </p>
          <button
            onClick={() => onNavigate('products')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              padding: '18px 40px',
              background: 'var(--navy)',
              color: '#ffffff',
              border: 'none',
              borderRadius: 12,
              fontSize: 18,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 14px rgba(30, 58, 138, 0.3)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(30, 58, 138, 0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(30, 58, 138, 0.3)';
            }}
          >
            View All Products
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </main>
    </>
  );
}
