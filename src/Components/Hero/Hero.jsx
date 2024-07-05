import React, { useState, useEffect } from "react";
import "./Hero.css";
import { assets } from "../../assets/assets";
import AnchorLink from "react-anchor-link-smooth-scroll";

const TextRotator = () => {
  const texts = [
    "I'm a full-stack web developer",
    "I'm a Tech-Enthusiast",
    "I'm A student",
  ];

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return <p className="rotating-text">{texts[textIndex]}</p>;
};

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={assets.profile1} alt="Profile" className="hero-image" />
      <h1>
        <span className="hero-greeting">Hey, I'm Devyanshi.</span>
      </h1>
      <h1 className="short">A final year student</h1>
      <TextRotator />
      <div className="hero-action">
        <div className="hero-connect">
          {/* <AnchorLink className="anchor-link" offeset={50} href="#contact">
            Connect with me
          </AnchorLink> */}
          <a
            href="https://www.linkedin.com/in/devyanshi-mishra-509aa4221/"
            target="_blank"
            rel="noopener noreferrer"
            className="r-link"
          >
            Connect with me 
          </a>
        </div>
        <div className="hero-resume">
          <a
            href="https://fuchsia-bibbie-8.tiiny.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="r-link"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
