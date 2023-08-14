/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/computer.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Tourism Management System Desktop App 🎉",
    description:
      "Create a beginner friendly Desktop application to explore the Programming field.",
    url: "https://rabia-usman.github.io/Tourism-Management-System/",
  },
  {
    title: "Predicting the House Price using Python and SKLearn",
    description:
      "Predicting the house price by using Python, Machine Learning and SKLearn",
    url: "https://www.youtube.com/watch?v=6YBeKSSOV6s&ab_channel=RabiaUsmanprogrammer",
  },
  {
    title: "My Resume Site",
    description:
      "Created resume that Includes my experience and programming abilities.",
    url: "https://rabia-usman.github.io/Rabia-Usman-portfolio/",
  },
  {
    title: "Calculator-Desktop App",
    description:
      "Developed a Desktop based application for calculating basic operations, and how best to use each operation.",
    url: " https://rabia-usman.github.io/-Calculator/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
