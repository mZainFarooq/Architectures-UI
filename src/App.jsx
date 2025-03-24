import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
