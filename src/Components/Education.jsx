import React from "react";

const educationData = [
  {
    school: "University of Virginia",
    degree: "Master of Science in Data Science",
    year: "Expected May 2025",
    details: [
      "GPA: 4.0/4.0",
      "Relevant coursework: Bayesian Machine Learning, Linear Models for Data Science, Deep Learning, Data Engineering, Predictive Modeling, Advanced Regression & Data Visualization",
    ],
  },
  {
    school: "University of Virginia",
    degree: "Bachelor of Arts in Neuroscience, Data Science Minor",
    year: "2016 - 2020",
    details: [
      "Relevant coursework: Management & Financial Accounting, Microeconomics, Management Consulting Ethical Application of AI",
    ],
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <h3 className="education-item-title">{edu.school}</h3>
            <p className="education-item-degree">
              <strong>{edu.degree}</strong> - {edu.year}
            </p>
            <ul className="education-item-details">
              {edu.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
