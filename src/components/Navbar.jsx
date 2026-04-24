import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur bg-black/30 border-b border-white/10">
      <Logo />

      <div className="hidden md:flex gap-8 text-sm">
        <a href="#home" className="hover:text-purple-400">Home</a>
        <a href="#projects" className="hover:text-purple-400">Projects</a>
        <a href="#journey" className="hover:text-purple-400">Journey</a>
        <a href="#contact" className="hover:text-purple-400">Contact</a>
      </div>
    </nav>
  );
}