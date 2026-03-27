import Navbar from "./Components/Navbar";
import Layout from "./pages/Layout";
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import Projets from "./pages/Projet";
import Experiences from "./pages/Experience";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {

  const Router = createBrowserRouter([

    // Routes
    {
      element: <Layout />,
      children: [
        {path:"/", element: <Accueil />},
        {path:"/experiences", element: <Experiences />},
        {path:"/projets", element: <Projets />},
        {path:"/contact", element: <Contact />}
        
      ]
    }
  ])


  return (

    <RouterProvider router={Router} />
    





    // <div className="">
    //   <Navbar />
    //   <Home />
    //   <About />
    //   <div className="app">
    //     <Experiences />
    //     <Projets />

    //   </div>
    //   <Footer />
    // </div>


    // Navigation




  );
}

export default App;
