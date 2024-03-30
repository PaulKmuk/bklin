// ----> PAGES 
import House from "./pages/House";
import Rooms from "./pages/Rooms";
import Region from "./pages/Region";
import GalleryPage from "./pages/Gallery";


// ----> SECTIONS 
import Header from "./sections/Header";
import About from "./sections/About";
import Services from "./sections/Services";
import Contact from "./sections/Contact";

// ----> COMPONENTS
import Footer from "./components/Footer"; 
import Navigation from "./components/Navigation";

// ----> REACT-ROUTER_DOM
import {
   createBrowserRouter,
   RouterProvider,
   Route,
   Outlet,
} from "react-router-dom";
import Map from "./sections/Map";
import Gallery from "./sections/Gallery";


const Layout = () => {
   return (
      <>
         <Navigation />
         <Outlet />
         <Footer />
      </>
   )
}

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      children: [
         {
            path: "/",
            element: (
               <>
                  <Header />
                  <About />
                  <Services />
                  <Gallery />
                  <Contact />
                  <Map />
               </>
            )
         },
         {
            path: "/domek",
            element: <House />
         },
         {
            path: "/pokoje",
            element: <Rooms />
         },
         {
            path: "/galeria",
            element: <GalleryPage />
         },
         {
            path: "/okolica",
            element: <Region />
         }
      ]
   }
])

function App() {
   return (
      <div className="scroll-smooth">
         <RouterProvider router={router}/>
      </div>
   )
}

export default App
