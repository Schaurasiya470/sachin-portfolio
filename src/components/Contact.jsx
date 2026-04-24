import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socials = [
  {
    icon: <FaGithub size={18} />,
    label: 'GitHub',
    handle: '@Schaurasiya470',
    href: 'https://github.com/Schaurasiya470',
    color: '#fff',
  },
  {
    icon: <FaLinkedin size={18} />,
    label: 'LinkedIn',
    handle: 'mr-sachin-ch',
    href: 'https://www.linkedin.com/in/mr-sachin-ch/',
    color: '#60a5fa',
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '100px 48px 60px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} style={{ textAlign: 'center', marginBottom: 64 }}>
          <p className="section-number" style={{ marginBottom: 8 }}>07</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,5vw,60px)',
                       fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Let's Build Something
            <br />
            <span className="text-gradient">Together</span>
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-muted)', marginTop: 20, maxWidth: 480,
                       margin: '20px auto 0', lineHeight: 1.7 }}>
            Open to full-time roles, freelance projects, and technical writing opportunities.
            Drop a message — I respond within 24 hours.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>

          {/* Left — contact info */}
          <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}>

            <div className="card" style={{ padding: '32px 36px', marginBottom: 20 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700,
                            color: '#fff', marginBottom: 24 }}>Contact Info</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <a href="mailto:schaurasiya470@gmail.com"
                   style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none',
                             padding: '14px 18px', borderRadius: 12,
                             background: 'rgba(0,245,212,0.05)', border: '1px solid rgba(0,245,212,0.15)',
                             transition: 'all 0.2s' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(0,245,212,0.1)',
                                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                                  color: 'var(--cyan)', fontSize: 15 }}>✉</div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--cyan)',
                                  letterSpacing: '0.12em', marginBottom: 2 }}>EMAIL</p>
                    <p style={{ fontSize: 14, color: '#e2e8f0' }}>schaurasiya470@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+919525665702"
                   style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none',
                             padding: '14px 18px', borderRadius: 12,
                             background: 'rgba(124,58,237,0.05)', border: '1px solid rgba(124,58,237,0.15)' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(124,58,237,0.1)',
                                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                                  color: '#a78bfa', fontSize: 15 }}>☎</div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#a78bfa',
                                  letterSpacing: '0.12em', marginBottom: 2 }}>PHONE</p>
                    <p style={{ fontSize: 14, color: '#e2e8f0' }}>+91-9525665702</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Socials */}
            <div style={{ display: 'flex', gap: 14 }}>
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer"
                   className="card hover-lift"
                   style={{ flex: 1, padding: '18px 20px', textDecoration: 'none',
                             display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ color: s.color }}>{s.icon}</span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)',
                                  letterSpacing: '0.1em' }}>{s.label}</p>
                    <p style={{ fontSize: 13, color: '#e2e8f0' }}>{s.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — CTA card */}
          <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}>
            <div className="card" style={{ padding: '40px 36px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              {/* BG glow */}
              <div style={{ position: 'absolute', width: 300, height: 300, top: -100, left: '50%',
                             transform: 'translateX(-50%)',
                             background: 'radial-gradient(circle, rgba(0,245,212,0.08), transparent)',
                             borderRadius: '50%', pointerEvents: 'none' }} />

              <div style={{ fontSize: 48, marginBottom: 20 }}>🤝</div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 800,
                            color: '#fff', marginBottom: 12, lineHeight: 1.2 }}>
                Available for Opportunities
              </h3>

              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 32 }}>
                Whether it's a full-time position, a freelance gig, or just a chat about
                engineering — I'm all ears. Let's make something great.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <a href="mailto:schaurasiya470@gmail.com" className="btn-primary"
                   style={{ display: 'block', textAlign: 'center', textDecoration: 'none', padding: '14px 0' }}>
                  Send an Email ✉️
                </a>
                <a href="https://www.linkedin.com/in/mr-sachin-ch/" target="_blank" rel="noreferrer"
                   className="btn-ghost"
                   style={{ display: 'block', textAlign: 'center', textDecoration: 'none', padding: '14px 0' }}>
                  Connect on LinkedIn →
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div style={{ borderTop: '1px solid var(--border)', marginTop: 80, paddingTop: 32,
                       display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                       flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>
            © 2025 Sachin Chaurasiya — Built with React & ☕
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>
            Meerut, India 🇮🇳
          </p>
        </div>
      </div>
    </section>
  );
}