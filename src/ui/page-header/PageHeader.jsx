'use client'

import { useEffect, useState } from 'react'
import styles from './PageHeader.module.scss'
import Image from 'next/image'
import HeaderText from './HeaderText.json'

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
            <div className={`${styles.backgroundAnim}`}>
                <div className={`${styles.cloudsTop}`}>
                    <div className={`${styles.cloudsBg}`}></div>
                    <div className={`${styles.cloudsBg}`}></div>
                </div>
                <div className={`${styles.moonIMG}`}>
                    <div>
                        <Image
                            src="/CresantMoon.svg"
                            alt="Moon"
                            width={70}
                            height={70}
                            unoptimized
                        />
                    </div>
                </div>
                <div className={`${styles.cloudsBottom}`}>
                    <div>
                        <div className={`${styles.cloudsBg2}`}></div>
                        <div className={`${styles.cloudsBg3}`}></div>
                    </div>
                    <div>
                        <div className={`${styles.cloudsBg2}`}></div>
                        <div className={`${styles.cloudsBg3}`}></div>
                    </div>
                </div>
                <div className={`${styles.mountainRange}`}>
                    <Image
                        src="/MountainRange.svg"
                        alt="Mountain Range"
                        width={2000}
                        height={300}
                        unoptimized
                        className={styles.mountainRangeImg}
                    />
                </div>
                <div className={`${styles.launchPadContainer}`}>
                    <div>
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
                                className={`${styles.spaceShuttle} ${launched ? styles.launched : ''}`}
                            >
                                <Image
                                    src={'/SpaceShuttle.svg'}
                                    alt={'n/a'}
                                    width={2000}
                                    height={300}
                                    unoptimized={true}
                                />
                                <div
                                    className={`${styles.flameContainer} ${launched ? styles.showFlames : ''}`}
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
