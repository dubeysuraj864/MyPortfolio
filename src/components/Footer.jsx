import Instagram from "../images/instagram.webp";
import Linkedin from "../images/linkedin.webp";

function Footer() {
  return (
    <>
      <div className="footer flex flex-col justify-center pt-20 bg-black px-2 rounded-t-2xl">
        <div className="flex-col justify-between items-center shadow-lg bg-white p-10 rounded-2xl w-fit ml-auto mr-auto mb-16 md:w-3/4 md:flex-row md:flex">
          <div className="left mr-10 ">
            <div className="text-2xl md:text-4xl md:font-bold my-2">Have any project in mind?</div>
            <div className="text-sm font-light my-2">
              Let’s work together and I will help you by all my best.
            </div>
          </div>
          <div className="animate-bounce  text-white bg-black py-2 px-4 rounded-xl cursor-pointer mt-8">
            Let's talk
          </div>
        </div>

        <div className=" flex flex-col md:flex md:flex-row md:justify-around pb-8 w-full justify-center items-center text-white">
          <div className=" mb-4 left">
            Designed and developed by Suraj Dubey 2022
          </div>
          <div className="right flex justify-center cursor-pointer invert">
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
