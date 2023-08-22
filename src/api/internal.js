import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:5000',
    withCredentials:true,
    headers:{
        "Content-Type":"application/json"
    }
})


export const signup=async (data)=>{

    let response ;
    try{
      response = await api.post('/signup',data)
        console.log(response)
      return response
    }
    catch(error){
        console.log(error)
        return error
    }
}
export const login=async (data)=>{
    let response;
    try{
        response= await api.post('/login',data)
        console.log(response)
        return response
    }
    catch(error){
        console.log(error)
        return error
    }
}

export const sendMessage = async (data)=>{
    let response;
    try{
        response= await api.post('/send',data)
        console.log(response)
        return response
    }
    catch(error){
        console.log(error)
        return error
    }
}

