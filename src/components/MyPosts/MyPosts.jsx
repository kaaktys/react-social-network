import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                New post
            </div>

            <div className={styles.posts}>
                <Post message='Hi, how are you doing ?' likesCount='0' />
                <Post message='My first post' likesCount='23' />
            </div>
        </div>
    )
}

export default MyPosts