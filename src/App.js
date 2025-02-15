import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <NavBar />
      <Home />
      <About />
      <Work />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
