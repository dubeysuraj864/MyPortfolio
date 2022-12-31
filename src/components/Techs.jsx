/* eslint-disable jsx-a11y/anchor-is-valid */
import { ImHtmlFive } from "react-icons/im";
import { SiCsswizardry, SiJavascript,SiMongodb, SiTailwindcss } from "react-icons/si";
import { FaSass, FaReact, FaVuejs } from "react-icons/fa";
import {DiNodejs} from "react-icons/di";

function Techs() {
  return (
    <>
      <div className="techs bg-black text-white py-5 xl:px-20">
        <div className=" title my-10 text-2xl font-bold md:text-3xl text-center">
          Expertise in Latest Technologies and <br /> It's Frameworks.
        </div>
        <div className="flex flex-wrap justify-center md:justify-around md:px-24 items-center pb-10">
          <span className="m-2 text-6xl text-orange-500">
            <ImHtmlFive />
          </span>
          <span className="m-2 text-6xl text-blue-500">
            <SiCsswizardry />
          </span>
          <span className="m-2 text-6xl text-yellow-400">
            <SiJavascript />
          </span>
          <span className="m-2 text-6xl text-pink-500">
            <FaSass />
          </span>
          <span className="m-2 text-6xl text-blue-400">
            <FaReact />
          </span>
          <span className="m-2 text-6xl text-green-300">
            <FaVuejs />
          </span>
          <span className="m-2 text-6xl text-blue-400">
            <SiTailwindcss />
          </span>
          <span className="m-2 text-8xl text-green-600">
            <DiNodejs />
          </span>
          <span className="m-2 text-6xl text-green-600">
            <SiMongodb />
          </span>
        </div>
        <div className="flex justify-center items-center pb-5">
          <a
            href="#"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View related works
          </a>
        </div>
      </div>
    </>
  );
}

export default Techs;
