const PRODUCTS = [
  {
    name: 'SlimFile',
    description: 'Compress, convert & collaborate',
    url: 'slim-file.com',
    color: '#06b6d4',
  },
  {
    name: 'STEPsBuild',
    description: 'Project management reimagined',
    url: 'stepsbuild.com',
    color: '#8b5cf6',
  },
  {
    name: 'LogBook',
    description: 'Track and document everything',
    url: 'logbook.stepsbuild.com',
    color: '#3b82f6',
  },
  {
    name: 'Pharmacy',
    description: 'Healthcare management system',
    url: 'pharmacy.stepsbuild.com',
    color: '#10b981',
  },
  {
    name: 'Mall',
    description: 'E-commerce platform',
    url: 'mall.beaver-llc.com',
    color: '#f59e0b',
  },
  {
    name: 'LeBoss',
    description: 'Business management suite',
    url: 'leboss.stepsbuild.com',
    color: '#ef4444',
  },
  {
    name: 'Expense',
    description: 'Financial tracking simplified',
    url: 'expense.stepsbuild.com',
    color: '#ec4899',
  },
  {
    name: 'CID',
    description: 'Identity management',
    url: 'cid.stepsbuild.com',
    color: '#8b5cf6',
  },
  {
    name: 'Score',
    description: 'Performance metrics',
    url: 'score.stepsbuild.com',
    color: '#06b6d4',
  },
  {
    name: 'Thesis',
    description: 'Research & documentation',
    url: 'thesis.stepsbuild.com',
    color: '#6366f1',
  },
  {
    name: 'Loan',
    description: 'Financial services platform',
    url: 'loan.stepsbuild.com',
    color: '#10b981',
  },
  {
    name: 'Fire Safety',
    description: 'Safety compliance tools',
    url: 'firesafety.stepsbuild.com',
    color: '#f97316',
  },
  {
    name: 'Petroleum',
    description: 'Energy sector solutions',
    url: 'petroleum.stepsbuild.com',
    color: '#0891b2',
  },
];

export default function Hero() {
  return (
    <main style={{
      minHeight: '100vh',
      padding: '120px 24px 60px',
      background: 'var(--bg)',
      transition: 'background 0.3s ease',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: 60,
        }}>
          <h1 style={{
            fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(40px, 6vw, 72px)',
            lineHeight: 1.1,
            letterSpacing: '-2px',
            color: 'var(--text)',
            marginBottom: 16,
          }}>
            Our Products
          </h1>
          <p style={{
            fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
            fontSize: 'clamp(18px, 2vw, 24px)',
            color: 'var(--text-secondary)',
            maxWidth: 600,
            margin: '0 auto',
            lineHeight: 1.5,
          }}>
            Purposeful software built to solve real problems.
          </p>
        </div>

        {/* Product Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {PRODUCTS.map((product) => (
            <a
              key={product.url}
              href={`https://${product.url}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '32px 24px',
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                borderRadius: 16,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--card-shadow-hover)';
                e.currentTarget.style.borderColor = product.color;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              {/* Color accent */}
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: `${product.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
              }}>
                <div style={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  background: product.color,
                }}/>
              </div>

              {/* Product name */}
              <h3 style={{
                fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
                fontWeight: 600,
                fontSize: 22,
                color: 'var(--text)',
                marginBottom: 8,
                letterSpacing: '-0.5px',
              }}>
                {product.name}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
                fontSize: 15,
                color: 'var(--text-secondary)',
                marginBottom: 16,
                lineHeight: 1.5,
              }}>
                {product.description}
              </p>

              {/* URL */}
              <div style={{
                marginTop: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}>
                <span style={{
                  fontFamily: 'SF Mono, Menlo, Monaco, monospace',
                  fontSize: 13,
                  color: product.color,
                  fontWeight: 500,
                }}>
                  {product.url}
                </span>
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke={product.color}
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
