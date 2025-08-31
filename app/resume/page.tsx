"use client";
import dynamic from 'next/dynamic';

const PdfViewer = dynamic(() => import('@/components/PDFViewer'), {
  ssr: false, 
});

export default function Home() {
  const pdfFileUrl = '/resume.pdf';

  return (
    <main className="min-h-screen">
      <PdfViewer pdfUrl={pdfFileUrl} />
    </main>
  );
}