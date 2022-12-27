function About() {
  return (
    <>
      <div className="about md:py-20 bg-gray-50">
        <div className="container text-center flex-col justify-center items-center py-20 md:py-0  relative md:flex md:flex-row md:justify-around md:items-center md:p-0 md:m-auto">
          <div className="left md:m-5 pb-20 w-full flex justify-center md:w-1/3 md:p-0  md:flex md:flex-col md:justify-center md:items-center">
            <img
              src="https://lh3.googleusercontent.com/sfTSdUg2SG35Jnw__2XNo2Axq9zYvdYT57M5oV34AP7pWXNfpLjXy_9SFt2pvrxSI3Rgq7_J5kmAH8bq1rlhSI0WYe0"
              className="translate-y-[30px] transition-all  w-72 h-72  mx-auto rounded-2xl md:flex md:justify-center"
              alt=""
            />
            <img
              src="https://lh3.googleusercontent.com/4Q-uRy8pCc4bhg5QSeOQeDwK6XDu4bNGleNVfBmMp0Zdie0vwPoi_AtdYtPV8zBcbOTOL2-QsJ1xc-_P8rI7eU0qQg"
              className="translate-y-[30px] transition-all  w-72 h-72 flex justify-center mx-auto rounded-2xl md:flex md:justify-center"
              alt=""
            />
          </div>
          <div className="right relative w-auto pb-10 pt-2 rounded-2xl md:w-1/2 md:p-0">
            <div className="my-10 text-3xl font-bold md:text-6xl">About Me</div>
            <div className=" px-4 md:px-0 text-justify text-md mx-5 font-normal tracking-wider">
              Hello! My name is Suraj Dubey and I am a UX/UI designer and Front
              End Developer. I enjoy creating things that live on the internet.
              And experienced Software Engineer with a demonstrated history of
              working in the Computer Software industry. Skilled in Web Design,
              UX/UI design and Front-end Development. Specialize in Information
              Security and software engineering, creating dynamic and beautiful
              web pages. I have been in the field for nearly 2 years, and have
              been loving every minute of it. <br /> <br /> Here are a few
              technologies I’ve been working with recently:
              <div className=" flex justify-between mt-2  tracking-wider text-sm word--2">
                <div className="w-4/4 flex items-center ">
                  <div className="mr-10">
                    <li>VueJs & ReactJs</li>
                    <li>HTML</li>
                    <li>Figma</li>
                  </div>
                  <div className="">
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
