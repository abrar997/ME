import React from "react";
import "./experience.css";
// icons
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  // Frontend skills data
  const [FrontEnd] = React.useState([
    {
      id: 1,
      skill: "HTML,HTML5",
      level: "experience",
    },
    {
      id: 2,
      icon: <BsFillPatchCheckFill />,
      skill: "CSS,CSS3",
      level: "experience",
    },
    {
      id: 3,
      skill: "JavaScript(ES6)",
      level: "intermediate",
    },
    {
      id: 4,
      skill: "React js",
      level: "high level",
    },
    {
      id: 5,
      skill: "Hooks",
      level: "intermediate",
    },
    {
      id: 6,
      skill: "framer-motion",
      level: "intermediate",
    },
    {
      id: 7,
      skill: "Bootstrap 4,5",
      level: "high level",
    },
    {
      id: 8,
      skill: "Sass",
      level: "intermediate",
    },
    {
      id: 9,
      skill: "Tailwind Css",
      level: "experience",
    },
    {
      id: 10,
      skill: "Material UI",
      level: "basic",
    },
  ]);
  // backend skills data
  const [Backend] = React.useState([
    {
      id: 1,
      skill: "php",
      level: "intermediate",
    },
    {
      id: 2,
      skill: "Laravel",
      level: "intermediate",
    },
    {
      id: 3,
      skill: "mySQl",
      level: "intermediate",
    },
    {
      id: 4,
      skill: "Bootstrap 4,5",
      level: "experience",
    },
  ]);
  const [Other] = React.useState([
    {
      id: 1,
      skill: "Github",
      level: "good",
    },
    {
      id: 1,
      skill: "bitbucket",
      level: "intermediate",
    },
    {
      id: 1,
      skill: "Jira",
      level: "intermediate",
    },
    {
      id: 2,
      skill: "postman",
      level: "intermediate",
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
                <article className="expeience__details" key={skill.id}>
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill.skill} </h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
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
                <article className="expeience__details" key={skill.id}>
                  <BsFillPatchCheckFill className="experience__details-icon" />

                  <div>
                    <h4>{skill.skill} </h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        {/* Backend End */}

        {/* Other skills */}
        <div className="experinece__backend">
          <h3>Other Skills</h3>
          <div className="experience__content">
            {Other.map((skill) => {
              return (
                <article className="expeience__details" key={skill.id}>
                  <BsFillPatchCheckFill className="experience__details-icon" />

                  <div>
                    <h4>{skill.skill} </h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
