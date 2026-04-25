import { motion } from 'framer-motion';

const cards = [
  { icon:'🎓', title:'Education',    desc:'B.Tech CSE — BIT Meerut',           sub:'CGPA: 8.2 / 10  ·  2020–2024' },
  { icon:'💼', title:'Current Role', desc:'Software Engineer @ Dayal InfoSystems', sub:'Jul 2024 – Present  ·  Meerut, India' },
  { icon:'✍️', title:'Freelance',    desc:'Technical Writer @ GeeksforGeeks', sub:'Apr 2024 – Oct 2024  ·  Remote (Freelance)' },
  { icon:'📍', title:'Location',     desc:'Meerut, Uttar Pradesh, India',      sub:'Open to remote & hybrid roles' },
];

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ maxWidth:1200, margin:'0 auto' }}>
      <motion.div initial={{ opacity:0, y:32 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.55 }}>

        <div style={{ marginBottom:48 }}>
          {/* <p className="section-number" style={{ marginBottom:6 }}>02</p> */}
          <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(26px,4vw,46px)', fontWeight:800, color:'#fff', letterSpacing:'-.02em' }}>About Me</h2>
          <div style={{ width:56, height:3, background:'linear-gradient(90deg,var(--cyan),transparent)', borderRadius:2, marginTop:10 }} />
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap:36, alignItems:'start' }}>

          {/* bio */}
          <div>
            <div className="code-block" style={{ marginBottom:24, overflowX:'auto' }}>
              <span style={{ color:'var(--cyan)' }}>const</span><span style={{ color:'#fff' }}> sachin </span><span style={{ color:'var(--text-muted)' }}>=</span><span style={{ color:'#a78bfa' }}> {'{'}</span><br />
              <span style={{ color:'var(--text-muted)', paddingLeft:18 }}>role: </span><span style={{ color:'#f9a8d4' }}>"Software Engineer"</span>,<br />
              <span style={{ color:'var(--text-muted)', paddingLeft:18 }}>company: </span><span style={{ color:'#f9a8d4' }}>"Dayal InfoSystems"</span>,<br />
              <span style={{ color:'var(--text-muted)', paddingLeft:18 }}>experience: </span><span style={{ color:'#f9a8d4' }}>"2+ Years"</span>,<br />
              <span style={{ color:'var(--text-muted)', paddingLeft:18 }}>stack: </span><span style={{ color:'#f9a8d4' }}>"PHP · GraphQL · React . MERN"</span>,<br />
              <span style={{ color:'var(--text-muted)', paddingLeft:18 }}>passions: </span><span style={{ color:'#f9a8d4' }}>["APIs","ERP"]</span><br />
              <span style={{ color:'#a78bfa' }}>{'}'}</span>
            </div>

            <p style={{ fontSize:'clamp(13px,2vw,15px)', color:'var(--text-muted)', lineHeight:1.85, marginBottom:14 }}>
              Full Stack Developer with <span style={{ color:'var(--text-secondary)' }}>2+ years of professional experience</span> building scalable ERP platforms, GraphQL APIs, and React dashboards at Dayal InfoSystems.
            </p>
            <p style={{ fontSize:'clamp(13px,2vw,15px)', color:'var(--text-muted)', lineHeight:1.85 }}>
              I've shipped production systems — partnerPORTAL, TimeSathi, multi-tenant licensing — that serve thousands of users daily. Outside work I write technical articles for GeeksforGeeks, helping developers bridge conceptual and practical gaps.
            </p>
          </div>

          {/* cards */}
          <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
            {cards.map((c,i) => (
              <div key={i} className="card hover-lift" style={{ padding:'14px 18px', display:'flex', gap:13, alignItems:'flex-start' }}>
                <span style={{ fontSize:17, flexShrink:0, marginTop:2 }}>{c.icon}</span>
                <div>
                  <p style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'var(--cyan)', letterSpacing:'.13em', marginBottom:3 }}>{c.title}</p>
                  <p style={{ fontFamily:'var(--font-display)', fontSize:13, fontWeight:600, color:'#fff', marginBottom:2 }}>{c.desc}</p>
                  <p style={{ fontSize:11, color:'var(--text-muted)', lineHeight:1.5 }}>{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}