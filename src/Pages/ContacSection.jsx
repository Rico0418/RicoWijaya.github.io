import "./ContactSection.css";

const ContactSection = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="terminal-window">
                <div className="terminal-header">
                    <div className="terminal-dots">
                        <div className="terminal-dot close"></div>
                        <div className="terminal-dot minimize"></div>
                        <div className="terminal-dot maximize"></div>
                    </div>
                    <div className="terminal-title">contact.sh</div>
                </div>
                <div className="terminal-body">
                    <div className="contact-prompt">
                        $ <span className="contact-prompt-text">echo "Let's talk"</span>
                    </div>
                    
                    <div className="contact-content">
                        <p>
                            I'm open to backend roles, full-stack positions, <br />
                            and conversations about interesting problems.
                        </p>
                        
                        <div className="contact-links">
                            <div className="contact-label">Email</div>
                            <a href="mailto:ricowijaya001@gmail.com" className="contact-value">ricowijaya001@gmail.com</a>
                            
                            <div className="contact-label">GitHub</div>
                            <a href="https://github.com/Rico0418" target="_blank" rel="noopener noreferrer" className="contact-value">github.com/Rico0418</a>
                            
                            <div className="contact-label">LinkedIn</div>
                            <a href="https://linkedin.com/in/ricardo-eric/" target="_blank" rel="noopener noreferrer" className="contact-value">linkedin.com/in/ricardo-eric/</a>
                        </div>
                        
                        <div className="contact-footer">
                            Based in Jakarta, Indonesia.<br />
                            Open to remote and on-site opportunities.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
