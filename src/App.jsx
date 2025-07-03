import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
