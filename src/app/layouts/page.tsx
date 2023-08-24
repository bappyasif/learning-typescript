import React from 'react'
import { Hero } from './components/Hero'
import { AlternateHero } from './components/AlternateHero'
import { ScrollView } from './components/ScrollView'
import { SpannedScrolling } from './components/SpannedScrolling'
import { OnScrollCoolEffects } from './components/OnScrollCoolEffects'

const LayoutsPage = () => {
  return (
    <div className=''>
        <h1>LayoutsPage</h1>
        <OnScrollCoolEffects />
        <SpannedScrolling />
        <ScrollView />
        <AlternateHero />
        <Hero />
    </div>
  )
}

export default LayoutsPage