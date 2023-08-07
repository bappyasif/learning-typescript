import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

const About = () => {
    // throwing error on purpose to see error boundary in action
    // throw new Error("Not today!!")
  return (
    <>
    <Link href={"/"}>Home Page</Link>
    <h1>about page</h1>
    </>
  )
}

// recommended way of including static metadat into page component
export const metadata: Metadata = {
    description: "About Page Descriptioin here",
    title: "New About Page"
}

export default About