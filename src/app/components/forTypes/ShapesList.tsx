import React from 'react'
import Shape from './Shape'

type Props = {}

export default function ShapesList({}: Props) {
  return (
    <div>
        <h2>ShapesList</h2>
        <Shape color='dark - blue' exColor='light - red' />
    </div>
  )
}