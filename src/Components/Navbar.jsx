import React from "react";
import Logo1 from "../assets/logo1.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-[1000]">
      <div>
        <img src={Logo1} alt="Logo image" style={{ width: "90px" }} />
      </div>
      {/* menu */}

      <ul className="hidden md:flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutpage">About</Link>
        </li>
        <li>
          <Link to="/skill">Skills</Link>
        </li>
        <li>
          <Link to="/workpage">Work</Link>
        </li>
        <li>
          <Link to="/contactpage">Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className=" md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col bg-[#0a192f] justify-center items-center"
        }
      >
        <li className="py-6 text-4xl" onClick={handleClick}>
          <Link to="/">Home</Link>
        </li>
        <li className="py-6 text-4xl" onClick={handleClick}>
          <Link to="/aboutpage">About</Link>
        </li>
        <li className="py-6 text-4xl" onClick={handleClick}>
          <Link to="/skill">Skills</Link>
        </li>
        <li className="py-6 text-4xl" onClick={handleClick}>
          <Link to="/workpage">Work</Link>
        </li>
        <li className="py-6 text-4xl" onClick={handleClick}>
          <Link to="/contactpage">Contact</Link>
        </li>
      </ul>
      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className=" flex justify-between items-center text-gray-300 w-full"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black-600">
            <a
              className=" flex justify-between items-center text-gray-300 w-full"
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600">
            <a
              className=" flex justify-between items-center text-gray-300 w-full"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600">
            <a
              className=" flex justify-between items-center text-gray-300 w-full"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
