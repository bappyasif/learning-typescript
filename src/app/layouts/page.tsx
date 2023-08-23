import React from 'react'
import { Hero } from './components/Hero'
import { AlternateHero } from './components/AlternateHero'
import { ScrollView } from './components/ScrollView'

const LayoutsPage = () => {
  return (
    <div className=''>
        <h1>LayoutsPage</h1>
        <ScrollView />
        <AlternateHero />
        <Hero />
    </div>
  )
}

export default LayoutsPage