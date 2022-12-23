import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import MyWork from "./pages/Mywork.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    
    <div className="App text-black subpixel-antialiased">
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar className="z-30 drop-shadow-md" />}>
            <Route index element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/mywork" element={<MyWork />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
    </>
  );
}

export default App;
