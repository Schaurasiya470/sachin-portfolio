import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const milestones = [
  {
    year: '2020', icon: '🎓', color: '#00f5d4',
    title: 'Entered Computer Science',
    desc: "Began my B.Tech in CSE at BIT Meerut. Wrote my very first line of code in C — a simple 'Hello, World!' that sparked a curiosity I haven't been able to switch off since.",
  },
  {
    year: '2021', icon: '📚', color: '#a78bfa',
    title: 'Mastering CS Fundamentals',
    desc: 'Dedicated this year to building a rock-solid foundation — Data Structures, Algorithms, OOP, OS, DBMS, and Computer Networks. The kind of knowledge that makes everything else click.',
  },
  {
    year: '2022', icon: '🌐', color: '#f59e0b',
    title: 'First Steps into Development',
    desc: 'Transitioned from theory to building. Learned HTML, CSS, JavaScript and built my first interactive web pages. Began understanding how the web actually works — clients, servers, requests, responses.',
  },
  {
    year: '2023', icon: '⚙️', color: '#f472b6',
    title: 'Going Deep into Backend',
    desc: 'Explored backend architecture hands-on — REST APIs, databases, server logic, and authentication flows. Understood how real applications handle data, scale requests, and manage state on the server side.',
  },
  {
    year: '2024', icon: '🚀', color: '#34d399',
    title: 'MERN, Internship & Real Projects',
    desc: 'Completed full MERN stack training and an internship at GeeksforGeeks, where I built FlavourFleet — a production-ready food ordering app. Shipped real features used by real people for the first time.',
  },
  {
    year: '2025', icon: '🏗️', color: '#60a5fa',
    title: 'Engineering at Scale',
    desc: 'Joined Dayal InfoSystems as a Software Engineer, diving deep into enterprise ERP architecture. Building GraphQL APIs, multi-tenant systems, and React dashboards serving thousands of users daily.',
  },
];

export default function Journey() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    setIsDesktop(mq.matches);
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <section id="journey" className="section-pad" style={{ background: 'rgba(13,19,33,0.45)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          {/* <p className="section-number" style={{ marginBottom: 6 }}>06</p> */}
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,4vw,46px)', fontWeight: 800, color: '#fff', letterSpacing: '-.02em' }}>
            Life Journey
          </h2>
          <div style={{ width: 56, height: 3, background: 'linear-gradient(90deg,var(--cyan),var(--violet))', borderRadius: 2, margin: '10px auto 0' }} />
        </motion.div>

        {isDesktop ? (
          /* ── DESKTOP: alternating left / right ── */
          <div style={{ position: 'relative' }}>
            {/* center vertical line */}
            <div style={{
              position: 'absolute', left: '50%', top: 0, bottom: 0,
              width: 1, background: 'var(--border)', transform: 'translateX(-50%)'
            }} />

            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -28 : 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  style={{
                    display: 'flex',
                    justifyContent: isLeft ? 'flex-start' : 'flex-end',
                    paddingBottom: 36,
                    position: 'relative',
                  }}
                >
                  {/* center dot */}
                  <div style={{
                    position: 'absolute', left: '50%', top: 22,
                    transform: 'translateX(-50%)',
                    width: 13, height: 13, borderRadius: '50%',
                    background: m.color,
                    boxShadow: `0 0 16px ${m.color}70`,
                    zIndex: 2,
                    border: '2px solid var(--surface)',
                  }} />

                  {/* year label on opposite side of card */}
                  <div style={{
                    position: 'absolute',
                    left: isLeft ? 'auto' : '4%',
                    right: isLeft ? '4%' : 'auto',
                    top: 18,
                    fontFamily: 'var(--font-mono)',
                    fontSize: 13,
                    fontWeight: 600,
                    color: m.color,
                    opacity: 0.55,
                  }}>
                    {/* {m.year} */}
                  </div>

                  {/* card — 45% wide, pushed to correct side */}
                  <div
                    className="card"
                    style={{
                      width: '45%',
                      padding: '22px 26px',
                    }}
                  >
                    {/* top color accent */}
                    <div style={{ width: 40, height: 2, background: m.color, borderRadius: 2, marginBottom: 14, opacity: 0.7 }} />

                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                      <span style={{ fontSize: 18, lineHeight: 1 }}>{m.icon}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, color: m.color, letterSpacing: '.06em' }}>
                        {m.year}
                      </span>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 8, lineHeight: 1.25 }}>
                      {m.title}
                    </h3>
                    <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.75 }}>
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* ── MOBILE: single left-aligned column ── */
          <div style={{ position: 'relative' }}>
            {/* left vertical line */}
            <div style={{
              position: 'absolute', left: 16, top: 0, bottom: 0,
              width: 1, background: 'var(--border)'
            }} />

            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{ display: 'flex', gap: 20, paddingBottom: 24 }}
              >
                {/* dot */}
                <div style={{ flexShrink: 0, paddingTop: 20, marginLeft: 10 }}>
                  <div style={{
                    width: 12, height: 12, borderRadius: '50%',
                    background: m.color,
                    boxShadow: `0 0 12px ${m.color}66`,
                    border: '2px solid var(--surface)',
                  }} />
                </div>

                {/* card */}
                <div className="card" style={{ flex: 1, padding: '16px 18px' }}>
                  <div style={{ width: 32, height: 2, background: m.color, borderRadius: 2, marginBottom: 10, opacity: 0.7 }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 15 }}>{m.icon}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, color: m.color }}>{m.year}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 6 }}>
                    {m.title}
                  </h3>
                  <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.75 }}>
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}