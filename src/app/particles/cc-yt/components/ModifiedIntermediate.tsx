import React, { useEffect, useState } from 'react'

export const ModifiedIntermediate = () => {
  return (
    <div>
        <h2>ModifiedIntermediate</h2>
        <AnimateRandomizedParticles />
    </div>
  )
}

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
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;

        this.canvasEl = canvasEl

        // console.log(canvasEl.width, this.x, Math.random() * canvasEl.width)
    }

    update () {
        this.x += this.speedX
        this.y += this.speedY
        // this will diminish size in time
        if(this.size > 0.2) this.size -= 0.1
    }

    draw () {
        // const canvasEl = document.querySelector("#canvas-5") as HTMLCanvasElement
        // console.log(this.canvasEl.width)
        const cCtx = this.canvasEl.getContext("2d") as CanvasRenderingContext2D
        cCtx.fillStyle = "blue";
        cCtx.beginPath();
        cCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
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
        partciles.forEach((particle, idx) => {
            particle.update();
            particle.draw();
            // console.log(particle)
            // if particles go beyond a certain size we will remove it here from array
            if(particle.size <= 0.3) {
                // const newArr = partciles.splice(idx, 1)
                // console.log(newArr)

                // const newArr = partciles.slice(0, idx).concat(partciles.slice(idx+1))
                // console.log(newArr.length)

                // const filtered = partciles.filter((_,id) => id !== idx)
                // setParticles(filtered)

                partciles.splice(idx, 1)
                // console.log(partciles.length)
            }
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
        // const timer = setInterval(init, 2000)
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
        const canvasEl = document.querySelector("#canvas-6") as HTMLCanvasElement
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
        <canvas id='canvas-6'></canvas>
    </div>
  )
}
