import Image from "next/image";
import styles from './navBar.module.css'

export default function NavBar() {
	return (
		<nav className={styles.navBar}>
			<div>
				<ul>
					<li>
						<a>
							<p>Home</p>
						</a>
					</li>
					<li>
						<a>
							<p>Resume</p>
						</a>
					</li>
					<li>
						<a>
							<p>Contact</p>
						</a>
					</li>
				</ul>
				<ul>
					<li>
						<a>
							<Image
								src={'/github.svg'}
								alt={'n/a'}
								width={20}
								height={20}
							/>
							<p>Github</p>
						</a>
					</li>
					<li>
						<a>
							<Image
								src={'/linkedin.svg'}
								alt={'n/a'}
								width={20}
								height={20}
							/>
							<p>LinkedIn</p>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}