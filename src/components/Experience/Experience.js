import React from "react";
import "./experience.css";
// icons
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  // Frontend skills data
  const [FrontEnd] = React.useState([
    {
      id: 1,
      icon: <BsFillPatchCheckFill />,
      skill: "HTML",
      level: "experience",
    },
    { id: 2, icon: <BsFillPatchCheckFill />, skill: "CSS,CSS3", level: "" },
    {
      id: 3,
      icon: <BsFillPatchCheckFill />,
      skill: "JavaScript(ES6)",
      level: "",
    },
    {
      id: 4,
      icon: <BsFillPatchCheckFill />,
      skill: "React js",
      level: "high level",
    },
    {
      id: 5,
      icon: <BsFillPatchCheckFill />,
      skill: "Hooks",
      level: "intermediate",
    },
    {
      id: 6,
      icon: <BsFillPatchCheckFill />,
      skill: "Rest API",
      level: "intermediate",
    },
    {
      id: 6,
      icon: <BsFillPatchCheckFill />,
      skill: "Bootstrap 4,5",
      level: "high level",
    },
    {
      id: 6,
      icon: <BsFillPatchCheckFill />,
      skill: "Sass",
      level: "intermediate",
    },
    {
      id: 6,
      icon: <BsFillPatchCheckFill />,
      skill: "Tailwand Css",
      level: "basic",
    },
    {
      id: 6,
      icon: <BsFillPatchCheckFill />,
      skill: "Material UI",
      level: "basic",
    },
  ]);
  // backend skills data
  const [Backend] = React.useState([
    {
      id: 1,
      icon: <BsFillPatchCheckFill />,
      skill: "php",
      level: "intermediate",
    },
    {
      id: 2,
      icon: <BsFillPatchCheckFill />,
      skill: "Laravel",
      level: "intermediate",
    },
    {
      id: 3,
      icon: <BsFillPatchCheckFill />,
      skill: "mySQl",
      level: "intermediate",
    },
    {
      id: 3,
      icon: <BsFillPatchCheckFill />,
      skill: "Bootstrap 4,5",
      level: "experience",
    },
  ]);
  return (
    <section id="experience">
      <h5>what Skills I Have .. </h5>
      <h2> My Experience</h2>
      <div className="container expeience__container">
        {/* frontend start */}
        <div className="experinece__frontend">
          <h3>Frontend Development</h3>

          <div className="experience__content">
            {FrontEnd.map((skill) => {
              return (
                <article className="experience__details" key={skill.id}>
                  <span className="experience__details-icon">{skill.icon} </span>
                  <h6>{skill.skill} </h6>
                  <small className="text-light">{skill.level}</small>
                </article>
              );
            })}
          </div>
        </div>
        {/* frontend End */}

        {/* Backend Start */}
        <div className="experinece__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {Backend.map((skill) => {
              return (
                <article className="experience__details" key={skill.id}>
                  <span className="experience__details-icon">{skill.icon} </span>
                  <h6>{skill.skill} </h6>
                  <small className="text-light">{skill.level}</small>
                </article>
              );
            })}
          </div>
        </div>
        {/* Backend End */}
      </div>
    </section>
  );
};

export default Experience;
