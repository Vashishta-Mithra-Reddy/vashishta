export default function Achievements() {
    const achievements = [
      "1st place in an IoT hackathon for developing an agricultural management kit.",
      "1st place in an Android development hackathon for building an attendance management app (ATDX).",
      "Contributed to Swecha Voice, a voice-enabled interaction system in Telugu.",
      "Active participant in university clubs: IoT Club, MALAI (Machine Learning), GCS (Safety Club)."
    ]
  
    return (
      <section id="achievements" className="py-20 bg-white">
        <div className="container mx-auto px-4 mt-5">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Achievements</h2>
          <ul className="space-y-4 max-w-3xl mx-auto cursor-pointer">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start bg-white p-4 rounded-lg border-2 border-gray-300 transition-all duration-300">
                <span className="text-primary mr-2 text-xl">•</span>
                <span className="text-gray-700">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
  
  