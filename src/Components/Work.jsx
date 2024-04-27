import React from "react";
import WorkImg from "../assets/projects/workImg.jpeg";
import Realestate from "../assets/projects/realestate.jpg";

const Work = () => {
  return (
    <div className=" text-gray-300 w-full h-screen py-[59rem] sm:py-[35rem] md:py-[27rem] border ">
      <div className=" max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pl-8">
          <p className="text-4xl border-b-4 inline font-bold text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lh shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl tracking-wider font-bold text-white">
                React Js Application
              </span>
              <div className="pt-8 text-center">
                <a href=""></a>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo
                </button>
                <a href=""></a>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Realestate})` }}
            className="shadow-lh shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl tracking-wider font-bold text-white">
                React Js Application
              </span>
              <div className="pt-8 text-center">
                <a href=""></a>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo
                </button>
                <a href=""></a>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lh shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl tracking-wider font-bold text-white">
                React Js Application
              </span>
              <div className="pt-8 text-center">
                <a href=""></a>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo
                </button>
                <a href=""></a>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Realestate})` }}
            className="shadow-lh shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl tracking-wider font-bold text-white">
                React Js Application
              </span>
              <div className="pt-8 text-center">
                <a href=""></a>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo
                </button>
                <a href=""></a>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lh shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl tracking-wider font-bold text-white">
                React Js Application
              </span>
              <div className="pt-8 text-center">
                <a href=""></a>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo
                </button>
                <a href=""></a>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Realestate})` }}
            className="shadow-lh shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl tracking-wider font-bold text-white">
                React Js Application
              </span>
              <div className="pt-8 text-center">
                <a href=""></a>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo
                </button>
                <a href=""></a>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
