import UiUx from "../images/uiux.webp";
import Frontend from "../images/frontend.webp";
import Responsive from "../images/responsive.webp";
import Cards from "../components/Cards";

function Service() {
  return (
    <>
      <div className="service text-center flex-col  py-5 items-center md:py-10">
        <div data-aos="fade-up" className="my-10 text-3xl font-bold md:text-6xl ">What I Do?</div>
        <div data-aos="fade-right" className="flex-col bg-black text-white py-5 justify-center my-0 md:flex md:flex-row md:items-center ">
          <div className="m-4   p-4   flex items-center transition rounded-xl border -gray-100">
            <img
              src={UiUx}
              className="w-24 rounded-xl bg-gray-200 p-4"
              alt=""
            />
            <div className="uiux font-bold m-6 text-left">
              {" "}
              <span className="font-light">01</span> <br /> UI/UX Designing
            </div>
          </div>
          <div data-aos="fade-down" className="m-4   p-4   flex items-center transition rounded-xl border -gray-100">
            <img
              src={Frontend}
              className="w-24 rounded-xl bg-gray-200 p-4"
              alt=""
            />
            <div className="frontend font-bold m-6 text-left">
              {" "}
              <span className="font-light">02</span> <br />
              Front-End Development{" "}
            </div>
          </div>

          <div data-aos="fade-left" className="m-4   p-4   flex items-center transition rounded-xl border -gray-100 text-left">
            <img
              src={Responsive}
              className="w-24 rounded-xl bg-gray-200 p-4"
              alt=""
            />
            <div className="responsive font-bold m-6">
              {" "}
              <span className="font-light">03</span> <br />
              Responsive Designing
            </div>
          </div>
          
        </div>
        <div data-aos="zoom-in" className="my-10 text-3xl font-bold md:text-6xl mx-auto">
          Previous Work
        </div>
        <div>
          <Cards />
        </div>
      </div>
    </>
  );
}

export default Service;
