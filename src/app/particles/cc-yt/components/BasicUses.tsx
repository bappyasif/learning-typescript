import React, { useEffect, useState } from 'react'

export const BasicUses = () => {
  return (
    <div>
        <h2 className='font'>BasicUses</h2>
        <MakingCirclePathAnimated />
        <MakingCircleOnClick />
        <MakingCircle />
        <MakingRectangle />
    </div>
  )
}

const MakingCirclePathAnimated = () => {
    const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
    const [canvas, setCanvas] = useState<HTMLCanvasElement>()

    const clickCoords = {
        x: 100,
        y: 100
    }

    const setWidthAndHeight = (canvas:HTMLCanvasElement) => {
        // (canvas).width = window.innerWidth;
        // (canvas).height = window.innerHeight;
        (canvas).width = 1395;
        (canvas).height = 350;
    }

    const initialConfig = () => {
        const canvasEl = document.querySelector("#canvas-4") as HTMLCanvasElement
        const cCtx = canvasEl.getContext("2d") as CanvasRenderingContext2D
        setCtx(cCtx)
        setCanvas(canvasEl)
        setWidthAndHeight(canvasEl)
    }

    const drawCircle = () => {
        (ctx !!).fillStyle = "blue";
        (ctx !!).beginPath();
        (ctx !!).arc(clickCoords.x, clickCoords.y, 45, 0, Math.PI * 2);
        (ctx !!).fill();
    }

    // drawing 
    const animate = () => {
        // ctx && ctx.clearRect(0, 0, canvas?.width as number, canvas?.height as number)
        // circle is drawn only from animate method and not from eventlisteners callback functions
        ctx && drawCircle()
        requestAnimationFrame(animate)
    }

    const draw = (e: MouseEvent) => {
        clickCoords.x = e.x
        clickCoords.y = e.y
        // ctx && drawCircle()
    }

    canvas?.addEventListener("click", e => {
        draw(e)
    })

    canvas?.addEventListener("mousemove", e => {
        draw(e)
    })

    useEffect(() => {
        ctx && drawCircle()
    }, [ctx])

    useEffect(() => {
        initialConfig()
    }, [])

    animate()

  return (
    <div>
        <canvas id='canvas-4'></canvas>
    </div>
  )
}

const MakingCircleOnClick = () => {
    const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
    const [canvas, setCanvas] = useState<HTMLCanvasElement>()

    const clickCoords = {
        x: 100,
        y: 100
    }

    const setWidthAndHeight = (canvas:HTMLCanvasElement) => {
        // (canvas).width = window.innerWidth;
        // (canvas).height = window.innerHeight;
        (canvas).width = 1395;
        (canvas).height = 350;
    }

    const initialConfig = () => {
        const canvasEl = document.querySelector("#canvas-3") as HTMLCanvasElement
        const cCtx = canvasEl.getContext("2d") as CanvasRenderingContext2D
        setCtx(cCtx)
        setCanvas(canvasEl)
        setWidthAndHeight(canvasEl)
    }

    const drawCircle = () => {
        (ctx !!).fillStyle = "blue";
        // (ctx !!).strokeStyle = "red";
        // (ctx !!).lineWidth = 9;
        (ctx !!).beginPath();
        (ctx !!).arc(clickCoords.x, clickCoords.y, 45, 0, Math.PI * 2);
        // (ctx !!).stroke();
        (ctx !!).fill();
    }

    const drawCircleForMove = () => {
        (ctx !!).fillStyle = "red";
        (ctx !!).beginPath();
        (ctx !!).arc(clickCoords.x, clickCoords.y, 45, 0, Math.PI * 2);
        (ctx !!).fill();
    }

    // drawing 
    canvas?.addEventListener("click", e => {
        clickCoords.x = e.x
        clickCoords.y = e.y

        ctx && drawCircle()
    })

    canvas?.addEventListener("mousemove", e => {
        clickCoords.x = e.x
        clickCoords.y = e.y

        ctx && drawCircleForMove()
    })

    useEffect(() => {
        ctx && drawCircle()
    }, [ctx])

    useEffect(() => {
        initialConfig()
    }, [])

  return (
    <div>
        <canvas id='canvas-3'></canvas>
    </div>
  )
}

const MakingCircle = () => {
    const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
    const [canvas, setCanvas] = useState<HTMLCanvasElement>()

    const initialConfig = () => {
        const canvasEl = document.querySelector("#canvas-2") as HTMLCanvasElement
        const cCtx = canvasEl.getContext("2d") !!
        setCtx(cCtx)
        setCanvas(canvasEl)
        // setWidthAndHeight()
    }

    // const setWidthAndHeight = () => {
    //     (canvas !!).width = window.innerWidth;
    //     (canvas !!).height = window.innerHeight;
    // }

    const drawCircle = () => {
        (ctx !!).fillStyle = "blue";
        (ctx !!).strokeStyle = "red";
        (ctx !!).lineWidth = 9;
        (ctx !!).beginPath();
        (ctx !!).arc(100, 100, 45, 0, Math.PI * 2);
        (ctx !!).stroke();
        (ctx !!).fill();
    }

    // drawing 
    window.addEventListener("resize", () => {
        // setWidthAndHeight()
        ctx && drawCircle()
    })

    // useEffect(() => {
    //     canvas && setWidthAndHeight()
    // }, [canvas])

    useEffect(() => {
        ctx && drawCircle()
    }, [ctx])

    useEffect(() => {
        initialConfig()
    }, [])

  return (
    <div>
        <canvas id='canvas-2'></canvas>
    </div>
  )
}


const MakingRectangle = () => {
    const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
    const [canvas, setCanvas] = useState<HTMLCanvasElement>()
    // const [canvas, setCanvas] = useState<HTMLCanvasElement>(document.querySelector("#canvas-1") as HTMLCanvasElement)

    // const canvas = document.querySelector("#canvas-1") as HTMLCanvasElement

    const initialConfig = () => {
        const canvasEl = document.querySelector("#canvas-1") as HTMLCanvasElement
        const cCtx = canvasEl.getContext("2d") !!
        setCtx(cCtx)
        setCanvas(canvasEl)
        // setWidthAndHeight()
    }

    const setWidthAndHeight = () => {
        // const canvas = document.querySelector("#canvas-1") as HTMLCanvasElement
        (canvas !!).width = window.innerWidth;
        (canvas !!).height = window.innerHeight;
    }

    const drawRect = () => {
        (ctx !!).fillStyle = "darkred";
        (ctx !!).fillRect(10, 20, 150, 60)
    }

    // drawing 
    window.addEventListener("resize", () => {
        // const canvas = document.querySelector("#canvas-1") as HTMLCanvasElement
        // canvas.width = window.innerWidth;
        // canvas.height = window.innerHeight;
        // (ctx !!).fillStyle = "darkred";
        // (ctx !!).fillRect(10, 20, 150, 60)

        // setWidthAndHeight()
        ctx && drawRect()
    })

    // useEffect(() => {
    //     canvas && setWidthAndHeight()
    // }, [canvas])

    useEffect(() => {
        ctx && drawRect()
    }, [ctx])

    useEffect(() => {
        initialConfig()
    }, [])

  return (
    <div>
        <canvas id='canvas-1'></canvas>
    </div>
  )
}
