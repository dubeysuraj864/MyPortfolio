import Me from "../images/me.png";
import Me2 from "../images/me2.png";
import Eclipse2 from "../images/Ellipse2.png";
// import About from "./About";

// import Service from "./Service";
// import Mywork from "./Mywork";

function Home() {
  return (
    <>
      <div className="home relative  flex justify-center -pt-10 md:py-0 ">
        <img
          src={Eclipse2}
          className="absolute rotate-180 bottom-6 z-10 right-0 md:-top-20"
          alt=""
        />
        <img
          src={Eclipse2}
          className="absolute  z-10 top-64 left-0 md:top-70"
          alt=""
        />
        <div className="container mr-auto ml-auto p-0 w-full h-full flex flex-col items-center justify-center md:flex md:flex-row-reverse md:justify-center md:items-center md:w-full md:py-10 ">
          <div className="absolute top-0 -z-0 md:h-full md:w-full w-[100%] h-[90vh] object-cover bg-green-100 hero-transparent"></div>
          <img
            src={Me}
            className="absolute top-0 hidden md:block -z-10  md:h-full md:w-full w-full h-[90vh] object-cover"
            alt=""
          />
          <img
            src={Me2}
            className="absolute -top-24 block md:hidden -z-10  md:h-full md:w-full w-full h-[90vh] object-cover"
            alt=""
          />

          <div className="right mr-auto ml-auto  flex justify-center items-center w-full h-80 md:w-2/3 ">
            {/* <div className=" absolute mr-10 mt-10  border-green-400 hover:transition-all border-2 rounded-2xl w-72 h-96"></div> */}
            {/* <img
              src={Me}
              className=" transform shadow-2xl z-10 rounded-2xl mr-auto ml-auto w-72 h-96 object-cover"
              alt=""
            /> */}
          </div>
          <div className="left w-full px-0 text-center md:text-left h-full my-20 md:p-0 md:w-3/5 md:h-3/4 z-10 md:flex md:justify-end md:ml-20">
            <div className="w-4/5 m-auto">
              <div className="text-xl  font-bold md:text-2xl text-green-400 ">
                Hi, I'm
              </div>
              <div className="text-4xl font-bold  "></div>
              {/* bg-clip-text bg-gradient-to-r from-green-400  to-blue-600 text-transparent */}
              <div className="text-5xl font-bold md:text-7xl py-2 ">
                Suraj Dubey
              </div>
              <p className="w-full my-2  md:w-5/5 text-gray-700">
                I'm a Full Stack Developer and UI/UX Designer Based in Delhi,
                India. I Love designing and coding, creating and building holy
                stuff.
              </p>
              <button className="px-4 py-2 my-2 bg-green-400 text-black rounded-full px-8 py-4">
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
    </>
  );
}

export default Home;
