import Arrow from "../images/arrow.png";

function Card(props) {
  return (
    <div className="p-4">
      <div className="card w-full ml-auto mr-auto  border-gray-200 border-2 flex-col justify-center-center rounded-3xl my-3 py-5 ">
        <div className="flex-col items-center ">
          <div className="left ml-4 pr-5 text-left pl-5">
            <div className="top font-light">{props.title}</div>
            <div className="middle font-bold text-lg my-2 w-full">
              {props.content}
            </div>
            <div className="bottom font-light flex items-center ">
              Learn more <img src={Arrow} className="ml-2" width={15} alt="" />
            </div>
          </div>
          <div className="right p-4 ">
            <img src={props.image}  width={500} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
