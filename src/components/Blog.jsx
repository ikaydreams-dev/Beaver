import { useState } from 'react';
import SEO from './SEO';
import { blogPosts } from '../data/blogPosts';

export default function Blog({ onNavigate, onViewPost }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Beaver Technologies Blog",
    "description": "Enterprise software insights, guides, and best practices for companies, institutions, and governments.",
    "url": "https://www.beaver-llc.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Beaver Technologies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.beaver-llc.com/new-logo-1.png"
      }
    }
  };

  return (
    <>
      <SEO
        title="Blog - Enterprise Software Insights | Beaver Technologies"
        description="Expert insights on enterprise software, SaaS solutions, digital transformation, project management, and technology trends for modern organizations."
        keywords="enterprise software blog, SaaS insights, digital transformation, project management, technology trends"
        canonical="https://www.beaver-llc.com/blog"
        ogTitle="Beaver Technologies Blog - Enterprise Software Insights"
        ogDescription="Expert insights on enterprise software, digital transformation, and technology trends for organizations worldwide."
        structuredData={structuredData}
      />

      <main style={{
        minHeight: '100vh',
        padding: '120px 24px 60px',
        background: 'var(--bg)',
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
              fontSize: 'clamp(40px, 6vw, 64px)',
              lineHeight: 1.1,
              letterSpacing: '-2px',
              color: 'var(--text)',
              marginBottom: 16,
            }}>
              Enterprise Software Insights
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: 'var(--text-secondary)',
              maxWidth: 700,
              margin: '0 auto',
            }}>
              Expert guidance on software selection, implementation, and optimization for modern organizations
            </p>
          </div>

          {/* Category Filter */}
          <div style={{
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: 48,
          }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '10px 24px',
                  background: selectedCategory === category ? 'var(--navy)' : 'var(--card-bg)',
                  color: selectedCategory === category ? '#ffffff' : 'var(--text)',
                  border: `1px solid ${selectedCategory === category ? 'var(--navy)' : 'var(--border)'}`,
                  borderRadius: 24,
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.borderColor = 'var(--navy)';
                  }
                }}
                onMouseLeave={e => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: 32,
          }}>
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onClick={() => onViewPost(post.slug)}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--card-shadow-hover)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ padding: 32 }}>
                  {/* Category Badge */}
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    background: 'var(--navy)',
                    color: '#ffffff',
                    borderRadius: 12,
                    fontSize: 12,
                    fontWeight: 500,
                    marginBottom: 16,
                  }}>
                    {post.category}
                  </span>

                  {/* Title */}
                  <h2 style={{
                    fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
                    fontWeight: 600,
                    fontSize: 22,
                    lineHeight: 1.3,
                    color: 'var(--text)',
                    marginBottom: 12,
                  }}>
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p style={{
                    fontSize: 15,
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: 20,
                  }}>
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    fontSize: 13,
                    color: 'var(--text-secondary)',
                  }}>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div style={{
            marginTop: 80,
            padding: 60,
            background: 'var(--card-bg)',
            border: '1px solid var(--border)',
            borderRadius: 16,
            textAlign: 'center',
          }}>
            <h2 style={{
              fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
              fontWeight: 600,
              fontSize: 32,
              color: 'var(--text)',
              marginBottom: 16,
            }}>
              Ready to transform your organization?
            </h2>
            <p style={{
              fontSize: 18,
              color: 'var(--text-secondary)',
              marginBottom: 32,
            }}>
              Explore our enterprise software solutions built for companies, institutions, and governments.
            </p>
            <button
              onClick={() => onNavigate('products')}
              style={{
                padding: '16px 32px',
                background: 'var(--navy)',
                color: '#ffffff',
                border: 'none',
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(30, 58, 138, 0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              View Our Products
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
