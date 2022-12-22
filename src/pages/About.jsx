import Medtu from "../images/medtu.png";
function About() {
  return (
    <>
      <div className="about">
        <div className="container text-center flex-col justify-center items-center py-20 md:py-0  relative md:flex md:flex-row md:justify-center md:items-center md:p-0 md:m-auto">
          <div className="left m-5 pb-20 md:w-1/3 md:p-0  md:flex md:flex-row md:justify-center md:items-center">
            <img
              src={Medtu}
              className="shadow-2xl absolute transition-all  m-10  w-72 h-72 rounded-2xl md:flex md:justify-center"
              alt=""
            />

            <div className="border-green-400 ml-20 mt-20 hover:transition-all border-2 p-4 w-72 h-72 rounded-2xl"></div>
          </div>
          <div className="right relative w-auto pb-10 pt-2 rounded-2xl md:w-1/2 md:p-0">
            <div className="my-10 text-3xl font-bold md:text-6xl">
              About Me
            </div>
            <div className=" px-4 text-left text-md m-5 font-light text-sm">
              Hello! My name is Suraj Dubey and I am a UX/UI designer and Full
              Stack Developer. I enjoy creating things that live on the
              internet. And experienced Software Engineer with a demonstrated
              history of working in the Computer Software industry. Skilled in
              Web Design, UX/UI design and Front-end Development. Specialize in
              Information Security and software engineering, creating dynamic
              and beautiful web pages. I have been in the field for nearly 2
              years, and have been loving every minute of it. <br /> <br /> Here
              are a few technologies I’ve been working with recently:
              <div className=" flex justify-between mt-2 font-light word--2">
                <div className="w-5/4">
                  <div>
                    <li>Vue Js & React Js</li>
                    <li>HTML</li>
                    <li>Figma</li>
                  </div>
                  <div className="mt-2">
                    <li>Sass & Tailwind CSS</li>
                    <li>Node Js</li>
                    <li>Git & GitHub</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
