import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  const [data] = React.useState([
    [
      { skils: "Lorem ipsum dolor sit amet, consectetur adip" },
      { skils: "Lorem ipsum dolor sit amet, consectetur adip" },
      { skils: "Lorem ipsum dolor sit amet, consectetur adip" },
      { skils: "Lorem ipsum dolor sit amet, consectetur adip" },
    ],
    [
      { skils: "Lorem ipsum dolor sit amet, consectetur adip" },
      { skils: "Lorem ipsum dolor sit amet, consectetur adip" },
      { skils: "Lorem ipsum dolor sit amet, consectetur adip" },
      { skils: "Lorem ipsum dolor sit amet, consectetur adip" },
    ],
    [
      { skils: "Lorem ipsum dolor sit amet, consectetur adip" },
      { skils: "Lorem ipsum dolor sit amet, consectetur adip" },
      { skils: "Lorem ipsum dolor sit amet, consectetur adip" },
      { skils: "Lorem ipsum dolor sit amet, consectetur adip" },
    ],
  ]);
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* start UI /UX */}
        <article className="service">
          <div className="article__head">
            <h3>UI / UX Design </h3>
          </div>
          {data[0].map((item) => {
            return (
              <ul className="service__list">
                <li>
                  <BiCheck className="service__list-icon" /> <p></p>
                  <p>{item.skils} </p>
                </li>
              </ul>
            );
          })}
        </article>
        {/* End UI /UX */}

        {/* start second services */}
        <article className="service">
          <div className="article__head">
            <h3>Second Ervices </h3>
          </div>
          {data[1].map((item) => {
            return (
              <ul  className="service__list">
                <li>
                  <BiCheck className="service__list-icon" /> <p></p>
                  <p>{item.skils} </p>
                </li>
              </ul>
            );
          })}
        </article>
        {/* End second */}

        {/* start Thirdd services */}
        <article className="service">
          <div className="article__head">
            <h3>Third Ervices </h3>
          </div>
          {data[1].map((item) => {
            return (
              <ul  className="service__list">
                <li>
                  <BiCheck className="service__list-icon" /> <p></p>
                  <p>{item.skils} </p>
                </li>
              </ul>
            );
          })}
        </article>
        {/* End second */}
      </div>
    </section>
  );
};

export default Services;
