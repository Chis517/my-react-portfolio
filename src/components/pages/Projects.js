import React from 'react';

import runBuddy from "../../assets/images/run-buddy.png"
import placeholder from "../../assets/images/placeholder.jpeg";

export default function Projects() {
  return (
    <div>
      <h1>Projects Page</h1>
      <div className="projects">
        <a href="https://chis517.github.io/run-buddy/" target="_blank" rel="noopener noreferrer">
          <img src={runBuddy} alt="project 1" className="other-img" />
          <div className="overlay">
            <div className="text">
              Run Buddy
            </div>
          </div>
        </a>
      </div>
      <div>
        <img src={placeholder} alt="project 2" className="other-img" />
        <div className="overlay">
          <div className="text">
            placeholder
          </div>
        </div>
      </div>
    </div>
  );
}