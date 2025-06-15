export default function More() {
    return (
      <section id="more" className="py-20 bg-white text-black">
        <div className="container mx-auto px-4 mt-5">
          {/* Navigation Section */}
          <div className="text-center mb-10">
            <h3 className="text-xl font-medium mb-4">More About Me?</h3>
            <div className="flex flex-wrap justify-center items-center gap-6 bg-white py-4 px-6 rounded-lg mx-auto border-2 border-dashed border-gray-300">
              <a
                href="/music"
                className="text-black hover:text-blue-600 transition-colors duration-300"
              >
                Music
              </a>
              <a
                href="/quotes"
                className="text-black hover:text-blue-600 transition-colors duration-300"
              >
                Quotes
              </a>
              <a
                href="/gallery"
                className="text-black hover:text-blue-600 transition-colors duration-300"
              >
                Gallery
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  