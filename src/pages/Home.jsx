import Me from "../images/me.png";
import Eclipse2 from "../images/Ellipse2.png";
import About from "./About";

import Service from "./Service";
import Mywork from "./Mywork";

function Home() {



  return (
    <>
      <div className="home relative bg-green-100 flex justify-center">
        <img
          src={Eclipse2}
          className="absolute animate-pulse rotate-180 bottom-6 z-10 right-0"
          alt=""
        />
        <img
          src={Eclipse2}
          className="absolute animate-bounce z-10 top-64 left-0"
          alt=""
        />
        <div className="container  mr-auto ml-auto p-0 w-full relative h-full flex-col-reverse items-center justify-center">
          <div className="right mr-auto ml-auto  flex justify-center items-center w-full h-96">
            <div className=" absolute mr-10 mt-10 border-green-400 hover:transition-all border-2 rounded-2xl w-72 h-96 "></div>
            <img
              src={Me}
              className=" shadow-2xl z-10 rounded-2xl mr-auto ml-auto w-72 h-96 object-cover"
              alt=""
            />
          </div>
          <div className="left  h-full mx-10 my-20">
            <div className="text-lg  font-bold  ">Hi, I am Suraj !</div>
            <div className="text-4xl font-bold  "></div>
            <div className="text-4xl font-bold  ">
              A{" "}
              <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-400  to-blue-600">
                Front-End
              </span>{" "} <br />
              Developer.
            </div>
            <p className="w-60 my-2  ">
              I'm a Full Stack Developer and UI/UX Designer Based in Delhi,
              India. I Love designing and coding, creating and building holy
              stuff.
            </p>
            <button className="px-4 animate-bounce  py-2 my-2 rounded-2xl bg-green-400">
              {" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/suraj-dubey-584a61246"
                rel="noreferrer"
              >
                Hire Me :)
              </a>
            </button>
          </div>
        </div>
      </div>
      <About />
      <Service />
      <Mywork />
    </>
  );
}

export default Home;
