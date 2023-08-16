import Navbar from '@/components/Navbar';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-slate-900 text-slate-400`}>
      <body className={inter.className + " relative"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
