import {
  Video, Music, Image, FileText, RefreshCw, GitMerge, Scissors,
  Trophy, Settings2, BookOpen, Mail, MessageSquare, PenLine,
  AlignLeft, ScanText, Store, Building2, Package, Code2, Terminal, Globe,
} from 'lucide-react';

/* ─── All Products ────────────────────────────────────────────────── */
const PRODUCTS = [
  { label: 'SlimVideo',   color: '#06b6d4', Icon: Video,        href: '#' },
  { label: 'SlimAudio',   color: '#06b6d4', Icon: Music,        href: 'https://audio.slim-file.com/' },
  { label: 'SlimImage',   color: '#06b6d4', Icon: Image,        href: 'https://www.slim-file.com/compress' },
  { label: 'SlimDocs',    color: '#06b6d4', Icon: FileText,     href: 'https://www.slim-file.com/compress' },
  { label: 'SlimConvert', color: '#22d3ee', Icon: RefreshCw,    href: 'https://www.slim-file.com/convert-only' },
  { label: 'SlimMerge',   color: '#22d3ee', Icon: GitMerge,     href: 'https://www.slim-file.com/forge' },
  { label: 'SlimSplit',   color: '#22d3ee', Icon: Scissors,     href: 'https://www.slim-file.com/forge' },
  { label: 'STEPsPro',    color: '#8b5cf6', Icon: Trophy,       href: 'https://stepsbuild.com/' },
  { label: 'STEPsOps',    color: '#8b5cf6', Icon: Settings2,    href: 'https://stepsbuild.com/' },
  { label: 'STEPsDocs',   color: '#8b5cf6', Icon: BookOpen,     href: 'https://stepsbuild.com/' },
  { label: 'B-Mail',      color: '#3b82f6', Icon: Mail,         href: '#' },
  { label: 'B-Meet',      color: '#3b82f6', Icon: Video,        href: 'https://www.slim-file.com/meet' },
  { label: 'B-Chat',      color: '#3b82f6', Icon: MessageSquare,href: 'https://www.slim-file.com/workspaces' },
  { label: 'B-Docs',      color: '#a78bfa', Icon: FileText,     href: 'https://www.slim-file.com/documents' },
  { label: 'B-Boards',    color: '#a78bfa', Icon: PenLine,      href: 'https://www.slim-file.com/my-whiteboards' },
  { label: 'B-Summ',      color: '#a78bfa', Icon: AlignLeft,    href: 'https://www.slim-file.com/summarize' },
  { label: 'B-OCR',       color: '#a78bfa', Icon: ScanText,     href: 'https://www.slim-file.com/ocr-tool' },
  { label: 'B-Market',    color: '#f59e0b', Icon: Store,        href: '#' },
  { label: 'B-Mall',      color: '#f59e0b', Icon: Building2,    href: 'https://mall.beaver-llc.com/' },
  { label: 'B-Mart',      color: '#f59e0b', Icon: Package,      href: '#' },
  { label: 'SF SDK',      color: '#10b981', Icon: Code2,        href: 'https://www.npmjs.com/package/@slimfile/sdk' },
  { label: 'SF CLI',      color: '#10b981', Icon: Terminal,     href: 'https://www.npmjs.com/package/@slimfile/cli' },
  { label: 'API',         color: '#10b981', Icon: Globe,        href: 'https://api.slim-file.com/' },
];

/* ─── Hero ────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '120px 40px 80px',
    }}>
      {/* Dot grid background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
      }} />

      {/* Product Grid */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: 1400,
        width: '100%',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 20,
        }}>
          {PRODUCTS.map((product) => {
            const isLive = product.href !== '#';
            return (
              <a
                key={product.label}
                href={isLive ? product.href : undefined}
                target={isLive ? '_blank' : undefined}
                rel="noopener noreferrer"
                onClick={e => { if (!isLive) e.preventDefault(); }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 16,
                  padding: '40px 20px',
                  borderRadius: 16,
                  background: `linear-gradient(135deg, ${product.color}08, ${product.color}03)`,
                  border: `1.5px solid ${product.color}35`,
                  textDecoration: 'none',
                  cursor: isLive ? 'pointer' : 'default',
                  opacity: isLive ? 1 : 0.5,
                  transition: 'all 0.3s ease',
                  boxShadow: `0 0 20px ${product.color}10`,
                }}
                onMouseEnter={e => {
                  if (!isLive) return;
                  e.currentTarget.style.background = `linear-gradient(135deg, ${product.color}18, ${product.color}08)`;
                  e.currentTarget.style.borderColor = `${product.color}70`;
                  e.currentTarget.style.boxShadow = `0 0 40px ${product.color}40`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = `linear-gradient(135deg, ${product.color}08, ${product.color}03)`;
                  e.currentTarget.style.borderColor = `${product.color}35`;
                  e.currentTarget.style.boxShadow = `0 0 20px ${product.color}10`;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: 12,
                  background: `${product.color}15`,
                  border: `1px solid ${product.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <product.Icon size={32} strokeWidth={1.8} color={product.color} />
                </div>

                {/* Label */}
                <h3 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: 18,
                  letterSpacing: '-0.02em',
                  color: product.color,
                  margin: 0,
                }}>
                  {product.label}
                </h3>

                {/* Status badge */}
                {!isLive && (
                  <span style={{
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: 'rgba(241,245,249,0.3)',
                    padding: '4px 12px',
                    borderRadius: 999,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}>
                    Coming Soon
                  </span>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
