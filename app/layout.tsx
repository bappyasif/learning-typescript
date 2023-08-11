import './globals.css'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'

export const metadata = {
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
      <body className="bg-slate-800 text-slate-400">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
