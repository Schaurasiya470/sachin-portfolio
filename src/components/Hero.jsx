import { motion } from 'framer-motion';
import profileImg from '../assets/profile_image.jpg';

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '100px 48px 60px', position: 'relative',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'grid',
                    gridTemplateColumns: '1fr auto', gap: 60, alignItems: 'center' }}>

        {/* LEFT */}
        <div>
          {/* Status badge */}
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28,
                     padding: '6px 14px', borderRadius: 20,
                     background: 'rgba(0,245,212,0.08)', border: '1px solid rgba(0,245,212,0.2)' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#00f5d4',
                           boxShadow: '0 0 8px #00f5d4', animation: 'blink 2s ease-in-out infinite' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.1em' }}>
              AVAILABLE FOR HIRE
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px,6vw,76px)',
                     fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 24 }}>
            <span style={{ color: '#fff' }}>Hi, I'm</span>
            <br />
            <span className="text-gradient">Sachin</span>
            <br />
            <span style={{ color: '#fff' }}>Chaurasiya</span>
          </motion.h1>

          {/* Role ticker */}
          <motion.div initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.35 }}
            style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <span style={{ width: 36, height: 2, background: 'linear-gradient(90deg, var(--cyan), transparent)', borderRadius: 1 }} />
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--text-secondary)',
                        letterSpacing: '0.08em' }}>
              Full Stack Developer
              <span className="cursor-blink" />
            </p>
          </motion.div>

          {/* Description */}
          <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.45 }}
            style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: 520, marginBottom: 40 }}>
            Software Engineer at <span style={{ color: 'var(--text-secondary)' }}>Dayal InfoSystems</span> —
            specializing in scalable ERP systems, GraphQL APIs, and modern full-stack applications.
            Building software that handles thousands of tasks and API requests daily.
          </motion.p>

          {/* Buttons */}
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.55 }}
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">View Projects →</a>
            <a href="https://github.com/Schaurasiya470" target="_blank" rel="noreferrer"
               className="btn-ghost">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/mr-sachin-ch/" target="_blank" rel="noreferrer"
               className="btn-ghost">LinkedIn ↗</a>
          </motion.div>

          {/* Quick stats row */}
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.7 }}
            style={{ display: 'flex', gap: 32, marginTop: 48, paddingTop: 32,
                     borderTop: '1px solid var(--border)' }}>
            {[
              { val: '1+', label: 'yr experience' },
              { val: '5K+', label: 'tasks managed' },
              { val: '1K+', label: 'API calls/day' },
              { val: '10+', label: 'tech articles' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800,
                               color: '#fff', lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)',
                               letterSpacing: '0.1em', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — profile image */}
        <motion.div initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }}
          transition={{ delay:0.3, type:'spring', stiffness:80 }}
          className="hidden md:block" style={{ position: 'relative' }}>

          {/* Decorative rings */}
          <div style={{
            position: 'absolute', inset: -20,
            borderRadius: '50%',
            border: '1px solid rgba(0,245,212,0.1)',
          }} />
          <div style={{
            position: 'absolute', inset: -40,
            borderRadius: '50%',
            border: '1px dashed rgba(0,245,212,0.06)',
          }} />

          {/* Image */}
          <div className="ring-pulse" style={{
            width: 300, height: 300, borderRadius: '50%',
            border: '2px solid rgba(0,245,212,0.3)',
            overflow: 'hidden', position: 'relative',
          }}>
            <img src={profileImg} alt="Sachin Chaurasiya"
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(8,12,20,0.3), transparent)',
            }} />
          </div>

          {/* Floating badge */}
          <div style={{
            position: 'absolute', bottom: 20, right: -20,
            background: 'var(--surface-2)', border: '1px solid var(--border-accent)',
            borderRadius: 12, padding: '10px 16px', backdropFilter: 'blur(20px)',
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--cyan)' }}>
              PHP · GraphQL
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>
              React · Node.js
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)',
                        letterSpacing: '0.15em' }}>SCROLL</span>
        <div style={{
          width: 1, height: 48,
          background: 'linear-gradient(to bottom, var(--cyan), transparent)',
          animation: 'blink 2s ease-in-out infinite'
        }} />
      </div>
    </section>
  );
}