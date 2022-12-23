import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div data-aos="fade-up  " className="">
        {/* md:bg-[#b4ffc9] */}
        <nav className="px-6 pt-6  font-semibold  md:text-black  md:flex md:justify-around md:items-center md:py-5 text-white uppercase">
          {show ? (
            <div className="logo flex text-black md:text-black justify-between text-3xl bg-clip-text bg-gradient-to-r from-black to-blue-600 text-transparent   tracking-widest ">
              <Link to="/">Portfolio.</Link>
              <span
                onClick={() => {
                  setShow(!show);
                }}
                className="md:hidden"
              >
                <div className="bg-black w-8 h-2 m-1 transition-all rounded-2xl"></div>
                <div className="bg-black w-8 h-1 ml-5 transition-all m-1 rounded-2xl"></div>
                <div className="bg-black w-8 h-2 m-1 transition-all rounded-2xl"></div>
              </span>
            </div>
          ) : (
            <div className="logo flex text-black md:text-black justify-between  text-3xl tracking-widest ">
              <Link to="/">Portfolio.</Link>
              <span
                onClick={() => {
                  setShow(!show);
                }}
                className="md:hidden"
              >
                <div className="bg-black w-8 h-2 m-1 transition-all rounded-2xl"></div>
                <div className="bg-black w-8 h-1 m-1 transition-all rounded-2xl"></div>
                <div className="bg-black w-8 h-2 m-1 transition-all rounded-2xl"></div>
              </span>
            </div>
          )}

          {show ? (
            <div className="open text-black font-normal">
              <div className="nav-links py-5 md:py-0 list-none md:flex transition-all ">
                <li className="py-3 md:py-0">
                  <Link
                    className="  hover:border-black hover:border-b-2 w-fit  font-medium mx-5 px-0 py-1   transition-all"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="py-3 md:py-0">
                  {" "}
                  <Link
                    className="   hover:border-black hover:border-b-2 w-fit  font-medium mx-5 px-0 py-1  transition-all"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="py-3 md:py-0">
                  <Link
                    className="   hover:border-black hover:border-b-2 w-fit  font-medium mx-5 px-0 py-1 transition-all"
                    to="/service"
                  >
                    Service
                  </Link>
                </li>
                <li className="py-3 md:py-0">
                  {" "}
                  <Link
                    className="  hover:border-black hover:border-b-2 w-fit  font-medium mx-5 px-0 py-1  transition-all"
                    to="/mywork"
                  >
                    My work
                  </Link>
                </li>
                <div className="py-5 md:py-0">
                  <Link
                    className=" bg-black w-32 hover:border-black border-transparent transition-all border-4 hover:text-black hover:bg-white text-white rounded-full transition-all px-7 py-3"
                    to="/"
                  >
                    Resume
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="close">
              <div className="nav-links py-5 md:py-0 list-none md:flex transition-all ">
                <li>
                  <Link className=" hover:text-white rounded-" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className=" hover:text-white rounded-" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className=" hover:text-white rounded-" to="/service">
                    Service
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className=" hover:text-white rounded-" to="/mywork">
                    My work
                  </Link>
                </li>
                <div className="py-5 md:py-0">
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
