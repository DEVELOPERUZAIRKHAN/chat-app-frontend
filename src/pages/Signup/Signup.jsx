import styles from './Signup.module.css'
export default function Singup({onChange,value,onSubmit}){





    return(
        <div className={styles.main}>
           <div className={styles.container}>
           <form  className={styles.form} action="">

            <h1 className={styles.mainHeading}>
                Signup to Chat
            </h1>
            <input className={styles.input} type="text" value={value} onChange={onChange} />
            <button className={styles.button} onClick={onSubmit}> Join</button>
           </form>
           </div>
        </div>
    )
}