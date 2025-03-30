import styles from './PageHeader.module.scss'
import Image from "next/image";

export default function PageHeader() {
	return (
		<header className={`${styles.pageHeader} flex`}>
			<div className={`${styles.backgroundAnim}`}>
				<div className={`${styles.cloudsTop}`}>
					<div className={`${styles.cloudContainers}`}>
						<div className={`${styles.cloudsBg}`}></div>
					</div>
					<div className={`${styles.cloudContainers}`}>
						<div className={`${styles.cloudsBg}`}></div>
					</div>
				</div>
				<div className={`${styles.cloudsBottom}`}>
					<div className={`${styles.cloudContainers}`}>
						<div className={`${styles.cloudsBg2}`}></div>
						<div className={`${styles.cloudsBg3}`}></div>
					</div>
					<div className={`${styles.cloudContainers2}`}>
						<div className={`${styles.cloudsBg2}`}></div>
						<div className={`${styles.cloudsBg3}`}></div>
					</div>
				</div>
				<div className={`${styles.mountainRange}`}>
					<Image
						src={'/MountainRange.svg'}
						alt={'n/a'}
						width={2000}
						height={300}
						unoptimized={true}
					/>
				</div>
				<div className={`${styles.launchPad}`}>
					<Image
						src={'/LaunchPad.svg'}
						alt={'n/a'}
						width={2000}
						height={300}
						unoptimized={true}
					/>
					<Image
						src={'/SpaceShuttle.svg'}
						alt={'n/a'}
						width={2000}
						height={300}
						unoptimized={true}
						className={`${styles.testClass}`}
					/>
				</div>
			</div>
			<div className={''}>
				<div className={'content-center w-4/5 hero-text'}>
					<h1 className="text-6xl pb-2">Toussaint Thomas</h1>
					<ul className={`${styles.jobRoles}`}>
						<li>Full Stack Developer</li>
						<li>-</li>
						<li>Software Engineer</li>
						<li>-</li>
						<li>Web Developer</li>
					</ul>
				</div>
			</div>
		</header>
	)
}