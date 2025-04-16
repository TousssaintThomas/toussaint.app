'use client'

import Image from 'next/image'
import { useState } from 'react'
import styles from './navBar.module.scss'
import { motion, useInView, AnimatePresence } from 'motion/react'

// Icons
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import HomeIcon from '@mui/icons-material/Home'
import EditDocumentIcon from '@mui/icons-material/EditDocument'
import CallIcon from '@mui/icons-material/Call'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const navItems = [
        { name: 'Home', icon: HomeIcon, href: '#summary' },
        { name: 'Resume', icon: EditDocumentIcon, href: '#resume' },
        { name: 'Contact', icon: CallIcon, href: '#contact' }
    ]

    const offSiteLinks = [
        {
            name: 'Github',
            icon: GitHubIcon,
            href: 'https://github.com/TousssaintThomas'
        },
        {
            name: 'LinkedIn',
            icon: LinkedInIcon,
            href: 'https://www.linkedin.com/in/toussaint-thomas-aa725196/'
        }
    ]

    const navList = navItems.map((item) => {
        const Icon = item.icon

        return (
            <li key={item.name}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                    <Icon className={styles['nav-icon']} />
                    <p>{item.name}</p>
                </a>
            </li>
        )
    })

    const offsiteList = offSiteLinks.map((item) => {
        const Icon = item.icon

        return (
            <li key={item.name}>
                <a href={item.href}>
                    <Icon className={styles['nav-icon']} />
                    <p>{item.name}</p>
                </a>
            </li>
        )
    })

    const fadeVariants = {
        hidden: { opacity: 0, pointerEvents: 'none' },
        visible: { opacity: 1, pointerEvents: 'auto' },
        exit: { opacity: 0, transition: { duration: 0.1 } }
    }

    return (
        <nav
            className={`${styles['nav-bar']} ${menuOpen ? styles['menu-open'] : ''}`}
        >
            <div>
                <button
                    className={`px-6`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <div className={styles['icon-toggle']}>
                        <MenuIcon
                            className={
                                menuOpen ? styles.hidden : styles.visible
                            }
                        />
                        <CloseIcon
                            className={
                                menuOpen ? styles.visible : styles.hidden
                            }
                        />
                    </div>
                </button>
            </div>
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={fadeVariants}
                        transition={{ duration: 0.15 }}
                    >
                        <ul>{navList}</ul>
                        <ul>{offsiteList}</ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
