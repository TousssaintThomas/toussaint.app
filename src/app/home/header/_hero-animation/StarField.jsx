'use client'

import { useEffect, useRef } from 'react'

export default function StarField() {
    const canvasRef = useRef(null)
    const NUM_STARS = 200
    const stars = useRef([])

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
            generateStars()
            drawStars()
        }

        const generateStars = () => {
            stars.current = Array.from({ length: NUM_STARS }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5 + 0.5
            }))
        }

        const drawStars = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = 'white'
            stars.current.forEach((star) => {
                ctx.beginPath()
                ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI)
                ctx.fill()
            })
        }

        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        return () => {
            window.removeEventListener('resize', resizeCanvas)
        }
    }, [])

    return (
        <canvas
            id="star-field"
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: ' 250px',
                display: 'block',
                zIndex: 0
            }}
        />
    )
}
