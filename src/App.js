import styles from "./App.module.css"
import SocketConnection from "./components/SocketConnection/SocketConnection";
function App() {
  
  return (
    <div className={styles.app}>
      <h1>Hello there</h1>
      <SocketConnection/>
    </div>

  )
  }
export default App;
