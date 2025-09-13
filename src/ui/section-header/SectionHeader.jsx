'use client'

import { motion } from 'motion/react'
import AboutMeTxt from '@/app/home/bio/Bio.json'
import styles from '@/app/home/bio/Bio.module.scss'

export default function SectionHeader({ headerTxt, variant = false }) {
    const childVariant = {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.25,
                repeatType: 'reverse'
            }
        }
    }

    return variant ? (
        <div className={`${styles['header-variant']}`}>
            <h1>{headerTxt}</h1>
            <hr />
        </div>
    ) : (
        <motion.div
            className="
            w-full
            mb-8
            flex
            flex-col

        "
            variants={childVariant}
        >
            <motion.div
                className="
                            w-full
                            flex
                            flex-col

                        "
            >
                <h1 className={`mb-4 section-header`}>{headerTxt}</h1>
            </motion.div>
            <motion.div className={`${styles['section-header-divider']}`}>
                <motion.div
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                    className="stuff"
                ></motion.div>
            </motion.div>
        </motion.div>
    )
}
