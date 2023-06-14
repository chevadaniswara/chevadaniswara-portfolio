import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import FloatingCallButton from "./components/FloatingcallButton";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Social from "./components/Social";

function App() {
  return (
    <div>
      <Navbar />
      <FloatingCallButton />
      <Home />
      <Social />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
