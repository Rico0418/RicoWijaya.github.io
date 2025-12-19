import { FiGithub } from "react-icons/fi";
import Carousel from "../components/Carousel";
import { projects } from "./projects";
import "./ProjectSection.css";

const ProjectSection = () => {
  return (
    <section className="project-section">
      <div className="project-title">
        <h2 className="section-title">Projects</h2>
      </div>

      <div className="project-list">
        {projects.map((project, index) => {
          const imageItems = project.images
            ? project.images.map((img, i) => ({
                id: i,
                image: img,
                title: project.title
              }))
            : [];

          return (
            <div key={index} className="project-card">
              {project.images && (
                <div className="project-carousel">
                  <Carousel
                    items={imageItems}
                    baseWidth={900}
                    loop
                    autoplay
                  />
                </div>
              )}

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
