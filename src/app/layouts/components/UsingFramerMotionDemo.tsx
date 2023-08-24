"use client"

import React, { useState } from 'react'
import { motion, useAnimationControls } from "framer-motion"

export const UsingFramerMotionDemo = () => {
    return (
        <div>
            <h2>UsingFramerMotionDemo</h2>
            <TextHover />
        </div>
    )
}

const TextHover = () => {
    const textTokens = "Hallo Wereld".split("")

    // const framerBits = (
    //     textTokens.map((ch, idx) => <motion.span key={ch + idx} whileHover={"scale": 2}>{ch}</motion.span>)
    // )

    const framerBits = (
        textTokens.map((ch, idx) => <TextSpan key={ch + idx}>{ch !== " " ? ch : "\u00A0"}</TextSpan>)
    )

    return (
        <div className='text-white text-4xl'>
            {framerBits}
            {
                textTokens.map((ch, idx) => <RubberSpring key={ch + idx}>{ch !== " " ? ch : "\u00A0"}</RubberSpring>)
            }
        </div>
    )
}

const RubberSpring = ({ children }: { children: React.ReactNode }) => {
    const [isPlaying, setIsPlaying] = useState(false)

    const controls = useAnimationControls();

    const rubberBand = () => {
        controls.start({
            transform: [
                "scale3d(1, 1, 1)",
                "scale3d(1.5, .55, 1)",
                "scale3d(.75, 1.25, 1)",
                "scale3d(1.25, .85, 1)",
                "scale3d(.9, 1.05, 1)",
                "scale3d(1, 1, 1)",
            ],
            transition: [0, .4, .6, .7, .8, .9]
        })

        setIsPlaying(true)
    }

    return (
        <motion.span
            animate={controls}
            onMouseOver={() => {
                if(!isPlaying)
                    rubberBand()
            }}
            onAnimationComplete={() => setIsPlaying(false)}
        >
            {children}
        </motion.span>
    )
}

// const RubberSpring = ({ children }: { children: React.ReactNode }) => {
//     const rubberBand = () => {
//         return {
//             transform: [
//                 "scale3d(1, 1, 1)",
//                 "scale3d(1.5, .55, 1)",
//                 "scale3d(.75, 1.25, 1)",
//                 "scale3d(1.25, .85, 1)",
//                 "scale3d(.9, 1.05, 1)",
//                 "scale3d(1, 1, 1)",
//             ]
//         }
//     }

//     return (
//         <motion.span 
//             // whileHover={() => rubberBand()}
//             // whileHover={() => rubberBand}
//             whileHover={{
//                 transform: [
//                     "scale3d(1, 1, 1)",
//                     "scale3d(1.5, .55, 1)",
//                     "scale3d(.75, 1.25, 1)",
//                     "scale3d(1.25, .85, 1)",
//                     "scale3d(.9, 1.05, 1)",
//                     "scale3d(1, 1, 1)",
//                 ]
//             }}
//         >
//             {children}
//         </motion.span>
//     )
// }

const TextSpan = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.span className='inline-block' whileHover={{ scale: 1.5 }}>{children}</motion.span>
    )
}