import React from 'react'
import { Hero } from './components/Hero'
import { AlternateHero } from './components/AlternateHero'

const LayoutsPage = () => {
  return (
    <div className=''>
        <h1>LayoutsPage</h1>
        <AlternateHero />
        <Hero />
    </div>
  )
}

export default LayoutsPage