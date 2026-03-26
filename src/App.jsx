import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Experiences from "./Components/Experiences";
import Projets from "./Components/Projets";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <div className="app">
        <Experiences />
        <Projets />

      </div>
      <Footer />
    </div>

  );
}

export default App;
