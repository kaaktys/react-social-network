import styles from './Profile.module.css'

const Profile = () => {
    return <div className={styles.profile}>
        <div className={styles.coverImg}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd_ceXFx-z6Rdz44pYBnF5doc-cLzOsYMMsHuvqKp1kDQH8tygfYUtSoWJ6YP6wjfCK2U&usqp=CAU' />
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    </div>
}

export default Profile