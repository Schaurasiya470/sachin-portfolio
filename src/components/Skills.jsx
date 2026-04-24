import { motion } from 'framer-motion';

const skillGroups = [
  {
    label: 'Languages',
    icon: '{}',
    skills: [
      { name: 'PHP', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'C / C++', level: 70 },
      { name: 'SQL', level: 82 },
    ]
  },
  {
    label: 'Backend',
    icon: '⚙',
    skills: [
      { name: 'Yii2 / Laravel', level: 88 },
      { name: 'GraphQL', level: 83 },
      { name: 'REST APIs', level: 90 },
      { name: 'Express.js', level: 72 },
    ]
  },
  {
    label: 'Frontend',
    icon: '◇',
    skills: [
      { name: 'React.js', level: 82 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'HTML / CSS', level: 90 },
      { name: 'jQuery / AJAX', level: 78 },
    ]
  },
  {
    label: 'Databases & DevOps',
    icon: '⬡',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 72 },
      { name: 'Git / GitLab', level: 82 },
      { name: 'GitLab CI', level: 60 },
    ]
  }
];

const techBadges = [
  'PHP (Yii2)', 'Laravel', 'Symfony', 'GraphQL (Webonyx)', 'Guzzle HTTP',
  'React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap',
  'MySQL', 'MongoDB', 'REST APIs', 'MVC Architecture',
  'Git', 'GitHub', 'GitLab', 'VS Code', 'Postman',
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 48px', background: 'rgba(13,19,33,0.4)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} style={{ marginBottom: 60 }}>
          <p className="section-number" style={{ marginBottom: 8 }}>03</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,4vw,48px)',
                       fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Skills & Stack
          </h2>
          <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, var(--cyan), transparent)',
                         borderRadius: 2, marginTop: 12 }} />
        </motion.div>

        {/* Skill bars grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                       gap: 24, marginBottom: 48 }}>
          {skillGroups.map((group, gi) => (
            <motion.div key={gi} className="card" style={{ padding: '24px 28px' }}
              initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay: gi * 0.1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--cyan)', lineHeight: 1 }}>
                  {group.icon}
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: '#fff' }}>
                  {group.label}
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {group.skills.map((s, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between',
                                   alignItems: 'center', marginBottom: 6 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)' }}>
                        {s.name}
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10,
                                      color: 'var(--text-muted)' }}>{s.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div className="skill-bar-fill"
                        initial={{ scaleX:0 }} whileInView={{ scaleX: s.level / 100 }}
                        viewport={{ once:true }} transition={{ delay: i * 0.1 + 0.2, duration: 1, ease: 'easeOut' }}
                        style={{ transformOrigin: 'left', height: '100%',
                                  background: 'linear-gradient(90deg, var(--cyan), var(--violet))' }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badge ticker */}
        <div style={{ overflow: 'hidden', position: 'relative',
                       borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
                       padding: '16px 0' }}>
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, zIndex: 1,
            background: 'linear-gradient(90deg, rgba(8,12,20,1), transparent)'
          }} />
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, zIndex: 1,
            background: 'linear-gradient(270deg, rgba(8,12,20,1), transparent)'
          }} />
          <div className="ticker-track">
            {[...techBadges, ...techBadges].map((tech, i) => (
              <span key={i} style={{
                fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)',
                padding: '0 28px', whiteSpace: 'nowrap',
                borderRight: '1px solid var(--border)'
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}