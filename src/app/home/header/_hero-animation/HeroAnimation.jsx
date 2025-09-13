'use client'

import styles from '@/app/home/header/_hero-animation/HeroAnimation.module.scss'
import Image from 'next/image'
import SpaceShuttle from '@/app/home/header/_hero-animation/SpaceShuttle'
import StarField from '@/app/home/header/_hero-animation/StarField'
import { useEffect } from 'react'

export default function HeroAnimation({ launched, HeroSubTxtBot }) {
    const imgPath = (img) => `/images/hero-animation/${img}.svg`

    const ScrollingClouds = ({ className }) => {
        return (
            <div className={className}>
                {[...Array(2)].map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>
        )
    }

    useEffect(() => {
        if (HeroSubTxtBot.current) {
            console.log(HeroSubTxtBot.current.getBoundingClientRect().bottom)
        }
    }, [])

    return (
        <div className={`${styles['background-anim']}`}>
            <StarField />
            <div className={styles['clouds-top']}>
                {[...Array(2)].map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>
            <div className={`${styles['moon-img']}`}>
                <div
                    className={`
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
                    <Image
                        src={imgPath('CresantMoon')}
                        alt="Moon"
                        width={70}
                        height={70}
                        unoptimized
                    />
                </div>
            </div>
            <div className={`${styles['clouds-bottom-background']} z-0`}>
                {[...Array(2)].map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>
            <div className={`${styles['clouds-bottom-foreground']} z-2`}>
                {[...Array(2)].map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>
            <div className={`${styles['mountain-range']} z-1`}>
                <Image
                    src={imgPath('MountainRange')}
                    alt="Mountain Range"
                    width={2000}
                    height={300}
                    unoptimized
                    className={styles['mountain-range-img']}
                />
            </div>
            <SpaceShuttle
                launched={launched}
                HeroSubTxtBot={HeroSubTxtBot}
            ></SpaceShuttle>
            <div className={`${styles['cactus-group']} z-1`}>
                <Image
                    src={imgPath('CactusGroup')}
                    alt={'Cactus'}
                    width={2000}
                    height={300}
                />
            </div>
        </div>
    )
}
