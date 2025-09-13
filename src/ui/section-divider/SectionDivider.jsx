'use client'

import { motion } from 'motion/react'
import AboutMeTxt from '@/app/home/bio/Bio.json'
import styles from '@/app/home/bio/Bio.module.scss'

export default function SectionDivider({ headerTxt }) {
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

    return (
        <motion.div
            className="
            w-full
            mb-8
            flex
            flex-col
            items-center
            text-center
        "
            variants={childVariant}
        >
            <motion.div
                className={`${styles['section-header-divider']} text-center`}
            >
                <motion.div
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                    className={`bg-primary`}
                ></motion.div>
            </motion.div>
        </motion.div>
    )
}
