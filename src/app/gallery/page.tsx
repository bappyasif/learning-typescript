import { Photo, addBlurredDataUrls } from '@/lib/getLocalBase64'
import Image from 'next/image'
import React from 'react'

const DynamicImagesGalleryPage = async () => {
    const getBlurredUrls = await addBlurredDataUrls({ photos: photos })

    const renderImages = getBlurredUrls.map(photo => {
        console.log(photo.src, photo.blurredDataUrl)
        return (
            <div className='w-[400px] rounded'>
                <Image
                    className='h-96 bg-blend-darken'
                    src={photo.src}
                    alt={photo.src}
                    // sizes="450px"
                    // sizes="(min-width: 808px) 50vw, 100vw"
                    blurDataURL={photo.blurredDataUrl}
                    placeholder='blur'
                    width={420}
                    height={400}
                />
            </div>
        )
    })

    return (
        <div className="flex gap-6 flex-wrap justify-center">{renderImages}</div>
    )
}

const photos: Photo[] = [
    { src: "https://source.unsplash.com/random/lake?sig=1" },
    { src: "https://source.unsplash.com/random/lake?sig=2" },
    { src: "https://source.unsplash.com/random/lake?sig=3" },
    { src: "https://source.unsplash.com/random/lake?sig=4" },
    { src: "https://source.unsplash.com/random/lake?sig=5" },
    { src: "https://source.unsplash.com/random/lake?sig=6" },
    { src: "https://source.unsplash.com/random/lake?sig=7" },
    { src: "https://source.unsplash.com/random/lake?sig=8" },
    { src: "https://source.unsplash.com/random/lake?sig=9" },
    { src: "https://source.unsplash.com/random/lake?sig=10" },
    { src: "https://source.unsplash.com/random/lake?sig=11" },
    { src: "https://source.unsplash.com/random/lake?sig=12" },
    { src: "https://source.unsplash.com/random/lake?sig=13" },
    { src: "https://source.unsplash.com/random/lake?sig=14" },
    { src: "https://source.unsplash.com/random/lake?sig=15" },
    { src: "https://source.unsplash.com/random/lake?sig=16" },
    // { src: "https://unsplash.com/photos/DRikNn6wywo" },
    // { src: "https://unsplash.com/photos/iQNZ21RRLB4" }
]
export default DynamicImagesGalleryPage