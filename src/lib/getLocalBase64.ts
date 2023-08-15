import { getPlaiceholder } from "plaiceholder"

export default async function getBase64(imageURL: string) {
    try {
        const resp = await fetch(imageURL)
        if (!resp.ok) {
            throw new Error(`Failed to fetch image: ${resp.status} ${resp.statusText}`)
        }

        const buffer = await resp.arrayBuffer()

        const { base64 } = await getPlaiceholder(Buffer.from(buffer))

        // console.log(`base64: ${base64}`)

        return base64

    } catch (err) {
        if (err instanceof Error) {
            console.log(err.message, err.stack)
        }
    }
}

export type Photo = {
    src: string,
    blurredDataUrl?: string
}

// type PhotoWithBlurred = {
//     src: string,
//     blurredDataUrl?: string
// }

type ImagesResults = {
    photos: Photo[],
}

export async function addBlurredDataUrls(images: ImagesResults) {
    // making all requests at once instead of awaiting each one finished loading - thus avoiding watefall effect
    // const base64Promises = images.photos.map(photo => getBase64(photo.src.large))
    const base64Promises = images.photos.map(photo => getBase64(photo.src))

    // resolving all requests in order
    const base64Results = await Promise.all(base64Promises)

    const photosWithBlur = images.photos.map((photo, i) => {
        photo.blurredDataUrl = base64Results[i] as string
        return photo
    })

    return photosWithBlur
}