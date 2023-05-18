import { useEffect, useRef, useState } from "react"

export const TimerWithMutableRef = () => {
    const [timer, setTimer] = useState(0);

    const timerRef = useRef<number | null>(null)

    const stopTimer = () => {
        timerRef.current && window.clearInterval(timerRef.current)
    }

    const pauseTimer = () => {
        stopTimer()
    }

    const resumeTimer = () => {
        tick();
    }

    const tick = () => {
        timerRef.current = window.setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000)
    }

    useEffect(() => {
        tick()

        return () => {
            stopTimer()
        }
    }, [])
    return (
        <>
            <div>TimerWithMutableRef</div>
            <h2>Timer :: {timer}</h2>
            <button onClick={stopTimer}>stop</button>
            <button onClick={pauseTimer}>pause</button>
            <button onClick={resumeTimer}>resume</button>
        </>
    )
}
