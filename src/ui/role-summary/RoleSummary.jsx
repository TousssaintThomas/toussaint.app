import styles from '@/ui/role-summary/RoleSummary.module.scss'
import Image from 'next/image'

export default function RoleSummary() {
    return (
        <section
            className={`${styles.summarySection} flex flex-col md:flex-row gap-6 mb-6`}
        >
            <div className={`${styles.codeAnim} flex-1`}>
                <Image
                    src={'/MockIDE.svg'}
                    alt={'n/a'}
                    width={260}
                    height={260}
                    unoptimized={true}
                    className={`${styles.mockIDE}`}
                />
                <div className={styles.pulsingCircuit}>
                    <div className={styles.pulseLayer}></div>
                    <Image
                        src={'/CircuitBoardLanes.svg'}
                        alt={'Circuit board lanes'}
                        width={2000}
                        height={300}
                        unoptimized={true}
                        className={styles.laneMask}
                    />
                </div>
            </div>
            <div className={`flex-1 px-6 md:px-6 lg:px-8`}>
                <h1>Digital Nature is a Premium Web Development Company</h1>
                <p className={`text-justify`}>
                    We are a small team of passionate developers who specialize
                    in modern JavaScript websites with a focus on performance
                    and security. We leverage popular development frameworks to
                    create both static websites as well as dynamic database
                    driven web applications. With over 10 years of experience we
                    work with clients all over the world and in all major
                    industries.
                </p>
            </div>
        </section>
    )
}
