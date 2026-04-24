import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    num: '01',
    title: 'TimeSathi — Project Management System',
    category: 'Enterprise Platform',
    year: '2024',
    desc: 'A comprehensive PHP-based project management system used by 100+ users to track 5,000+ weekly tasks, project deadlines, milestones, and individual performance metrics. Features real-time dashboards and multi-role access control.',
    longDesc: `TimeSathi is a robust project management platform built on PHP (Yii2 MVC) handling hundreds of concurrent users. It features granular task tracking with priority queues, deadline alerts, and manager-level analytics dashboards.\n\nKey highlights include a notification engine for deadline reminders, exportable performance reports, and a modular permission system supporting roles like Admin, Manager, and Developer. The system is designed for scale — processing 5,000+ task events weekly without degradation.`,
    tags: ['PHP', 'Yii2', 'MySQL', 'MVC', 'jQuery', 'Bootstrap'],
    highlight: 'Used by 100+ users, 5K+ tasks/week',
    status: 'Production',
    color: '#00f5d4',
  },
  {
    id: 2,
    num: '02',
    title: 'Modular API Integration Engine',
    category: 'Backend Infrastructure',
    year: '2024',
    desc: 'An enterprise-grade API integration layer built with Yii2 and Guzzle HTTP, enabling seamless data exchange between 5+ third-party platforms with 1,000+ API requests processed daily.',
    longDesc: `This modular engine acts as the central data bus for all third-party integrations at Dayal InfoSystems. Built on Yii2's service-oriented architecture, it supports OAuth2 token refresh, request queuing, retry logic, and webhook ingestion.\n\nGraphQL endpoints (via Webonyx) were layered on top of REST, reducing over-fetching by ~60% and cutting average response latency by 25%. The engine currently powers integrations with payment gateways, HR tools, and logistics partners.`,
    tags: ['PHP', 'GraphQL', 'Guzzle', 'Webonyx', 'REST', 'Yii2'],
    highlight: '1K+ API calls/day, 25% latency reduction',
    status: 'Production',
    color: '#a78bfa',
  },
  {
    id: 3,
    num: '03',
    title: 'ERP Modules Suite',
    category: 'Enterprise Resource Planning',
    year: '2024',
    desc: 'Built and maintained 5+ ERP modules — Sales, Purchase, HRMS, Inventory, and Accounts — improving organizational process efficiency by 30% through automation and optimized data flows.',
    longDesc: `This ERP suite consolidates critical business operations into a unified platform. Each module was built with separation of concerns in mind, allowing independent updates without system-wide downtime.\n\nNotable features include automated purchase order workflows, HRMS payroll computation with deductions, and a real-time inventory tracking system with low-stock alerts. The Accounts module integrates with the Sales and Purchase flows for auto-reconciliation.`,
    tags: ['PHP', 'Yii2', 'MySQL', 'JavaScript', 'Bootstrap', 'AJAX'],
    highlight: '5+ modules, 30% efficiency gain',
    status: 'Production',
    color: '#f59e0b',
  },
  {
    id: 4,
    num: '04',
    title: 'FlavourFleet — Food Delivery App',
    category: 'Full Stack Web App',
    year: '2023',
    desc: 'A complete micro food delivery platform with a React frontend and a custom Node.js/Express REST API backend. Fully responsive, featuring cart management, real-time order tracking, and a scalable API layer.',
    longDesc: `FlavourFleet was built as part of a GeeksforGeeks internship to demonstrate a 360° understanding of web architecture. The frontend is a React SPA with context-based cart state, responsive Tailwind layouts, and animated transitions.\n\nThe backend is a Node.js/Express RESTful server backed by MongoDB, designed with route-level middleware for auth, pagination, and rate limiting. The API significantly outperforms naive REST implementations through efficient query design and indexed collections.`,
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST API'],
    highlight: 'Full-stack · GeeksforGeeks internship project',
    status: 'Completed',
    color: '#f472b6',
    github: 'https://github.com/Schaurasiya470',
  },
  {
    id: 5,
    num: '05',
    title: 'Student Registration System',
    category: 'Academic Management Tool',
    year: '2023',
    desc: 'A PHP + MySQL system for college admins to manage student records, course registration, subject enrollment, and mark entry — with full CRUD operations and Bootstrap UI.',
    longDesc: `This system simplifies academic record management for college administrators. Built on pure PHP with a MySQL backend, it supports multi-level registration flows from student admission to subject enrollment and grade entry.\n\nFeatures include dynamic course-to-subject mapping, batch-level operations for mark uploads, and a reporting module for semester summaries. The Bootstrap + jQuery frontend delivers a clean, responsive interface with modal-based forms.`,
    tags: ['PHP', 'MySQL', 'Bootstrap', 'jQuery', 'HTML', 'CSS'],
    highlight: 'Full CRUD · Academic admin tool',
    status: 'Completed',
    color: '#34d399',
    github: 'https://github.com/Schaurasiya470',
  },
];

