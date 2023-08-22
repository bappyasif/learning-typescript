"use client"

import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import "./styles.css"
import cat from "../../../public/cat.gif"
import Image from 'next/image'
import test from "../../../public/layered-waves.svg"
import moon from "../../../public/moon.png"

const ParallaxPage = () => {
    return (
        <div>
            <h1>ParallaxPage</h1>
            <Parallax pages={4}>

                <ParallaxLayer
                    // speed will make text in it moves at given rate, higher number means faster
                    speed={1}

                    // factor prop will decide how many pages this item will be on
                    factor={2}

                    style={{

                    }}
                >
                    <h2>Welcome Bees</h2>
                </ParallaxLayer>

                {/* offset will tell us on which page it will be, 1 means it will be at start of our second page */}
                <ParallaxLayer 
                    className='object-cover'
                    offset={1} 
                    speed={.5}
                    factor={4}
                    style={{
                        backgroundImage: `url()`
                    }}
                >
                    <h2>Parallax Fun</h2>
                </ParallaxLayer>

            </Parallax>
        </div>
    )
}

// const ParallaxPage = () => {
//     const ref = useRef()
//     return (
//         <div>
//             <Parallax pages={4}
//             // ref={ref}
//             >
//                 {/* <ParallaxLayer speed={1}>
//               <h2>Welcome to my website</h2>
//           </ParallaxLayer>
  
//           <ParallaxLayer offset={1} speed={0.5}>
//               <h2>Web development is fun!</h2>
//           </ParallaxLayer> */}

//                 <ParallaxLayer
//                     offset={0}
//                     speed={1}
//                     factor={2}
//                     style={{
//                           backgroundImage: `url(${moon})`,
//                         // backgroundImage: "url(https://unsplash.com/photos/wCujVcf0JDw)",
//                         backgroundSize: 'cover',
//                         width: "45%",
//                         height: "100%"
//             }}
//                 />

//                 <ParallaxLayer
//                     offset={2}
//                     speed={1}
//                     factor={4}
//                     style={{
//                         //   backgroundImage: `url(${land})`,
//                         backgroundSize: 'cover',
//                     }}
//                 ></ParallaxLayer>

//                 <ParallaxLayer
//                     sticky={{ start: 0.9, end: 2.5 }}
//                     style={{ textAlign: 'center' }}
//                 >
//                     {/* <img src={cat} /> */}
//                     <Image src={cat} alt='cat gif' />
//                 </ParallaxLayer>

//                 <ParallaxLayer
//                     offset={0.2}
//                     speed={0.05}
//                 // onClick={() => ref.current.scrollTo(3)}
//                 >
//                     <h2>Welcome to my website</h2>
//                 </ParallaxLayer>

//                 <ParallaxLayer
//                     offset={3}
//                     speed={2}
//                 // onClick={() => ref.current.scrollTo(0)}
//                 >
//                     <h2>And landed!</h2>
//                 </ParallaxLayer>
//             </Parallax>
//         </div>
//     )
// }

export default ParallaxPage