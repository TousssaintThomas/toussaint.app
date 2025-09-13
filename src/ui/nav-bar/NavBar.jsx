'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

import styles from './navBar.module.scss'
import LogoAnimation from './LogoAnimation'
import { fadeVariants } from '@/utils/motionVariants'

// Icons
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import EditDocumentIcon from '@mui/icons-material/EditDocument'
import CallIcon from '@mui/icons-material/Call'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)

    // Note: The navigation links are two separate list because they are
    // rendered as two separate lists depending on the screen size.

    // Internal page links
    const navLinks = [
        {
            name: 'About Me',
            icon: AccountBoxIcon,
            href: '#summary'
        },
        {
            name: 'Resume',
            icon: EditDocumentIcon,
            href: '#resume'
        },
        {
            name: 'Contact',
            icon: CallIcon,
            href: '#contact'
        }
    ]

    // Offsite profile links
    const offSiteLinks = [
        {
            name: 'Github',
            icon: GitHubIcon,
            href: process.env.NEXT_PUBLIC_GITHUB
        },
        {
            name: 'LinkedIn',
            icon: LinkedInIcon,
            href: process.env.NEXT_PUBLIC_LINKEDIN
        }
    ]

    const NavList = ({ links }) => {
        return (
            <ul
                className={`
                    flex 
                    flex-col 
                    md:flex-row 
                    text-center 
                    items-center
                `}
            >
                {links.map((link) => {
                    const Icon = link.icon

                    return (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={`
                                    flex
                                    uppercase
                                    cursor-pointer
                                    rounded-md
                                    mr-4
                                    text-center
                                    px-2
                                    py-2
                                    mb-8
                                    md:mb-0
                                `}
                            >
                                <Icon className={`mt-[-2px] mr-3`} />
                                <p
                                    className={`
                                        leading-[16px]
                                        mt-[3px]
                                        font-bold
                                    `}
                                >
                                    {link.name}
                                </p>
                            </a>
                        </li>
                    )
                })}
            </ul>
        )
    }

    const MenuButton = () => {
        return (
            <button
                className={`
                    ${styles['icon-toggle']} 
                    w-[68px] 
                    h-[68px]
                    relative
                    flex
                    justify-center
                    items-center
                    md:hidden
                `}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <MenuIcon
                    fontSize="large"
                    className={`
                        ${menuOpen ? `invisible` : `visible`}
                        absolute
                    `}
                />
                <CloseIcon
                    fontSize="large"
                    className={`
                        ${menuOpen ? `visible` : `invisible`}
                        absolute
                    `}
                />
            </button>
        )
    }

    return (
        <nav
            className={`
                flex
                fixed
                w-screen
                min-h-[64px]
                items-center
                top-0
                left-0
                z-10
                bg-surface
                ${styles['nav-bar']} 
            `}
        >
            <MenuButton />
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="
                            flex
                            flex-col
                            justify-center
                            h-[calc(100vh-64px)]
                            absolute
                            left-0
                            w-full
                            top-[64px]
                            bg-surface
                        "
                        animate="visible"
                        exit="exit"
                        variants={fadeVariants}
                        transition={{ duration: 0.1 }}
                    >
                        <LogoAnimation />
                        <NavList links={navLinks}></NavList>
                        <NavList links={offSiteLinks}></NavList>
                    </motion.div>
                )}
            </AnimatePresence>
            <div
                className={`
                    flex
                    flex-row
                    grow
                    hidden
                    md:flex
                    w-full max-w-screen-xl mx-auto
                `}
            >
                <NavList links={navLinks}></NavList>
                <div className="md:ml-auto">
                    {/* or md:ms-auto for RTL-aware */}
                    <NavList links={offSiteLinks} />
                </div>
            </div>
        </nav>
    )
}
