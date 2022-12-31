import { useState } from "react";
import Card from "../components/Card";
import Card1 from "../images/card4.webp";
import Card2 from "../images/card4.webp";
import Card3 from "../images/card4.webp";
function Mywork() {
  const [content, setContent] = useState(
    <Card
      title="UI/UX Design"
      content="Research, Design, Prototypes and Animation."
      image={Card1}
    />
  );

  return (
    <>
      <div className="mywork flex flex-col items-center">
        <div data-aos="zoom-in-down" className="my-10 text-3xl text-center font-bold md:text-5xl">
          My recent works
        </div>
        <nav data-aos="flip-right" className="flex-col justify-center items-center font-semibold text-center text-white list-none">
          <div
            className="m-2 cursor-pointer  px-4 py-2 bg-green-400 rounded-xl w-64"
            onClick={() =>
              setContent(
                <Card
                  title="UI/UX Design"
                  content="Research, Design, Prototypes and Animation."
                  image={Card1}
                />
              )
            }
          >
            UI/UX Design{" "}
          </div>
          <div
            className="m-2 cursor-pointer px-4 py-2 bg-green-400 rounded-xl  w-64"
            onClick={() =>
              setContent(
                <Card
                  title="web Design"
                  content="Implement UX design into live and user friendly."
                  image={Card2}
                />
              )
            }
          >
            Web Design{" "}
          </div>
          <div
            className="m-2 cursor-pointer px-4 py-2 bg-green-400 rounded-xl  w-64"
            onClick={() =>
              setContent(
                <Card
                  title="Front-End Development"
                  content="I build landing pages and responsive websites and web App."
                  image={Card3}
                />
              )
            }
          >
            Front-End Development{" "}
          </div>
        </nav>
        <div className="content">{content}</div>
      </div>
    </>
  );
}

export default Mywork;
