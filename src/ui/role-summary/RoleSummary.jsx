'use client'

import styles from '@/ui/role-summary/RoleSummary.module.scss'
import Image from 'next/image'
import { motion } from 'motion/react'
import AnimatedChips from '@/ui/role-summary/AnimatedChips'

export default function RoleSummary() {
    const box = {
        width: 100,
        height: 100,
        backgroundColor: '#ff0088',
        borderRadius: 5
    }

    return (
        <section
            id={'summary'}
            className={`
                ${styles['summary-section']} 
                flex 
                flex-col 
                md:flex-row 
                py-16
                md:justify-center
            `}
        >
            <div className={`${styles['code-anim']} flex-1 relative`}>
                <Image
                    src={'/MockIDE.svg'}
                    alt={'n/a'}
                    width={260}
                    height={260}
                    unoptimized={true}
                    className={`${styles['mock-ide']}`}
                />
                <div className={styles['pulsing-circuit']}>
                    <div className={styles['pulse-layer']}></div>
                    <Image
                        src={'/CircuitBoardLanes.svg'}
                        alt={'Circuit board lanes'}
                        width={2000}
                        height={300}
                        unoptimized={true}
                        className={styles['lane-mask']}
                    />
                </div>
                <AnimatedChips></AnimatedChips>
            </div>
            <div className={`flex-1 md:px-6 lg:px-8 flex items-center`}>
                <div className="w-full">
                    <div className="w-full mb-8 flex flex-col items-center text-center">
                        <h1 className={`mb-4 section-header`}>About Me</h1>
                        <div className="section-header-divider"></div>
                    </div>
                    <p className={`text-lg text-justify`}>
                        I'm a full-stack developer with over a decade of
                        experience building fast, secure, and scalable web
                        applications. My expertise lies in JavaScript and
                        Node.js, with deep knowledge of modern front-end
                        frameworks like React, Vue, and Svelte. Whether it’s a
                        dynamic web app or a high-performance static site, I
                        focus on clean, maintainable code and thoughtful user
                        experiences from front to back.
                    </p>
                </div>
            </div>
        </section>
    )
}
