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
      <div className="flex flex-col items-center justify-center">
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
