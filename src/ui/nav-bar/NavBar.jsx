"use client";

import Image from "next/image";
import { useState } from "react";
import styles from './navBar.module.scss'

export default function NavBar() {

	const [menuOpen, setMenuOpen] = useState(false)

	const navItems = [
		{ name: 'Home', icon: 'Icon' },
		{ name: 'Resume', icon: 'Icon' },
		{ name: 'Contact', icon: 'Icon'}
	]

	const offSiteLinks = [
		{ name: 'Github', icon: 'Icon' },
		{ name: 'LinkedIn', icon: 'Icon' }
	]

	const navList = navItems.map(item => {
		return (
			<li key={item.name}>
				<a onClick={() => setMenuOpen(false)}>
					<p>{item.name}</p>
				</a>
			</li>
		)
	})

	const offsiteList = offSiteLinks.map(item => {
		return (
			<li key={item.name}>
				<a>
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
					Menu
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