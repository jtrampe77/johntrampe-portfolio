import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <p className="w-full bg-[#0a192f] text-gray-300 p-8 text-center border-t-2 border-gray-700 italic text-xs">Created using React, Tailwind CSS, and Framer Motion</p>
    </div>
  );
}

export default App;
