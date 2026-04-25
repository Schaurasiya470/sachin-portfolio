import { motion } from 'framer-motion';

const exp = [
  {
    role:'Software Engineer', company:'Dayal InfoSystems',
    type:'Onsite · Meerut, India', period:'Jul 2024 – Present',
    current:true, color:'#00f5d4',
    bullets:[
      'partnerPORTAL: Architected GraphQL APIs and React dashboards serving 5,000+ customers; integrated QR-based payments and self-service ticketing, reducing manual support overhead.',
      'License & Subscription Management: Engineered a multi-tenant feature control system with timestamp-driven change propagation (Add/Modify/Delete) across distributed databases; built batch migration APIs to streamline subscription transitions at scale.',
      'TimeSathi: Designed and shipped a Jira-like ERP module from scratch — now used by 100+ users for daily task tracking, appraisals, and delivery management with a full GraphQL API layer.',
      'Stock Adjustment & Payment Tagging: Implemented real-time inventory correction workflows and a structured payment tagging system, boosting financial reconciliation accuracy across ERP.',
    ],
  },
  {
    role:'Technical Content Writer', company:'GeeksforGeeks',
    type:'Remote · Freelance', period:'Apr 2024 – Oct 2024',
    current:false, color:'#a78bfa',
    bullets:[
      'Authored 10+ in-depth technical articles on MERN stack, REST APIs, Tailwind CSS, and modern frameworks — reaching thousands of developers on the platform.',
      'Crafted beginner-to-advanced tutorials with real-world use cases, bridging conceptual gaps and accelerating practical learning.',
    ],
    link:'https://www.geeksforgeeks.org/',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad" style={{ background:'rgba(13,19,33,0.45)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>

        <motion.div initial={{ opacity:0, y:26 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom:48 }}>
          {/* <p className="section-number" style={{ marginBottom:6 }}>05</p> */}
          <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(26px,4vw,46px)', fontWeight:800, color:'#fff', letterSpacing:'-.02em' }}>Experience</h2>
          <div style={{ width:56, height:3, background:'linear-gradient(90deg,var(--cyan),transparent)', borderRadius:2, marginTop:10 }} />
        </motion.div>

        <div style={{ position:'relative' }}>
          <div style={{ position:'absolute', left:4, top:8, bottom:8, width:1, background:'var(--border)' }} />

          <div style={{ display:'flex', flexDirection:'column', gap:32 }}>
            {exp.map((e,i) => (
              <motion.div key={i} initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }} transition={{ delay:i*.12 }}
                style={{ display:'flex', gap:24 }}>

                {/* dot */}
                <div style={{ flexShrink:0, paddingTop:6, marginLeft:-0.5 }}>
                  <div className="tdot" style={{ background:e.color, boxShadow:`0 0 10px ${e.color}66` }} />
                </div>

                {/* card */}
                <div className="card" style={{ flex:1, padding:'clamp(18px,4vw,28px) clamp(18px,4vw,28px)' }}>
                  <div style={{ height:2, background:`linear-gradient(90deg,${e.color},transparent)`, borderRadius:2, marginBottom:18, width:52 }} />

                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:10, marginBottom:14 }}>
                    <div>
                      <h3 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(16px,3vw,19px)', fontWeight:800, color:'#fff', marginBottom:3 }}>{e.role}</h3>
                      <p style={{ fontSize:13, color:e.color, fontWeight:500, marginBottom:2 }}>{e.company}</p>
                      <p style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text-muted)' }}>{e.type}</p>
                    </div>
                    <div>
                      <span style={{ fontFamily:'var(--font-mono)', fontSize:10, padding:'4px 11px', borderRadius:6,
                        background:`${e.color}10`, border:`1px solid ${e.color}28`, color:e.color }}>
                        {e.period}
                      </span>
                      {e.current && (
                        <div style={{ display:'flex', alignItems:'center', gap:5, justifyContent:'flex-end', marginTop:7 }}>
                          <div style={{ width:5, height:5, borderRadius:'50%', background:'#00f5d4', animation:'blink 2s ease infinite' }} />
                          <span style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'var(--cyan)' }}>current</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
                    {e.bullets.map((b,j) => (
                      <li key={j} style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
                        <span style={{ color:e.color, flexShrink:0, marginTop:4, fontSize:11 }}>▸</span>
                        <p style={{ fontSize:'clamp(12px,2vw,13px)', color:'var(--text-muted)', lineHeight:1.75 }}>{b}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}