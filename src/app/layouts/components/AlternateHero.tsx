import Image from 'next/image'
import React from 'react'
import imgSrc from "../../../../public/blob-scene-hero.svg"
import { RenderImage } from './Hero'
import vercel from "../../../../public/vercel.svg"
import "./styles.css"

export const AlternateHero = () => {
    return (
        <div 
            // className='hero relative w-4/5 h-96 mx-auto'
            className='hero h-[720px]'
            style={{
                // backgroundImage: `url("../../../../public/blob-scene-hero.svg")`,
                // backgroundImage: `${'url("../../../../public/blob-scene-hero.svg")'}`,
                // backgroundImage: url(imgSrc),
                // width: "100%",
                // height: "100%"
            }}
        >
            {/* <BackgroundImage /> */}
            <SectionContents />
        </div>
    )
}

const SectionContents = () => {
    const firstLine = (
        <div className='flex gap-x-2 text-6xl items-center'>
            <RenderImage imgSrc={vercel} />
            <p>Make Your Tasty </p>
        </div>
    )

    const secdImgs = [{ imgSrc: vercel }, { imgSrc: vercel }]
    const secondLine = (
        <div className='flex items-center gap-x-2 text-6xl'>
            <p>Meals</p>
            <div className='flex gap-2'>{secdImgs.map(item => <RenderImage imgSrc={item.imgSrc} key={item.imgSrc} />)}</div>
        </div>
    )

    const thrdImgs = [{ imgSrc: vercel }, { imgSrc: vercel }]
    const thirdLine = (
        <div className='flex items-center gap-x-2 text-6xl'>
            <div className='flex gap-2'>{thrdImgs.map(item => <RenderImage imgSrc={item.imgSrc} key={item.imgSrc} />)}</div>
            <p>Today!!</p>
        </div>
    )

    return (
        <section 
        // className='z-10 flex flex-col gap-y-4 place-items-center justify-center h-full'
        className='z-10 flex flex-col items-center justify-center gap-y-4 h-full'
        >
            {firstLine}
            {secondLine}
            {thirdLine}
        </section>
    )
}


// const BackgroundImage = () => {
//     return (
//         <Image
//             className='absolute -z-10 object-fill'
//             src={imgSrc}
//             alt='background image'
//             width={"900"}
//             height={"450"}
//         />
//     )
// }