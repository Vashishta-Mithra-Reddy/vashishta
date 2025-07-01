"use client";

import { useState } from 'react';
import Link from "next/link";
import FadeInWhenVisible from './animations/FadeInWhenVisible';

export default function Experience() {
  const experiences = [
    {
      title: "Co-founder, Soulmegle",
      company: "Persist Ventures",
      period: "Mar 2025 – May 2025",
      website: "https://soulmegle.com",
      description: [
        "Built and launched the MVP for Soulmegle, a video chatting platform that matches users based on shared interests and behavior analysis.",
        "Integrated AI-powered features using OpenAI APIs (Vision, Text, Embeddings, Moderation) for intelligent matchmaking and content safety.",
        "Implemented the backend with Express.js, and frontend with React.js, using MongoDB and Mongo Vector DB for user data and similarity search.",
        "Incorporated AssemblyAI for real-time speech processing and analysis.",
        "Handled SEO and marketing, improving visibility and user acquisition during the early launch phase."
      ],
      technologies: ["React.js", "Express.js", "MongoDB", "OpenAI API", "AssemblyAI", "Mongo Vector DB"],
      logo: "/logos/soulmegle.png"
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
    <section id="experience" className="py-20 bg-white" onMouseMove={handleMouseMove}>
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
          title="Experience Preview"
          allowFullScreen
        />
      </div>
      
      <div className="container mx-auto px-4 mt-5">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Experience</h2>
        <p className="text-gray-600 text-center mb-10">Where I Worked & What I have Done</p>
        <FadeInWhenVisible>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-lg border border-gray-300 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div className="flex items-center">
                  <div>
                    <h3 
                      className="text-xl font-bold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors"
                    >
                      {exp.title}
                    </h3>
                    <p className="text-gray-700">{exp.company} | {exp.period}</p>
                  </div>
                </div>
                
              </div>
              
              <div className="mt-4">
                <ul className="space-y-2 text-gray-700">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2 text-xl">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* <div className="flex justify-between items-center gap-4 mt-6 pt-4  border-gray-200">
                <Link
                  href={exp.website}
                  target="_blank"
                  className="px-4 py-2 hover:bg-gray-100 rounded-lg text-sm text-gray-900 border-2 border-dashed hover:scale-105 transition-all border-gray-400/80 flex-1 text-center"
                >
                  View Project
                </Link>
                <button
                  onClick={() => handleMouseEnter(exp.website)}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 rounded-lg text-sm text-gray-900/90 flex-1 border-2 border-dashed hover:scale-105 transition-all border-gray-300 text-center hover:bg-gray-100"
                >
                  Preview Project
                </button>
              </div> */}
            </div>
          ))}
        </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}