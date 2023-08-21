import React from 'react'
import "./Shapes.module.css"
import styles from "./Shapes.module.css"
import { ImageClipping, ImageWithBackgroundClipping } from './components'

const ShapesPage = () => {
  return (
    <div>
        <h1>ShapesPage</h1>
        {/* <div className="one bg-amber-400 w-full h-96"></div>
        <div className="two bg-emerald-400 w-full h-96"></div> */}
        <div className={styles.one + " bg-amber-400 w-full h-96"}></div>
        {/* <div className={styles.two + " bg-emerald-400 w-full h-96"}></div> */}
        <ImageClipping />
        <ImageWithBackgroundClipping />
        <div className={styles.one + " bg-emerald-400 w-full h-96"}></div>
    </div>
  )
}

export default ShapesPage