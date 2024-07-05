import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { assets } from "../../assets/assets";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="title">
        <h1>About Me</h1>
        <img src={theme_pattern}></img>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={assets.profile}></img>
        </div>
    
        <div className="about-right">
          <div className="about-para">
            <p>Final year student with strong programming skills in C++ and comprehensive full-stack web development experience.</p>
            <p>Proficient in building robust, scalable applications using modern technologies and frameworks. Eager to contribute to a dynamic team and grow as a software developer.</p>
          </div>
          

          <div className="skills">
            <div className="about-skill">
              <p>C++</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>DSA</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
      

      
      </div>
    
  );
};

export default About;
