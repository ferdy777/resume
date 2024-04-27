import React from "react";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Html from "../assets/html.png";
import Tailwind from "../assets/tailwind.png";
import Node from "../assets/node.png";
import Firebase from "../assets/firebase.png";
import Aws from "../assets/aws.png";
import Mongo from "../assets/mongo.png";
import Css from "../assets/css.png";
import GitHub from "../assets/github.png";

const Skills = () => {
  return (
    <div className=" text-gray-300 w-full pt-[4.5rem]">
      {/* container */}
      <div className=" w-full max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 inline border-pink-600">
            Skills
          </p>
          <p className="py-4">// These are the techonlogies i've worked with</p>
        </div>
        <div className=" w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md  shadow-[#040c16] hover:scale-110 dueation-500">
            <img src={Html} className="w-20 mx-auto" alt="Html icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md  shadow-[#040c16] hover:scale-110 dueation-500">
            <img src={Css} className="w-20 mx-auto" alt="Html icon" />
            <p className="my-4">Css</p>
          </div>
          <div className="shadow-md  shadow-[#040c16] hover:scale-110 dueation-500">
            <img src={Javascript} className="w-20 mx-auto" alt="Html icon" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md  shadow-[#040c16] hover:scale-110 dueation-500">
            <img src={Mongo} className="w-20 mx-auto" alt="Html icon" />
            <p className="my-4">Mongo</p>
          </div>
          <div className="shadow-md  shadow-[#040c16] hover:scale-110 dueation-500">
            <img src={Tailwind} className="w-20 mx-auto" alt="Html icon" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md  shadow-[#040c16] hover:scale-110 dueation-500">
            <img src={ReactImg} className="w-20 mx-auto" alt="Html icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md  shadow-[#040c16] hover:scale-110 dueation-500">
            <img src={GitHub} className="w-20 mx-auto" alt="Html icon" />
            <p className="my-4">GitHUb</p>
          </div>
          <div className="shadow-md  shadow-[#040c16] hover:scale-110 dueation-500">
            <img src={Aws} className="w-20 mx-auto" alt="Html icon" />
            <p className="my-4">Aws</p>
          </div>
          <div className="shadow-md  shadow-[#040c16] hover:scale-110 dueation-500">
            <img src={Node} className="w-20 mx-auto" alt="Html icon" />
            <p className="my-4">Node</p>
          </div>
          <div className="shadow-md  shadow-[#040c16] hover:scale-110 dueation-500">
            <img src={Firebase} className="w-20 mx-auto" alt="Html icon" />
            <p className="my-4">Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
