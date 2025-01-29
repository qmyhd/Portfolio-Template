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
import image from "../images/uvaravens.jpg";

const imageAltText = "UVA RAVENS";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Drop o'Clock 🎉",
    description:
      "Premier cook group and bot rental service. Designed the platform, managed the community, and optimized acquisition strategies.",
    url: "https://dropoclock.com/",
  },
  {
    title: "QBOT, AI chatbot",
    description:
      "Developed QBOT, an AI chatbot built on the ChatGPT framework.",
    url: "https://github.com/qmyhd/QBOT_2.0",
  },
  {
    title: "Consulting Case Competition - 1st Place",
    description:
      "Led a market analysis for Nunamaisha, utilizing SEO analytics and competitive benchmarking, culminating in a 30-slide client presentation.",
    url: "https://www.linkedin.com/in/qaisyo",
  },
  {
    title: "Machine Learning Capstone",
    description:
      "Applied anomaly detection techniques on real-time roadway data to enhance traffic safety and optimize city planning.",
    url: "https://github.com/qmyhd",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="section-title">Portfolio</h2>
      <p className="section-description">
        Below are some of my key projects, ranging from AI development to consulting competitions. Click on a title to learn more.
      </p>

      <div className="portfolio-container">
        <div className="portfolio-image">
          <img src={image} alt={imageAltText} />
        </div>
        <div className="portfolio-list">
          {projectList.map((project) => (
            <div className="portfolio-item" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 className="portfolio-title">{project.title}</h3>
              </a>
              <p className="portfolio-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
