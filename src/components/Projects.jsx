import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id:1, num:'01', color:'#00f5d4', status:'Production',
    title:'TimeSathi – Project Management & Ticketing',
    category:'Enterprise Platform', year:'2024',
    desc:'A Jira-like ERP module built from scratch, actively used by 100+ users for daily task tracking, appraisals, delivery management, and RASCI-based accountability.',
    longDesc:`Designed and shipped TimeSathi end-to-end — a full-featured project management and ticketing system with GraphQL API layer in Yii2 handling all queries and mutations, decoupling frontend from backend and improving iteration speed.\n\nImplemented RASCI-based responsibility model across Projects, Deliverables, Releases, and Ticketing. Engineered configurable deliverable workflows with status transitions, approval gates, and effort tracking — replacing manual Excel-based processes entirely. Automated stakeholder email notifications on workflow events, reducing communication lag.`,
    tags:['PHP (Yii2)','GraphQL','React','MySQL','Bootstrap'],
    highlight:'100+ active users · Full workflow automation',
  },
  {
    id:2, num:'02', color:'#a78bfa', status:'Production',
    title:'partnerPORTAL – Customer Self-Service Platform',
    category:'SaaS Dashboard', year:'2024',
    desc:'Architected GraphQL APIs and React dashboards serving 5,000+ customers. Integrated QR-based payments and self-service ticketing, reducing manual support overhead significantly.',
    longDesc:`partnerPORTAL is a multi-tenant self-service platform that allows customers to manage their subscriptions, raise support tickets, and process payments without manual intervention.\n\nBuilt the entire GraphQL API layer and React dashboard from scratch. Integrated QR-code payment flows and a ticketing system that routes issues to the correct team automatically. The platform reduced manual support queries by a significant margin after launch.`,
    tags:['GraphQL','React','PHP (Yii2)','QR Payments','MySQL'],
    highlight:'5,000+ customers served',
  },
  {
    id:3, num:'03', color:'#f59e0b', status:'Production',
    title:'License & Subscription Management',
    category:'Backend Infrastructure', year:'2024',
    desc:'Multi-tenant feature control system with timestamp-driven change propagation (Add/Modify/Delete) across distributed databases and batch migration APIs for subscription transitions.',
    longDesc:`Engineered a robust multi-tenant licensing engine that controls feature access across the entire ERP product suite. Uses a timestamp-driven event system — every Add, Modify, or Delete propagates reliably across distributed databases, ensuring eventual consistency.\n\nBuilt batch migration APIs that streamline subscription tier transitions at scale, eliminating manual database operations and reducing risk during upgrades.`,
    tags:['PHP','Yii2','MySQL','Distributed DB','REST API'],
    highlight:'Distributed · Batch migration at scale',
  },
  {
    id:4, num:'04', color:'#f472b6', status:'Production',
    title:'Stock Adjustment & Payment Tagging Modules',
    category:'ERP Modules', year:'2024',
    desc:'Real-time inventory correction workflows improving stock accuracy across ERP. Structured payment tagging system that boosted financial reconciliation accuracy.',
    longDesc:`Stock Adjustment: Implemented real-time inventory correction workflows that give warehouse teams an auditable trail of every stock movement. Significantly improved stock accuracy and operational consistency across ERP branches.\n\nPayment Tagging: Built a structured tagging system for payment records that enables finance teams to categorize and reconcile transactions with precision. Alongside this, delivered a centralized announcement module that unified internal communication across all ERP users.`,
    tags:['PHP (Yii2)','MySQL','jQuery','AJAX','Bootstrap'],
    highlight: '30% efficiency improvement across ERP',
  },
  {
    id:5, num:'05', color:'#34d399', status:'Completed',
    title:'FlavourFleet – Food Ordering Web App',
    category:'Full Stack · MERN', year:'2023',
    desc:'Production-ready full-stack food ordering app with JWT auth, RBAC, optimized MongoDB schemas, RESTful APIs, and fully responsive React + Tailwind UI.',
    longDesc:`Independently built FlavourFleet end-to-end covering architecture, API design, auth, and deployment. The platform uses JWT-based authentication with role-based access control for customers and admins.\n\nDesigned optimized MongoDB schemas for menu management, order lifecycle, and user profiles. The RESTful API handles concurrent order requests efficiently. Built a fully responsive UI using React and Tailwind CSS with smooth UX transitions.`,
    tags:['React.js','Node.js','Express.js','MongoDB','Tailwind CSS','JWT','Redux'],
    highlight:'Full MERN stack · JWT + RBAC',
    github:'https://github.com/Schaurasiya470',
  },
];

