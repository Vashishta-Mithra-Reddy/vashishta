'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

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

  const navItems = ['About', 'Skills', 'Projects', 'Education', 'Achievements', 'Contact']

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 px-1 sm:px-6 ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-5 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">VVM</Link>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="nav-link relative group text-lg font-semibold tracking-wide text-white"
              >
                {item}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </Link>
            ))}
          </div>
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black bg-opacity-95 absolute top-full left-0 right-0 transition-all duration-300 ease-in-out`}>
        <nav className="container mx-auto px-5 py-4">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item}>
                <Link 
                  href={`#${item.toLowerCase()}`} 
                  className="block text-white text-lg font-semibold tracking-wide hover:text-primary transition-colors duration-300"
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

