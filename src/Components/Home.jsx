import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] flex flex-col mx-auto px-8 h-full justify-center py-[25rem]">
        <p className="text-pink-600">Hi, my name is,</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Ferdinard Stephen
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Frontend developer.
        </h2>
        <p className="py-4 max-w-[700px] text-[#8892b0] ">
          I am a Frontend developer specializing in building execptional digital
          experience. I am passionate about building excellent software that
          improve the lives of those around me. I specialize in creating for
          clinents ranging from individuals and small-businesses, all the way to
          large enterprise corporations. I love trying out new techonlogies and
          working on responsive but user friendly websites.
        </p>
        <div>
          <Link
            to="/workpage"
            className="text-white w-fit group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300 ">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
