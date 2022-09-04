import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={styles.coverImg}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd_ceXFx-z6Rdz44pYBnF5doc-cLzOsYMMsHuvqKp1kDQH8tygfYUtSoWJ6YP6wjfCK2U&usqp=CAU' />
            </div>
            <div className={styles.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo