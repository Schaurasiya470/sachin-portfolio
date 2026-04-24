import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2020',
    title: 'The Beginning',
    desc: 'Enrolled in B.Tech CSE at Bharat Institute of Technology, Meerut. First lines of C code. Curiosity ignited.',
    icon: '🚀',
    color: '#00f5d4',
  },
  {
    year: '2021',
    title: 'Web Foundations',
    desc: 'Dove deep into HTML, CSS, JavaScript. Built first dynamic web pages and fell in love with frontend.',
    icon: '🌐',
    color: '#a78bfa',
  },
  {
    year: '2022',
    title: 'Full Stack Explorer',
    desc: 'Explored the MERN stack — MongoDB, Express, React, Node. Built full-stack apps and learned REST API design.',
    icon: '⚙️',
    color: '#f59e0b',
  },
  {
    year: '2023',
    title: 'PHP & Enterprise Systems',
    desc: 'Shifted focus to PHP (Yii2, Laravel), MySQL, and scalable ERP architecture. Completed B.Tech with 8.2 CGPA.',
    icon: '🏗️',
    color: '#f472b6',
  },
  {
    year: '2024',
    title: 'Software Engineer ↗',
    desc: 'Joined Dayal InfoSystems as a Software Engineer. Built production systems, GraphQL APIs, and ERP modules. Also became a technical writer at GeeksforGeeks.',
    icon: '💼',
    color: '#34d399',
  },
  {
    year: '2025+',
    title: 'What\'s Next',
    desc: 'Exploring advanced system design, cloud architecture, and open-source contributions. Aiming for high-impact engineering roles.',
    icon: '🔭',
    color: '#60a5fa',
    future: true,
  },
];

export default function Journey() {
  return (
    <section id="journey" style={{ padding: '100px 48px', background: 'rgba(13,19,33,0.4)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        {/* Header */}
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} style={{ marginBottom: 64, textAlign: 'center' }}>
          <p className="section-number" style={{ marginBottom: 8 }}>06</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,4vw,48px)',
                       fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Life Journey
          </h2>
          <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, var(--cyan), var(--violet))',
                         borderRadius: 2, margin: '12px auto 0' }} />
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Center line */}
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0,
                         width: 1, background: 'var(--border)', transform: 'translateX(-50%)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div key={i}
                  initial={{ opacity:0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }} transition={{ delay: i * 0.1 }}
                  style={{ display: 'flex', justifyContent: isLeft ? 'flex-start' : 'flex-end',
                             paddingBottom: 40, position: 'relative' }}>

                  {/* Dot on center line */}
                  <div style={{
                    position: 'absolute', left: '50%', top: 20,
                    transform: 'translateX(-50%)',
                    width: 14, height: 14, borderRadius: '50%',
                    background: m.color,
                    boxShadow: `0 0 16px ${m.color}60`,
                    zIndex: 1,
                    border: '2px solid var(--surface)',
                  }} />

                  {/* Card */}
                  <div className="card"
                       style={{ width: '44%', padding: '22px 26px',
                                  opacity: m.future ? 0.6 : 1,
                                  borderStyle: m.future ? 'dashed' : 'solid' }}>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                      <span style={{ fontSize: 18 }}>{m.icon}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 500,
                                      color: m.color }}>{m.year}</span>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700,
                                  color: '#fff', marginBottom: 8 }}>{m.title}</h3>
                    <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7 }}>{m.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}