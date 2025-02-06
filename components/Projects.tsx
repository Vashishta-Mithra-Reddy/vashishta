import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Vikraya",
      description: "Blockchain-based crop auction system enabling farmers to sell their produce directly to consumers with full transparency and no scope for fraud. Built with Next.js, Tailwind CSS, Supabase, Web3.js, and Razorpay.",
      technologies: ["Next.js", "Tailwind CSS", "Supabase", "Web3.js", "Razorpay"],
      link: "https://vikraya.vercel.app",
      logo: "/logos/vikraya.png" // Placeholder for logo path
    },
    {
      title: "Kāryakramah",
      description: "SaaS platform enabling event planning with features to book banquet halls and personnel. Built with Next.js, Node.js, Tailwind CSS, Clerk, MongoDB, and Razorpay. Hosted on Vercel.",
      technologies: ["Next.js", "Node.js", "Tailwind CSS", "Clerk", "MongoDB", "Razorpay"],
      link: "https://karyakramah.vercel.app",
      logo: "/logos/karyakramah.png" // Placeholder for logo path
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
      link: "https://kaizen.vercel.app", // Replace with actual link if hosted
      logo: "/logos/kaizen.png" // Placeholder for logo path
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 mt-5 max-w-6xl ">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 cursor-pointer">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white px-12 py-10 rounded-lg border-gray-300 border-2 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                {project.logo && (
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="w-16 h-16 mr-4 object-contain"
                  />
                )}
                <h3 className="text-xl font-semibold text-primary text-black">{project.title}</h3>
              </div>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <Link
                href={project.link}
                target="_blank"
                className="text-black underline"
              >
                View Project
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
