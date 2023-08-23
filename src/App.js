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
import Chat from "./pages/Chat/Chat";
import { signup } from "./api/internal";
function App() {

  const [isConnected, setIsConnected] = useState(socket.connected)
  const [fooEvents,setFooEvents] = useState([])
  const [value,setValue] = useState('')
  const [loginVal,setLoginVal]= useState('')
  const [nameResponse,setNameResponse] = useState({})
  const handleSignupChange=(e)=>{
    setValue(e.target.value)
  }

  const handleLoginChange=(e)=>{
    setLoginVal(e.target.value)
  }

  const handleSubmit= async (e)=>{
    e.preventDefault()
    let data={
      username:value,
    }
    let response;
    try{
      response = await signup(data)
      console.log(response)
    }catch(error){
      console.log(error)
    }

  }
  const handleLogin=(e)=>{
    e.preventDefault()
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
      setNameResponse({})
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
          <Login onSubmit={handleLogin} value={loginVal} onChange={handleLoginChange} />
          } />
          <Route path='/chat' exact element={
          <Chat />
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
