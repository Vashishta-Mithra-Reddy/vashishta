"use client"
import Link from "next/link";
import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      "title": "Nidhi",
      "description": "Decentralized fundraising platform empowering student startups/organizations by providing transparent, smart contract-based funding. AI-powered project verification, and a token(NIDHI) reward system for investors",
      "technologies": ["Next.js", "Tailwind CSS", "Supabase", "Solidity", "Web3.js","Third Web"],
      "link": "https://project-nidhi.vercel.app",
      "logo": "/logos/nidhi.png" // Placeholder for logo path
    },
    {
      title: "Vikraya",
      description: "Blockchain-based crop auction system enabling farmers to sell their produce directly to consumers with full transparency and no scope for fraud. Built with Next.js, Tailwind CSS, Supabase, Web3.js, and Razorpay.",
      technologies: ["Next.js", "Tailwind CSS", "Supabase", "Web3.js", "Razorpay"],
      link: "https://vikraya.vercel.app",
      logo: "/logos/vikraya.png" // Placeholder for logo path
    },
    {
      title: "Doppleganger",
      description: "Real-time interest-based chat platform where users log in, enter their interests, and get matched with others having similar interests. Features include authentication, real-time database, and WebRTC-based video chat.",
      technologies: ["Next.js", "Supabase", "WebRTC", "Simple Peer", "Supabase Realtime"],
      link: "https://xdoppleganger.vercel.app",
      logo: "/logos/doppleganger.png"
    },
    {
      title: "Krushi",
      description: "IoT-based agricultural model for monitoring soil moisture and detecting animals. Utilized Arduino, Node MCU, IoT sensors, Thingspeak, and IFTTT for data handling and message alerts.",
      technologies: ["Arduino", "Node MCU", "IoT Sensors", "Thingspeak", "IFTTT"],
      link: "https://github.com/Vashishta-Mithra-Reddy/Agro_T",
      logo: "/logos/krushi.png" // Placeholder for logo path
    },
    {
      title: "Infernia (Dragon's Realm)",
      description: "Personal digital vault web app with components like Scroll of Memory (Diary), Quest Log (To-Do List), Dragon's Feast (Diet tracking using Nutritionix API), and Dragon's Archive (document storage). Built using Next.js, ShadCN, and Tailwind CSS.",
      technologies: ["Next.js", "ShadCN", "Tailwind CSS", "Nutritionix API"],
      link: "https://infernia.vercel.app",
      logo: "/logos/infernia.png" // Placeholder for logo path
    },
    {
      title: "Kaizen",
      description: "Android application leveraging mobile sensors to track physical activity. Features include personalized fitness goals, diet tracking, and gamified elements like challenges and user rankings. Built using Kotlin and Jetpack Compose.",
      technologies: ["Android Studio", "Kotlin", "Jetpack Compose", "Mobile Sensors"],
      link: "https://www.vashishtamithra.com/", // Replace with actual link if hosted
      logo: "/logos/kaizen.png" // Placeholder for logo path
    },
    {
      title: "The Baga Village",
      description: "Premium hotel collection website showcasing luxury accommodations in Goa. Features property listings, amenities, and booking information for multiple hotels including Baga Domingo, The Village Manali, and Baga Pescador.",
      technologies: ["Next.js", "Tailwind CSS", "Responsive Design", "Hotel Booking"],
      link: "https://bagavillage.vercel.app/",
      logo: "/logos/tbv.png" // Placeholder for logo path
    }
  ];

  const ongoingProjects = [
    {
      title: "White Waters",
      description: "SaaS platform enabling event planning with features to book banquet halls and personnel. Built with Next.js, Node.js, Tailwind CSS, Clerk, MongoDB, and Razorpay. Hosted on Vercel.",
      technologies: ["Next.js", "Supabase", "Tailwind CSS","ES Lint"],
      link: "https://whitewaters.vercel.app",
      logo: "/logos/white_waters_v5.png" // Placeholder for logo path
    },
    {
      title: "Kāryakramah",
      description: "SaaS platform enabling event planning with features to book banquet halls and personnel. Built with Next.js, Node.js, Tailwind CSS, Clerk, MongoDB, and Razorpay. Hosted on Vercel.",
      technologies: ["Next.js", "Node.js", "Tailwind CSS", "Clerk", "MongoDB", "Razorpay"],
      link: "https://karyakramah.vercel.app",
      logo: "/logos/karyakramah.png" // Placeholder for logo path
    },
    {
      title: "Kanri | Kāryakramah",
      description: "Venue management system that serves as the powerful backend for Kāryakramah. Features include venue management, automated availability checking, booking management, and role-based access with admin and owner permissions.",
      technologies: ["Next.js", "Tailwind CSS", "Role-based Authentication", "Dashboard", "Booking System"],
      link: "https://kanrixkaryakramah.vercel.app/",
      logo: "/logos/karyakramah.png" // Placeholder for logo path
    },
    {
      title: "Lost Escapes",
      description: "Boutique travel experience platform offering curated getaways in breathtaking locations. Features unique experiences, exclusive destinations, sustainable travel options, and top-rated stays with a focus on authentic local experiences.",
      technologies: ["Next.js", "Tailwind CSS", "Travel Booking", "Content Management", "Responsive Design"],
      link: "http://lostescapes.com/",
      logo: "/logos/lostescapes.jpg" // Placeholder for logo path
    }
  ];

  const [showPreview, setShowPreview] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("https://www.vashishtamithra.com/");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (url: string) => {
    if (url) {
      setPreviewUrl(url);
      setShowPreview(true);
    }
  };

  const handleMouseLeave = () => {
    setShowPreview(false);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-all duration-500 ease-in-out ${
          showPreview ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setShowPreview(false)}
      />
      <div
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[80vh] max-w-[1200px] z-[70] 
          transition-all duration-500 ease-in-out transform ${
          showPreview ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setShowPreview(false)}
          className={`absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg z-[80] hover:bg-gray-100 text-gray-500 
            transition-all duration-500 ease-in-out transform ${
            showPreview ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <iframe
          src={previewUrl}
          className={`w-full h-full rounded-lg border-2 border-gray-300 shadow-2xl bg-white 
            transition-all duration-500 ease-in-out transform ${
            showPreview ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
          title="Project Preview"
          allowFullScreen
        />
      </div>
      <div className="container mx-auto px-4 mt-5 max-w-6xl">
        {/* Ongoing Projects Section */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-center">Ongoing Projects</h2>
        <p className="text-gray-600 text-center mb-10">Current projects under active development</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {ongoingProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white px-12 py-10 rounded-lg border-gray-300 border-2 transition-all duration-300 transform hover:-translate-y-1 flex flex-col min-h-[400px] relative overflow-hidden"
            >
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  {project.logo && (
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      className="w-16 h-16 mr-4 object-contain"
                    />
                  )}
                  <h3 
                    className="text-xl font-semibold text-primary text-black hover:text-gray-600 transition-colors"
                  >
                    {project.title}
                  </h3>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-700 mb-2 text-justify">{project.description}</p>
                  <p className="text-sm text-gray-600 mb-4 pt-2">
                    <strong>Technologies:</strong> {project.technologies.join(", ")}
                  </p>
                </div>
                <div className="flex justify-between items-center gap-4 mt-auto pt-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="px-4 py-2 hover:bg-gray-100 rounded-lg text-sm text-gray-900 border-2 border-dashed hover:scale-105 transition-all border-gray-400/80 flex-1 text-center"
                  >
                    View Project
                  </Link>
                  {project.link && (
                    <button
                      onClick={() => handleMouseEnter(project.link)}
                      className="px-4 py-2 hover:bg-gray-100 rounded-lg text-sm text-gray-900/90 border-2 border-dashed hover:scale-105 transition-all border-gray-300 flex-1 text-center"
                    >
                      Preview Project
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Completed Projects Section */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-10 text-center">Completed Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white px-12 py-10 rounded-lg border-gray-300 border-2 transition-all duration-300 transform hover:-translate-y-1 flex flex-col min-h-[400px]"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  {project.logo && (
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      className="w-16 h-16 mr-4 object-contain"
                    />
                  )}
                  <h3 
                    className="text-xl font-semibold text-primary text-black hover:text-gray-600 transition-colors"
                  >
                    {project.title}
                  </h3>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-700 mb-2 text-justify">{project.description}</p>
                  <p className="text-sm text-gray-600 mb-4 pt-2">
                    <strong>Technologies:</strong> {project.technologies.join(", ")}
                  </p>
                </div>
                <div className="flex justify-between items-center gap-4 mt-auto pt-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="px-4 py-2 hover:bg-gray-100 rounded-lg text-sm text-gray-900 border-2 border-dashed hover:scale-105 transition-all duration-200 border-gray-400/80 flex-1 text-center"
                  >
                    View Project
                  </Link>
                  {project.link && (
                    <button
                      onClick={() => handleMouseEnter(project.link)}
                      className="px-4 py-2 hover:bg-gray-100 rounded-lg text-sm text-gray-900/90 border-2 border-dashed hover:scale-105 transition-all duration-200 border-gray-300 flex-1 text-center"
                    >
                      Preview Project
                    </button>
                  )}
                </div>
              </div>
              <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white">
                <iframe
                  src={project.link}
                  className="w-full h-full rounded-lg"
                  title={project.title}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Playground Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-center">Playground</h2>
          <div className="flex flex-col items-center">
            <h3 className="text-xl text-gray-700 mb-6 text-center">Project Moon - Playing around with Three.js</h3>
            <Link
              href="https://xmoonx.vercel.app"
              target="_blank"
              className="px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors text-sm text-gray-900 border-2 border-gray-300 flex-1 text-center mb-4"
            >
              View Project Moon
            </Link>
            <div className="w-full h-[550px] rounded-xl overflow-hidden border-2 border-gray-300 mb-4">
              <iframe 
                src="https://xmoonx.vercel.app" 
                className="w-full h-full"
                title="Project Moon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
