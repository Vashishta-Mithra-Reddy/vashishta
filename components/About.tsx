import FadeInWhenVisible from "./animations/FadeInWhenVisible";

export default function About() {
    return (
      <section id="about" className="py-20 bg-white">
        
        <div className="container mx-auto px-4 mt-5">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <FadeInWhenVisible>
          <p className="text-gray-600 max-w-3xl mx-auto text-center leading-relaxed italic text-normal md:text-lg font-semibold ">
            A human seeking fullfilment from the work he does.
          </p>
          </FadeInWhenVisible>
        </div>
      </section>
    )
  }
  
  