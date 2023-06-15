import { useEffect, useState } from "react"

export const useOnClickOutside = (ref:any, cb:(e:MouseEvent)=>void) => {
    useEffect(() => {
        let listener = (event:MouseEvent) => {
            if(!ref.current || ref.current.contains(event.target)) return
            cb(event)
        }

        // document.addEventListener("mouseleave", listener);
        document.addEventListener("mousedown", listener);

        return () => {
            // document.removeEventListener("mouseleave", listener)
            document.removeEventListener("mousedown", listener)
        }
    }, [ref, cb])
}

export const useIncrementingCounter = (maxVal:number) => {
    const [total, setTotal] = useState<number>(0)
    
    const incrementCount = () => {
        let timer = setInterval(() => {
            setTotal(prev => {
                if(prev === maxVal - 1) {
                    clearInterval(timer)
                }
                return prev + 1
            })

        }, 200)

        return () => clearInterval(timer)
    }

    useEffect(() => incrementCount(), [])

    return {total}
}