import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import styles from './WorkExp.module.css'
import WorkExpData from './WorkExpData.json'
import Skills from './Skills.json'
import AnimatedAvatar from "@/ui/animated-avatar/AnimatedAvatar";

export default function WorkExp() {
	const roleList = WorkExpData.map(role => {

		const skillList = role.skills.map(skillID =>
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
		)

		return (
			<div key={role.id} className={"flex"}>
				<div className={'pr-5'}>
					<AnimatedAvatar></AnimatedAvatar>
				</div>
				<div
					className='
					flex
					flex-wrap
					mb-16 pb-8
					border-b-1
					border-b-indigo-500'
				>
					<p
						className={'flex-1/2 text-base/7'}
					>
						{role.company}, {role.location}
					</p>
					<p className={'flex-1/2 text-right text-xs'}>
						{role.dateStarted} - {role.dateEnded}
					</p>
					<p className={'flex-1/2'}>{role.role}</p>
					<div
						className={'flex-12/12 text-base/7 role-description'}
					>
						<ReactMarkdown>
							{role.description}
						</ReactMarkdown>
					</div>
					<p className={'pb-2 text-sm'}>Applied Skills:</p>
					<ul className={'flex-12/12'}>
						{skillList}
					</ul>
				</div>
			</div>
		)
	})

	return (
		<section className={'grid place-items-center pt-40'}>
			<div className={styles.roleList}>
				{roleList}
			</div>
		</section>
	)
}