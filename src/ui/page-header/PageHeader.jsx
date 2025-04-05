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
            <div className={`${styles.heroText}`}>
                <div>
                    <div>
                        <p>Hello, my name is</p>
                        <h1 className={`${styles.heroTextDevName}`}>
                            {HeaderText.name}
                        </h1>
                        <h1 className={`${styles.devTitle}`}>
                            {HeaderText.title}
                        </h1>
                        <p className={`${styles.heroSubText}`}>
                            {HeaderText.subText}
                        </p>
                        <div className={`${styles.headerDivider}`}></div>
                        <a href="#summary" className={styles.outlinedButton}>
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
