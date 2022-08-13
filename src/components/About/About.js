import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { TbFolders } from "react-icons/tb";

const About = () => {
  // main data in about
  const [data] = React.useState([
    { id: 1, icons: <FaAward />, name: "Experience", time: "+3 Years Working" },
    { id: 2, icons: <FiUsers />, name: "Clients", time: "..." },
    { id: 3, icons: <TbFolders />, name: "Projects", time: "..." },
  ]);
  const [text] = React.useState("FrontEnd Web developer ");

  return (
    <section id="about" className="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img" >
            <img src={require("../../assets/me.jpg")} alt="about image"
            width="99%"
            />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
          {data.map((item) => {
            return (
                <article className="about__card"  key={item.id}>
                  <span className="about__icon">{item.icons} </span>
                  <h5>{item.name} </h5>
                  <small> {item.time}</small>
                </article>
            );
          })}
          </div>
          <p>{text}</p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
