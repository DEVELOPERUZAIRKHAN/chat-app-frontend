import styles from './Signup.module.css'
export default function Singup({onChange,value,onSubmit}){


    return(
        <div className={styles.main}>
           <div className={styles.container}>
            <h1>
                Signup to Chat
            </h1>
            <input type="text" value={value} onChange={onChange} />
            <button onClick={onSubmit}> Join</button>
           </div>
        </div>
    )
}