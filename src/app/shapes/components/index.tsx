import Image from 'next/image'
import React from 'react'
import imgSrc from "../../../../public/next.svg"
import "./styles.css"

export const ImageClipping = () => {
  return (
    <div className='w-full h-96 bg-slate-400 grid place-items-center'>
      <Image
        className='image_clip'
        src={imgSrc}
        alt=''
        width={600}
        height={600}
      />

      <Image
        className='image_clip_2'
        src={imgSrc}
        alt=''
        width={600}
        height={600}
      />
    </div>
  )
}

export const ImageWithBackgroundClipping = () => {
  return (
    <div className='w-full h-[470px] bg-slate-400 grid place-items-center background_clipping'>
      <Image
        className='image_clip_2'
        src={imgSrc}
        alt=''
        width={600}
        height={600}
      />
    </div>
  )
}