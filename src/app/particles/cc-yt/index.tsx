"use client"

import React from 'react'
import { BasicUses } from './components/BasicUses'
import { IntermediateUses } from './components/IntermediateUses'
import { ModifiedIntermediate } from './components/ModifiedIntermediate'
import { ModifiedInternediateV2 } from './components/ModifiedInternediateV2'

const CrashCourseUsingParticles = () => {
  return (
    <div>
        <h2>CrashCourseUsingCanvas</h2>
        <ModifiedInternediateV2 />
        <ModifiedIntermediate />
        <IntermediateUses />
        <BasicUses />
    </div>
  )
}

export default CrashCourseUsingParticles