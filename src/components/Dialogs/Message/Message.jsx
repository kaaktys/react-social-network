import styles from './../Dialogs.module.css'

const Message = (props) => {
    return <div className={styles.dialogs}>{props.message}</div>
}

export default Message