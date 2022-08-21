import styles from './Navbar.module.css'

const Navbar = () => {
    return <nav className={styles.navbar}>
        <div className={styles.item}>
            <a href='/profile'>Profile</a>
        </div>
        <div className={`${styles.item} ${styles.active}`}>
            <a href='/messages'>Messages</a>
        </div>
        <div className={styles.item}>
            <a>News</a>
        </div>
        <div className={styles.item}>
            <a>Music</a>
        </div>
        <div className={styles.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar