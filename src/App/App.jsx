import NavBar from "../Components/nav/NavBar";
import CatEyes from "../Components/CatEyes";
import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";

function App() {
  return (
    <>
      <NavBar />
      {/* <CatEyes /> */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;