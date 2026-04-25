import { motion } from 'framer-motion';
import profileImg from '../assets/profile_image.jpg';

const stats = [
  { val:'2+',   label:'yrs exp'       },
  { val:'10+',  label:'GFG articles'  },
];

export default function Hero() {
  return (
    <section id="home" className="mesh-grid" style={{
      minHeight:'100vh', display:'flex', alignItems:'center',
      padding:'clamp(80px,14vw,108px) clamp(18px,5vw,48px) 56px',
    }}>
      <div style={{ maxWidth:1200, margin:'0 auto', width:'100%', display:'grid',
                    gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,400px),1fr))',
                    gap:'clamp(28px,5vw,60px)', alignItems:'center' }}>

        {/* LEFT */}
        <div>
          {/* badge */}
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:.08 }}
            style={{ display:'inline-flex', alignItems:'center', gap:8, marginBottom:24,
                     padding:'5px 13px', borderRadius:20,
                     background:'rgba(0,245,212,0.07)', border:'1px solid rgba(0,245,212,0.18)' }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'#00f5d4',
                            boxShadow:'0 0 7px #00f5d4', animation:'blink 2s ease-in-out infinite' }} />
            <span style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--cyan)', letterSpacing:'.1em' }}>
              AVAILABLE FOR HIRE
            </span>
          </motion.div>

          {/* headline */}
          <motion.h1 initial={{ opacity:0, y:26 }} animate={{ opacity:1, y:0 }} transition={{ delay:.16 }}
            style={{ fontFamily:'var(--font-display)', fontSize:'clamp(40px,7vw,74px)',
                     fontWeight:800, lineHeight:1.05, letterSpacing:'-.02em', marginBottom:20 }}>
            <span style={{ color:'#fff' }}>Hi, I'm</span><br />
            <span className="text-gradient">Sachin</span><br />
            <span style={{ color:'#fff' }}>Chaurasiya</span>
          </motion.h1>

          {/* role */}
          <motion.div initial={{ opacity:0, x:-16 }} animate={{ opacity:1, x:0 }} transition={{ delay:.28 }}
            style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
            <span style={{ width:32, height:2, background:'linear-gradient(90deg,var(--cyan),transparent)', borderRadius:1, flexShrink:0 }} />
            <p style={{ fontFamily:'var(--font-mono)', fontSize:'clamp(13px,2vw,15px)', color:'var(--text-secondary)', letterSpacing:'.07em' }}>
              Full Stack Developer <span className="cursor-blink" />
            </p>
          </motion.div>

          {/* desc */}
          <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:.38 }}
            style={{ fontSize:'clamp(14px,2vw,15px)', color:'var(--text-muted)', lineHeight:1.8, maxWidth:500, marginBottom:32 }}>
            Software Engineer at <span style={{ color:'var(--text-secondary)' }}>Dayal InfoSystems</span> — building scalable ERP systems, GraphQL APIs, and React dashboards serving thousands of users daily.
          </motion.p>

          {/* buttons */}
          <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:.46 }}
            style={{ display:'flex', gap:12, flexWrap:'wrap', alignItems:'center' }}>

            <a href="#projects" className="btn-primary">View Projects →</a>

            {/* Resume download button */}
            <a
              href="/resume.pdf"
              download="Sachin_Chaurasiya_Resume.pdf"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: 'transparent',
                border: '1px solid rgba(0,245,212,0.35)',
                borderRadius: 10, padding: '13px 20px',
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13,
                letterSpacing: '.05em', color: 'var(--cyan)',
                textDecoration: 'none', transition: 'all .25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(0,245,212,0.1)';
                e.currentTarget.style.boxShadow = '0 0 22px rgba(0,245,212,0.18)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v8M5 7l3 3 3-3" stroke="#00f5d4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 13h10" stroke="#00f5d4" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
              Resume
            </a>

            <a href="https://github.com/Schaurasiya470" target="_blank" rel="noreferrer" className="btn-ghost">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/mr-sachin-ch/" target="_blank" rel="noreferrer" className="btn-ghost">LinkedIn ↗</a>
          </motion.div>

          {/* stats */}
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.6 }}
            style={{ display:'flex', gap:'clamp(20px,4vw,32px)', marginTop:36, paddingTop:28, borderTop:'1px solid var(--border)', flexWrap:'wrap' }}>
            {stats.map((s,i) => (
              <div key={i}>
                <div style={{ fontFamily:'var(--font-display)', fontSize:'clamp(18px,3vw,22px)', fontWeight:800, color:'#fff', lineHeight:1 }}>{s.val}</div>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text-muted)', letterSpacing:'.1em', marginTop:3 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — profile image */}
        <motion.div initial={{ opacity:0, scale:.82 }} animate={{ opacity:1, scale:1 }}
          transition={{ delay:.25, type:'spring', stiffness:75 }}
          style={{ display:'flex', justifyContent:'center', alignItems:'center', position:'relative' }}>

          <div style={{ position:'absolute', inset:-18, borderRadius:'50%', border:'1px solid rgba(0,245,212,0.08)' }} />
          <div style={{ position:'absolute', inset:-38, borderRadius:'50%', border:'1px dashed rgba(0,245,212,0.05)' }} />

          <div className="ring-pulse" style={{
            width:'clamp(220px,32vw,290px)', height:'clamp(220px,32vw,290px)',
            borderRadius:'50%', border:'2px solid rgba(0,245,212,0.28)', overflow:'hidden', position:'relative',
          }}>
            <img src={profileImg} alt="Sachin" style={{ width:'100%', height:'100%', objectFit:'cover' }} loading="eager" />
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(8,12,20,0.25),transparent)' }} />
          </div>

          {/* tech badge */}
          <div style={{ position:'absolute', bottom:12, right:'clamp(-8px,3vw,-12px)',
                         background:'var(--surface-2)', border:'1px solid var(--border-accent)',
                         borderRadius:10, padding:'9px 14px', backdropFilter:'blur(16px)' }}>
            <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--cyan)', lineHeight:1.6 }}>PHP · GraphQL</div>
            <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text-muted)', lineHeight:1.6 }}>React · Node.js</div>
          </div>
        </motion.div>

      </div>

      {/* scroll hint */}
      <div style={{ position:'absolute', bottom:24, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'var(--text-muted)', letterSpacing:'.15em' }}>SCROLL</span>
        <div style={{ width:1, height:40, background:'linear-gradient(to bottom,var(--cyan),transparent)', animation:'blink 2s ease-in-out infinite' }} />
      </div>
    </section>
  );
}