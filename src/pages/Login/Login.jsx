import styles from './Login.module.css'
export default function Login({onChange,value,onSubmit}){

    return(
        <div className={styles.main}>
           <div className={styles.container}>
           <form  className={styles.form} action="">

            <h1 className={styles.mainHeading}>
                Login to Chat
            </h1>
            <input className={styles.input} type="text" value={value} onChange={onChange} />
            <button className={styles.button} onClick={onSubmit}> Login</button>
           </form>
           </div>
        </div>
    )
}