import Instagram from "../images/instagram.png";
import Linkedin from "../images/linkedin.png";

function Footer() {
  return (
    <>
      <div className="footer flex flex-col justify-center pt-20 bg-gradient-to-b from-[#b4ffc9] to-white  md:bg-green-400">
        <div className="flex-col justify-between items-center bg-green-500 p-10 rounded-2xl w-fit ml-auto mr-auto mb-16 text-white md:w-3/4 md:flex-row md:flex">
          <div className="left mr-10 ">
            <div className="text-2xl md:text-4xl md:font-bold my-2">Have any project in mind?</div>
            <div className="text-sm font-light my-2">
              Let’s work together and I will help you by all my best.
            </div>
          </div>
          <div className="animate-bounce  text-green-600 bg-white py-2 px-4 rounded-xl cursor-pointer mt-8">
            Let's talk
          </div>
        </div>

        <div className="flex-col pb-8 w-full justify-center items-center">
          <div className=" flex justify-center mb-4 left ml-auto mr-auto">
            Designed and developed by Suraj Dubey 2022
          </div>
          <div className="right flex justify-center cursor-pointer">
            <a target="_blank" href="https://www.instagram.com/dubeysuraj864/" rel="noreferrer">
              <img src={Instagram} width={20} className="mr-2" alt="" />
            </a>
            <a target="_blank"  href="https://www.linkedin.com/in/suraj-dubey-584a61246" rel="noreferrer">
              <img src={Linkedin} width={20} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
