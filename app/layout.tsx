import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "AB's Blog",
  description: 'Created by A B',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"bg-slate-900 text-slate-400 " + inter.className}>
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
