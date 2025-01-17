export default function Education() {
    const education = [
      {
        institution: "Anurag University",
        degree: "Bachelor of Technology in Computer Science and Engineering",
        period: "Sep 2021 – Present",
        grade: "CGPA: 8.65"
      },
      {
        institution: "Gyanavapi Junior College",
        degree: "Telangana Board of Intermediate Education",
        period: "Jun 2019 – Mar 2021",
        grade: "CGPA: 9.16"
      },
      {
        institution: "Velocity High School",
        degree: "Telangana Board of Secondary Education",
        period: "Jun 2018 – Mar 2019",
        grade: "CGPA: 9.2"
      }
    ]
  
    return (
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-4 mt-5">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Education</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <h3 className="text-black text-xl font-semibold text-primary mb-2">{edu.institution}</h3>
                <p className="text-gray-700 font-medium">{edu.degree}</p>
                <p className="text-gray-600">{edu.period}</p>
                <p className="text-gray-600">{edu.grade}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  