"use client";

import Image from "next/image";
import { useState } from "react";
import styles from './navBar.module.scss'

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function NavBar() {

	const [menuOpen, setMenuOpen] = useState(false)

	const navItems = [
		{ name: 'Home', icon: HomeIcon },
		{ name: 'Resume', icon: EditDocumentIcon },
		{ name: 'Contact', icon: CallIcon}
	]

	const offSiteLinks = [
		{ name: 'Github', icon: GitHubIcon },
		{ name: 'LinkedIn', icon: LinkedInIcon }
	]

	const navList = navItems.map(item => {
		const Icon = item.icon

		return (
			<li key={item.name}>
				<a onClick={() => setMenuOpen(false)}>
					<Icon className={styles.navIcon} />
					<p>{item.name}</p>
				</a>
			</li>
		)
	})

	const offsiteList = offSiteLinks.map(item => {
		const Icon = item.icon

		return (
			<li key={item.name}>
				<a>
					<Icon className={styles.navIcon} />
					<p>{item.name}</p>
				</a>
			</li>
		)
	})

	return (
		<nav className={`${styles.navBar} ${menuOpen ? styles.menuOpen : ''}`}>
			<div>
				<button
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<div className={styles.iconToggle}>
						<MenuIcon
							className={menuOpen ? styles.hidden : styles.visible}
						/>
						<CloseIcon
							className={menuOpen ? styles.visible : styles.hidden}
						/>
					</div>
				</button>
			</div>
			<div>
				<ul>
					{navList}
				</ul>
				<ul>
					{offsiteList}
				</ul>
			</div>
		</nav>
	)
}