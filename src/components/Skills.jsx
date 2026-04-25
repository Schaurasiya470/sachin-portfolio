import { motion } from 'framer-motion';

const groups = [
  { label:'Languages', icon:'{}', skills:[{n:'PHP',l:90},{n:'JavaScript',l:85},{n:'Python',l:65},{n:'SQL',l:82}] },
  { label:'Backend',   icon:'⚙',  skills:[{n:'Yii2 / Laravel',l:88},{n:'GraphQL',l:84},{n:'REST APIs',l:90},{n:'Express.js',l:73}] },
  { label:'Frontend',  icon:'◇',  skills:[{n:'React.js',l:82},{n:'Tailwind CSS',l:88},{n:'HTML/CSS',l:90},{n:'Redux',l:70}] },
  { label:'DB & Tools',icon:'⬡',  skills:[{n:'MySQL',l:85},{n:'MongoDB',l:72},{n:'Git / GitLab',l:83},{n:'Postman',l:80}] },
];

// CDN devicons
const logos = [
  { n:'PHP',        s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg' },
  { n:'JavaScript', s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { n:'Python',     s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { n:'React',      s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { n:'Node.js',    s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { n:'Express',    s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert:true },
  { n:'Redux',      s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { n:'MySQL',      s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { n:'MongoDB',    s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { n:'Tailwind',   s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { n:'Bootstrap',  s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { n:'HTML5',      s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { n:'CSS3',       s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { n:'GraphQL',    s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { n:'Git',        s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { n:'GitHub',     s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert:true },
  { n:'VS Code',    s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { n:'Postman',    s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { n:'Linux',      s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { n:'C++',        s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
];

const doubled = [...logos, ...logos];

export default function Skills() {
  return (
    <section id="skills" className="section-pad" style={{ background:'rgba(13,19,33,0.45)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>

        {/* header */}
        <motion.div initial={{ opacity:0, y:26 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom:46 }}>
          {/* <p className="section-number" style={{ marginBottom:6 }}>03</p> */}
          <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(26px,4vw,46px)', fontWeight:800, color:'#fff', letterSpacing:'-.02em' }}>Skills & Stack</h2>
          <div style={{ width:56, height:3, background:'linear-gradient(90deg,var(--cyan),transparent)', borderRadius:2, marginTop:10 }} />
        </motion.div>

        {/* skill bars */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,230px),1fr))', gap:18, marginBottom:48 }}>
          {groups.map((g,gi) => (
            <motion.div key={gi} className="card" style={{ padding:'20px 22px' }}
              initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:gi*.07 }}>
              <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:18 }}>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:13, color:'var(--cyan)' }}>{g.icon}</span>
                <h3 style={{ fontFamily:'var(--font-display)', fontSize:13, fontWeight:700, color:'#fff' }}>{g.label}</h3>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:13 }}>
                {g.skills.map((s,i) => (
                  <div key={i}>
                    <div style={{ display:'flex', justifyContent:'space-between', marginBottom:5 }}>
                      <span style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--text-secondary)' }}>{s.n}</span>
                      <span style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text-muted)' }}>{s.l}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div initial={{ scaleX:0 }} whileInView={{ scaleX:s.l/100 }} viewport={{ once:true }}
                        transition={{ delay:i*.09+.15, duration:.9, ease:'easeOut' }}
                        style={{ height:'100%', borderRadius:2, transformOrigin:'left', background:'linear-gradient(90deg,var(--cyan),var(--violet))' }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── logo marquee ── */}
        <div style={{ overflow:'hidden', position:'relative', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)', padding:'18px 0' }}>
          {/* fade edges */}
          <div style={{ position:'absolute', left:0, top:0, bottom:0, width:72, zIndex:2, background:'linear-gradient(90deg,rgba(8,12,20,1),transparent)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', right:0, top:0, bottom:0, width:72, zIndex:2, background:'linear-gradient(270deg,rgba(8,12,20,1),transparent)', pointerEvents:'none' }} />

          <div className="ticker-track">
            {doubled.map((t, i) => (
              <div key={i} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:6, padding:'0 24px', borderRight:'1px solid var(--border)', flexShrink:0 }}>
                <img
                  src={t.s} alt={t.n} width={34} height={34}
                  loading="lazy"
                  decoding="async"
                  style={{ width:34, height:34, objectFit:'contain', filter: t.invert ? 'invert(1) opacity(.7)' : 'opacity(.82)', transition:'transform .2s,opacity .2s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform='scale(1.18)'; e.currentTarget.style.opacity='1'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform='scale(1)'; e.currentTarget.style.opacity = t.invert ? '.7' : '.82'; }}
                />
                <span style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'var(--text-muted)', whiteSpace:'nowrap' }}>{t.n}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}