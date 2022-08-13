import React from "react";
import "./nav.css";
// icons from react icons
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBookHeart } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { TbMessages } from "react-icons/tb";
const Navbar = () => {
  return (
    <nav>
      <a  href="#" className="active">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <BiBookHeart />
      </a>
      <a href="#service">
        <RiServiceLine />
      </a>
      <a href="#contact">
        <TbMessages />
      </a>
    </nav>
  );
};

export default Navbar;
