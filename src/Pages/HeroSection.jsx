import "./HeroSection.css";

const HeroSection = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <div className="hero-prompt">
                    $ <span className="hero-prompt-text">whoami</span>
                </div>
                
                <h1 className="hero-name">Ricardo Eric Wijaya</h1>
                <div className="hero-tagline">
                    Backend Engineer · Jakarta, Indonesia<span className="cursor"></span>
                </div>

                <p className="hero-description">
                    I work on the stuff users don't see — APIs, services,
                    databases, and the glue holding everything together.
                </p>
                
                <div className="hero-status">
                    Currently open to new opportunities.
                </div>

                <div className="hero-actions">
                    <a href="#projects" className="btn">[View Projects]</a>
                    <a href="#contact" className="btn">[Contact Me]</a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;