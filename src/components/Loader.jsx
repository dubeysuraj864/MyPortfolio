import LoaderImage from "../images/loaderImg.webp";

function Loader() {
  return (
    <>
      <div id="loading" className=" w-full flex justify-center items-center">
        <div className="my-auto flex justify-center items-center h-[100vh]">
          <img src={LoaderImage} className="animate-spin" width={70} alt="" />
        </div>
      </div>
    </>
  );
}

export default Loader;