import styles from './PageHeader.module.scss'
import Image from "next/image";
import HeaderText from './HeaderText.json'

export default function PageHeader() {
	return (
		<header className={`${styles.pageHeader} flex`}>
			<div className={`${styles.backgroundAnim}`}>
				<div className={`${styles.cloudsTop}`}>
					<div className={`${styles.cloudsBg}`}></div>
					<div className={`${styles.cloudsBg}`}></div>
				</div>
				<div className={`${styles.moonIMG}`}>
					<div>
						<Image
							src="/CresantMoon.svg"
							alt="Moon"
							width={70}
							height={70}
							unoptimized

						/>
					</div>
				</div>
				<div className={`${styles.cloudsBottom}`}>
					<div>
						<div className={`${styles.cloudsBg2}`}></div>
						<div className={`${styles.cloudsBg3}`}></div>
					</div>
					<div>
						<div className={`${styles.cloudsBg2}`}></div>
						<div className={`${styles.cloudsBg3}`}></div>
					</div>
				</div>
				<div className={`${styles.mountainRange}`}>
					<Image
						src="/MountainRange.svg"
						alt="Mountain Range"
						width={2000}
						height={300}
						unoptimized
						className={styles.mountainRangeImg}
					/>
				</div>
				<div className={`${styles.launchPadContainer}`}>
					<div>
						<div className={`${styles.launchPad}`}>
							<Image
								src={'/LaunchPad.svg'}
								alt={'n/a'}
								width={2000}
								height={300}
								unoptimized={true}
								className={`${styles.shuttleLaunchPad}`}
							/>
							<Image
								src={'/SpaceShuttle.svg'}
								alt={'n/a'}
								width={2000}
								height={300}
								unoptimized={true}
								className={`${styles.spaceShuttle}`}
							/>
							<Image
								src={'/ShuttleElevator.svg'}
								alt={'n/a'}
								width={2000}
								height={300}
								unoptimized={true}
								className={`${styles.shuttleElevator}`}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles.heroText}`}>
				<div>
					<div>
						<p>Hello, my name is</p>
						<h1 className={`${styles.heroTextDevName}`}>{HeaderText.name}</h1>
						<h1 className={`${styles.devTitle}`}>{HeaderText.title}</h1>
						<p className={`${styles.heroSubText}`}>{HeaderText.subText}</p>
						<div className={`${styles.headerDivider}`}></div>
						<button className={`${styles.outlinedButton}`}>Learn More</button>
					</div>
				</div>
			</div>
		</header>
	)
}