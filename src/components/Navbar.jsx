import { useState, useEffect } from 'react';

const links = [
  { href: '#home',       label: 'Home'       },
  { href: '#about',      label: 'About'      },
  { href: '#skills',     label: 'Skills'     },
  { href: '#projects',   label: 'Projects'   },
  { href: '#experience', label: 'Experience' },
  { href: '#journey',    label: 'Journey'    },
  { href: '#contact',    label: 'Contact'    },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 9000,
      padding: '0 32px',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      background: scrolled ? 'rgba(8,12,20,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      transition: 'all 0.3s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: 64,
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 34, height: 34, borderRadius: 8,
          background: 'linear-gradient(135deg, #00f5d4, #7c3aed)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13, color: '#000',
        }}>SC</div>
        <span style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: '#fff',
          letterSpacing: '0.05em'
        }}>Sachin</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--cyan)', opacity: 0.6 }}>
          .dev
        </span>
      </div>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: 28 }} className="hidden md:flex">
        {links.map(l => (
          <a key={l.href} href={l.href} className="nav-link"
             style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em' }}>
            {l.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a href="mailto:schaurasiya470@gmail.com"
         className="hidden md:block btn-primary"
         style={{ padding: '8px 20px', fontSize: 12 }}>
        Hire Me ↗
      </a>

      {/* Mobile hamburger */}
      <button onClick={() => setOpen(o => !o)}
              style={{ display: 'none', background: 'none', border: 'none', color: '#fff', fontSize: 22, cursor: 'pointer' }}
              className="md:hidden">
        {open ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'absolute', top: 64, left: 0, right: 0,
          background: 'rgba(8,12,20,0.97)', borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: 20
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="nav-link"
               style={{ fontSize: 13 }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}