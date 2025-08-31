"use client";

import {motion} from "framer-motion"; 
// import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-start pt-52 md:pt-40 justify-start text-white overflow-hidden">
      {/* <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background pattern"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        />
      </div> */}
      <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
        {/* <p className="text-2xl md:text-3xl text-gray-500 animate-fade-in-up">
         I am
        </p> */}
        <motion.h1 initial={{opacity:0,y:50,filter:"blur(5px)"}} whileInView={{opacity:1,y:0,filter:"blur(0px)"}} transition={{ease:"easeIn",duration:0.4}} viewport={{once:true,amount:0.5}} className="text-5xl md:text-7xl font-bold mt-8 mb-4 font-aileron text-black">
          Vundyala Vashishta Mithra Reddy
        </motion.h1>
        <motion.p initial={{opacity:0,y:50,filter:"blur(5px)"}} whileInView={{opacity:1,y:0,filter:"blur(0px)"}} transition={{ease:"easeIn",duration:0.4, delay:0.2}} viewport={{once:true,amount:0.5}} className="text-2xl md:text-3xl text-gray-500 ">
          Web Developer & Freelancer
        </motion.p>
        <motion.div initial={{opacity:0,y:50,filter:"blur(5px)"}} whileInView={{opacity:1,y:0,filter:"blur(0px)"}} transition={{ease:"easeIn",duration:0.4, delay:0.4}} viewport={{once:true,amount:0.5}} className="flex justify-center space-x-4">
          <Link href="#contact" className="bg-primary text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 hover:ring-offset-2 hover:ring-4 ring-gray-200 active:scale-90">
            Contact Me
          </Link>
          <Link href="#projects" className="bg-white text-gray-900 border-2 border-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 hover:ring-4 ring-offset-2 ring-gray-200 hover:border-double hover:bg-gray-50 hover:border-transparent active:scale-90">
            View Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

