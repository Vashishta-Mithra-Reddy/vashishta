export default function Skills() {
    const skills = [
      "Python", "Java", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Next.js", "Node.js",
      "MongoDB", "Thingspeak", "IFTTT", "Razorpay", "Clerk", "Arduino", "Node MCU", "IoT sensors",
      "SQL", "UI/UX Design"
    ]
  
    return (
      <section id="skills" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:bg-primary hover:text-white transform hover:-translate-y-1">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  