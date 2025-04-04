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
                ${styles.summarySection} 
                flex 
                flex-col 
                md:flex-row 
                py-16
            `}
        >
            <div className={`${styles.codeAnim} flex-1 relative`}>
                <Image
                    src={'/MockIDE.svg'}
                    alt={'n/a'}
                    width={260}
                    height={260}
                    unoptimized={true}
                    className={`${styles.mockIDE}`}
                />
                <div className={styles.pulsingCircuit}>
                    <div className={styles.pulseLayer}></div>
                    <Image
                        src={'/CircuitBoardLanes.svg'}
                        alt={'Circuit board lanes'}
                        width={2000}
                        height={300}
                        unoptimized={true}
                        className={styles.laneMask}
                    />
                </div>
                <AnimatedChips></AnimatedChips>
            </div>
            <div className={`flex-1 px-6 md:px-6 lg:px-8`}>
                <h1 className={`${styles.summarySectionHeader}`}>Digital Nature is a Premium Web Development Company</h1>
                <p className={`${styles.summarySectionTxt} text-justify`}>
                    We are a small team of passionate developers who specialize
                    in modern JavaScript websites with a focus on performance
                    and security. We leverage popular development frameworks to
                    create both static websites as well as dynamic database
                    driven web applications. With over 10 years of experience we
                    work with clients all over the world and in all major
                    industries.
                </p>
            </div>
        </section>
    )
}
