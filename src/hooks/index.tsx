import { useEffect, useState } from "react"

export const useOnClickOutside = (ref: any, cb: (e: MouseEvent) => void) => {
    useEffect(() => {
        let listener = (event: MouseEvent) => {
            if (!ref.current || ref.current.contains(event.target)) return
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

export const useIncrementingCounter = (maxVal: number) => {
    const [total, setTotal] = useState<number>(0)

    const incrementCount = () => {
        let timer = setInterval(() => {
            setTotal(prev => {
                if (prev === maxVal - 1) {
                    clearInterval(timer)
                }
                return prev + 1
            })

        }, 200)

        return () => clearInterval(timer)
    }

    useEffect(() => incrementCount(), [])

    return { total }
}

type CnPropsType = {
    currSilde: number,
    nextSlide: number
}

const initialCn: CnPropsType = {
    currSilde: 0,
    nextSlide: 1
}

export const useForAccordionSlides = () => {
    const [cnInfo, setCnInfo] = useState<CnPropsType>(initialCn)

    // const handleNext = () => {
    //     if(cnInfo.nextSlide === 3) {
    //         setCnInfo({currSilde: 0, nextSlide: 1})
    //     } else {
    //         setCnInfo(prev => ({currSilde: prev.currSilde + 1, nextSlide: prev.nextSlide + 1}))
    //     }
    // }

    // const handlePrev = () => {
    //     if(cnInfo.currSilde === 0) {
    //         setCnInfo({currSilde: 2, nextSlide: 3})
    //     } else {
    //         setCnInfo(prev => ({currSilde: prev.currSilde - 1, nextSlide: prev.nextSlide - 1}))
    //     }
    // }

    const handleNext = () => {
        if (cnInfo.nextSlide === 3) {
            setCnInfo({ currSilde: 3, nextSlide: 0 })
        } else {
            if (cnInfo.currSilde === 3) {
                setCnInfo({ currSilde: 0, nextSlide: 1 })
            } else {
                setCnInfo(prev => ({ currSilde: prev.currSilde + 1, nextSlide: prev.nextSlide + 1 }))
            }
        }
    }

    const handlePrev = () => {
        if (cnInfo.currSilde === 0) {
            setCnInfo({ currSilde: 3, nextSlide: 0 })
        } else {
            if (cnInfo.currSilde === 3) {
                setCnInfo({ currSilde: 2, nextSlide: 3 })
            } else {
                setCnInfo(prev => ({ currSilde: prev.currSilde - 1, nextSlide: prev.nextSlide - 1 }))
            }
        }
    }

    return { handleNext, handlePrev, cnInfo }
}

export const useHandlePercentileCount = (percentile: number) => {
    const [currPercentile, setCurrPercentile] = useState<number>(0)

    const [begin, setBegin] = useState<boolean>(false)

    const handleBegin = () => setBegin(true);

    const handleStop = () => setBegin(false);

    const incrementPercentileCount = () => {
        const timer = setTimeout(() => {
            console.log(currPercentile, percentile, currPercentile < percentile, timer)
            if (currPercentile < percentile) {
                setCurrPercentile(prev => prev + 1)
            } else {
                clearTimeout(timer)
            }
        }, 6)

        return () => clearTimeout(timer)
    }

    // console.log(currPercentile, percentile)

    useEffect(() => {
        begin && incrementPercentileCount()
        !begin && setCurrPercentile(0)
    }, [begin, currPercentile])

    return { currPercentile, handleBegin, handleStop}
}

export const useOnPageScroll = () => {
    const [scrolled, setScrolled] = useState<number>(0);

    const app = document.body.querySelector(".App") as HTMLElement;

    // function getDocHeight2() {
    //     var D = document;
    //     return Math.max(
    //         app.scrollHeight, app.scrollHeight,
    //         app.offsetHeight, app.offsetHeight,
    //         app.clientHeight, app.clientHeight
    //     )
    // }

    function getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        )
    }

    window.addEventListener("scroll", () => {
        // var winheight = window.innerHeight
        // e.target
        // var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight
        var winheight = window.innerHeight || app.clientHeight
        // var docheight = document.body.clientHeight
        var docheight = getDocHeight()
        var scrollTop = (document.documentElement).scrollTop
        var trackLength = docheight - winheight
        var pctScrolled = Math.floor(scrollTop / trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
        // console.log(pctScrolled + '% scrolled', Math.max(document.body.clientHeight, document.documentElement.clientHeight), document.body.clientHeight, document.documentElement.clientHeight)

        setScrolled(pctScrolled)
        // console.log(getDocHeight2())
    })

    return { scrolled }
}

// export const useOnPageScroll = () => {
//     const [scrolled, setScrolled] = useState<number>(0);

//     function getDocHeight() {
//         var D = document;
//         return Math.max(
//             D.body.scrollHeight, D.documentElement.scrollHeight,
//             D.body.offsetHeight, D.documentElement.offsetHeight,
//             D.body.clientHeight, D.documentElement.clientHeight
//         )
//     }

//     window.addEventListener("scroll", () => {
//         // var winheight = window.innerHeight
//         var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight
//         // var docheight = document.body.clientHeight
//         var docheight = getDocHeight()
//         var scrollTop = (document.documentElement).scrollTop
//         var trackLength = docheight - winheight
//         var pctScrolled = Math.floor(scrollTop / trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
//         // console.log(pctScrolled + '% scrolled', Math.max(document.body.clientHeight, document.documentElement.clientHeight), document.body.clientHeight, document.documentElement.clientHeight)

//         setScrolled(pctScrolled)
//     })

//     return { scrolled }
// }

// export const useOnPageScroll = () => {
//     const [scrolled, setScrolled] = useState<number>(0);

//     // const scroller = document.querySelector(".App");

//     function getDocHeight() {
//         var D = document;
//         return Math.max(
//             D.body.scrollHeight, D.documentElement.scrollHeight,
//             D.body.offsetHeight, D.documentElement.offsetHeight,
//             D.body.clientHeight, D.documentElement.clientHeight
//         )
//     }

//     window.addEventListener("scroll", () => {
//         // var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight
//         var winheight = window.innerHeight
//         // var docheight = getDocHeight()
//         var docheight = document.body.clientHeight
//         // var docheight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
//         // var scrollTop = (document.documentElement || document.body.parentNode || document.body).scrollTop
//         // var scrollTop = (document.body).scrollTop
//         var scrollTop = (document.documentElement).scrollTop
//         var trackLength = docheight - winheight
//         var pctScrolled = Math.floor(scrollTop / trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
//         console.log(pctScrolled + '% scrolled', Math.max(document.body.clientHeight, document.documentElement.clientHeight), document.body.clientHeight, document.documentElement.clientHeight)

//         setScrolled(pctScrolled)

//         //     let height = scroller?.clientHeight;
//         //   let scrollHeight = scroller?.scrollHeight ?? - (height || 0);
//         //   let scrollTop = scroller?.scrollTop;
//         //   let percent = Math.floor((scrollTop || 0) / scrollHeight * 100);
//         //   console.log('Percent : '+percent+'%');

//         // var winheight= window.innerHeight
//         // var docheight = window.document.body.clientHeight
//         // var scrollTop = document.body.scrollTop
//         // var trackLength = docheight - winheight
//         // var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
//         // console.log(pctScrolled + '% scrolled', docheight, winheight)

//         // setScrolled(pctScrolled);

//         // console.log(window.document.body.clientHeight, screen.height, screen.availHeight)
//     })

//     return { scrolled }
// }