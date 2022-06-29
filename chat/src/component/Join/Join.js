import React, { useState } from 'react'
import './Join.css'
import {Link} from "react-router-dom"


let user

const send = () =>{
  user=document.getElementById('joinInput').value
  document.getElementById('joinInput').value=""
}

export const Join = () => {
 
  const[name,setname]=useState("")

  return (
    <div className='main'>
      <div className='container'>
        <h1>ichat</h1>
        <input onChange={(e)=> setname(e.target.value)} placeholder="Enter Your Name" type="text" id="joinInput"/>
       <Link onClick={(event)=>!name?event.preventDefault():null} to="/chat"><button onClick={send} className="joinbtn">Login</button></Link> 
      
      </div> 
    </div>
  )
}

export {user}