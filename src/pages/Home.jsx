import outlineMe2 from "../images/meoutline2.webp";
import outlineMe3 from "../images/meoutline3.webp";
import About from "./About";
import Service from "./Service";
import Mywork from "./Mywork";
import Techs from "../components/Techs";
import { IoCall, IoLogoWhatsapp } from "react-icons/io5";

function Home() {
  return (
    <>
      <div className="home relative left-0 top-0 md:h-[auto]  flex justify-center items-center -pt-10 md:py-5 overflow-hidden">
        <div className="container  mr-auto ml-auto p-0 w-full  flex flex-col items-center justify-center md:flex md:flex-row-reverse md:justify-start md:items-start md:w-full md:py-0 md:h-auto">
          <div className="main-design  absolute  top-0 left-0 bottom-0 md:top-10 md:bottom-auto  md:h-auto my-auto  -right-24 md:top-0 md:right-0  bg-gray-100 mb-20 md:mb-0">
            <div className="design w-64 absolute -right-10 top-10 h-32 bg-yellow-300 rounded-l-full shadow-sm"></div>
            <div className="design2 w-96 absolute -right-10 top-44 h-32 mr-5 md:mt-1 bg-green-300 rounded-l-full shadow-sm overflow-hidden">
          
                 <img
                className="content-center align-middle flex flex-col items-center "
                src="https://lh3.googleusercontent.com/e5JwekXvq15I1Wm_LdltLIgkoK9TjBmBO285klC3mjwGpMFeHlQ2S52ORg9gC6lUaMbX3mjc40jPt-hBM-LG8tltcw"
                alt=""
              />
            </div>
            <div className="design3 w-56 absolute -right-16 top-80 h-32 bg-blue-900 rounded-l-full shadow-lg overflow-hidden">
              <img         className="content-center align-middle flex flex-col items-center " src="https://lh3.googleusercontent.com/wfP77XiiMlHqlBfVFH3yQiA1x8n9CYS49hp3egKvVXmriumTtHT1Wpt6Jhf5zyhe3TSho73f3p2_DGfue1OI_w-yPQ" alt="" />
            </div>
            <div className="design w-32 absolute right-96 top-10 h-32 bg-blue-400  rounded-full shadow-lg">
              <img
                className="rounded-full"
                src="https://lh3.googleusercontent.com/UOtnvVly9R4t_iDm9FLSOD892j_NAPP15QOHRe7XWOk7anRqAMVyw-dVNZRbMXWJjaAQi5EzqEk8pabulu9n5_0VOg"
                alt=""
              />
            </div>
            <div className="design w-32 absolute right-60 top-10 h-32 bg-red-400 rounded-full shadow-lg">
              {" "}
              <img
                src={outlineMe2}
                className="  w-32 h-32 object-cover rounded-b-full rotate-x-[20px]"
                alt=""
              />
            </div>
            <div className="design2 w-32 absolute right-96 top-44 mt-1 h-32 bg-yellow-400  rounded-full shadow-lg">
              <img
                className="rounded-full"
                src="https://lh3.googleusercontent.com/pRwz3R99pupFFEp5-WIIG1-1P0iBge7T75Bujyi5u-E2CLR4M1gs1RhQUYRVoem1iSgGpWXvt2gCjfkPaaWzOUUo"
                alt=""
              />
            </div>
            <div className="design3 w-48 absolute right-80 top-80 h-32 bg-purple-300 rounded-full shadow-lg"></div>
            <div className="design3 w-32 absolute right-44 top-80 h-32 bg-red-400 rounded-full shadow-lg">
              <img
                className="rounded-full"
                src="https://lh3.googleusercontent.com/AOBa4im22-xxvVHYIWIuSXqSlyZ-W8fywhyU8L3S6PeGbKr9Z9it_03Ml_chOuE36zhZpscfwkkg7hgahCJ_XaCNYA"
                alt=""
              />
            </div>
            <div className="design w-32 absolute right-24 top-10 h-32 bg-yellow-200  rounded-full shadow-lg">
              <img
                className="rounded-full"
                src="https://lh3.googleusercontent.com/Yy9kinAAcVAU47FbR-RdnBzkNee0cvOfcQ_EHVjZVMUfdb94qXiU_NWsorz6pjbM8j6muMg9k-dMcG-mG5tYdE8FEg"
                alt=""
              />
            </div>
            <div className="design3 w-32 absolute right-96 top-80 h-32 bg-purple-200 rounded-full shadow-sm">
              {" "}
              <img
                src={outlineMe3}
                className=" w-32 md:right-96 md:top-80 h-32 object-cover rounded-b-full rotate-x-[20px]"
                alt=""
              />
            </div>
          </div>

          <div className="right mr-auto ml-auto  flex justify-center items-start w-full h-80 md:w-2/3 "></div>
          <div className="left  w-full px-0 text-left md:text-left md:p-0 md:w-4/5 md:h-3/4 z-10 md:flex md:justify-left md:items-center md:ml-0 md:py-5">
            <div className="w-full h-[50vh] md:h-auto mt-5 md:mt-0 text-center px-5 m-auto flex flex-col justify-end md:justify-center md:items-start items-left md:mx-0 py-5">
              <div className=" hidden md:block md:text-left text-3xl tracking-wider md:leading-tight md:text-5xl font-bold  py-2 ">
                Hello, I'm <br /> Suraj Dubey <br />
                Front-End Developer.
              </div>
              <div className=" block md:hidden md:text-left text-3xl tracking-wider md:leading-tight md:text-4xl font-bold  py-2 ">
                Hello, I'm Suraj Dubey <br />
                Front-End Developer.
              </div>

              <p className="w-fit  my-2 text-center md:text-left md:w-4/5 text-gray-700 md:tracking-wider md:my-5 md:leading-6">
                I'm a Front-End Developer and UI/UX Designer Based in Delhi,
                India. I Love designing and coding, creating and building holy
                stuff.
              </p>
              <div className="flex justify-start">
                <button className=" my-4 shadow-sm bg-gray-800 w-40 hover:border-gray-800 md:w-40 border-transparent transition-all border-2 hover:text-black hover:bg-white text-white rounded-full px-4 py-2 mb-10 mx-auto md:mr-5 mr-2 ">
                  {" "}
                  <a
                    className=" flex justify-around items-center"
                    target="_blank"
                    href="tel:+919958355617"
                    rel="noreferrer"
                  >
                    <IoCall className="text-2xl" />
                    <span> Call Now</span>
                  </a>
                </button>
                <button className=" my-4 shadow-sm bg-green-800 w-40 hover:border-green-800  border-transparent transition-all border-2 hover:text-green-800 hover:bg-white text-white rounded-full px-4 py-2 mb-10 mx-auto md:mx-0">
                  {" "}
                  <a
                    className=" flex justify-around items-center"
                    target="_blank"
                    href="https://wa.me/message/J2XAXY4SYP4YL1"
                    rel="noreferrer"
                  >
                    <IoLogoWhatsapp className="text-2xl" />
                    <span>WhatsApp</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Techs />
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
