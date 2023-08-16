import Link from "next/link";
import { ThemeChanger } from "./components/ThemeChanger";
import UsingRefs from "./components/UsingRefs";

export default async function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-y-4">
        <h1 className="text-5xl">Public Home Page</h1>
        <h2 className="text-2xl">Images Rendering</h2>
        <div className="text-4xl flex gap-4 justify-between">
          <Link className="bg-slate-600 px-4 rounded" href={"/static"} >Static</Link>
          <Link className="bg-slate-600 px-4 rounded" href={"/dynamic"}>Dynamic</Link>
          <Link className="bg-slate-600 px-4 rounded" href={"/gallery"}>Gallery</Link>
        </div>

        <h2>Using Contexts</h2>
        <ThemeChanger />

        <h2>Using Refs</h2>
        <UsingRefs />
      </div>
    </>
  )
}