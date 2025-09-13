'use client'

import { motion } from 'motion/react'
import { childVariant, parentVariant } from '@/utils/motionVariants'
import IdeAnimation from './_ide-animation/IdeAnimation'
import SectionDivider from '@/ui/section-divider/SectionDivider'
import styles from '@/app/home/bio/Bio.module.scss'
import AboutMeTxt from './Bio.json'
import SectionHeader from '@/ui/section-header/SectionHeader'

export default function AboutMe() {
    return (
        <section
            id="summary"
            className={`
        ${styles['summary-section']}
        flex flex-col
        pt-22
      `}
        >
            {/* Full-width header row */}
            <motion.div
                className="w-full flex-grow basis-full"
                variants={childVariant}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.25 }}
            >
                <SectionHeader headerTxt="About Me" variant />
            </motion.div>

            {/* Two-column content: stack on mobile, side-by-side on md+ */}
            <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                {/* Left: IDE animation */}
                <motion.div
                    className="flex-1 flex items-center md:px-6 lg:px-8"
                    variants={childVariant}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.25 }}
                >
                    <IdeAnimation />
                </motion.div>

                {/* Right: text content */}
                <motion.div
                    className="flex-1"
                    variants={parentVariant}
                    initial="hidden"
                    whileInView="visible"
                >
                    <SectionDivider />
                    <motion.div className="mb-12" variants={childVariant}>
                        <p className="text-lg text-justify">
                            {AboutMeTxt.content}
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            <motion.hr className="solid" variants={childVariant} />
        </section>
    )
}
