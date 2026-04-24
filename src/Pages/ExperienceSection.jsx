import "./ExperienceSection.css";

const experiences = [
  {
    company: "Polytron",
    role: "Backend Developer Intern",
    date: "Feb 2025 – Jan 2026",
    bullets: [
      "Resolved fragmented data processing across multiple services by designing and implementing scalable RESTful APIs in Golang (Gin), reducing manual reconciliation efforts by 40% through workflow automation.",
      "Improved system reliability by optimizing API response times and refining distributed data aggregation logic, ensuring more consistent and accurate B2B dashboard reporting.",
      "Standardized backend deployment by containerizing services with Docker, ensuring consistent runtime behavior across Linux systems and reducing environment-related issues."
    ]
  },
  {
    company: "Binus IT Division",
    role: "Associate Web Developer",
    date: "Mar 2024 – Jan 2025",
    bullets: [
      "Resolved critical production issues by debugging and refactoring application logic, improving system stability and increasing user satisfaction by 30%.",
      "Drove higher user engagement by implementing new features and enhancing existing functionalities, contributing to a 25% increase in active users.",
      "Improved cross-team efficiency by standardizing technical documentation and updating project guidelines, streamlining collaboration across the development team."
    ]
  }
];

const ExperienceSection = () => {
    return (
        <section id="experience" className="experience-section">
            <h2 className="experience-header">tail -f experience.log</h2>
            
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <div className="experience-role">{exp.company} — {exp.role}</div>
                        <div className="experience-company-date">
                            <span className="date">{exp.date}</span>
                        </div>
                        <div className="experience-bullets">
                            {exp.bullets.map((bullet, i) => (
                                <div key={i} className="experience-bullet">{bullet}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;
