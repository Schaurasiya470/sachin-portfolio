import { useState, useEffect } from 'react';

const links = [
  ['#home','Home'],['#about','About'],['#skills','Skills'],
  ['#projects','Projects'],['#experience','Experience'],
  ['#journey','Journey'],['#contact','Contact'],
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const [isMobile, setIsMobile]   = useState(false);

  useEffect(() => {
    // scroll
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });

    // breakpoint
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const onMq = (e) => { setIsMobile(e.matches); if (!e.matches) setOpen(false); };
    mq.addEventListener('change', onMq);

    return () => {
      window.removeEventListener('scroll', onScroll);
      mq.removeEventListener('change', onMq);
    };
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 9000,
      height: 60, padding: '0 clamp(18px,5vw,36px)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      background: scrolled ? 'rgba(8,12,20,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(18px)' : 'none',
      transition: 'all .3s ease',
    }}>

      {/* Logo */}
      <a href="#home" style={{ display:'flex', alignItems:'center', gap:8, textDecoration:'none', flexShrink:0 }}>
        <div style={{ width:32, height:32, borderRadius:8, background:'linear-gradient(135deg,#00f5d4,#7c3aed)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)', fontWeight:800, fontSize:12, color:'#000' }}>SC</div>
        <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:14, color:'#fff' }}>
          Sachin<span style={{ color:'var(--cyan)', fontFamily:'var(--font-mono)', fontSize:10 }}>.dev</span>
        </span>
      </a>

      {/* Desktop: nav links + hire button */}
      {!isMobile && (
        <>
          <div style={{ display:'flex', gap:24 }}>
            {links.map(([href, label]) => (
              <a key={href} href={href} className="nav-link">{label}</a>
            ))}
          </div>
          <a href="mailto:schaurasiya470@gmail.com" className="btn-primary"
             style={{ padding:'7px 18px', fontSize:11, textDecoration:'none' }}>
            Hire Me ↗
          </a>
        </>
      )}

      {/* Mobile: hamburger only */}
      {isMobile && (
        <button
          onClick={() => setOpen(o => !o)}
          style={{ background:'none', border:'1px solid var(--border)', borderRadius:8,
                   color:'#fff', fontSize:18, cursor:'pointer', lineHeight:1,
                   width:36, height:36, display:'flex', alignItems:'center', justifyContent:'center' }}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      )}

      {/* Mobile drawer */}
      {isMobile && open && (
        <div style={{
          position:'absolute', top:60, left:0, right:0,
          background:'rgba(8,12,20,0.98)',
          borderBottom:'1px solid var(--border)',
          padding:'24px clamp(18px,5vw,36px)',
          display:'flex', flexDirection:'column', gap:20,
          boxShadow:'0 16px 40px rgba(0,0,0,0.5)',
        }}>
          {links.map(([href, label]) => (
            <a key={href} href={href}
               onClick={() => setOpen(false)}
               style={{ fontFamily:'var(--font-mono)', fontSize:14, color:'var(--text-muted)',
                         textDecoration:'none', letterSpacing:'.06em',
                         padding:'6px 0', borderBottom:'1px solid var(--border)',
                         transition:'color .2s' }}
               onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan)'}
               onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              {label}
            </a>
          ))}
          <a href="mailto:schaurasiya470@gmail.com" className="btn-primary"
             style={{ textAlign:'center', marginTop:4, textDecoration:'none' }}
             onClick={() => setOpen(false)}>
            Hire Me ↗
          </a>
        </div>
      )}
    </nav>
  );
}