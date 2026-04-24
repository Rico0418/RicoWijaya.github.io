import "./SkillsSection.css";

const skillsData = {
  "backend": [
    "Golang (Gin, pgxpool)",
    "Node.js / Express",
    "REST API design"
  ],
  "frontend": [
    "React (Vite, MUI, React Router)",
    "JavaScript",
    "TypeScript",
    "Axios",
    "Atomic Design"
  ],
  "database": [
    "PostgreSQL",
    "MongoDB",
    "Query optimization"
  ],
  "devops_and_tools": [
    "Docker",
    "Git",
    "GitLab",
    "Postman"
  ],
  "currently_learning": [
    "Algorithms & data structures",
    "System design",
    "Linux internals"
  ]
};

const SkillsSection = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="terminal-window">
                <div className="terminal-header">
                    <div className="terminal-dots">
                        <div className="terminal-dot close"></div>
                        <div className="terminal-dot minimize"></div>
                        <div className="terminal-dot maximize"></div>
                    </div>
                    <div className="terminal-title">stack.json</div>
                </div>
                <div className="terminal-body">
                    <div className="about-prompt">cat stack.json</div>
                    
                    <div className="skills-grid">
                        {Object.entries(skillsData).map(([category, skills]) => (
                            <div key={category} className="skill-category">
                                <h3 className="skill-category-title">"{category}"</h3>
                                <div className="skill-list">
                                    {skills.map((skill, index) => (
                                        <div key={index} className="skill-item">{skill}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
