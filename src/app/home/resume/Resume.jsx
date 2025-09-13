'use client'

import { motion, useInView } from 'motion/react'
import { childVariant, parentVariant } from '@/utils/motionVariants'
import Image from 'next/image'
import styles from './Resume.module.scss'
import WorkExpData from './Resume.json'
import Skills from './Skills.json'
import RoleAnimation from '@/app/home/resume/_role-animation/RoleAnimation'
import SectionHeader from '@/ui/section-header/SectionHeader'

export default function Resume() {
    const roleList = WorkExpData.map((role) => {
        const skillList = role.skills.map((skillID) => (
            <li key={skillID} className={'inline-flex'}>
                <a className={'md-chip mr-2 mb-2 select-none cursor-pointer'}>
                    <Image
                        src={`/icons/${Skills[skillID].icon}.svg`}
                        width={25}
                        height={25}
                        alt="Picture of the author"
                        className={'inline-block pr-2'}
                    />
                    {Skills[skillID].name}
                </a>
            </li>
        ))

        return (
            <div
                key={role.id}
                className={'flex flex-col md:flex-row gap-4 mb-4'}
            >
                <motion.div
                    className={`w-full`}
                    variants={childVariant}
                    initial={'hidden'}
                    whileInView={'visible'}
                    transition={{ duration: 0.25 }}
                >
                    <SectionHeader headerTxt={role.company} variant />
                </motion.div>
                <motion.div
                    className={'flex justify-center items-center mb-6'}
                    variants={childVariant}
                    initial={'hidden'}
                    whileInView={'visible'}
                    transition={{ duration: 0.25 }}
                >
                    <RoleAnimation src={role.avatarID} />
                </motion.div>
                <hr className={'mb-4'} />
                <motion.div
                    className="
					flex
					flex-wrap
					mb-6 pb-8"
                    variants={parentVariant}
                    initial={'hidden'}
                    whileInView={'visible'}
                >
                    <motion.div
                        className="flex flex-row w-full mb-4"
                        variants={childVariant}
                    >
                        <div
                            className="
                                basis-1/3
                                pr-4
                                border-r
                                border-dashed
                                border-white
                                flex
                                items-center
                            "
                        >
                            <Image
                                src="/images/meeting_play_logo.jpg"
                                alt="n/a"
                                className="w-full h-auto object-contain"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="basis-2/3 pl-4">
                            <p className="text-xl">{role.role}</p>
                            <p>{role.company}</p>
                            <p>
                                {role.dateStarted} - {role.dateEnded}
                            </p>
                            <p className="text-base/7">{role.location}</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className={'flex mb-4 text-justify'}
                        variants={childVariant}
                    >
                        <p>
                            Lorem dolor sit amet consectetur adipisicing elit.
                            Maxime mollitia, molestiae quas vel sint commodi
                            repudiandae consequuntur voluptatum laborumnumquam
                            blanditiis ha
                        </p>
                    </motion.div>
                    {/*<div
                        className={`
                            ${styles['role-description']} 
                            flex-12/12 
                            text-lg 
                            role-description 
                            text-justify
                        `}
                    >
                        <ReactMarkdown>{role.description}</ReactMarkdown>
                    </div>*/}
                    <motion.div
                        className={`flex flex-col`}
                        variants={childVariant}
                    >
                        <p className={'pb-2 text-sm'}>Applied Skills:</p>
                        <ul className={'flex-12/12'}>{skillList}</ul>
                    </motion.div>
                </motion.div>
            </div>
        )
    })

    return (
        <section id={'resume'} className={'grid place-items-center pt-20'}>
            <motion.div
                className={'w-full'}
                variants={childVariant}
                initial={'hidden'}
                whileInView={'visible'}
                transition={{ duration: 0.25 }}
            >
                <SectionHeader headerTxt={'Resume'} />
            </motion.div>
            <div className={`${styles['role-list']} mt-6`}>{roleList}</div>
        </section>
    )
}
