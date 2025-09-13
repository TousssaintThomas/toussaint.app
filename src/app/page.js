import Image from 'next/image'
import Header from '@/app/home/header/Header'
import AboutMe from '@/app/home/bio/Bio'
import Resume from '@/app/home/resume/Resume'
import { motion } from 'motion/react'

export default function Home() {
    return (
        <div className="w-full min-h-screen">
            <Header></Header>
            <main
                className="
                    w-full
                    max-w-screen-xl
                    mx-auto
                    px-4
                    sm:px-6
                    lg:px-8"
            >
                <AboutMe></AboutMe>
                <Resume></Resume>
            </main>
        </div>
    )
}
