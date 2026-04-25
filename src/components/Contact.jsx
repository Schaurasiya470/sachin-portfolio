import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiGeeksforgeeks } from 'react-icons/si';

const contacts = [
  { icon:<FaEnvelope size={16}/>, label:'EMAIL', value:'schaurasiya470@gmail.com', href:'mailto:schaurasiya470@gmail.com', color:'#00f5d4' },
  { icon:<FaPhone    size={16}/>, label:'PHONE', value:'+91-9525665702',             href:'tel:+919525665702',               color:'#a78bfa' },
];
const socials = [
  { icon:<FaGithub    size={20}/>, label:'GitHub',       sub:'@Schaurasiya470',   href:'https://github.com/Schaurasiya470',                color:'#e2e8f0' },
  { icon:<FaLinkedin  size={20}/>, label:'LinkedIn',     sub:'mr-sachin-ch',       href:'https://www.linkedin.com/in/mr-sachin-ch/',         color:'#60a5fa' },
  { icon:<SiGeeksforgeeks size={20}/>, label:'GeeksforGeeks', sub:'10+ articles', href:'https://www.geeksforgeeks.org/user/schaurasiya470/',color:'#2f8d46' },
];

export default function Contact() {
  return (
    <>
      <section id="contact" className="section-pad">
        <div style={{ maxWidth:1100, margin:'0 auto' }}>

          {/* heading */}
          <motion.div initial={{ opacity:0, y:26 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            style={{ textAlign:'center', marginBottom:56 }}>
            {/* <p className="section-number" style={{ marginBottom:6 }}>07</p> */}
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(28px,5vw,58px)', fontWeight:800, color:'#fff', letterSpacing:'-.02em', lineHeight:1.1 }}>
              Let's Build Something<br /><span className="text-gradient">Together</span>
            </h2>
            <p style={{ fontSize:'clamp(13px,2vw,15px)', color:'var(--text-muted)', marginTop:18, maxWidth:440, margin:'18px auto 0', lineHeight:1.75 }}>
              Open to full-time roles, freelance projects, and writing gigs. I reply within 24 hours.
            </p>
          </motion.div>

          {/* 3-col grid */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap:20 }}>

            {/* col 1 — direct contact */}
            <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.06 }}
              className="card" style={{ padding:'clamp(20px,4vw,28px)' }}>
              <p style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--cyan)', letterSpacing:'.15em', marginBottom:18 }}>DIRECT CONTACT</p>
              <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
                {contacts.map((c,i) => (
                  <a key={i} href={c.href}
                     style={{ display:'flex', alignItems:'center', gap:13, textDecoration:'none', padding:'13px 16px', borderRadius:10,
                               background:`${c.color}08`, border:`1px solid ${c.color}1a`, transition:'all .2s' }}
                     onMouseEnter={e=>{ e.currentTarget.style.background=`${c.color}14`; e.currentTarget.style.borderColor=`${c.color}30`; }}
                     onMouseLeave={e=>{ e.currentTarget.style.background=`${c.color}08`; e.currentTarget.style.borderColor=`${c.color}1a`; }}>
                    <div style={{ width:34, height:34, borderRadius:9, background:`${c.color}12`, display:'flex', alignItems:'center', justifyContent:'center', color:c.color, flexShrink:0 }}>
                      {c.icon}
                    </div>
                    <div>
                      <p style={{ fontFamily:'var(--font-mono)', fontSize:9, color:c.color, letterSpacing:'.12em', marginBottom:2 }}>{c.label}</p>
                      <p style={{ fontSize:'clamp(11px,2vw,13px)', color:'#e2e8f0' }}>{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* col 2 — socials */}
            <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.12 }}
              className="card" style={{ padding:'clamp(20px,4vw,28px)' }}>
              <p style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--cyan)', letterSpacing:'.15em', marginBottom:18 }}>FIND ME ON</p>
              <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                {socials.map((s,i) => (
                  <a key={i} href={s.href} target="_blank" rel="noreferrer"
                     className="hover-lift" style={{ display:'flex', alignItems:'center', gap:13, textDecoration:'none',
                               padding:'12px 15px', borderRadius:10, background:'var(--surface-2)', border:'1px solid var(--border)' }}>
                    <span style={{ color:s.color, flexShrink:0 }}>{s.icon}</span>
                    <div>
                      <p style={{ fontFamily:'var(--font-display)', fontSize:13, fontWeight:600, color:'#fff', lineHeight:1 }}>{s.label}</p>
                      <p style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text-muted)', marginTop:3 }}>{s.sub}</p>
                    </div>
                    <span style={{ color:'var(--text-muted)', fontSize:12, marginLeft:'auto' }}>↗</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* col 3 — CTA */}
            <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.18 }}
              className="card" style={{ padding:'clamp(20px,4vw,28px)', textAlign:'center', position:'relative', overflow:'hidden', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:16 }}>
              {/* bg glow */}
              <div style={{ position:'absolute', width:260, height:260, top:-80, left:'50%', transform:'translateX(-50%)', background:'radial-gradient(circle,rgba(0,245,212,0.07),transparent)', borderRadius:'50%', pointerEvents:'none' }} />

              <div style={{ fontSize:40 }}>🤝</div>
              <div>
                <h3 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(16px,3vw,21px)', fontWeight:800, color:'#fff', lineHeight:1.2, marginBottom:8 }}>Available Now</h3>
                <p style={{ fontSize:13, color:'var(--text-muted)', lineHeight:1.7 }}>
                  Full-time, freelance, or just a chat about engineering — I'm all ears.
                </p>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, width:'100%' }}>
                <a href="mailto:schaurasiya470@gmail.com" className="btn-primary" style={{ textAlign:'center', width:'100%' }}>
                  Send Email ✉️
                </a>
                <a href="https://www.linkedin.com/in/mr-sachin-ch/" target="_blank" rel="noreferrer" className="btn-ghost" style={{ textAlign:'center', width:'100%', textDecoration:'none' }}>
                  Connect on LinkedIn →
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop:'1px solid var(--border)', background:'rgba(8,12,20,0.6)', backdropFilter:'blur(12px)' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', padding:'clamp(20px,4vw,32px) clamp(18px,5vw,48px)',
                       display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,240px),1fr))', gap:24, alignItems:'center' }}>

          {/* brand */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:9, marginBottom:10 }}>
              <div style={{ width:30, height:30, borderRadius:7, background:'linear-gradient(135deg,#00f5d4,#7c3aed)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)', fontWeight:800, fontSize:11, color:'#000' }}>SC</div>
              <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:14, color:'#fff' }}>Sachin Chaurasiya</span>
            </div>
            <p style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--text-muted)', lineHeight:1.6 }}>
              Full Stack Developer · Meerut, India 🇮🇳
            </p>
          </div>

          {/* quick links */}
          <div style={{ display:'flex', gap:'clamp(16px,3vw,28px)', flexWrap:'wrap' }}>
            {[['#about','About'],['#skills','Skills'],['#projects','Projects'],['#contact','Contact']].map(([h,l]) => (
              <a key={h} href={h} className="nav-link" style={{ fontSize:12 }}>{l}</a>
            ))}
          </div>

          {/* copyright */}
          <div style={{ textAlign:'right' }}>
            <p style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--text-muted)' }}>
              © {new Date().getFullYear()} Sachin Chaurasiya
            </p>
            <p style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text-muted)', marginTop:3, opacity:.6 }}>
              Built with React
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}