function Modal({ project, onClose }) {
  if (!project) return null;
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
        onClick={onClose}
        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)',
                  backdropFilter: 'blur(16px)', zIndex: 9900,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>

        <motion.div initial={{ scale:0.85, opacity:0 }} animate={{ scale:1, opacity:1 }}
          exit={{ scale:0.85, opacity:0 }} transition={{ type:'spring', stiffness:120 }}
          onClick={e => e.stopPropagation()}
          style={{ background: 'var(--surface-1)', border: '1px solid var(--border)',
                    borderRadius: 20, maxWidth: 680, width: '100%',
                    maxHeight: '85vh', overflowY: 'auto' }}>

          {/* Top accent */}
          <div style={{ height: 3, background: `linear-gradient(90deg, ${project.color}, transparent)`,
                         borderRadius: '20px 20px 0 0' }} />

          <div style={{ padding: '32px 36px' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                           marginBottom: 24 }}>
              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: project.color,
                              letterSpacing: '0.15em', marginBottom: 8 }}>{project.category} · {project.year}</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 800,
                               color: '#fff', lineHeight: 1.2 }}>{project.title}</h3>
              </div>
              <button onClick={onClose} style={{ background: 'none', border: '1px solid var(--border)',
                borderRadius: 8, width: 36, height: 36, color: 'var(--text-muted)',
                cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0 }}>✕</button>
            </div>

            {/* Highlight */}
            <div style={{ background: `${project.color}12`, border: `1px solid ${project.color}25`,
                           borderRadius: 10, padding: '12px 16px', marginBottom: 24 }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: project.color }}>
                ◈ {project.highlight}
              </p>
            </div>

            {/* Long desc */}
            {project.longDesc.split('\n\n').map((para, i) => (
              <p key={i} style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.8,
                                    marginBottom: 16 }}>{para}</p>
            ))}

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 24 }}>
              {project.tags.map((t, i) => (
                <span key={i} className="tag">{t}</span>
              ))}
            </div>

            {/* Actions */}
            {project.github && (
              <div style={{ marginTop: 28 }}>
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost"
                   style={{ display: 'inline-block', padding: '10px 24px', fontSize: 13 }}>
                  GitHub ↗
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" style={{ padding: '100px 48px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} style={{ marginBottom: 60,
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <p className="section-number" style={{ marginBottom: 8 }}>04</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,4vw,48px)',
                         fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
              Projects
            </h2>
            <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, var(--cyan), transparent)',
                           borderRadius: 2, marginTop: 12 }} />
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>
            Click any project to expand
          </p>
        </motion.div>

        {/* Project list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {projects.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }} transition={{ delay: i * 0.08 }}
              onClick={() => setSelected(p)}
              className="card hover-lift"
              style={{ padding: '24px 32px', cursor: 'pointer', display: 'grid',
                        gridTemplateColumns: 'auto 1fr auto', gap: 24, alignItems: 'center' }}>

              {/* Number */}
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 28, fontWeight: 300,
                               color: p.color, opacity: 0.4, lineHeight: 1, minWidth: 48 }}>
                {p.num}
              </span>

              {/* Content */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: '#fff' }}>
                    {p.title}
                  </h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9,
                                   padding: '3px 8px', borderRadius: 4,
                                   background: p.status === 'Production' ? 'rgba(0,245,212,0.1)' : 'rgba(156,163,175,0.1)',
                                   border: `1px solid ${p.status === 'Production' ? 'rgba(0,245,212,0.25)' : 'rgba(156,163,175,0.2)'}`,
                                   color: p.status === 'Production' ? 'var(--cyan)' : 'var(--text-muted)',
                                   letterSpacing: '0.1em' }}>
                    {p.status}
                  </span>
                </div>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6,
                              marginBottom: 12, maxWidth: 600 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tags.slice(0,4).map((t, j) => (
                    <span key={j} className="tag" style={{ fontSize: 10 }}>{t}</span>
                  ))}
                  {p.tags.length > 4 && (
                    <span className="tag tag-violet" style={{ fontSize: 10 }}>+{p.tags.length - 4}</span>
                  )}
                </div>
              </div>

              {/* Arrow */}
              <span style={{ color: p.color, fontSize: 20, opacity: 0.6 }}>→</span>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}