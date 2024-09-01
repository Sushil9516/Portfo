import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
const App = () => {
  return (
    <main className="font-light  text-white antialiased selection:bg-lime-300 selection:text-black">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Work />
      <Contact />
    </main>
  );
};

export default App;
