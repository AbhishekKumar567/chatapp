import React, { useEffect, useState } from 'react'
import {user} from "../Join/Join"
import "./ch.css"
import socketIO from "socket.io-client"
import {Message} from "../message/Message"
import ReactScrollToBottom from "react-scroll-to-bottom"


let socket 
const ENDPOINT = "http://localhost:4000/"

export const Ch = () => {
    
    const[id,setid] = useState("")
    const [messages,setMessages] = useState([])

    const send = () =>{
       const message = document.getElementById('chatinput').value
        socket.emit('message',{message,id})
        document.getElementById('chatinput').value=""
    }

   useEffect(()=>{
     
    socket = socketIO(ENDPOINT, { transports: ['websocket'] })

    socket.on('connect',()=>{
        alert("connected")
        setid(socket.id)
    })
    
    socket.emit('joined',{user})

    socket.on('welcome',(data)=>{
        setMessages([...messages,data])
        console.log(data.user,data.message)
    })

    socket.on('userjoined',(data)=>{
        setMessages([...messages,data])
        console.log(data.user,data.message)
    })

    socket.on('leave',(data)=>{
        setMessages([...messages,data])
        console.log(data.user,data.message)
    })

    return () =>{
        socket.emit('disconnect')
        socket.off()
    }
 },[]) 


  useEffect(() => {
    socket.on('sendmessage',(data)=>{
        setMessages([...messages,data])
        console.log(data.user,data.message,data.id)
    })
  
    return () => {
      socket.off()
    }
  }, [messages])
  
    
    
    return (
        <div className='chatpage'>
            <div className='chatcontainer'>
                <div className='header'>
                </div>
                <ReactScrollToBottom className='chatbox'>
                    {
                     messages.map((item) => <Message user={item.id===id?'':item.user} message={item.message} cls={item.id===id?'right':'left'}/>)
                    }
                </ReactScrollToBottom>
                <div className='inputbox'>
                    <input onKeyPress={(event)=>event.key==='Enter'?send():null} type="text" id="chatinput" />
                    <button onClick={send} className='sendbtn'>Send</button>
               </div>
            </div>
        </div>
    )
 }
