import ParticlesBg from "./components/ParticlesBg";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import GithubProjects from "./components/GithubProjects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <ParticlesBg />
      <CursorGlow />
      <Navbar />
      <Hero />
      <Stats />
      <Projects />
      <GithubProjects />
      <Journey />
      <Contact />
    </>
  );
}

export default App;