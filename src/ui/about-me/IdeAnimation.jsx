'use client'

import Image from 'next/image'
import styles from '@/ui/about-me/AboutMe.module.scss'

export default function IdeAnimation() {
    const iconChips = ['mongodb', 'css']

    const CircuitLanes = () => {
        return (
            <div className={styles['pulsing-circuit']}>
                <div className={styles['pulse-layer']}></div>
                <Image
                    src={'/images/CircuitBoardLanes.svg'}
                    alt={'n/a'}
                    width={260}
                    height={260}
                    unoptimized={true}
                    className={`${styles['tech-lines']}`}
                ></Image>
            </div>
        )
    }

    const MockIde = () => {
        return (
            <Image
                src={'/images/MockIDE.svg'}
                alt={'n/a'}
                width={260}
                height={260}
                unoptimized={true}
                className={`${styles['mock-ide']}`}
            />
        )
    }

    const TechStack = () => {
        return (
            <div className={`${styles['tech-stack']}`}>
                {iconChips.map((chip) => (
                    <div key={chip} className={styles['icon-stack']}></div>
                ))}
            </div>
        )
    }

    return (
        <div className={`${styles['code-anim']} flex-1 relative mb-10`}>
            <CircuitLanes />
            <MockIde />
            <TechStack />
        </div>
    )
}
