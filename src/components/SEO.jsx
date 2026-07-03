import { useEffect } from 'react';

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = 'https://beaver-llc.com/new-logo-1.png',
  structuredData
}) {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }

    // Update Open Graph title
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta && ogTitle) {
      ogTitleMeta.setAttribute('content', ogTitle);
    }

    // Update Open Graph description
    const ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (ogDescMeta && ogDescription) {
      ogDescMeta.setAttribute('content', ogDescription);
    }

    // Update Open Graph image
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta && ogImage) {
      ogImageMeta.setAttribute('content', ogImage);
    }

    // Update Twitter title
    const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitleMeta && ogTitle) {
      twitterTitleMeta.setAttribute('content', ogTitle);
    }

    // Update Twitter description
    const twitterDescMeta = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescMeta && ogDescription) {
      twitterDescMeta.setAttribute('content', ogDescription);
    }

    // Add structured data
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      script.id = 'dynamic-structured-data';

      // Remove old structured data if exists
      const oldScript = document.getElementById('dynamic-structured-data');
      if (oldScript) {
        oldScript.remove();
      }

      document.head.appendChild(script);

      // Cleanup on unmount
      return () => {
        const scriptToRemove = document.getElementById('dynamic-structured-data');
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      };
    }
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, structuredData]);

  return null; // This component doesn't render anything
}
