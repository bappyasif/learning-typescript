import Image from "next/image";

export default async function Home() {
  return (
    <>
      <h1 className="text-5xl">Public Home Page</h1>
      <Image
        src={"https://source.unsplash.com/random/beautiful"}
        alt="a random picture from unsplash api"
        width={650}
        height={366}
        // loading="lazy"
        // sizes="(min-width: 808px) 50vw, 100vw"
        sizes="(min-width: 1300px) 650px, (min-width: 820px) 49.35vw, (min-width: 760px) 650px, calc(93.18vw - 40px)"
        priority={true}
      />
    </>
  )
}
