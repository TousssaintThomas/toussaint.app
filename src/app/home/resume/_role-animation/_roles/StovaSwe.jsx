'use client'

import { useRef } from 'react'
import { useInView } from 'motion/react'
import styles from './StovaSwe.module.scss'
import IdCard from '@/ui/_icons/IdCard.svg'

export default function StovaSwe() {
    const ref = useRef(null)
    const inView = useInView(ref, { amount: 0.6, margin: '-10% 0px -30% 0px' })

    return (
        <div
            ref={ref}
            className={`
        ${styles['stova-se-animation']} 
        ${inView ? styles['is-active'] : ''}
        w-full h-full
      `}
        >
            <div className={styles['anim-container']}>
                <div className={styles['code-anim']}>
                    <IdCard />
                </div>
                <div className={styles['code-anim']}>
                    <IdCard />
                </div>
                <div className={styles['code-anim']}>
                    <IdCard />
                </div>
            </div>
        </div>
    )
}
