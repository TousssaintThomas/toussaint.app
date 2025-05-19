import styles from '@/ui/page-header/hero-animation/HeroAnimation.module.scss'
import Image from 'next/image'
import { useRef, useEffect } from 'react'

export default function SpaceShuttle({ launched, HeroSubTxtBot }) {
    const SpaceShuttleBounds = useRef(null)

    const imgPath = (img) => `/images/hero-animation/${img}.svg`

    useEffect(() => {
        if (!HeroSubTxtBot?.current || !SpaceShuttleBounds.current) return

        const heroRect = HeroSubTxtBot.current.getBoundingClientRect()
        const containerRect = SpaceShuttleBounds.current.getBoundingClientRect()

        const distance = containerRect.top - heroRect.bottom

        console.log('DISTANCE', distance)
        // Clamp or subtract buffer if needed
        const safeDistance = Math.max(distance, 0)

        SpaceShuttleBounds.current.style.setProperty(
            '--shuttle-launch-distance',
            `-${safeDistance}px`
        )
    }, [HeroSubTxtBot])

    const ShuttleFlames = () => {
        return (
            <div
                className={`
                    ${styles['flame-container']} 
                    ${launched ? styles['show-flames'] : styles['hide-flames']}
                `}
            >
                {Array.from({ length: 5 }).map((_, i) => (
                    <Image
                        key={i}
                        src={imgPath('RocketFlame')}
                        alt="Rocket Flame"
                        width={100}
                        height={100}
                        unoptimized
                        className={styles['rocket-flame']}
                    />
                ))}
            </div>
        )
    }

    return (
        <div
            className={`
                ${styles['launch-pad-container']} 
                
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
                <div className={`${styles['launch-pad']}`}>
                    <Image
                        src={imgPath('LaunchPad')}
                        alt={'n/a'}
                        width={2000}
                        height={300}
                        unoptimized={true}
                        className={`${styles['shuttle-launch-pad']}`}
                    />
                    <div
                        className={`
                            ${styles['space-shuttle']} 
                            ${launched ? styles.launched : ''}
                        `}
                        ref={SpaceShuttleBounds}
                    >
                        <Image
                            src={imgPath('SpaceShuttle')}
                            alt={'n/a'}
                            width={2000}
                            height={300}
                            unoptimized={true}
                        />
                        <ShuttleFlames />
                    </div>
                    <div
                        className={`
                        ${styles['smoke-clouds']}
                        ${launched ? styles['launched'] : styles['landed']}
                    `}
                    >
                        <Image
                            src={imgPath('SmallSmokeCloud')}
                            alt={'n/a'}
                            width={2000}
                            height={300}
                            unoptimized={true}
                        />
                        <Image
                            src={imgPath('BigSmokeCloud')}
                            alt={'n/a'}
                            width={2000}
                            height={300}
                            unoptimized={true}
                        />
                    </div>
                    <Image
                        src={imgPath('ShuttleElevator')}
                        alt={'n/a'}
                        width={2000}
                        height={300}
                        unoptimized={true}
                        className={`${styles['shuttle-elevator']}`}
                    />
                </div>
            </div>
        </div>
    )
}
