import { useState, useEffect } from 'react';
import './Hero.css';

const PRODUCTS = [
  ["SlimFile", "Compress, convert & collaborate", "slim-file.com"],
  ["STEPsBuild", "Project management reimagined", "stepsbuild.com"],
  ["LogbookPro", "Track and document everything", "logbook.stepsbuild.com"],
  ["HealthPro", "Health Reporting System", "pharmacy.stepsbuild.com"],
  ["MarketplacePro", "eMart | eMall | eMarket", "mall.beaver-llc.com"],
  ["LeBoss", "Personal Assistant | Task Management | Information Storage", "leboss.stepsbuild.com"],
  ["ExpenseVault", "Digitize Receipts | Voucher Automation", "expense.stepsbuild.com"],
  ["DigitalPro", "Digitize and Store Documents", "cid.stepsbuild.com"],
  ["ScorePro", "Training and Coaching Management", "score.stepsbuild.com"],
  ["ThesisPro", "Thesis Management", "thesis.stepsbuild.com"],
  ["LoanPro", "Loan Application Management", "loan.stepsbuild.com"],
  ["VendorPro", "Vendor Management", "petroleum.stepsbuild.com"],
  ["TrainingPro", "Organizational Training Management", "training.stepsbuild.com"],
  ["ReportingPro", "Organizational Reporting System", "reporting.slim-file.com"],
  ["SalesPro", "Sales Management Platform", "pharmanova.stepsbuild.com"],
  ["ProjectPro", "Project management and collaboration", "project.stepsbuild.com"],
  ["TenderPro", "Tender and procurement management", "tender.stepsbuild.com"],
  ["AttendancePro", "Attendance tracking and management", "attendance.stepsbuild.com"],
  ["BookkeepingPro", "Accounting and bookkeeping solution", "bookkeeping.stepsbuild.com"],
  ["FederationPro", "Federation Management Platform", "goc.stepsbuild.com"]
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 780) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMobileNavClick = (e) => {
    if (e.target.closest('a')) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`site-head ${mobileMenuOpen ? 'open' : ''}`} id="head">
        <div className="wrap head-row">
          <a className="brand" href="#top">
            <svg viewBox="25 22 50 55" aria-hidden="true">
              <rect x="25.4" y="23" width="13.6" height="52.8" rx="6.8" fill="currentColor"/>
              <rect x="46" y="23" width="28.6" height="23" rx="7" fill="currentColor"/>
              <rect x="46" y="52.7" width="28.6" height="23" rx="7" fill="currentColor"/>
            </svg>
            <span>Beaver</span>
          </a>
          <nav className="nav">
            <a href="#products">Products</a>
            <a href="#serve">Who we serve</a>
            <a href="#approach">Approach</a>
            <a className="btn btn--sm btn--navy" href="#contact">Contact us</a>
          </nav>
          <button
            className="burger"
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span><span></span>
          </button>
        </div>
        <nav className="mobile-nav" onClick={handleMobileNavClick}>
          <a href="#products">Products</a>
          <a href="#serve">Who we serve</a>
          <a href="#approach">Approach</a>
          <a className="btn btn--navy" href="#contact">Contact us</a>
        </nav>
      </header>

      <main>
        <section className="hero on-navy" id="top">
          <div className="hero__glow"></div>
          <svg className="hero__mark" viewBox="25 22 50 55" aria-hidden="true">
            <rect x="25.4" y="23" width="13.6" height="52.8" rx="6.8" fill="#fff"/>
            <rect x="46" y="23" width="28.6" height="23" rx="7" fill="#fff"/>
            <rect x="46" y="52.7" width="28.6" height="23" rx="7" fill="#fff"/>
          </svg>
          <div className="wrap">
            <p className="eyebrow">Beaver Technologies</p>
            <h1 className="display">Purposeful software for serious institutions.</h1>
            <p className="lede">Beaver builds and operates enterprise platforms for companies, institutions and governments worldwide — twenty-one products in market, each designed so no one has to think before they act.</p>
            <div className="cta-row">
              <a className="btn btn--light" href="#contact">Request a demo</a>
              <a className="btn btn--ghost" href="#products">Explore the products</a>
            </div>
            <dl className="stats">
              <div><dt>21</dt><dd>Products in market</dd></div>
              <div><dt>3</dt><dd>Sectors served</dd></div>
              <div><dt>Global</dt><dd>Deployment footprint</dd></div>
              <div><dt>One</dt><dd>Engineering standard</dd></div>
            </dl>
          </div>
        </section>

        <section className="section" id="products">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">The portfolio</p>
                <h2 className="display">Twenty-one platforms, one standard of craft.</h2>
              </div>
              <p>Each product solves one operational problem completely. They share an interface language, a security model and a deployment path — so adopting a second is never a second migration.</p>
            </div>
            <div className="products">
              {PRODUCTS.map(([name, tag, url], i) => (
                <button
                  key={i}
                  className="card"
                  onClick={() => setSelectedProduct({ name, tag, url })}
                >
                  <div className="card__top">
                    <span className="card__chip">{name[0]}</span>
                    <span className="card__no">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="card__name">{name}</div>
                  <div className="card__tag">{tag}</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint" id="serve">
          <div className="wrap">
            <p className="eyebrow">Who we serve</p>
            <h2 className="display" style={{maxWidth: '20ch', marginBottom: 'clamp(38px,5vw,64px)'}}>
              Built for organisations that cannot afford to guess.
            </h2>
            <div className="audience">
              <article>
                <img src="https://images.unsplash.com/photo-1758518727707-b023e285b709?fm=jpg&q=80&w=1200&auto=format&fit=crop" alt="Business partners meeting in a modern office" />
                <div className="body">
                  <h3>Companies</h3>
                  <p>Sales, vendor, expense and document operations consolidated onto platforms your teams actually use.</p>
                  
                </div>
              </article>
              <article>
                <img src="https://images.unsplash.com/photo-1741699427799-3fbb70fce948?fm=jpg&q=80&w=1200&auto=format&fit=crop" alt="Student studying in a university library" />
                <div className="body">
                  <h3>Institutions</h3>
                  <p>Training, thesis, health reporting and federation management for universities, hospitals and member bodies.</p>
                  
                </div>
              </article>
              <article>
                <img src="https://images.unsplash.com/photo-1773433392027-2dff23126d86?fm=jpg&q=80&w=1200&auto=format&fit=crop" alt="Neoclassical government building with columns" />
                <div className="body">
                  <h3>Governments</h3>
                  <p>Records, reporting and loan administration built for public accountability and long service lifetimes.</p>
              
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--navy on-navy" id="approach">
          <div className="wrap split">
            <div>
              <p className="eyebrow">Our approach</p>
              <h2 className="display">Detail is the product.</h2>
              <p>We hold every screen to the same rules: equal modal heights, buttons that read as buttons, controls that sit where they sat on the last screen. When the user visits any of our apps, the user shouldn't have to think before taking an action.</p>
            </div>
            <ol className="principles">
              <li>
                <span className="num">01</span>
                <div>
                  <b>One interface language</b>
                  <p>Every product shares the same patterns, so training one team trains them all.</p>
                </div>
              </li>
              <li>
                <span className="num">02</span>
                <div>
                  <b>Built to be operated</b>
                  <p>Deployment, migration and support are part of the product, not a separate engagement.</p>
                </div>
              </li>
              <li>
                <span className="num">03</span>
                <div>
                  <b>Records that outlive us</b>
                  <p>Documents, logs and reports are stored so they remain retrievable and auditable for decades.</p>
                </div>
              </li>
              <li>
                <span className="num">04</span>
                <div>
                  <b>Custom where it counts</b>
                  <p>Where a standard platform doesn't fit, we build the missing piece rather than bend your process.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="wrap">
            <div className="panel">
              <div>
                <h2 className="display" style={{fontSize: 'clamp(28px,3.8vw,54px)'}}>
                  Tell us what you're trying to run.
                </h2>
                <p>Send us the process that's slowing you down. We'll tell you which of our platforms fits, or whether you need something built.</p>
              </div>
              <div className="contact-list">
                <a className="primary" href="mailto:admin@beaver-llc.com">
                  <span>
                    <small>Email</small>
                    <strong>admin@beaver-llc.com</strong>
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="secondary" href="https://www.beaver-llc.com" target="_blank" rel="noopener noreferrer">
                  <span>
                    <small>Web</small>
                    <strong>www.beaver-llc.com</strong>
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-foot">
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-about">
              <div className="brand" style={{color: '#fff'}}>
                <svg viewBox="25 22 50 55" aria-hidden="true" style={{width: '26px'}}>
                  <rect x="25.4" y="23" width="13.6" height="52.8" rx="6.8" fill="currentColor"/>
                  <rect x="46" y="23" width="28.6" height="23" rx="7" fill="currentColor"/>
                  <rect x="46" y="52.7" width="28.6" height="23" rx="7" fill="currentColor"/>
                </svg>
                <span>Beaver</span>
              </div>
              <p>Beaver Technologies builds purposeful enterprise software for companies, institutions and governments worldwide.</p>
            </div>
            <div>
              <h4>Platforms</h4>
              <div className="foot-products">
                {PRODUCTS.map(([name, tag, url], i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedProduct({ name, tag, url })}
                    style={{background:'none',border:'none',padding:0,cursor:'pointer',textAlign:'left'}}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4>Company</h4>
              <div className="foot-links">
                <a href="#serve">Who we serve</a>
                <a href="#approach">Approach</a>
                <a href="mailto:admin@beaver-llc.com">admin@beaver-llc.com</a>
              </div>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Beaver Technologies LLC. All rights reserved.</span>
            <span>Companies · Institutions · Governments</span>
          </div>
        </div>
      </footer>

      {/* Product Preview Modal */}
      {selectedProduct && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-title">
                <span className="modal-chip">{selectedProduct.name[0]}</span>
                <div>
                  <h3>{selectedProduct.name}</h3>
                  <p>{selectedProduct.url}</p>
                </div>
              </div>
              <button
                className="modal-close"
                onClick={() => setSelectedProduct(null)}
                aria-label="Close"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <iframe
              src={`https://${selectedProduct.url}`}
              title={selectedProduct.name}
              className="modal-iframe"
            />
          </div>
        </div>
      )}
    </>
  );
}
