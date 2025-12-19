import "./ExperienceSection.css";

const ExperienceSection = () => {
  return (
    <section className="experience">
      <h2 className="experience-title">Experience</h2>

      <div className="experience-list">
        <article className="experience-card">
          <div className="experience-header">
            <h3>Polytron</h3>
            <span className="experience-date">
              February 2025 – January 2026
            </span>
          </div>

          <p className="experience-role">Backend Developer Intern</p>

          <ul>
            <li>
              Improved B2B dashboard performance by 30% by designing and
              optimizing system architecture and database for scalable data
              flow.
            </li>
            <li>
              Developed and containerized APIs (CRUD, file upload, vehicle
              tracking, webhook) with Docker, increasing efficiency and
              reliability by 40%.
            </li>
            <li>
              Integrated multi-source APIs and a Nextcloud Bridge, automating
              90% of document synchronization and reducing manual reconciliation
              time by 40%.
            </li>
            <li>
              Rebuilt and enhanced Teedy’s frontend with modern UI, custom
              logging, versioning, and watermarking, improving security and
              reducing file management errors by 25%.
            </li>
          </ul>
        </article>

        <article className="experience-card">
          <div className="experience-header">
            <h3>Binus IT Division</h3>
            <span className="experience-date">
              March 2024 – January 2025
            </span>
          </div>

          <p className="experience-role">
            Associate Member, Programmer
          </p>

          <ul>
            <li>
              Fixed critical bugs and resolved issues, improving application
              reliability and increasing user satisfaction by 30%.
            </li>
            <li>
              Implemented new features and enhanced existing ones, resulting in
              a 25% increase in active user engagement.
            </li>
            <li>
              Developed a data backup mechanism to safeguard user information
              and prevent data loss.
            </li>
            <li>
              Updated and standardized project documentation, improving team
              collaboration and maintainability.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default ExperienceSection;
