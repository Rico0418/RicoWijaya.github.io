import "./AboutSection.css";

const AboutSection = () => {
    return (
        <section id="about" className="about-section">
            <div className="terminal-window">
                <div className="terminal-header">
                    <div className="terminal-dots">
                        <div className="terminal-dot close"></div>
                        <div className="terminal-dot minimize"></div>
                        <div className="terminal-dot maximize"></div>
                    </div>
                    <div className="terminal-title">about.txt</div>
                </div>
                <div className="terminal-body">
                    <div className="about-prompt">cat about.txt</div>
                    <div className="about-content">
                        <p>
                            I'm a backend-focused software engineer based in Jakarta.
                            I care about clean APIs, pragmatic architecture, and writing
                            code that other engineers can actually read.
                        </p>
                        <p>
                            My stack centers around Golang and Node.js for backend work,
                            PostgreSQL for data, and Docker for keeping environments sane.
                            On the frontend I've worked with React when needed — I'm not
                            afraid of it, I just know where I'm most useful.
                        </p>
                        <p>
                            Before graduating, I spent time in corporate environments doing
                            real production work: REST APIs in Go with Gin, B2B dashboard
                            reporting, Docker containerization.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
