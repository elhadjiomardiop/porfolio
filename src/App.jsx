import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Experiences from "./Components/Experiences";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <div className="app">
        <Experiences />

      </div>
    </div>

  );
}

export default App;
