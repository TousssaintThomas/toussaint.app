'use client'

import Image from 'next/image'
import styles from '@/app/home/bio/Bio.module.scss'
import { motion, useInView } from 'motion/react'
import CodeIcon from '@mui/icons-material/Code'
import TerminalIcon from '@mui/icons-material/Terminal'
import CssIcon from '../../../../ui/_icons/css.svg'
import NextIcon from '../../../../ui/_icons/next.svg'
import VueIcon from '../../../../ui/_icons/vuedotjs.svg'
import AngularIcon from '../../../../ui/_icons/angular.svg'
import ReactIcon from '../../../../ui/_icons/react.svg'
import JavascriptIcon from '../../../../ui/_icons/javascript.svg'
import Htmlicon from '../../../../ui/_icons/html5.svg'

export default function IdeAnimation() {
    const iconChips = ['mongodb', 'css']

    const CircuitLanes = () => {
        return (
            <div className={styles['pulsing-circuit']}>
                <Image
                    src={'/images/CircuitBoardLanes.svg'}
                    alt={'n/a'}
                    width={260}
                    height={260}
                    unoptimized={true}
                    className={`${styles['tech-lines']}`}
                ></Image>
            </div>
        )
    }

    const MockIde = () => {
        return (
            <Image
                src={'/images/MockIDE.svg'}
                alt={'n/a'}
                width={260}
                height={260}
                unoptimized={true}
                className={`${styles['mock-ide']}`}
            />
        )
    }

    const parentVariant = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.021,
                staggerDirection: -1
            }
        }
    }

    const childVariant = (x, y) => ({
        hidden: { x: 0, y: 0, opacity: 1 },
        visible: {
            x,
            y,
            transition: { type: 'spring', stiffness: 80, damping: 10 }
        }
    })

    const centerChip = {
        inactive: {
            opacity: 0
        },
        active: {
            opacity: [1, 1, 0]
        }
    }

    const TechStack = () => {
        const radius = 95 // distance from center in px
        const iconChips = [
            'mongodb',
            'css',
            'react',
            'javascript',
            'sass',
            'linkedin'
        ]

        const techIcons = [
            <ReactIcon className="w-8 h-8" />,
            <CssIcon className="w-7 h-7" />,
            <VueIcon className="w-7 h-7" />,
            <Htmlicon className="w-7 h-7" />,
            <AngularIcon className="w-7 h-7" />,
            <JavascriptIcon className="w-7 h-7" />
        ]

        return (
            <div className={`${styles['tech-stack']}`}>
                <motion.div
                    className={`
                        ${styles['icon-stack-center']} 
                        absolute 
                        flex 
                        justify-center 
                        align-middle
                        content-center
                        items-center
                        font
                        z-4
                    `}
                    transition={{
                        type: 'spring',
                        stiffness: 80,
                        damping: 10
                    }}
                >
                    <TerminalIcon />
                    <motion.div
                        variants={centerChip}
                        initial={'inactive'}
                        whileInView={'active'}
                        transition={{ duration: 0.7 }}
                        viewport={{ margin: '-100px 0px -300px 0px' }}
                        className={`${styles['icon-mask']}`}
                    ></motion.div>
                </motion.div>
                {techIcons.map((chip, index) => {
                    const offsetAngle = -Math.PI / 2 // top of the circle
                    const angle =
                        (index / iconChips.length) * 2 * Math.PI + offsetAngle
                    const x = Math.cos(angle) * radius
                    const y = Math.sin(angle) * radius

                    const RGYB = ['B', 'Y', 'G', 'R']

                    return (
                        <motion.div
                            key={index}
                            className={`
                                ${styles['icon-stack']} 
                                absolute 
                                flex 
                                justify-center 
                                align-middle
                                z-1
                            `}
                            variants={parentVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ margin: '-100px 0px -300px 0px' }}
                        >
                            {RGYB.map((color, ind) => {
                                return (
                                    <motion.div
                                        key={`rgyb-${ind}`}
                                        className={`
                                            ${styles['icon-stack']} 
                                            absolute 
                                            flex 
                                            justify-center 
                                            align-middle
                                            z-1
                                        `}
                                        variants={childVariant(x, y)}
                                    ></motion.div>
                                )
                            })}
                            <motion.div
                                key={index}
                                className={`
                                    ${styles['icon-stack']} 
                                    absolute 
                                    flex 
                                    justify-center 
                                    align-middle
                                    items-center
                                    z-1
                                `}
                                variants={childVariant(x, y)}
                            >
                                {chip}
                            </motion.div>
                        </motion.div>
                    )
                })}
            </div>
        )
    }

    return (
        <div className={`${styles['code-anim']} flex-1 relative mb-14`}>
            <CircuitLanes />
            <MockIde />
            <TechStack />
        </div>
    )
}
