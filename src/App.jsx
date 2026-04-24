import './App.css'
import Navbar from './Pages/Navbar'
import HeroSection from './Pages/HeroSection'
import AboutSection from './Pages/AboutSection'
import SkillsSection from './Pages/SkillsSection'
import ProjectSection from './Pages/ProjectSection'
import ExperienceSection from './Pages/ExperienceSection'
import ContactSection from './Pages/ContacSection'

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="app-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
