import type { Metadata } from "next";

import './globals.css'
import { Poppins } from 'next/font/google' 
import localfont from "next/font/local";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"

// import Dock from "@/components/Dock";

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] }) 

const aileron = localfont({
  src: "./fonts/Aileron-Black.otf",
  variable: "--font-aileron",
  display: "swap",
  weight: "900"
})

export const metadata: Metadata = {
  title: 'Vundyala Vashishta Mithra Reddy',
  description: 'Computer Science Student & Full-Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {
            `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N5P2W2XP');`
          }
        </Script>
      </head>
      <body className={`${poppins.className} ${aileron.variable}`}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N5P2W2XP"
          height="0"
          width="0"
          style={{display:"none", visibility:"hidden"}}
          ></iframe>
        </noscript>
        {children}
        <Analytics/>
      </body>
    </html>
  )
}
