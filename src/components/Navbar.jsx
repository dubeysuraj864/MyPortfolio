import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div data-aos="fade-up">
        <nav className="p-6 font-semibold  bg-green-500 md:bg-green-100 md:text-black  sm:flex sm:justify-around sm:items-center sm:py-5 text-white">
          <div className="logo flex text-white md:text-black justify-between font-bold text-3xl">
           <Link to="/">
           
           Portfolio</Link>
            <span
              onClick={() => {
                setShow(!show);
              }}
              className="sm:hidden"
            >
              <div className="bg-white w-8 h-1 m-1 rounded-2xl"></div>
              <div className="bg-white w-8 h-2 m-1 rounded-2xl"></div>
              <div className="bg-white w-8 h-1 m-1 rounded-2xl"></div>
            </span>
          </div>

          {show ? (
            <div className="open">
              <div className="nav-links py-5 sm:py-0 list-none sm:flex transition-all ">
                <li className="py-3 sm:py-0">
                  <Link className="p-4  hover:text-white md:hover:text-green-400" to="/">
                    Home
                  </Link>
                </li>
                <li className="py-3 sm:py-0">
                  {" "}
                  <Link className="p-4  hover:text-white md:hover:text-green-400" to="/about">
                    About
                  </Link>
                </li>
                <li className="py-3 sm:py-0">
                  <Link className="p-4  hover:text-white md:hover:text-green-400" to="/service">
                    Service
                  </Link>
                </li>
                <li className="py-3 sm:py-0">
                  {" "}
                  <Link className="p-4  hover:text-white md:hover:text-green-400" to="/mywork">
                    My work
                  </Link>
                </li>
                <div className="py-5 sm:py-0">
                
                  <Link
                    className=" bg-white md:bg-green-500 text-black rounded-full px-7 py-3"
                    to="/"
                  >
                    Resume
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="close">
              <div className="nav-links py-5 sm:py-0 list-none sm:flex transition-all ">
                <li>
                  <Link className="p-4 hover:text-white" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="p-4 hover:text-white" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="p-4 hover:text-white" to="/service">
                    Service
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="p-4 hover:text-white" to="/mywork">
                    My work
                  </Link>
                </li>
                <div className="py-5 sm:py-0">
                 
                  <Link
                    className=" bg-white text-white rounded-full px-4 py-3"
                    to="/"
                  >
                    Resume
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
