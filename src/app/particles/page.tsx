import React from 'react'
import { UsingTsParticlesLib, UsingTsParticlesLibWithComponent } from './components/UsingTsParticlesLib'
import CrashCourseUsingParticles from './cc-yt'

const ParticlesAnimationPage = () => {
  return (
    <div className='h-40'>
        <h1>ParticlesAnimationPage</h1>
        {/* <UsingTsParticlesLib /> */}
        {/* <UsingTsParticlesLibWithComponent /> */}
        <CrashCourseUsingParticles />
    </div>
  )
}

export default ParticlesAnimationPage