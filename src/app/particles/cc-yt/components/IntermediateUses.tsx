import React, { useEffect, useState } from 'react'

export const IntermediateUses = () => {
  return (
    <div>
        <h2>IntermediateUses</h2>
        {/* <RandomizedParticles /> */}
        <AnimateRandomizedParticles />
    </div>
  )
}

// const mouse = {
//     x: 100,
//     y: 100
// }

class Particle { 
    x :number 
    y: number
    size: number
    speedX: number
    speedY: number
    canvasEl: HTMLCanvasElement

    // canvasEl = document.querySelector("#canvas-5") as HTMLCanvasElement

    constructor (canvasEl:HTMLCanvasElement) {
        // this.x = mouse.x;
        // this.y = mouse.y;
        this.x = Math.random() * canvasEl.width;
        this.y = Math.random() * canvasEl.height;

        // this.x = Math.random() * 1190;
        // this.y = Math.random() * 350;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;

        this.canvasEl = canvasEl

        // console.log(canvasEl.width, this.x, Math.random() * canvasEl.width)
    }

    update () {
        this.x += this.speedX
        this.y += this.speedY
    }

    draw () {
        // const canvasEl = document.querySelector("#canvas-5") as HTMLCanvasElement
        // console.log(this.canvasEl.width)
        const cCtx = this.canvasEl.getContext("2d") as CanvasRenderingContext2D
        cCtx.fillStyle = "blue";
        cCtx.beginPath();
        cCtx.arc(this.x, this.y, 45, 0, Math.PI * 2);
        cCtx.fill();
    }
}

const AnimateRandomizedParticles = () => {
    const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
    const [canvas, setCanvas] = useState<HTMLCanvasElement>();

    // const [gate, setGate] = useState<boolean>(false)

    const [partciles, setParticles] = useState<Particle[]>([])

    const init = () => {
        setParticles([])
        for(let i=0; i<20; i++) {
            const newParticle = new Particle(canvas!!)
            setParticles(prev => [...prev, newParticle])
        }
    }

    const handleParticles = () => {
        // console.log("handle")
        // setGate(true)
        partciles.forEach(particle => {
            particle.update();
            particle.draw();
            // console.log(particle)
        })
        // setGate(false)
    }

    const animateParticles = () => {
        (ctx !!).clearRect(0, 0, canvas?.width as number, canvas?.height as number)
        handleParticles()
        requestAnimationFrame(animateParticles)
    }

    useEffect(() => {
        partciles.length && animateParticles()
        // const timer = setInterval(init, 8000)
        // partciles.length && timer
        // return () => clearInterval(timer)
    }, [partciles])

    const setWidthAndHeight = (canvas:HTMLCanvasElement) => {
        // (canvas).width = window.innerWidth;
        // (canvas).height = window.innerHeight;
        (canvas).width = 1395;
        (canvas).height = 350;
    }

    const initialConfig = () => {
        const canvasEl = document.querySelector("#canvas-5") as HTMLCanvasElement
        const cCtx = canvasEl.getContext("2d") as CanvasRenderingContext2D
        setCtx(cCtx)
        setCanvas(canvasEl)
        setWidthAndHeight(canvasEl)
    }

    useEffect(() => {
        canvas && init()
    }, [canvas])

    useEffect(() => {
        initialConfig()
    }, [])

    // animate()

    // console.log(partciles)

  return (
    <div>
        <canvas id='canvas-5'></canvas>
    </div>
  )
}