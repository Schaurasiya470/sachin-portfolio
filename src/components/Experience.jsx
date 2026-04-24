import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Dayal InfoSystems',
    type: 'Onsite · Meerut, India',
    period: 'Jul 2024 – Present',
    current: true,
    color: '#00f5d4',
    bullets: [
      'Developed core features for TimeSathi, a PHP-based Project Management System used by 100+ users to track 5,000+ tasks weekly, project deadlines, and performance metrics.',
      'Engineered a modular API Integration Engine handling 1,000+ API requests/day, enabling seamless data exchange between 5+ third-party platforms using Yii2 MVC.',
      'Enhanced and maintained 5+ ERP modules — Sales, Purchase, HRMS, Inventory, Accounts — improving process efficiency by 30%.',
      'Built and optimized GraphQL APIs using PHP (Webonyx + Guzzle HTTP Client) reducing response latency by 25%.',
    ]
  },
  {
    role: 'Technical Content Writer',
    company: 'GeeksforGeeks',
    type: 'Remote · Freelance',
    period: 'Apr 2024 – Present',
    current: true,
    color: '#a78bfa',
    bullets: [
      'Authored 10+ technical articles covering MERN stack, REST APIs, Tailwind CSS, modern frameworks, and web development concepts.',
      'Developed beginner-to-advanced tutorials with practical use cases to support hands-on learning and bridge conceptual gaps.',
    ],
    link: 'https://www.geeksforgeeks.org/',
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '100px 48px', background: 'rgba(13,19,33,0.4)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} style={{ marginBottom: 60 }}>
          <p className="section-number" style={{ marginBottom: 8 }}>05</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,4vw,48px)',
                       fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Experience
          </h2>
          <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, var(--cyan), transparent)',
                         borderRadius: 2, marginTop: 12 }} />
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: 20, top: 10, bottom: 10,
                         width: 1, background: 'var(--border)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {experiences.map((exp, i) => (
              <motion.div key={i} initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }} transition={{ delay: i * 0.15 }}
                style={{ display: 'flex', gap: 32 }}>

                {/* Dot */}
                <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 4 }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: '50%',
                    background: exp.color,
                    boxShadow: `0 0 12px ${exp.color}80`,
                    zIndex: 1, marginLeft: -4,
                  }} />
                </div>

                {/* Content */}
                <div className="card" style={{ flex: 1, padding: '28px 32px' }}>
                  {/* Top bar */}
                  <div style={{ height: 2, background: `linear-gradient(90deg, ${exp.color}, transparent)`,
                                 borderRadius: 2, marginBottom: 20, width: 60 }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between',
                                 alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 800,
                                    color: '#fff', marginBottom: 4 }}>{exp.role}</h3>
                      <p style={{ fontSize: 14, color: exp.color, fontWeight: 500, marginBottom: 2 }}>
                        {exp.company}
                      </p>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>
                        {exp.type}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: 11,
                        padding: '4px 12px', borderRadius: 6,
                        background: exp.current ? `${exp.color}12` : 'var(--surface-3)',
                        border: `1px solid ${exp.current ? exp.color + '30' : 'var(--border)'}`,
                        color: exp.current ? exp.color : 'var(--text-muted)',
                      }}>
                        {exp.period}
                      </span>
                      {exp.current && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: 5,
                                       justifyContent: 'flex-end', marginTop: 8 }}>
                          <div style={{ width: 6, height: 6, borderRadius: '50%',
                                         background: '#00f5d4', animation: 'blink 2s ease infinite' }} />
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10,
                                          color: 'var(--cyan)' }}>current</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <span style={{ color: exp.color, flexShrink: 0, marginTop: 4, fontSize: 12 }}>▸</span>
                        <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>{b}</p>
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