'use client'

import { useEffect, useState } from 'react'
import styles from './PageHeader.module.scss'
import Image from 'next/image'
import HeaderText from './HeaderText.json'
import HeroAnimation from '@/ui/hero-animation/HeroAnimation'

export default function PageHeader() {
    const [launched, setLaunched] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                // you can tweak this value
                setLaunched(true)
            } else {
                setLaunched(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`${styles.pageHeader} flex`}>
            <HeroAnimation launched={launched}></HeroAnimation>
            <div
                className={`
                    ${styles.heroText} 
                    w-full 
                    h-full
                    flex 
                    items-center 
                    max-w-screen-xl 
                    mx-auto 
                    px-4
                    sm:px-10
                    md:px-8 
                    lg:px-8
                `}
            >
                <div
                    className={`sm:max-w-xl md:max-w-8/10 lg:max-w-8/10 xl:max-w-xl`}
                >
                    <h1 className={`${styles.heroTextDevName}`}>
                        {HeaderText.name}
                    </h1>
                    <h1 className={`${styles.devTitle}`}>{HeaderText.title}</h1>
                    <p className={`${styles.heroSubText}`}>
                        {HeaderText.subText}
                    </p>
                    <div className={`${styles.headerDivider}`}></div>
                    <a href="#summary" className={styles.outlinedButton}>
                        Learn More
                    </a>
                </div>
            </div>
        </header>
    )
}
