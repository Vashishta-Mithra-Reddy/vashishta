import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Achievements from '../components/Achievements'
import Contact from '../components/Contact'
import Marquee from '@/components/Marquee'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Marquee />
      <main className="animate-fade-in">
        <About />
        <Skills />
        <Projects />
        {/* <Education /> */}
        <Achievements />
        <Contact />
      </main>
    </div>
  )
}

