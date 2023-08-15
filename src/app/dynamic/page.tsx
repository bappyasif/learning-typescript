import getBase64 from '@/lib/getLocalBase64'
import Image from 'next/image'
import React from 'react'

const DynamicImage = async () => {
    // const myBlurDataUrl = await getBase64('http://localhost:3000/coffee.jpg')
    const myBlurDataUrl = await getBase64('https://source.unsplash.com/random/beautiful')
    return (
        <div>
            DynamicImage
            <Image
                src={"https://source.unsplash.com/random/babe"}
                alt="a test image to see dataBlurUrl effect on render"
                width={650}
                height={366}
                loading="lazy"
                sizes="400px"
                blurDataURL={myBlurDataUrl}
                placeholder='blur'
            // blurDataURL={getBase64("https://source.unsplash.com/random/beautiful")}
            />
        </div>
    )
}

export default DynamicImage