import styles from "./App.module.css"
import { socket } from "./socket";
import { useState, useEffect} from 'react'
import {ConnectionState} from './components/ConnectionState'
import {ConnectionManager} from './components/ConnectionManager'
import {MyForm} from './components/MyForm'
import { Events } from "./components/Events";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Singup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
function App() {

  const [isConnected, setIsConnected] = useState(socket.connected)
  const [fooEvents,setFooEvents] = useState([])
  const [value,setValue] = useState('')
  const handleSignupChange=(e)=>{
    setValue(e.target.value)
  }


  const handleSubmit=()=>{
    
  }
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
      <BrowserRouter>
        <Routes>
        
          <Route path='/signup' exact element={
          <Singup onSubmit={handleSubmit} value={value} onChange={handleSignupChange}/>
          } />

          <Route path='/login' exact element={
          <Login />
          } />

        </Routes>
      </BrowserRouter>
      {/* <ConnectionState isConnected={isConnected} />
      <Events events={fooEvents}/> 
      <ConnectionManager  />
      <MyForm/>        */}
    </div>

  )
  }
export default App;
