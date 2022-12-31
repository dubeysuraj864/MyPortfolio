import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import MyWork from "./pages/Mywork.jsx";
import Footer from "./components/Footer";

const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <div className="App ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar className="z-30" />}>
              <Route
                index
                element={
                  <Suspense fallback={<Loader />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/mywork" element={<MyWork />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
