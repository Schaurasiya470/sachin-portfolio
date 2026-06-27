import Background from "./components/Background";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import GithubProjects from "./components/GithubProjects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Background />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* <GithubProjects /> */}
      <Journey />
      <Contact />
    </>
  );
}

export default App;