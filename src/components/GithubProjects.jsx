import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function GithubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/Schaurasiya470/repos?sort=updated&per_page=6')
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) setRepos(data.slice(0, 6));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section style={{ padding: '80px 48px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                   marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: '#fff' }}>
            GitHub Repos
          </h3>
          <a href="https://github.com/Schaurasiya470" target="_blank" rel="noreferrer"
             style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--cyan)',
                       textDecoration: 'none', letterSpacing: '0.05em' }}>
            View all ↗
          </a>
        </motion.div>

        {loading ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
            {[1,2,3,4].map(i => (
              <div key={i} className="card" style={{ padding: 24, height: 120 }}>
                <div style={{ width: '60%', height: 12, background: 'var(--surface-3)',
                               borderRadius: 4, marginBottom: 12 }} />
                <div style={{ width: '80%', height: 10, background: 'var(--surface-3)',
                               borderRadius: 4 }} />
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {repos.map((repo, i) => (
              <motion.a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer"
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay: i * 0.06 }}
                className="card hover-lift"
                style={{ padding: '20px 22px', textDecoration: 'none', display: 'block' }}>

                <div style={{ display: 'flex', justifyContent: 'space-between',
                               alignItems: 'flex-start', marginBottom: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M2 2h12v12H2z" stroke="var(--cyan)" strokeWidth="1.2" fill="none" strokeRadius="2"/>
                    </svg>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600,
                                    color: '#fff' }}>{repo.name}</span>
                  </div>
                  <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>↗</span>
                </div>

                <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 14 }}>
                  {repo.description || 'No description available.'}
                </p>

                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  {repo.language && (
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)',
                                    display: 'flex', alignItems: 'center', gap: 5 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%',
                                      background: repo.language === 'PHP' ? '#4f5d95' :
                                                  repo.language === 'JavaScript' ? '#f1e05a' :
                                                  repo.language === 'TypeScript' ? '#3178c6' :
                                                  repo.language === 'CSS' ? '#563d7c' : '#00f5d4' }} />
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)' }}>
                      ★ {repo.stargazers_count}
                    </span>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}