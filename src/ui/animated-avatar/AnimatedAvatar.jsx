import styles from './AnimatedAvatar.module.scss'
import Image from 'next/image'

export default function AnimatedAvatar({ src, alt = 'Avatar' }) {
    return (
        <div className={`${styles.animatedAvatar} basis-0`}>
            <Image src={src} alt={alt} width={80} height={80} unoptimized />
        </div>
    )
}
