import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
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
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down">
          Vundyala Vashishta Mithra Reddy
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 animate-fade-in-up">
          Computer Science Student & Full-Stack Developer
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in">
          <a href="#contact" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1">
            Contact Me
          </a>
          <a href="#projects" className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1">
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}

