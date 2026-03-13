import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import TechStack from "./sections/TechStack/TechStack";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";

const App = () => {
  return (
    <main>
      <Hero />
      <Projects />
      <TechStack />
      <About />
      <Contact />
    </main>
  );
};

export default App;
