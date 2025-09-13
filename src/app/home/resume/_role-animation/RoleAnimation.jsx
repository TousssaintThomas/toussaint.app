'use client'

import styles from './RoleAnimation.module.scss'
import Image from 'next/image'
import { motion } from 'motion/react'
import StovaSwe from './_roles/StovaSwe'

/**
 * RoleAnimation component that displays a fading logo overlay followed by
 * the animated logo component. Intended to create a dynamic avatar animation on
 * scroll.
 *
 * @component
 * @param {Object} props - The component props
 * @param {string} props.src - The image source for the avatar
 * @param {string} [props.alt='/images/idCard.svg'] - The alt text for the
 * avatar image
 *
 * @returns {JSX.Element} The rendered animated avatar element
 */
export default function RoleAnimation({
    src,
    alt = '/images/idCard.svg',
    animation = 'stovaSe'
}) {
    const ANIMATIONS = {
        stovaSe: StovaSwe
    }

    const Animation = ANIMATIONS[`${animation}`]

    return (
        <motion.div
            className={`${styles['_role-animation']} basis-0`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, overflow: 'hidden' }}
        >
            <div className={`${styles['gradient-border']}`}></div>
            <motion.div
                className={`${styles['logo-overlay']}`}
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ margin: '-100px 0px -400px 0px' }}
            >
                <Image
                    src={'/images/meeting_play_logo.jpg'}
                    alt={'n/a'}
                    width={100}
                    height={100}
                    className={`${styles['company-logo']}`}
                />
            </motion.div>
            <Animation />
        </motion.div>
    )
}
