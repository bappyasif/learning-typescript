import Image from 'next/image'
import React from 'react'
import imgSrc from "../../../../public/stacked-waves-hero.svg"
import vercel from "../../../../public/vercel.svg"

export const Hero = () => {
  return (
    <div className='relative w-full'>
      <BackgroundImage />
      <SectionContents />
    </div>
  )
}

const SectionContents = () => {
  const firstLine = (
    <div className='flex gap-x-2 text-6xl'>
      {/* <Image src={vercel} alt='image meal' width={200} height={90} /> */}
      <RenderImage imgSrc={vercel} />
      {/* <p>Make Your</p> */}
      <p>Make Your Tasty </p>
    </div>
  )

  // const secdImgs = [{imgSrc: imgSrc}, {imgSrc: imgSrc}]
  const secdImgs = [{ imgSrc: vercel }, { imgSrc: vercel }]
  const secondLine = (
    <div className='flex gap-x-2 text-6xl'>
      {/* <p>Tasty Meals</p> */}
      <p>Meals</p>
      <div className='flex gap-2'>{secdImgs.map(item => <RenderImage imgSrc={item.imgSrc} key={item.imgSrc} />)}</div>
      {/* <p>Tasty Meals</p> */}
    </div>
  )

  const thrdImgs = [{ imgSrc: vercel }, { imgSrc: vercel }]
  const thirdLine = (
    <div className='flex gap-x-2 text-6xl'>
      <div className='flex gap-2'>{secdImgs.map(item => <RenderImage imgSrc={item.imgSrc} key={item.imgSrc} />)}</div>
      <p>Today!!</p>
    </div>
  )

  return (
    <section className='z-10 flex flex-col gap-y-4 place-items-center justify-center h-[400px]'>
      {/* <h1 className='text-6xl'>Make Your Tasty Meals Now</h1> */}
      {/* <h1 className='text-6xl'>Make Your Tasty Meals Today</h1> */}
      {firstLine}
      {secondLine}
      {thirdLine}
    </section>
  )
}

export const RenderImage = ({ imgSrc }: { imgSrc: string }) => {
  return <Image className='w-96 h-20 rounded outline outline-1 outline-red-900' src={imgSrc} alt='image meal' width={200} height={90} />
}

const BackgroundImage = () => {
  return (
    <Image
      className='absolute -z-10 w-full'
      src={imgSrc}
      alt='background image'
      // width={"1920"}
      // height={"960"}
      width={"900"}
      height={"900"}
    // objectFit='fill'
    />
  )
}