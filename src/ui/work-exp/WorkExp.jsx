import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import styles from './WorkExp.module.scss'
import WorkExpData from './WorkExpData.json'
import Skills from './Skills.json'
import AnimatedAvatar from '@/ui/animated-avatar/AnimatedAvatar'

export default function WorkExp() {
    const roleList = WorkExpData.map((role) => {
        const skillList = role.skills.map((skillID) => (
            <li key={skillID} className={'inline-flex'}>
                <a className={'md-chip mr-2 mb-2 select-none cursor-pointer'}>
                    <Image
                        src={Skills[skillID].icon}
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
                <div className={'flex justify-center items-center mb-6'}>
                    <AnimatedAvatar src={role.avatarID} />
                </div>
                <div
                    className="
					flex
					flex-wrap
					mb-6 pb-8"
                >
                    <div
                        className="
					    flex
					    flex-wrap"
                    >
                        <p className={'flex-1/2 text-base/7'}>
                            {role.company}, {role.location}
                        </p>
                        <p className={'flex-1/2 text-right text-xs'}>
                            {role.dateStarted} - {role.dateEnded}
                        </p>
                        <p className={'flex-1/2'}>{role.role}</p>
                    </div>
                    <div
                        className={
                            'flex-12/12 text-lg role-description text-justify'
                        }
                    >
                        <ReactMarkdown>{role.description}</ReactMarkdown>
                    </div>
                    <div className={`flex flex-col`}>
                        <p className={'pb-2 text-sm'}>Applied Skills:</p>
                        <ul className={'flex-12/12'}>{skillList}</ul>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <section id={'resume'} className={'grid place-items-center'}>
            <div className="w-full flex flex-col items-center text-center">
                <h1
                    className={`${styles['section-header']} text-xl md:text-left`}
                >
                    Experience
                </h1>
                <div
                    className={`${styles['section-divider']} mt-2 mb-16`}
                ></div>
            </div>
            <div className={styles['role-list']}>{roleList}</div>
        </section>
    )
}
