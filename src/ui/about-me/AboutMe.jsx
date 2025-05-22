'use client'

import styles from '@/ui/about-me/AboutMe.module.scss'
import Image from 'next/image'
import { motion } from 'motion/react'
import AnimatedChips from '@/ui/about-me/AnimatedChips'
import AboutMeTxt from './about-me.json'
import IdeAnimation from './IdeAnimation'

export default function AboutMe() {
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
                pt-22
                md:justify-center
            `}
        >
            <IdeAnimation></IdeAnimation>
            <div className={`flex-1 md:px-6 lg:px-8 flex items-center`}>
                <div className="w-full">
                    <div
                        className="
                        w-full
                        mb-8
                        flex
                        flex-col
                        items-center
                        text-center
                    "
                    >
                        <h1 className={`mb-4 section-header`}>
                            {AboutMeTxt.title}
                        </h1>
                        <div className="section-header-divider"></div>
                    </div>
                    <p className={`text-lg text-justify`}>
                        {AboutMeTxt.content}
                    </p>
                </div>
            </div>
        </section>
    )
}
