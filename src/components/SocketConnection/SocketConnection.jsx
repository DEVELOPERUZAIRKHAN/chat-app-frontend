import styles from "./SocketConnection.module.css"
import { useEffect } from "react";
import io from 'socket.io-client'


const SOCKET_SERVER_URL = 'http://localhost:5000';

function SocketConnection(){


    useEffect(() => {
      
        const socket = io(SOCKET_SERVER_URL)
        socket.on('connect', () => {
            console.log('Connected to server');
        });

        socket.on('message', (message) => {
            console.log('Received Message: ' + message);
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

      return () => {    
        socket.disconnect()
        
      }
    }, [])
    

    return (
        <div className={styles.main}>
            SOCKET.IO connection established
        </div>
    )
}

export default SocketConnection;