import styles from "./App.module.css"
import { socket } from "./socket";
import { useState, useEffect} from 'react'
import {ConnectionState} from './components/ConnectionState'
import {ConnectionManager} from './components/ConnectionManager'
import {MyForm} from './components/MyForm'
import { Events } from "./components/Events";
function App() {

  const [isConnected, setIsConnected] = useState(socket.connected)
  const [fooEvents,setFooEvents] = useState([])
  useEffect(() => {
    function onConnect(){
      setIsConnected(true)
    }
    function onDisconnect(){
      setIsConnected(false)
    }
    function onFooEvent (value){
          setFooEvents(prev=>[...prev,value])
    }
    socket.on('connect',onConnect)
    socket.on('disconnect',onDisconnect)
    socket.on('foo',onFooEvent)
  
    return () => {
      socket.off('connect',onConnect)
      socket.off('disconnect',onDisconnect)
      socket.off('foo',onFooEvent)
    }
  }, [])
  
  return (


    <div className={styles.app}>
      <ConnectionState isConnected={isConnected} />
      <Events events={fooEvents}/>
      <ConnectionManager  />
      <MyForm/>
    </div>

  )
  }
export default App;
