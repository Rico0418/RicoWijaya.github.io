import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './Pages/HeroSection'
import Aurora from './components/Aurora'
import ExperienceSection from './Pages/ExperienceSection'
import ContactSection from './Pages/ContacSection'
import ProjectSection from './Pages/ProjectSection'

function App() {

  return (
     <div className="app-root">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      <main className="app-content">
        <HeroSection />
        <ProjectSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
