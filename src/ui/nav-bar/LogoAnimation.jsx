'use client'

import Image from 'next/image'
import { useState } from 'react'
import styles from './navBar.module.scss'
import { motion, useInView, AnimatePresence } from 'motion/react'

export default function LogoAnimation() {
    const [menuOpen, setMenuOpen] = useState(false)

    const fadeVariants = {
        hidden: {
            opacity: 0,
            pointerEvents: 'none'
        },
        visible: {
            opacity: 1,
            pointerEvents: 'auto'
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.1 }
        }
    }

    return (
        <div
            className={`
                ${styles['site-logo']}
                w-full
                h-24
            `}
        >
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 0.5 }}
                transition={{
                    type: 'spring',
                    duration: 0.4,
                    ease: 'easeOut',
                    delay: 0.14,
                    stiffness: 70,
                    damping: 3
                }}
                className={`
                    absolute
                    w-full
                    flex
                    justify-center
                    left-0
                `}
            >
                <Image
                    src="/images/dev-logo/DevLogoB.svg"
                    width={150}
                    height={150}
                    alt="alt"
                />
            </motion.div>
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 0.5 }}
                transition={{
                    type: 'spring',
                    duration: 0.4,
                    ease: 'easeOut',
                    delay: 0.12,
                    stiffness: 80,
                    damping: 3
                }}
            >
                <Image
                    src="/images/dev-logo/DevLogoY.svg"
                    width={150}
                    height={150}
                    alt="alt"
                />
            </motion.div>
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 0.5 }}
                transition={{
                    type: 'spring',
                    duration: 0.4,
                    ease: 'easeOut',
                    delay: 0.08,
                    stiffness: 80,
                    damping: 3
                }}
            >
                <Image
                    src="/images/dev-logo/DevLogoG.svg"
                    width={150}
                    height={150}
                    alt="alt"
                />
            </motion.div>
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 0.5 }}
                transition={{
                    type: 'spring',
                    duration: 0.4,
                    ease: 'easeOut',
                    delay: 0.05,
                    stiffness: 80,
                    damping: 3
                }}
            >
                <Image
                    src="/images/dev-logo/DevLogoR.svg"
                    width={150}
                    height={150}
                    alt="alt"
                />
            </motion.div>
            <motion.div
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{
                    type: 'spring',
                    duration: 0.4,
                    ease: 'easeOut',
                    stiffness: 90,
                    damping: 3
                }}
            >
                <Image
                    src="/images/hero-animation/DevLogo.svg"
                    width={150}
                    height={150}
                    alt="alt"
                />
            </motion.div>
        </div>
    )
}
