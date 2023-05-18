import { useEffect, useRef, useState } from "react"

export const MutableRef = () => {
    const [timer, setTimer] = useState(0)
    
    let counterRef = useRef<number | null>(null);
    
    const stopTimer = () => counterRef.current && window.clearInterval(counterRef.current)

    useEffect(() => {
        counterRef.current = window.setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000)

        return () => {
            stopTimer()
        }
    }, [])

    return (
        <>
            <div>MutableRef</div>
            <h2>Timer : {timer}</h2>
            <button onClick={stopTimer}>Stop</button>
        </>
    )
}
