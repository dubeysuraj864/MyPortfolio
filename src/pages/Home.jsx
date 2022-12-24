import outlineMe2 from "../images/meoutline2.png";
import outlineMe3 from "../images/meoutline3.png";
import About from "./About";
import Service from "./Service";
import Mywork from "./Mywork";

function Home() {
  return (
    <>
      <div className="home relative md:h-[auto]  flex justify-center items-center -pt-10 md:py-5 overflow-hidden">
        <div className="container mr-auto ml-auto p-0 w-full h-full flex flex-col items-center justify-center md:flex md:flex-row-reverse md:justify-start md:items-center md:w-full md:py-10 ">
          <div className=" bg-gray-100 mb-20 md:mb-0">
            <div className="design w-64 absolute -right-10 top-10 h-32 bg-yellow-300 rounded-l-full shadow-sm"></div>
            <div className="design2 w-96 absolute -right-10 top-44 h-32 mr-5 md:mt-1 bg-green-300 rounded-l-full shadow-sm"></div>
            <div className="design3 w-56 absolute -right-16 top-80 h-32 bg-blue-900 rounded-l-full shadow-lg"></div>
            <div className="design w-32 absolute right-96 top-10 h-32 bg-blue-400  rounded-full shadow-lg"></div>
            <div className="design w-32 absolute right-60 top-10 h-32 bg-green-300 rounded-full shadow-lg"></div>
            <div className="design2 w-32 absolute right-96 top-44 mt-1 h-32 bg-yellow-400  rounded-full shadow-lg"></div>
            <div className="design3 w-48 absolute right-80 top-80 h-32 bg-purple-300 rounded-full shadow-lg"></div>
            <div className="design3 w-32 absolute right-44 top-80 h-32 bg-pink-200 rounded-full shadow-lg"></div>
            <div className="design w-32 absolute right-24 top-10 h-32 bg-yellow-200  rounded-full shadow-lg"></div>
            <div className="design3 w-32 absolute right-96 top-80 h-32 bg-purple-200 rounded-full shadow-sm"></div>
            <img
              src={outlineMe3}
              className="design3 w-32 absolute right-44 top-80 md:right-96 md:top-80 h-32 object-cover rounded-b-full rotate-x-[20px]"
              alt=""
            />
            <img
              src={outlineMe2}
              className=" design w-32 absolute right-60 top-10 h-32 object-cover rounded-b-full rotate-x-[20px]"
              alt=""
            />
          </div>

          <div className="right mr-auto ml-auto  flex justify-center items-center w-full h-80 md:w-2/3 "></div>
          <div className="left w-full px-0 text-left md:text-left h-96 md:p-0 md:w-4/5 md:h-3/4 z-10 md:flex md:justify-end md:ml-0">
            <div className="w-full px-5 h-96 m-auto flex flex-col justify-end md:justify-center md:items-start items-left md:mx-0 py-5">
              <div className="  text-3xl tracking-wider md:leading-tight md:text-5xl font-bold  py-2 ">
                Hello, I'm <br /> Suraj Dubey <br />
                Front-End Developer.
              </div>

              <p className="w-fit md:w-4/5 text-gray-700 md:tracking-wider text-justify md:my-5 md:leading-6">
                I'm a Front-End Developer and UI/UX Designer Based in Delhi,
                India. I Love designing and coding, creating and building holy
                stuff.
              </p>
              <button className="my-2 shadow-sm bg-gray-800 w-40 hover:border-gray-800 md:w-40 border-transparent transition-all border-2 hover:text-black hover:bg-white text-white rounded-full px-5 py-2 mb-10 md:mx-0">
                {" "}
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/suraj-dubey-584a61246"
                  rel="noreferrer"
                >
                  Give a chance
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <About />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <Mywork />
      </div>
    </>
  );
}

export default Home;
