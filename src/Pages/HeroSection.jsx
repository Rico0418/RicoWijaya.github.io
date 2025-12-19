import SplitText from "../components/SplitText";
import "./HeroSection.css";
const HeroSection = () => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (
        <section
            style={{
                minHeight: "60vh",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "3rem",
            }}>
            <div style={{ maxWidth: "800px", textAlign: "center" }}>
                <SplitText
                    text="Ricardo Eric Wijaya"
                    tag="h1"
                    className="hero-name"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
                <h3 className="hero-role">Software Engineer</h3>

                <p className="hero-description">
                    Hi, I’m a software engineer who enjoys turning ideas into scalable
                    projects. I’m constantly learning new technologies, exploring cloud
                    solutions, and improving my understanding of software architecture to
                    build efficient and well-structured systems.
                </p>
            </div>
        </section>
    )
}
export default HeroSection