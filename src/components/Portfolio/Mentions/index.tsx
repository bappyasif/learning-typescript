import { useState } from "react"
import { figs } from "../data"
import { useIncrementingCounter } from "../../../hooks"

export const Mentions = () => {

    return (
        <div id="Mentions">
            <h2 className="text-4xl">Special Mentions</h2>
            <Specials />
        </div>
    )
}

type SpecialsProps = {
    name: string,
    count: number,
    text: string
}

const Specials = () => {
    const renderFigs = () => figs.map(item => <RenderSpecial key={item.name} count={item.count} name={item.name} text={item.text} />)

    return (
        <div 
            className="flex justify-center flex-wrap gap-10 text-3xl"
        >
            {renderFigs()}
        </div>
    )
}

const RenderSpecial = ({ ...item }: SpecialsProps) => {
    const { name, count, text } = item;
    // console.log(name, count)
    const adjustTopMargin = () => {
        let str = "mt-0"
        if(name === "HackerRank") {
            str="mt-28"
        } else if(name === "Open Source Contribution") {
            str="mt-48"
        } else if(name === "FCC Forum") {
            str="mt-72"
        }

        return str;
    }
    return (
        <div 
            className={adjustTopMargin()}
        >
            <h2>{name}</h2>
            <RenderCircleWithText count={count} />
            <p>{text}</p>
            {/* <SomeCounter /> */}
        </div>
    )
}

type SvgProps = {
    count: number,
    //     text: string
}

const RenderCircleWithText = ({ count }: SvgProps) => {
    return (
        <svg className="flex justify-center w-f">
            <RenderCircle />
            <RenderText count={count} />
        </svg>
    )
}

const RenderCircle = () => {
    return (
        <circle
            cx="151" cy="74" r="50"
            stroke="blue" strokeWidth="4" fill="transparent"
        />
    )
}

const RenderText = ({ count }: SvgProps) => {
    const [total2, setTotal2] = useState<number>(count)

    const { total } = useIncrementingCounter(count)
    // const {total} = useCallback(() => useIncrementingCounter(count), [])

    return (
        <text
            className="text-xl"
            x="50%" y="50%" textAnchor="middle"
            fill="white" dy=".3em"
        >
            {total2} -- {total}
        </text>
    )
}