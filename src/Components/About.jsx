/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/uva.jpg";

const imageAltText = "UVA Rotunda";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Master’s student in Data Science at UVA with a background in Neuroscience, academic research, and administration. Passionate about AI, consulting, and financial/sports analytics.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Machine Learning & Predictive Analytics",
  "Large Language Models (GPT-4, LangChain, Pinecone)",
  "Financial & Managerial Accounting",
  "Data Engineering & Cloud Computing (AWS, Google Cloud, Azure)",
  "SQL, Python (Pandas, NumPy, Scikit-learn), R",
  "Scalable & Distributed Computing (Hadoop, Spark)",
  "Time Series Forecasting & NLP",
  "Salesforce & Tableau for Business Intelligence",
  "Web Development & Automation (Svelte Kit, Notion, Zapier, WordPress)",
  "Consulting & Strategic Resource Management",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "With experience in machine learning, cloud computing, and data-driven consulting, I thrive on solving problems efficiently. My background spans academia, entrepreneurship, and analytics—skills I’ve refined through leadership, strategic planning, and resource optimization.";

const About = () => {
  return (
    <section className="padding has-background-image" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        className="about-content"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          maxWidth: "750px",
          padding: "3rem",
          margin: "3rem auto",
          textAlign: "center",
          borderRadius: "12px",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr style={{ width: "80%", margin: "1.5rem auto" }} />
        <ul
          style={{
            textAlign: "left",
            fontSize: "1.15rem",
            margin: "2rem auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
            listStyleType: "none",
            padding: "0",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill} style={{ padding: "0.5rem 0", textAlign: "center" }}>
              {skill}
            </li>
          ))}
        </ul>
        <hr style={{ width: "80%", margin: "1.5rem auto" }} />
        <p style={{ padding: "1rem 2rem 0", fontStyle: "italic" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
