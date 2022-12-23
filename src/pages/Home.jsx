// import Me from "../images/me.png";
// import Me2 from "../images/me2.png";

import outlineMe2 from "../images/meoutline2.png";
import outlineMe3 from "../images/meoutline3.png";

// import Eclipse2 from "../images/Ellipse2.png";
import About from "./About";

import Service from "./Service";
import Mywork from "./Mywork";

function Home() {
  return (
    <>
      <div className="home relative  flex justify-center -pt-10 md:py-0 overflow-hidden">
        {/* <img
          src={Eclipse2}
          className="absolute rotate-180 bottom-6 z-10 right-0 md:-top-20"
          alt=""
        />
        <img
          src={Eclipse2}
          className="absolute  z-10 top-64 left-0 md:top-70"
          alt=""
        /> */}
        <div className="container mr-auto ml-auto p-0 w-full h-full flex flex-col items-center justify-center md:flex md:flex-row-reverse md:justify-center md:items-center md:w-full md:py-10 ">
          {/* <div className="absolute top-0 -z-0 md:h-full md:w-full w-[100%] h-[90vh] object-cover hero-transparent"></div> */}
          {/* <img
            src={Me}
            className="absolute top-0 hidden md:block -z-10  md:h-full md:w-full w-full h-[90vh] object-cover"
            alt=""
          />
          <img
            src={Me2}
            className="absolute -top-24 block md:hidden -z-10  md:h-full md:w-full w-full h-[90vh] object-cover"
            alt=""
          /> */}
          <div className="design bg-gray-100 mb-20 md:mb-0">
              <div className="w-52 absolute -right-10 top-10 h-28 bg-yellow-400 rounded-l-full"></div>
              <div className="w-80 absolute -right-10 top-44 h-28 mr-5 animate-pulse bg-green-400 rounded-l-full"></div>
              <div className="w-36 absolute -right-16 top-80 h-28 bg-red-500 rounded-l-full"></div>
              <div className="w-28 absolute right-80 top-10 h-28 bg-blue-400 animate-pulse rounded-full"></div>
              <div className="w-28 absolute right-48 top-10 h-28 bg-green-300 rounded-full"></div>
              <div className="w-28 absolute right-80 top-44 h-28 bg-yellow-300  rounded-full"></div>
              <div className="w-52 absolute right-56 top-80 h-28 bg-purple-400 rounded-full"></div>
              <div className="w-28 absolute right-24 top-80 h-28 bg-pink-400 rounded-full"></div>
              <div className="w-28 absolute right-16 top-10 h-28 bg-yellow-200  rounded-full"></div>
              <div className="w-28 absolute right-80 top-80 h-28 bg-purple-300 rounded-full"></div>
              <img
          src={outlineMe3}
          className="w-28 absolute right-24 top-80 md:right-80 md:top-80 h-28 object-cover rounded-b-full rotate-x-[20px]"
          alt=""
        />
            <img
          src={outlineMe2}
          className="w-28 absolute right-48 top-10 h-28 object-cover rounded-b-full rotate-x-[20px]"
          alt=""
        />
  
          </div>

          <div className="right mr-auto ml-auto  flex justify-center items-center w-full h-80 md:w-2/3 ">
            {/* <div className=" absolute mr-10 mt-10  border-green-400 hover:transition-all border-2 rounded-2xl w-72 h-96"></div> */}
            {/* <img
              src={Me}
              className=" transform shadow-2xl z-10 rounded-2xl mr-auto ml-auto w-72 h-96 object-cover"
              alt=""
            /> */}
          </div>
          <div className="left w-full px-0 text-center md:text-left h-96 md:p-0 md:w-4/5 md:h-3/4 z-10 md:flex md:justify-end md:ml-0"> 
            <div className="w-5/5 h-96 m-auto flex flex-col justify-end md:justify-center  items-left mx-5 md:mx-0 py-5">
            <div className="  text-3xl tracking-wider leading-10  md:text-7xl font-bold  py-2 ">
      
              <span className="text-3xl">Hello, I'm Suraj Dubey!</span> <br /> Front-End Developer.
              </div>
             
              <p className="w-full my-2  md:w-4/5 text-gray-700">
                I'm a Front-End Developer and UI/UX Designer Based in Delhi,
                India. I Love designing and coding, creating and building holy
                stuff.
              </p>
              <button className="my-2 bg-black md:w-32 hover:border-black border-transparent transition-all border-4 hover:text-black hover:bg-white text-white rounded-full px-6 py-2 mb-10">
                {" "}
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/suraj-dubey-584a61246"
                  rel="noreferrer"
                >
                  Hire Me
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Service/>
      </div>
      <div>
        <Mywork/>
      </div>
    </>
  );
}

export default Home;
