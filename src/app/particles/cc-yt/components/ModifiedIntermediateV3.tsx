import React, { useEffect, useState } from 'react'

export const ModifiedInternediateV3 = () => {
    return (
        <div>
            <h2>ModifiedInternediateV3</h2>
            <AnimateRandomizedParticlesOnClickImproved />
        </div>
    )
}

const mouse = {
    x: 100,
    y: 100
}

let hue = 0;

class Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    canvasEl: HTMLCanvasElement
    colorVar: string

    constructor(canvasEl: HTMLCanvasElement) {
        this.x = mouse.x;
        this.y = mouse.y;

        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;

        this.canvasEl = canvasEl
        this.colorVar = `hsl(${hue}, 100%, 50%)`
    }

    update() {
        this.x += this.speedX
        this.y += this.speedY
        // this will diminish size in time
        if (this.size > 0.2) this.size -= 0.1
    }

    draw() {
        const cCtx = this.canvasEl.getContext("2d") as CanvasRenderingContext2D
        // cCtx.fillStyle = "blue";
        // cCtx.fillStyle = `hsl(${hue}, 100%, 50%)`;
        cCtx.fillStyle = this.colorVar;
        cCtx.beginPath();
        cCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        cCtx.fill();
    }
}

const AnimateRandomizedParticlesOnClickImproved = () => {
    const [ctx, setCtx] = useState<CanvasRenderingContext2D>();

    const [canvas, setCanvas] = useState<HTMLCanvasElement>();

    const [partciles, setParticles] = useState<Particle[]>([]);

    const handleParticles = () => {
        partciles.forEach((particle, idx) => {
            particle.update();
            particle.draw();
            // if particles go beyond a certain size we will remove it here from array
            if (particle.size > 0.0 && particle.size <= 0.11) {
                partciles.splice(idx, 1)
                // console.log(partciles.length, particle.size)
            }
        })
    }

    const animateParticles = () => {
        // (ctx !!).clearRect(0, 0, canvas?.width as number, canvas?.height as number)
        // (ctx!!).fillStyle = "black";
        (ctx!!).fillStyle = "rgba(0,0,0,.01)";
        ctx?.fillRect(0, 0, (canvas!!).width, (canvas!!).height)

        // increasing hue after each animation so that it covers all of its color pallets
        // hue++;

        // changing hue change rate will effect how fast or slower color change will be taking effect
        hue += 0.6

        partciles.length < 26 && handleParticles()

        requestAnimationFrame(animateParticles)
    }

    useEffect(() => {
        partciles.length && animateParticles()
        // const timer = setInterval(init, 2000)
        // partciles.length && timer
        // return () => clearInterval(timer)
    }, [partciles])

    const setWidthAndHeight = (canvas: HTMLCanvasElement) => {
        // (canvas).width = window.innerWidth;
        // (canvas).height = window.innerHeight;
        (canvas).width = 1395;
        (canvas).height = 350;
    }

    const initialConfig = () => {
        const canvasEl = document.querySelector("#canvas-8") as HTMLCanvasElement
        const cCtx = canvasEl.getContext("2d") as CanvasRenderingContext2D
        setCtx(cCtx)
        setCanvas(canvasEl)
        setWidthAndHeight(canvasEl)
    }

    const mouseMoveHandler = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        mouse.x = event.clientX
        mouse.y = event.clientY

        if (partciles.length < 20) {
            for (let i = 0; i < 2; i++) {
                // temp.push(new Particle(document.querySelector("#canvas-7") as HTMLCanvasElement))
                setParticles(prev => [...prev, new Particle(document.querySelector("#canvas-8") as HTMLCanvasElement)])
            }
        } else {
            setParticles([])
        }
    }

    useEffect(() => {
        initialConfig()
    }, [])

    return (
        <div>
            <canvas
                id='canvas-8'
                onClick={event => {
                    mouse.x = event.clientX
                    mouse.y = event.clientY

                    const temp = []
                    setParticles([])

                    for (let i = 0; i < 10; i++) {
                        temp.push(new Particle(document.querySelector("#canvas-8") as HTMLCanvasElement))
                        // setParticles(prev=> [...prev, new Particle(document.querySelector("#canvas-7") as HTMLCanvasElement)])
                    }

                    console.log(temp.length, partciles.length)
                    setParticles([...temp])

                }}

                onMouseMove={ e => mouseMoveHandler(e) }
            ></canvas>
        </div>
    )
}