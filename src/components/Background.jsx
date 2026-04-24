export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Deep base gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.12) 0%, transparent 70%)'
      }} />

      {/* Cyan orb top-left */}
      <div className="orb-1" style={{
        position: 'absolute', width: 700, height: 700,
        top: -200, left: -200,
        background: 'radial-gradient(circle, rgba(0,245,212,0.07) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />

      {/* Violet orb center-right */}
      <div className="orb-2" style={{
        position: 'absolute', width: 600, height: 600,
        top: '20%', right: -150,
        background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />

      {/* Pink orb bottom */}
      <div className="orb-3" style={{
        position: 'absolute', width: 500, height: 500,
        bottom: -100, left: '30%',
        background: 'radial-gradient(circle, rgba(244,114,182,0.06) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />

      {/* Mesh grid */}
      <div className="mesh-grid" style={{ position: 'absolute', inset: 0 }} />

      {/* Corner accent */}
      <svg style={{ position: 'absolute', top: 0, right: 0, width: 400, height: 400, opacity: 0.4 }}
           viewBox="0 0 400 400">
        <line x1="400" y1="0" x2="0" y2="400" stroke="rgba(0,245,212,0.1)" strokeWidth="1"/>
        <line x1="400" y1="0" x2="100" y2="400" stroke="rgba(0,245,212,0.06)" strokeWidth="1"/>
        <line x1="400" y1="100" x2="0" y2="400" stroke="rgba(0,245,212,0.04)" strokeWidth="1"/>
      </svg>
    </div>
  );
}