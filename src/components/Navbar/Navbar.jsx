import styles from './Navbar.module.css'

const Navbar = () => {
    return <div className={styles.navbar}>
        <nav>
            <div className={styles.item}>
                <a>Profile</a>
            </div>
            <div className={styles.item}>
                <a>Messages</a>
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
    </div>
}

export default Navbar