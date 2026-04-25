import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const langColors = { PHP:'#4f5d95', JavaScript:'#f1e05a', TypeScript:'#3178c6', CSS:'#563d7c', HTML:'#e34c26', Python:'#3572A5' };

export default function GithubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef();

  useEffect(() => {
    fetch('https://api.github.com/users/Schaurasiya470/repos?sort=updated&per_page=8')
      .then(r => r.json())
      .then(data => { if (Array.isArray(data)) setRepos(data.slice(0, 8)); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const scroll = (dir) => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: dir * 316, behavior: 'smooth' });
  };

  return (
    <section className="section-pad" style={{ background:'rgba(13,19,33,0.45)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>

        {/* header */}
        <motion.div initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:32, flexWrap:'wrap', gap:12 }}>
          <div>
            {/* <p className="section-number" style={{ marginBottom:4 }}>05b</p> */}
            <h3 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(20px,3vw,26px)', fontWeight:700, color:'#fff' }}>GitHub Repos</h3>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:14 }}>
            {/* arrow buttons */}
            <button onClick={() => scroll(-1)} style={{ width:34, height:34, borderRadius:8, background:'var(--surface-2)', border:'1px solid var(--border)', color:'var(--text-muted)', cursor:'pointer', fontSize:14, display:'flex', alignItems:'center', justifyContent:'center', transition:'all .2s' }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor='rgba(0,245,212,0.3)'; e.currentTarget.style.color='var(--cyan)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--text-muted)'; }}>←</button>
            <button onClick={() => scroll(1)}  style={{ width:34, height:34, borderRadius:8, background:'var(--surface-2)', border:'1px solid var(--border)', color:'var(--text-muted)', cursor:'pointer', fontSize:14, display:'flex', alignItems:'center', justifyContent:'center', transition:'all .2s' }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor='rgba(0,245,212,0.3)'; e.currentTarget.style.color='var(--cyan)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--text-muted)'; }}>→</button>
            <a href="https://github.com/Schaurasiya470" target="_blank" rel="noreferrer"
               style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--cyan)', textDecoration:'none', letterSpacing:'.05em' }}>
              View all ↗
            </a>
          </div>
        </motion.div>

        {/* slider */}
        {loading ? (
          <div style={{ display:'flex', gap:16, overflow:'hidden' }}>
            {[1,2,3,4].map(i => (
              <div key={i} className="card gh-card" style={{ padding:20, height:130, flexShrink:0 }}>
                <div style={{ width:'55%', height:11, background:'var(--surface-3)', borderRadius:4, marginBottom:10 }} />
                <div style={{ width:'75%', height:9, background:'var(--surface-3)', borderRadius:4 }} />
              </div>
            ))}
          </div>
        ) : (
          <div ref={sliderRef} className="gh-slider">
            {repos.map((repo, i) => (
              <motion.a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer"
                initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i*.05 }}
                className="card hover-lift gh-card"
                style={{ padding:'18px 20px', textDecoration:'none', display:'flex', flexDirection:'column', justifyContent:'space-between', minHeight:130 }}>

                <div>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
                    <div style={{ display:'flex', alignItems:'center', gap:7 }}>
                      {/* repo icon */}
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                        <rect x="1.5" y="1.5" width="13" height="13" rx="2" stroke="var(--cyan)" strokeWidth="1.2"/>
                        <line x1="4" y1="5" x2="12" y2="5" stroke="var(--cyan)" strokeWidth="1"/>
                        <line x1="4" y1="8" x2="10" y2="8" stroke="var(--cyan)" strokeWidth="1"/>
                      </svg>
                      <span style={{ fontFamily:'var(--font-display)', fontSize:13, fontWeight:600, color:'#fff', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', maxWidth:180 }}>{repo.name}</span>
                    </div>
                    <span style={{ fontSize:12, color:'var(--text-muted)', flexShrink:0 }}>↗</span>
                  </div>
                  <p style={{ fontSize:12, color:'var(--text-muted)', lineHeight:1.6 }}>
                    {repo.description ? (repo.description.length > 80 ? repo.description.slice(0,80)+'…' : repo.description) : 'No description available.'}
                  </p>
                </div>

                <div style={{ display:'flex', gap:14, alignItems:'center', marginTop:12 }}>
                  {repo.language && (
                    <span style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text-muted)', display:'flex', alignItems:'center', gap:5 }}>
                      <span style={{ width:7, height:7, borderRadius:'50%', background: langColors[repo.language] || '#00f5d4', flexShrink:0 }} />
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text-muted)' }}>★ {repo.stargazers_count}</span>
                  )}
                  {repo.forks_count > 0 && (
                    <span style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text-muted)' }}>⑂ {repo.forks_count}</span>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {/* scroll hint dots */}
        {!loading && repos.length > 0 && (
          <div style={{ display:'flex', justifyContent:'center', gap:5, marginTop:16 }}>
            {repos.map((_,i) => (
              <div key={i} style={{ width:4, height:4, borderRadius:'50%', background: i===0 ? 'var(--cyan)' : 'var(--surface-3)', transition:'background .3s' }} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}