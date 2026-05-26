import { useState } from 'react';
import { X } from 'lucide-react';

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
    description: 'Pharmacy reporting system',
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
  const [selectedProduct, setSelectedProduct] = useState(null);
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
            <button
              key={product.url}
              onClick={() => setSelectedProduct(product)}
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '32px 24px',
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                borderRadius: 16,
                textAlign: 'left',
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
            </button>
          ))}
        </div>
      </div>

      {/* Iframe Modal */}
      {selectedProduct && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
          }}
          onClick={() => setSelectedProduct(null)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 1400,
              height: '90vh',
              background: 'var(--card-bg)',
              borderRadius: 16,
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                borderBottom: '1px solid var(--border)',
                background: 'var(--nav-bg)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: `${selectedProduct.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: '50%',
                      background: selectedProduct.color,
                    }}
                  />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
                      fontWeight: 600,
                      fontSize: 16,
                      color: 'var(--text)',
                      margin: 0,
                    }}
                  >
                    {selectedProduct.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'SF Mono, monospace',
                      fontSize: 12,
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}
                  >
                    {selectedProduct.url}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  padding: 8,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--border)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--card-bg)';
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Iframe */}
            <iframe
              src={`https://${selectedProduct.url}`}
              style={{
                width: '100%',
                height: 'calc(100% - 65px)',
                border: 'none',
              }}
              title={selectedProduct.name}
            />
          </div>
        </div>
      )}
    </main>
  );
}
