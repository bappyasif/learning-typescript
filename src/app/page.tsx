import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/hsui"}>hsui</Link>
      <Link href={"/shadui"}>shadui</Link>
      <Link href={"/lines"}>lines</Link>
      <Link href={"/shapes"}>Shapes</Link>
      <Link href={"/curves"}>Curves</Link>
      <Link href={"/withCurves"}>With Curves</Link>
      <Link href={"/parallax"}>Parallax Effect</Link>
      <Link href={"/layouts"}>Few Layouts</Link>
    </main>
  )
}


// https://dribbble.com/shots/21350867-Fashion-Brand-Website-Transition