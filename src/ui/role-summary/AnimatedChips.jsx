'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export default function FanOutCircle() {
    const chipCount = 6
    const radius = 100

    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: '-40% 0px', // ✅ Triggers when element is about 40% down the viewport
        once: true // ✅ Only animate once
    })

    return <div ref={ref} className="fanOutContainer"></div>
}
