import { ArrowLeft } from 'lucide-react';
import SEO from './SEO';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost({ slug, onBack }) {
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <main style={{ minHeight: '100vh', padding: '120px 24px', textAlign: 'center' }}>
        <h1>Post not found</h1>
        <button onClick={onBack}>← Back to Blog</button>
      </main>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Beaver Technologies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.beaver-llc.com/new-logo-1.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.beaver-llc.com/blog/${post.slug}`
    },
    "keywords": post.keywords
  };

  return (
    <>
      <SEO
        title={`${post.title} | Beaver Technologies Blog`}
        description={post.excerpt}
        keywords={post.keywords}
        canonical={`https://www.beaver-llc.com/blog/${post.slug}`}
        ogTitle={post.title}
        ogDescription={post.excerpt}
        structuredData={structuredData}
      />

      <main style={{
        minHeight: '100vh',
        padding: '120px 24px 60px',
        background: 'var(--bg)',
      }}>
        <article style={{
          maxWidth: 800,
          margin: '0 auto',
        }}>
          {/* Back Button */}
          <button
            onClick={onBack}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 16px',
              background: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: 8,
              color: 'var(--text)',
              fontSize: 14,
              cursor: 'pointer',
              marginBottom: 32,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--card-bg)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <ArrowLeft size={16} />
            Back to Blog
          </button>

          {/* Category Badge */}
          <span style={{
            display: 'inline-block',
            padding: '6px 16px',
            background: 'var(--navy)',
            color: '#ffffff',
            borderRadius: 16,
            fontSize: 13,
            fontWeight: 500,
            marginBottom: 24,
          }}>
            {post.category}
          </span>

          {/* Title */}
          <h1 style={{
            fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 48px)',
            lineHeight: 1.2,
            letterSpacing: '-1.5px',
            color: 'var(--text)',
            marginBottom: 24,
          }}>
            {post.title}
          </h1>

          {/* Meta Information */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            paddingBottom: 32,
            marginBottom: 40,
            borderBottom: '1px solid var(--border)',
            fontSize: 14,
            color: 'var(--text-secondary)',
          }}>
            <span>{post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Content */}
          <div
            style={{
              fontSize: 18,
              lineHeight: 1.8,
              color: 'var(--text)',
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="blog-content"
          />

          {/* Tags */}
          <div style={{
            marginTop: 60,
            paddingTop: 32,
            borderTop: '1px solid var(--border)',
          }}>
            <div style={{
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--text-secondary)',
              marginBottom: 12,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}>
              Keywords
            </div>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
            }}>
              {post.keywords.split(', ').map((keyword, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '6px 12px',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    fontSize: 13,
                    color: 'var(--text-secondary)',
                  }}
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{
            marginTop: 60,
            padding: 40,
            background: 'var(--card-bg)',
            border: '1px solid var(--border)',
            borderRadius: 16,
            textAlign: 'center',
          }}>
            <h3 style={{
              fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
              fontWeight: 600,
              fontSize: 24,
              color: 'var(--text)',
              marginBottom: 12,
            }}>
              Need enterprise software solutions?
            </h3>
            <p style={{
              fontSize: 16,
              color: 'var(--text-secondary)',
              marginBottom: 24,
            }}>
              Contact us to learn how Beaver Technologies can help your organization
            </p>
            <a
              href="mailto:admin@beaver-llc.com"
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                background: 'var(--navy)',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 600,
                transition: 'all 0.3s ease',
              }}
            >
              Contact Us
            </a>
          </div>
        </article>
      </main>

      {/* Blog Content Styles */}
      <style>{`
        .blog-content h2 {
          font-family: 'SF Pro Display', -apple-system, system-ui, sans-serif;
          font-weight: 600;
          font-size: 32px;
          color: var(--text);
          margin-top: 48px;
          margin-bottom: 20px;
          line-height: 1.3;
        }

        .blog-content h3 {
          font-family: 'SF Pro Display', -apple-system, system-ui, sans-serif;
          font-weight: 600;
          font-size: 24px;
          color: var(--text);
          margin-top: 36px;
          margin-bottom: 16px;
        }

        .blog-content p {
          margin-bottom: 24px;
          color: var(--text);
        }

        .blog-content strong {
          font-weight: 600;
          color: var(--text);
        }

        .blog-content ul, .blog-content ol {
          margin-bottom: 24px;
          padding-left: 24px;
        }

        .blog-content li {
          margin-bottom: 12px;
          color: var(--text);
        }

        .blog-content a {
          color: var(--navy);
          text-decoration: none;
          border-bottom: 1px solid var(--navy);
        }

        .blog-content a:hover {
          border-bottom-width: 2px;
        }
      `}</style>
    </>
  );
}
