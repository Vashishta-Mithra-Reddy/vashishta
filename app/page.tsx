'use client'

import { useEffect, useState } from 'react'
import Dock from '../components/Dock'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Achievements from '../components/Achievements'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Marquee from '@/components/Marquee'
import Loading from './loading'
import More from '@/components/More'

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1500); 
    
  //   return () => clearTimeout(timer); // Cleanup the timer
  // }, []);

  return (
    <>
      {/* {isLoading && <Loading />} */}
      {/* <div className={`min-h-screen bg-white flex items-center flex-col ${isLoading ? 'hidden' : ''}`}> */}
      <div className={`min-h-screen bg-white flex items-center flex-col`}>

        <Header />
        <Hero />
        <Marquee />
        <main className="animate-fade-in">
          <About />
          <Skills />
          <Experience />
          <Projects />
          {/* <Education /> */}
          {/* <Achievements /> */}
          <More/>
        </main>
        <Contact />
        <Dock />
      </div>
    </>
  )
}

