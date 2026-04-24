import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 48px', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }} transition={{ duration:0.6 }}>

        {/* Section header */}
        <div style={{ marginBottom: 60 }}>
          <p className="section-number" style={{ marginBottom: 8 }}>02</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,4vw,48px)',
                       fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            About Me
          </h2>
          <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, var(--cyan), transparent)',
                         borderRadius: 2, marginTop: 12 }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>

          {/* Left — bio */}
          <div>
            <div className="code-block" style={{ marginBottom: 28 }}>
              <span style={{ color: 'var(--cyan)' }}>const</span>
              <span style={{ color: '#fff' }}> sachin </span>
              <span style={{ color: 'var(--text-muted)' }}>=</span>
              <span style={{ color: '#a78bfa' }}> {'{'}</span>
              <br />
              <span style={{ color: 'var(--text-muted)', paddingLeft: 20 }}>role:</span>
              <span style={{ color: '#f9a8d4' }}> "Software Engineer"</span>,<br />
              <span style={{ color: 'var(--text-muted)', paddingLeft: 20 }}>company:</span>
              <span style={{ color: '#f9a8d4' }}> "Dayal InfoSystems"</span>,<br />
              <span style={{ color: 'var(--text-muted)', paddingLeft: 20 }}>location:</span>
              <span style={{ color: '#f9a8d4' }}> "Meerut, India"</span>,<br />
              <span style={{ color: 'var(--text-muted)', paddingLeft: 20 }}>education:</span>
              <span style={{ color: '#f9a8d4' }}> "B.Tech CSE (8.2 CGPA)"</span>,<br />
              <span style={{ color: 'var(--text-muted)', paddingLeft: 20 }}>passions:</span>
              <span style={{ color: '#f9a8d4' }}> ["APIs", "ERP", "Open Source"]</span><br />
              <span style={{ color: '#a78bfa' }}>{'}'}</span>
            </div>

            <p style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: 20 }}>
              I'm a Full Stack Developer with 1+ years of professional experience, specializing in
              building scalable backend systems, GraphQL APIs, and high-performance ERP modules.
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.85 }}>
              At Dayal InfoSystems, I've engineered modular systems that manage 5,000+ weekly tasks
              and process 1,000+ API requests daily. I'm also a technical content writer at GeeksforGeeks,
              contributing 10+ articles on modern web development.
            </p>
          </div>

          {/* Right — details grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              {
                icon: '🎓',
                title: 'Education',
                desc: 'B.Tech in Computer Science & Engineering',
                sub: 'Bharat Institute of Technology, Meerut · CGPA: 8.2 / 10 · 2020–2024'
              },
              {
                icon: '💼',
                title: 'Current Role',
                desc: 'Software Engineer @ Dayal InfoSystems',
                sub: 'Jul 2024 – Present · Onsite, Meerut, India'
              },
              {
                icon: '✍️',
                title: 'Freelance',
                desc: 'Technical Content Writer @ GeeksforGeeks',
                sub: 'Apr 2024 – Present · Remote'
              },
              {
                icon: '📍',
                title: 'Based in',
                desc: 'Meerut, Uttar Pradesh, India',
                sub: 'Open to remote & hybrid opportunities'
              },
            ].map((item, i) => (
              <div key={i} className="card hover-lift" style={{ padding: '18px 22px',
                   display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--cyan)',
                               letterSpacing: '0.12em', marginBottom: 4 }}>{item.title}</p>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600,
                               color: '#fff', marginBottom: 4 }}>{item.desc}</p>
                  <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}