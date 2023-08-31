import React, { useEffect, useState } from 'react'

export const ModifiedInternediateV2 = () => {
  return (
    <div>
        <h2>ModifiedInternediateV2</h2>
        <AnimateRandomizedParticlesOnClick />
    </div>
  )
}

const mouse = {
    x: 100,
    y: 100
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
        this.x = mouse.x;
        this.y = mouse.y;
        
        // this.x = Math.random() * canvasEl.width;
        // this.y = Math.random() * canvasEl.height;

        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;

        this.canvasEl = canvasEl
    }

    update () {
        this.x += this.speedX
        this.y += this.speedY
        // this will diminish size in time
        if(this.size > 0.2) this.size -= 0.1
    }

    draw () {
        const cCtx = this.canvasEl.getContext("2d") as CanvasRenderingContext2D
        cCtx.fillStyle = "blue";
        cCtx.beginPath();
        cCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        cCtx.fill();
    }
}

const AnimateRandomizedParticlesOnClick = () => {
    const [ctx, setCtx] = useState<CanvasRenderingContext2D>();

    const [canvas, setCanvas] = useState<HTMLCanvasElement>();

    const [partciles, setParticles] = useState<Particle[]>([])

    // const init = () => {
    //     setParticles([])
    //     for(let i=0; i<20; i++) {
    //         const newParticle = new Particle(canvas!!)
    //         setParticles(prev => [...prev, newParticle])
    //     }
    // }

    const handleParticles = () => {
        partciles.forEach((particle, idx) => {
            particle.update();
            particle.draw();
            // if particles go beyond a certain size we will remove it here from array
            if(particle.size > 0.0 && particle.size <= 0.11) {
                partciles.splice(idx, 1)
                console.log(partciles.length, particle.size)
            }
        })
    }

    const animateParticles = () => {
        // (ctx !!).clearRect(0, 0, canvas?.width as number, canvas?.height as number)
        // (ctx!!).fillStyle = "black";
        (ctx!!).fillStyle = "rgba(0,0,0,.01)";
        ctx?.fillRect(0,0, (canvas !!).width, (canvas !!).height)

        partciles.length < 26 && handleParticles()

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
        const canvasEl = document.querySelector("#canvas-7") as HTMLCanvasElement
        const cCtx = canvasEl.getContext("2d") as CanvasRenderingContext2D
        setCtx(cCtx)
        setCanvas(canvasEl)
        setWidthAndHeight(canvasEl)
    }

    window.addEventListener("mousemove", event => {
        mouse.x = event.x
        mouse.y = event.y
        
        // const temp = []
        // setParticles([])

        if(partciles.length < 20) {
            for(let i = 0; i < 2; i++) {
                // temp.push(new Particle(document.querySelector("#canvas-7") as HTMLCanvasElement))
                setParticles(prev=> [...prev, new Particle(document.querySelector("#canvas-7") as HTMLCanvasElement)])
            }
        } else {
            setParticles([])
        }
        // setParticles([...temp])
    })

    window.addEventListener("click", (event) => {
        mouse.x = event.x
        mouse.y = event.y
        // setParticles([new Particle(canvas !!)])

        // setParticles([])

        // create 10 random particles on click 
        const temp = []
        setParticles([])

        for(let i = 0; i < 10; i++) {
            temp.push(new Particle(document.querySelector("#canvas-7") as HTMLCanvasElement))
            // setParticles(prev=> [...prev, new Particle(document.querySelector("#canvas-7") as HTMLCanvasElement)])
        }
        setParticles([...temp])

        // create a solo partcile on click
        // setParticles([new Particle(document.querySelector("#canvas-7") as HTMLCanvasElement)])
        // console.log(mouse)
    })

    // useEffect(() => {
    //     canvas && init()
    // }, [canvas])

    useEffect(() => {
        initialConfig()
    }, [])

  return (
    <div>
        <canvas id='canvas-7'></canvas>
    </div>
  )
}