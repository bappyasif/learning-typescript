import { useState } from "react"
import { figs } from "../data"
import { useIncrementingCounter } from "../../../hooks"

export const Mentions = () => {

    return (
        <div>
            <h2>Special Mentions</h2>
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
        <div>
            {renderFigs()}
        </div>
    )
}

const RenderSpecial = ({ ...item }: SpecialsProps) => {
    const { name, count, text } = item;
    // console.log(name, count)
    return (
        <div>
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
        <svg>
            <RenderCircle />
            <RenderText count={count} />
        </svg>
    )
}

const RenderCircle = () => {
    return (
        <circle
            cx="56" cy="53" r="50"
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
            x="18%" y="36%" textAnchor="middle"
            fill="white" dy=".3em"
        >
            {total2} -- {total}
        </text>
    )
}