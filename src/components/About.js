// src/components/About.js
import React from "react";
import { image } from "../data/data"; // Import image

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Here is some information about me.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
