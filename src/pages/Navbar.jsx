import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Github from "../images/github.png";


function Navbar() {
  const[show, setShow] = useState(false);
  return (
    <div>
      <nav className="relative bg-green-100 pt-4 flex-col justify-center items-center w-full pb-5 ">
        <span className=" absolute right-8 top-8">
          <Link
            to="/"
            className="text-2xl font-bold text-green-500 border-emerald-500 border-2 py-0 px-2 ml-5"
          >
            WebShine
          </Link>
        </span>
        <span onClick={() => {setShow(!show)}} className="absolute left-8 top-7">
          <Link to="/" className="  text-2xl  font-bold text-green-500 ">
            <div className="w-10 my-1 h-2 bg-green-500 rounded-lg"></div>
            <div className="w-10 my-1 h-1 bg-green-500 rounded-lg"></div>
            <div className="w-10 my-1 h-2 bg-green-500 rounded-lg"></div>
          </Link>
        </span>

        <div className=" mt-16 flex text-left text-xl p-4 mt-4">
         {
          show ? 
          <ul >
          <li className="m-1 rounded">
            <Link
              className="hover:text-green-500  p-2 transition-all   "
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="m-1 rounded">
            <Link
              className="hover:text-green-500  p-2 transition-all  "
              to="/about"
            >
              About
            </Link>
          </li>
          <li className=" m-1 rounded">
            <Link
              className="hover:text-green-500    p-2 transition-all"
              to="/service"
            >
              Service
            </Link>
          </li>
          <li className="m-1  rounded">
            <Link
              className="hover:text-green-500  p-2 transition-all"
              to="/mywork"
            >
              My Work
            </Link>
          </li>
          <li className="p-4 my-4 rounded-2xl ml-2 ">
            <a
              href="https://github.com/dubeysuraj864"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={Github} width={30} alt="" />{" "}
            </a>
          </li>
        </ul> 
        : null
         }
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default Navbar;
