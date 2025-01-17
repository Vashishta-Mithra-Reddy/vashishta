export default function Contact() {
  const Languages = ["English","Telugu","Hindi","Japanese(Basic)"]
  return (
    <section id="contact" className="py-20 bg-white text-black">
      <div className="container mx-auto px-4 mt-5">
        
        
        {/* Navigation Section */}
        <div className="text-center mb-10">
          <h3 className="text-xl font-medium mb-4">More About Me?</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 bg-white py-4 px-6 rounded-lg mx-auto max-w-3xl border-2 border-gray-300">
            <a
              href="/music"
              className="text-black hover:text-gray-300 transition-colors duration-300"
            >
              Music
            </a>
            <a
              href="/quotes"
              className="text-black hover:text-gray-300 transition-colors duration-300"
            >
              Quotes
            </a>
            <a
              href="/gallery"
              className="text-black hover:text-gray-300 transition-colors duration-300"
            >
              Gallery
            </a>
          </div>
        </div>
        
        {/* <div className="text-center mb-10">
          <h3 className="text-xl font-medium mb-4">Languages known</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 bg-white py-4 px-6 rounded-lg mx-auto max-w-3xl border-2 border-gray-300">
            {Languages.map((language, index)=>(
              <p key={index} className="text-black hover:text-gray-300 transition-colors duration-300">
              {language}
              </p> 
            ))}
            
          </div>
        </div> */}
        
        <h2 className="text-3xl font-semibold mb-8 text-center">Contact</h2>
        {/* Contact Info Section */}
        <div className="text-center space-y-6 max-w-3xl mx-auto bg-white p-8 rounded-lg border-2 border-gray-300">
          <p className="text-black font-bold">
            Email:{" "}
            <a
              href="mailto:me@vashishtamithra.com"
              className="text-black font-normal hover:text-gray-300 transition-colors duration-300 "
            >
              me@vashishtamithra.com
            </a>
          </p>
          <p className="text-black font-bold">
            Phone:{" "}
            <a
              href="tel:+919948680040"
              className="text-black hover:text-gray-300 transition-colors duration-300 font-normal"
            >
              +91 9948680040
            </a>
          </p>
          {/* <p className="text-black"><span className="font-bold">Languages: </span>Telugu, English, Hindi, Japanese</p> */}
        </div>
      </div>
    </section>
  );
}
