export default function Projects() {
    const projects = [
      {
        title: "Agro-T",
        description: "IoT-based agricultural model for monitoring soil moisture and detecting animals. Utilized Arduino, Node MCU, IoT sensors, Thingspeak, and IFTTT for data handling and message alerts."
      },
      {
        title: "Kāryakramah",
        description: "SaaS platform enabling event planning with features to book banquet halls and personnel. Leveraged Next.js, Node.js, Tailwind CSS, Clerk, MongoDB, and Razorpay. Hosted on Vercel."
      },
      {
        title: "The Food Junction",
        description: "Minimalist restaurant website using HTML, CSS, and JavaScript."
      }
    ]
  
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  