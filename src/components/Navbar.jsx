import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Github from "../images/github.webp";
import { GiPlagueDoctorProfile } from "react-icons/gi";

function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div data-aos="fade-up  " className="">
        <nav className="lg:px-6 md:px-8 p-6  shadow-sm  md:text-black  md:flex md:justify-between md:items-center md:py-5 text-white xl:px-20">
          {show ? (
            <div className="logo flex text-black font-semibold md:text-black justify-between text-3xl bg-clip-text bg-gradient-to-r from-black to-blue-600 text-transparent">
              <Link to="/" className="flex">
                <GiPlagueDoctorProfile className="text-black mr-2" />
                Portfolio.
              </Link>
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
            <div className="logo flex text-black font-semibold md:text-black justify-between text-3xl">
              <Link to="/" className="flex">
                <GiPlagueDoctorProfile className="text-black mr-2" />
                Portfolio.
              </Link>
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
            <div className="open text-gray-800 ">
              <div className="nav-links py-5 md:py-0 list-none md:flex transition-all ">
                <li className="py-3 md:py-0">
                  <Link
                    className=" w-fit normal mx-5 px-0 py-1   transition-all"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="py-3 md:py-0">
                  {" "}
                  <Link
                    className=" w-fit font-normal mx-5 px-0 py-1  transition-all"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="py-3 md:py-0">
                  <Link
                    className="  w-fit font-normal mx-5 px-0 py-1 transition-all"
                    to="/service"
                  >
                    Service
                  </Link>
                </li>
                <li className="py-3 md:py-0">
                  {" "}
                  <Link
                    className=" w-fit font-normal mx-5 px-0 py-1 transition-all"
                    to="/mywork"
                  >
                    My work
                  </Link>
                </li>
                <div className="  mx-5 my-2 md:mx-0 md:my-0 md:py-0">
                  <a
                    href="https://github.com/dubeysuraj864"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <img src={Github} className="w-8 " alt="" />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="close text-gray-800">
              <div className="nav-links py-5 md:py-0 list-none md:flex md:items-center transition-all ">
                <li className="py-3 md:py-0">
                  <Link
                    className=" w-fit normal mx-5 px-0 py-1   transition-all"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="py-3 md:py-0">
                  {" "}
                  <Link
                    className=" w-fit font-normal mx-5 px-0 py-1  transition-all"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="py-3 md:py-0">
                  <Link
                    className="    w-fit font-normal mx-5 px-0 py-1 transition-all"
                    to="/service"
                  >
                    Service
                  </Link>
                </li>
                <li className="py-3 md:py-0">
                  {" "}
                  <Link
                    className="   w-fit font-normal mx-5 px-0 py-1 transition-all"
                    to="/mywork"
                  >
                    My work
                  </Link>
                </li>
                <div className=" mx-5 my-2 md:mx-0 md:my-0  md:py-0">
                  <a
                    href="https://github.com/dubeysuraj864"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <img src={Github} className="w-8 " alt="" />
                  </a>
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
