'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TerminalResume() {
  const [copied, setCopied] = useState(false);
  const command = 'npx vashishta';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto my-12 px-4">
      {/* <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Terminal Resume</h2>
      <p className="text-gray-600 text-center mb-8">Run this command in your terminal to view my resume</p> */}
      
      <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-xl border-2 border-gray-300">
        {/* Terminal Header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-gray-400 text-sm mx-auto">terminal</div>
        </div>
        
        {/* Terminal Content */}
        <div className="p-4 font-mono">
          <div className="flex items-start">
            <span className="text-green-400 mr-2">$</span>
            <span className="text-white">{command}</span>
            <div className="ml-2 flex-grow flex justify-end">
              <button 
                onClick={handleCopy}
                className="text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none"
                aria-label="Copy to clipboard"
              >
                {copied ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Terminal Output Animation */}
          {/* <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-gray-300 text-sm"
          >
            <p className="text-blue-400">Loading interactive resume...</p>
            <p className="text-green-400 mt-2">✓ Resume loaded successfully!</p>
            <p className="text-gray-400 mt-1">Type <span className="text-yellow-400">help</span> to see available commands</p>
          </motion.div> */}
        </div>
      </div>
      
      {/* Copy Notification */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: copied ? 1 : 0, y: copied ? 0 : 10 }}
        className="mt-4 text-center text-green-600 font-medium"
      >
        Command copied to clipboard!
      </motion.div>
    </div>
  );
}