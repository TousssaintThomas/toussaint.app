import styles from './SubHeader.module.scss'

export default function SubHeader({ txt }) {
    return (
        <div className={`${styles['header-variant']}`}>
            <h1>{txt}</h1>
            <hr />
        </div>
    )
}
