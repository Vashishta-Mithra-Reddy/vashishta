"use client";

export default function Skills() {
  const skills = [
    "Python", "Java", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Next.js", "Node.js",
    "MongoDB", "Thingspeak", "IFTTT", "Razorpay", "Clerk", "Arduino", "Node MCU", "IoT",
    "SQL", "UI/UX Design"
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 mt-5">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center items-center gap-4 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm border-2 border-gray-300 transition-all duration-300 hover:bg-primary hover:text-gray transform hover:-translate-y-1 cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
