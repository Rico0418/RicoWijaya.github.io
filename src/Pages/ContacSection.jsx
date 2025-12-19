import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact">
      <h2 className="contact-title">Contact</h2>

      <div className="contact-list">
        <a href="tel:+6281" className="contact-item">
          <FaPhoneAlt />
          <span>+62 812-1353-3728</span>
        </a>

        <a
          href="mailto:ricowijaya001@gmail.com"
          className="contact-item"
        >
          <FaEnvelope />
          <span>ricowijaya001@gmail.com</span>
        </a>

        <a
          href="https://github.com/Rico0418"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <FaGithub />
          <span>https://github.com/Rico0418</span>
        </a>

        <a
          href="https://www.linkedin.com/in/ricardo-eric"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <FaLinkedin />
          <span>https://www.linkedin.com/in/ricardo-eric</span>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
