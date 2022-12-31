import Arrow from "../images/arrow.webp";

function Card(props) {
  return (
    <div data-aos="zoom-out-up" className="p-4">
      <div className="card w-full md:w-4/6 ml-auto mr-auto border-gray-200 border flex-col justify-center-center rounded-3xl my-3 py-4 md:flex md:justify-center md:flex-row md:items-center">
        <div className="flex-col items-center md:flex md:flex-row md:justify-center md:items-center">
          <div className="left ml-4 pr-5 text-left pl-5">
            <div className="top md:text-2xl font-light">{props.title}</div>
            <div className="middle font-bold text-lg md:text-2xl  my-2 md:my-4 w-full">
              {props.content}
            </div>
            <div className="bottom font-light md:text-2xl  flex items-center ">
              Learn more <img src={Arrow} className="ml-2 w-5" alt="" />
            </div>
          </div>
          <div className="right p-4 ">
            <img src={props.image} width={500} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
