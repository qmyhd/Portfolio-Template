import React from "react";

const educationData = [
  {
    school: "University of Virginia",
    degree: "Bachelor of Arts in Neurocience",
    year: "2020 - 2024",
    details: [
      "Graduated with Honors, GPA: 3.7/4.0",
      "Relevant coursework: Algorithms, Data Structures, Machine Learning, Web Development",
    ],
  },
  {
    school: "Centreville High School",
    degree: "High School Diploma with Honors",
    year: "2016 - 2020",
    details: [
      "Completed with Distinction, GPA: 4.3",
      "Focused on foundational coursework in mathematics, science, and literature",
    ],
  },
];

const Education = () => {
  return (
    <section className="light min-height trianglify-background" id="education">
      <h2>Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.school}</h3>
            <p>
              <strong>{edu.degree}</strong> - {edu.year}
            </p>
            <ul>
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
