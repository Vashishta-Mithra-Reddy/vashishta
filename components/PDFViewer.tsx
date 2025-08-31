// components/PdfViewer.tsx

'use client';

import { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Link from 'next/link';
import Image from 'next/image';

// PDF.js Worker Configuration
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


// Main Component
interface PdfViewerProps {
  pdfUrl: string;
}

export default function PdfViewer({ pdfUrl }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  
  // 1. Add a ref and a state for the width
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  // 2. Measure the container's width
  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      // We only have one entry, so we can access it directly
      if (entries[0]) {
        // Set the width, subtracting some padding
        setContainerWidth(entries[0].contentRect.width);
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className="min-h-screen w-full overflow-hidden bg-white">
      {/* --- Sticky Header (No changes here) --- */}
      <header className='sticky w-full top-0 z-50 transition-all duration-300 px-1 md:px-6 bg-gray-50/50 border-b-2 border-dashed backdrop-blur-3xl border-gray-300'>
        <nav className="container mx-auto px-8 md:px-20 py-4">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                style={{ objectFit: "cover" }}
                priority
                width={70}
                height={35}
                className='animate-pulse'
              />
            </Link>
            <Link
              href={pdfUrl}
              download="resume_vashishta_mithra_reddy.pdf"
              className="px-5 py-2 bg-black text-white rounded-xl active:scale-95 transition-all duration-500 font-semibold"
            >
              Download PDF
            </Link>
          </div>
        </nav>
      </header>

      {/* --- PDF Display --- */}
      {/* 3. Attach the ref to the container */}
      <div ref={containerRef} className="p-4 overflow-y-auto max-w-5xl mx-auto">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => console.error('Error loading PDF:', error)}
          loading={
            <div className="text-center text-gray-800 font-semibold p-8">
              Loading PDF...
            </div>
          }
        >
          <div className="flex flex-col items-center gap-y-4">
            {Array.from(new Array(numPages || 0), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={containerWidth}
              />
            ))}
          </div>
        </Document>
      </div>
    </div>
  );
}