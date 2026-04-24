import { useState } from "react";
import { projects } from "./projects";
import "./ProjectSection.css";

const ProjectCard = ({ project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const hasMultipleImages = project.images && project.images.length > 1;

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className="terminal-window project-card">
            <div className="terminal-header">
                <div className="terminal-dots">
                    <div className="terminal-dot close"></div>
                    <div className="terminal-dot minimize"></div>
                    <div className="terminal-dot maximize"></div>
                </div>
                <div className="terminal-title">{project.title.toLowerCase().replace(/\s+/g, '-')}</div>
            </div>
            
            {project.images && project.images.length > 0 && (
                <div className="project-thumbnail-container">
                    <img 
                        src={project.images[currentImageIndex]} 
                        alt={`${project.title} screenshot ${currentImageIndex + 1}`} 
                        className="project-thumbnail"
                    />
                    {hasMultipleImages && (
                        <div className="carousel-controls">
                            <button className="carousel-btn prev" onClick={handlePrevImage}>&lt;</button>
                            <span className="carousel-indicator">{currentImageIndex + 1} / {project.images.length}</span>
                            <button className="carousel-btn next" onClick={handleNextImage}>&gt;</button>
                        </div>
                    )}
                </div>
            )}
            
            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                    {project.tech.map((techItem, i) => (
                        <span key={i} className="tech-tag">{techItem}</span>
                    ))}
                </div>
                
                <div className="project-links">
                    {project.github && (
                        <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-link"
                        >
                            [View Source]
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const ProjectSection = () => {
    return (
        <section id="projects" className="projects-section">
            <h2 className="projects-header">ls ./projects</h2>
            
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;
