import Image from 'next/image'
import React from 'react'
import testImage from "../../../public/test.png"

const StaticImage = () => {
    return (
        <div>
            <h1>Static Images</h1>
            <div className="grid place-content-center">
                <div className='w-[400px] rounded'>
                    <h2>Using "loadng"</h2>
                    <Image
                        src={"https://source.unsplash.com/random/beautiful"}
                        alt="a random picture from unsplash api"
                        width={650}
                        height={366}
                        loading="lazy"
                        // sizes="(min-width: 808px) 50vw, 100vw"
                        sizes="(min-width: 1300px) 650px, (min-width: 820px) 49.35vw, (min-width: 760px) 650px, calc(93.18vw - 40px)"
                        // priority={true}
                    />
                </div>
                <div className='w-[400px] rounded'>
                    <h2>Using "priority"</h2>
                    <Image
                        src={"https://source.unsplash.com/random/beautiful"}
                        alt="a random picture from unsplash api"
                        width={650}
                        height={366}
                        // loading="lazy"
                        // sizes="(min-width: 808px) 50vw, 100vw"
                        sizes="(min-width: 1300px) 650px, (min-width: 820px) 49.35vw, (min-width: 760px) 650px, calc(93.18vw - 40px)"
                        priority
                    />
                </div>
                <div>
                    <h2>using "placeholder"</h2>
                    <Image
                        src={testImage}
                        alt="a test image to see dataBlurUrl effect on render"
                        width={650}
                        height={366}
                        loading="lazy"
                        sizes="400px"
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    )
}

export default StaticImage