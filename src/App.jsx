import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import BioSection from './sections/BioSection'
import ProjectSection from './sections/ProjectSection'
import ArticleSection from './sections/BlogSection'
import ContactSection from './sections/ContactSection'
import FooterSection from './sections/FooterSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-full w-full">
      <Navbar id='home'/>
      <HeroSection />
      <BioSection id='biography'/>
      <ProjectSection id='projects'/>
      <ArticleSection id='blog'/>
      <ContactSection id='contact'/>
      <FooterSection />
    </div>
  )
}

export default App