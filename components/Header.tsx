'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact']
  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact']
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    // <header className={`fixed w-full top-0 z-50 transition-all duration-300 px-1 md:px-6 ${isScrolled ? 'bg-white border-b-2 border-gray-300' : 'bg-transparent'} `}>
    <header className={`sticky w-full top-0 z-50 transition-all duration-300 px-1 md:px-6 bg-gray-50/50 border-b-2 border-dashed backdrop-blur-3xl border-gray-300`}>
      <nav className="container mx-auto px-8 md:px-20 py-4">
        <div className="flex justify-between items-center">
        <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          style={{ objectFit: "cover" }}
          priority
          width={70}
          height={35}
          className='animate-pulse'
        />
        </Link>
          {/* <div className="hidden md:flex space-x-16">
            {navItems.map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className={`nav-link relative group text-lg font-semibold tracking-wide text-black`}
              >
                {item}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </Link>
            ))}
          </div> */}
          <div className='flex gap-2'>
          <Link href="#contact" className='px-5 py-2 bg-black rounded-xl hidden md:block active:scale-95 transition-all duration-500 font-semibold'>
            Contact Me
          </Link>
          <Link href="/resume" className='px-5 py-2 bg-black rounded-xl hidden md:block active:scale-95 transition-all duration-500 font-semibold'>
            Resume
          </Link>
          </div>
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white bg-opacity-95 absolute top-full left-0 right-0 transition-all duration-300 ease-in-out`}>
        <nav className="container mx-auto px-5 py-4">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item}>
                <Link 
                  href={`#${item.toLowerCase()}`} 
                  className="block text-black text-lg font-semibold tracking-wide hover:text-primary transition-colors duration-300 text-end"
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
                <Link 
                  href={"/resume"} 
                  className="block text-black text-lg font-semibold tracking-wide hover:text-primary transition-colors duration-300 text-end"
                  onClick={closeMenu}
                >
                  Resume
                </Link>
              </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

