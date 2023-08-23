import styles from "./Chat.module.css"


export default function Chat(){



    return (
        <div className={styles.main}>
        <div className={styles.container}>

        <h1 className={styles.mainHeading}>Welcome Uzair </h1>
        <div className={styles.section}>
            <div className={styles.contacts}>
                <div className={styles.contact}>Uzair Khan</div>
                <div className={styles.contact}>Qasim Khan</div>
                <div className={styles.contact}>Abdul Saleem</div>
                <div className={styles.contact}>Bais Khan</div>
                <div className={styles.contact}>Hammad Khan</div>
            </div>
            <div className={styles.chats}>
                <div className={styles.chat}>
                <div className={styles.messageCover}>

                <p className={styles.sender}>Qasim Khan</p>
                <p className={styles.message}>
                    how are you doing these days
                </p>
                </div>

                    <div className={styles.time}>12:30pm</div>
                </div>
                <div className={styles.chat}>
                <div className={styles.messageCover}>

                <p className={styles.sender}>Qasim Khan</p>
                <p className={styles.message}>
                    how are you doing these days
                </p>
                </div>

                    <div className={styles.time}>12:30pm</div>
                </div>
                <div className={styles.chat}>
                <div className={styles.messageCover}>

                <p className={styles.sender}>Qasim Khan</p>
                <p className={styles.message}>
                    how are you doing these days
                </p>
                </div>
                    <div className={styles.time}>12:30pm</div>
                </div>
               
            </div>
        </div>
        </div>
        </div>
    )
}