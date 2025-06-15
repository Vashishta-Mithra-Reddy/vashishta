import type { Metadata } from "next";

import './globals.css'
import { Poppins } from 'next/font/google' 
import Dock from "@/components/Dock";

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] }) 

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
      <body className={poppins.className}>
        {children}
        <Dock/>
      </body>
    </html>
  )
}
