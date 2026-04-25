export default function Background() {
  return (
    <div style={{ position:'fixed', inset:0, zIndex:-10, overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 80% 50% at 50% -5%,rgba(124,58,237,0.1),transparent)' }} />
      <div className="orb-a" style={{ position:'absolute', width:600, height:600, top:-180, left:-180, background:'radial-gradient(circle,rgba(0,245,212,0.065),transparent 70%)', borderRadius:'50%' }} />
      <div className="orb-b" style={{ position:'absolute', width:500, height:500, top:'25%', right:-140, background:'radial-gradient(circle,rgba(124,58,237,0.09),transparent 70%)', borderRadius:'50%' }} />
      <div className="mesh-grid" style={{ position:'absolute', inset:0 }} />
    </div>
  );
}