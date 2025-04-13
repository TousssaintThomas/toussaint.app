'use client'

import styles from '@/ui/hero-animation/HeroAnimation.module.scss'
import Image from 'next/image'

export default function HeroAnimation({ launched }) {
    return (
        <div className={`${styles.backgroundAnim}`}>
            <div className={styles.cloudsTop}>
                {[...Array(2)].map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>
            <div className={`${styles.moonIMG}`}>
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
                        src="/CresantMoon.svg"
                        alt="Moon"
                        width={70}
                        height={70}
                        unoptimized
                    />
                </div>
            </div>
            <div className={`${styles.cloudsBottomBackground} z-0`}>
                {[...Array(2)].map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>
            <div className={`${styles.cloudsBottomForeground} z-2`}>
                {[...Array(2)].map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>
            <div className={`${styles.mountainRange} z-1`}>
                <Image
                    src="/MountainRange.svg"
                    alt="Mountain Range"
                    width={2000}
                    height={300}
                    unoptimized
                    className={styles.mountainRangeImg}
                />
            </div>
            <div
                className={`
                ${styles.launchPadContainer} 
                
            `}
            >
                <div
                    className={`
                    z-3
                w-full 
                h-full
                flex 
                justify-center 
                items-center 
                max-w-screen-xl 
                mx-auto 
                px-4
                sm:px-10
                md:px-8 
                lg:px-8
                `}
                >
                    <div className={`${styles.launchPad}`}>
                        <Image
                            src={'/LaunchPad.svg'}
                            alt={'n/a'}
                            width={2000}
                            height={300}
                            unoptimized={true}
                            className={`${styles.shuttleLaunchPad}`}
                        />
                        <div
                            className={`
                                ${styles.spaceShuttle} 
                                ${launched ? styles.launched : ''}
                            `}
                        >
                            <Image
                                src={'/SpaceShuttle.svg'}
                                alt={'n/a'}
                                width={2000}
                                height={300}
                                unoptimized={true}
                            />
                            <div
                                className={`
                                    ${styles.flameContainer} 
                                    ${launched ? styles.showFlames : ''}
                                `}
                            >
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Image
                                        key={i}
                                        src="/RocketFlame.svg"
                                        alt="Rocket Flame"
                                        width={100}
                                        height={100}
                                        unoptimized
                                        className={styles.rocketFlame}
                                    />
                                ))}
                            </div>
                        </div>
                        <Image
                            src={'/ShuttleElevator.svg'}
                            alt={'n/a'}
                            width={2000}
                            height={300}
                            unoptimized={true}
                            className={`${styles.shuttleElevator}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
