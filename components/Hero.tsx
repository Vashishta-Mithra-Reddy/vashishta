import Image from 'next/image'
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
        <p className="text-2xl md:text-3xl text-gray-500 animate-fade-in-up">
         I am
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-aileron animate-fade-in-up text-black">
          Vundyala Vashishta Mithra Reddy
        </h1>
        <p className="text-2xl md:text-3xl text-gray-500 animate-fade-in-up">
          Web Developer & Freelancer
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in">
          <a href="#contact" className="bg-primary text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:ring-offset-2 hover:ring-4 ring-gray-200 active:scale-90">
            Contact Me
          </a>
          <Link href="#projects" className="bg-white text-gray-900 border-2 border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:ring-4 ring-offset-2 ring-gray-200 hover:border-double hover:bg-gray-50 hover:border-transparent active:scale-90">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

