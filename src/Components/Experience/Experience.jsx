import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="experience-title">
        <h1>Experience</h1>
        <div className="title-line"></div>
      </div>

      <div className="experience-card">

        <div className="experience-header">
          <div>
            <h2>Java Full Stack Developer Intern</h2>
            <h3>Athenura Technologies</h3>
          </div>

          <span className="experience-date">
            July 2026 - Present
          </span>
        </div>

        <p className="experience-description">
          Working as a Java Full Stack Developer Intern where I contribute to
          developing modern web applications using Java, Spring Boot, React,
          and MySQL while collaborating with the development team.
        </p>

        <ul className="experience-list">
          <li>Developed REST APIs using Spring Boot.</li>
          <li>Built responsive user interfaces using React.</li>
          <li>Integrated frontend with backend APIs.</li>
          <li>Worked with MySQL database and CRUD operations.</li>
          <li>Used Git & GitHub for version control.</li>
          <li>Participated in debugging and feature implementation.</li>
        </ul>

        <div className="tech-stack">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>React</span>
          <span>MySQL</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>REST API</span>
        </div>

        <div className="experience-buttons">
          <a
            href="https://athenura.in/"
            target="_blank"
            rel="noreferrer"
          >
            Company Website
          </a>

          <a
            href="https://www.linkedin.com/company/athenura/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </div>
  );
};

export default Experience;