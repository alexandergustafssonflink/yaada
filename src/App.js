// import React from "react";
import "./App.css";
import Home from "./pages/home/home.js";
import About from "./pages/about/about.js";
import Projects from "./pages/projects/projects.js";
import Contact from "./pages/contact/contact.js";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <img className="big-moon" src="./images/moon.svg" />
      <img className="moon" src="./images/moon-small.svg" />
      <Contact />
    </div>
  );
}

export default App;
