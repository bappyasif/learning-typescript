import { ReactElement, useEffect, useState } from "react"
import { AiOutlineArrowDown } from "react-icons/ai"

export const Intro = (): ReactElement => {
    const content = (
        <div
            id="Home"
            className="text-2xl flex flex-col gap-72 items-center justify-end"
        >
            <ShowName />
            <ShowRoles />
            <PointingArrow />
        </div>
    )
    return content
}

const PointingArrow = (): ReactElement => {
    const content = (
        <a
            href="#Resume"
            className="animate-pulse text-4xl relative 
                border border-zinc-600 border-b-8 text-amber-300"
        >
            <span
                style={{
                    display: "block",
                    width: "20px",
                    height: "40px",
                    borderLeft: "26px solid blue",
                    borderRight: "26px solid yellow",
                    borderBottom: "45px solid maroon"
                }}
            ></span>
            <span
                className="z-20 absolute -bottom-4 left-2 animate-bounce"
            >
                <AiOutlineArrowDown />
            </span>
        </a>
    )

    return content
}

const ShowName = (): ReactElement => {
    const [text, setText] = useState<string>("Asifuzzaman Bappy")
    const [className, setClassName] = useState<string>("dissolve-text")

    const swapText = (): void => setText(prev => prev === "Originally From Bangladesh" ? "Asifuzzaman Bappy" : "Originally From Bangladesh")

    const swapClassname = (): void => setClassName(prev => prev === "dissolve-text" ? "reappear-text" : "dissolve-text")

    useEffect(() => {
        let timerIntvl = setInterval(swapText, 20000)
        let anotherInterval = setInterval(swapClassname, 6000)

        return () => {
            clearInterval(timerIntvl)
            clearInterval(anotherInterval)
        }
    }, [])

    const content = (
        <div className="flex gap-1 justify-between">
            <span className="w-20 self-end">I'm</span>
            <span className={`${className} w-80 self-start`}>{text}</span>
        </div>
    )

    return content
}

const ShowRoles = (): ReactElement => {
    const [text, setText] = useState<string>("Web Development")
    // const [text, setText] = useState<string>("")
    const [newText, setNewText] = useState<string>("")
    const [waitBacktrack, setWaitBacktrack] = useState<boolean>(false)
    const [idx, setIdx] = useState<number>(0)
    // const [firstTime, setFirstTime] = useState<boolean>(true)

    const forwardEntryText = () => {
        if (newText.length !== -1) {
            setText(prev => prev + newText[0])
            setNewText("")
        }

        let slicedNewText: string

        slicedNewText = newText.substring(1)

        if (slicedNewText.length === 1) {
            setNewText("")
        } else if (slicedNewText.length === 0) {
            setWaitBacktrack(false)
        }

        setNewText(slicedNewText)
    }

    const decideWhichRole = () => {
        let text = ""
        if (idx <= roles.length - 1) {
            setIdx(prev => {
                if (prev === roles.length - 1) {
                    return 0
                } else {
                    return prev + 1
                }
            })

            text = roles[idx]
        }

        return text
    }

    const backtrackText = () => {
        const subTxt = text.substring(0, text.length - 1)
        if (text.length === 1) {
            setText("")
            setWaitBacktrack(true)

            setNewText(decideWhichRole())
        } else {
            setText(subTxt)
        }
        console.log("rtunning bactrack!!")
    }

    useEffect(() => {
        if (!waitBacktrack && text) {
            const intervalTimer = setInterval(backtrackText, 200)

            return () => {
                clearInterval(intervalTimer)
            }
        } else {
            if (newText) {
                const intervalTimer = setInterval(forwardEntryText, 200)

                return () => {
                    clearInterval(intervalTimer)
                }
            }
        }

    }, [text, waitBacktrack, newText])

    useEffect(() => {
        setIdx(1)
    }, [])

    const content = (
        <div className="test1234 relative text-4xl">
            I'm a self taught <span>{text}</span>
        </div>
    )

    return content
}

const roles = ["Web Developer ", "Frontend Developer ", "Backend Developer ", "Fullstack Developer ", "SQA Automation Engineer ", "Keen Learner "]