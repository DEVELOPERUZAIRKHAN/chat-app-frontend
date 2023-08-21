import { useState } from "react";
import { socket } from "../socket";
export function MyForm(){
    const [value,setValue]= useState('')
    const[isLoading, setIsLoading]= useState(false)
    function onSubmit(e){
        e.preventDefault()
        setIsLoading(true)
        socket.timeout(5000).emit('create-something',value,()=>{
            setIsLoading(false)
        })
    }
    return(
        <form action="" onSubmit={onSubmit}>
            <input type="text" onChange={e=>setValue(e.target.value)} />
            <button type="submit" disabled={isLoading}>Submit</button>
        </form>
    )
}