function Modal({ project, onClose }) {
  if (!project) return null;
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
        onClick={onClose}
        style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.82)', backdropFilter:'blur(14px)',
                  zIndex:9900, display:'flex', alignItems:'center', justifyContent:'center',
                  padding:'clamp(12px,4vw,24px)' }}>

        <motion.div initial={{ scale:.88, opacity:0 }} animate={{ scale:1, opacity:1 }}
          exit={{ scale:.88, opacity:0 }} transition={{ type:'spring', stiffness:110 }}
          onClick={e => e.stopPropagation()}
          style={{ background:'var(--surface-1)', border:'1px solid var(--border)', borderRadius:18,
                    width:'100%', maxWidth:620, maxHeight:'86vh', overflowY:'auto' }}>

          <div style={{ height:3, background:`linear-gradient(90deg,${project.color},transparent)`, borderRadius:'18px 18px 0 0' }} />
          <div style={{ padding:'clamp(18px,5vw,32px)' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:12, marginBottom:18 }}>
              <div style={{ flex:1 }}>
                <p style={{ fontFamily:'var(--font-mono)', fontSize:10, color:project.color, letterSpacing:'.14em', marginBottom:7 }}>{project.category} · {project.year}</p>
                <h3 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(16px,4vw,21px)', fontWeight:800, color:'#fff', lineHeight:1.2 }}>{project.title}</h3>
              </div>
              <button onClick={onClose} style={{ background:'none', border:'1px solid var(--border)', borderRadius:8, width:32, height:32, color:'var(--text-muted)', cursor:'pointer', fontSize:13, flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center' }}>✕</button>
            </div>

            <div style={{ background:`${project.color}10`, border:`1px solid ${project.color}22`, borderRadius:8, padding:'9px 13px', marginBottom:18 }}>
              <p style={{ fontFamily:'var(--font-mono)', fontSize:11, color:project.color }}>◈ {project.highlight}</p>
            </div>

            {project.longDesc.split('\n\n').map((p,i) => (
              <p key={i} style={{ fontSize:'clamp(13px,2vw,14px)', color:'var(--text-muted)', lineHeight:1.8, marginBottom:12 }}>{p}</p>
            ))}

            <div style={{ display:'flex', flexWrap:'wrap', gap:7, marginTop:18 }}>
              {project.tags.map((t,i) => <span key={i} className="tag" style={{ fontSize:10 }}>{t}</span>)}
            </div>
            {project.github && (
              <div style={{ marginTop:20 }}>
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost"
                   style={{ padding:'9px 22px', fontSize:12, textDecoration:'none' }}>GitHub ↗</a>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [sel, setSel] = useState(null);

  return (
    <section id="projects" className="section-pad">
      <div style={{ maxWidth:1200, margin:'0 auto' }}>

        <motion.div initial={{ opacity:0, y:26 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          style={{ marginBottom:46, display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:14 }}>
          <div>
            {/* <p className="section-number" style={{ marginBottom:6 }}>04</p> */}
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(26px,4vw,46px)', fontWeight:800, color:'#fff', letterSpacing:'-.02em' }}>Projects</h2>
            <div style={{ width:56, height:3, background:'linear-gradient(90deg,var(--cyan),transparent)', borderRadius:2, marginTop:10 }} />
          </div>
          <p style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text-muted)' }}>tap to expand →</p>
        </motion.div>

        <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
          {projects.map((p,i) => (
            <motion.div key={p.id} initial={{ opacity:0, x:-22 }} whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }} transition={{ delay:i*.065 }}
              onClick={() => setSel(p)} className="card hover-lift"
              style={{ padding:'clamp(14px,3vw,22px) clamp(14px,3vw,26px)', cursor:'pointer' }}>
              <div style={{ display:'grid', gridTemplateColumns:'auto 1fr auto', gap:'clamp(10px,2.5vw,22px)', alignItems:'center' }}>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'clamp(16px,3vw,24px)', fontWeight:300, color:p.color, opacity:.38, lineHeight:1, flexShrink:0 }}>{p.num}</span>
                <div>
                  <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:4, flexWrap:'wrap' }}>
                    <h3 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(13px,2.5vw,16px)', fontWeight:700, color:'#fff' }}>{p.title}</h3>
                    <span style={{ fontFamily:'var(--font-mono)', fontSize:9, padding:'2px 7px', borderRadius:4, flexShrink:0,
                      background: p.status==='Production' ? 'rgba(0,245,212,0.1)' : 'rgba(156,163,175,0.1)',
                      border:`1px solid ${p.status==='Production' ? 'rgba(0,245,212,0.22)' : 'rgba(156,163,175,0.18)'}`,
                      color: p.status==='Production' ? 'var(--cyan)' : 'var(--text-muted)', letterSpacing:'.1em' }}>{p.status}</span>
                  </div>
                  <p style={{ fontSize:'clamp(11px,1.8vw,13px)', color:'var(--text-muted)', lineHeight:1.6, marginBottom:8, maxWidth:560 }}>{p.desc}</p>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
                    {p.tags.slice(0,4).map((t,j) => <span key={j} className="tag" style={{ fontSize:10 }}>{t}</span>)}
                    {p.tags.length>4 && <span className="tag tag-v" style={{ fontSize:10 }}>+{p.tags.length-4}</span>}
                  </div>
                </div>
                <span style={{ color:p.color, fontSize:16, opacity:.55, flexShrink:0 }}>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal project={sel} onClose={() => setSel(null)} />
    </section>
  );
}