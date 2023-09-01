"use client"

import React from 'react'
import { BasicUses } from './components/BasicUses'
import { IntermediateUses } from './components/IntermediateUses'
import { ModifiedIntermediate } from './components/ModifiedIntermediate'
import { ModifiedInternediateV2 } from './components/ModifiedInternediateV2'
import { ModifiedInternediateV3 } from './components/ModifiedIntermediateV3'
import { AdvancedUses } from './components/AdvancedUses'
import { AdvancedUsesV2 } from './components/AdvancedUsesV2'
import { AdvancedUsesV3 } from './components/AdvancedUsesV3'

const CrashCourseUsingParticles = () => {
  return (
    <div>
        <h2>CrashCourseUsingCanvas</h2>
        <AdvancedUsesV3 />
        {/* <AdvancedUsesV2 /> */}
        {/* <AdvancedUses /> */}
        {/* <ModifiedInternediateV3 /> */}
        {/* <ModifiedInternediateV2 /> */}
        {/* <ModifiedIntermediate /> */}
        {/* <IntermediateUses /> */}
        <BasicUses />
    </div>
  )
}

export default CrashCourseUsingParticles