import { Link } from "react-router-dom";
import banner from "../../../assets/banner1.png";
import { FaArrowRightFromBracket } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className="bg-[#092635]">
      <div className="flex flex-col-reverse md:flex-row-reverse md:pt-10  max-w-screen-xl justify-center items-center mx-auto md:h-[600px]">
        <div className="md:w-1/2">
          <img src={banner} className="" />
          <div className="flex items-center justify-center mb-5 md:hidden">
           <Link to={"/dashboard"}>
           <button className="btn btn-outline text-warning hover:bg-white hover:text-black">LET'S EXPLORE <FaArrowRightFromBracket className="text-xl"></FaArrowRightFromBracket></button>
           </Link>
          </div>
        </div>
        <div className="md:w-1/2 p-5">
          <h1 className="text-2xl md:text-5xl font-bold">
            Best Way to Manage <br /> Your Daily Tasks
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="mt-10 hidden md:block">
           <Link to={'dashboard'}>
           <button className="btn btn-outline text-warning hover:bg-white hover:text-black">LET'S EXPLORE <FaArrowRightFromBracket className="text-xl"></FaArrowRightFromBracket></button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
