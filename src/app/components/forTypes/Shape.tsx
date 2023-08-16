import React from 'react'

type  ShapeType = "Cube" | "Square" | "Rectangle" | "Triangle"

type TwoDShape = Exclude<ShapeType, "Cube">

type ThemeType = "dark" | "light"

type ColorType = "red" | "blue" | "green"

type Props = {
    color: `${ThemeType} - ${ColorType}`
    exColor: Exclude<`${ThemeType} - ${ColorType}`, "dark - red">
}

export default function Shape(props: Props) {
    const regShape: ShapeType = "Cube"
    const twoDShape: TwoDShape = "Triangle"

  return (
    <div>Shape</div>
  )
}