import Medtu from "../images/medtu.png";

function About() {
  return (
    <>
      <div className="about">
        <div className="container text-center flex-col justify-center items-center py-20  relative">
          <div className="left m-5">
            <div className="absolute transition-all  m-10  w-72 h-72 rounded-2xl ">
              <img src={Medtu} className="rounded-2xl shadow-2xl" alt="" />
            </div>
            <div className="border-green-400 hover:transition-all border-2 p-4 w-72 h-72 rounded-2xl"></div>
          </div>
          <div className="right w-full">
            <div className="text-2xl mt-20 text-green-500  my-4 font-bold">
              About Me
            </div>
            <div className=" text-left m-10 font-light text-sm">
              Hello! My name is Suraj Dubey and I am a UX/UI designer and Full
              Stack Developer. I enjoy creating things that live on the
              internet. And experienced Software Engineer with a demonstrated
              history of working in the Computer Software industry. Skilled in
              Web Design, UX/UI design and Front-end Development. Specialize in
              Information Security and software engineering, creating dynamic
              and beautiful web pages. I have been in the field for nearly 2
              years, and have been loving every minute of it. <br /> <br /> Here
              are a few technologies I’ve been working with recently:
              <div className=" mt-2 font-light word--2">
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
    </>
  );
}

export default About;
