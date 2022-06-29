import React from 'react'
import "./mess.css"

export const Message = ({user,message,cls}) => {

    if(user)
    {
        return (
            <div className={`messagebox ${cls}`}>
             {`${user}:${message}`}
            </div>
          )

    }
    else{
        return (
            <div className={`messagebox ${cls}`}>
             {`You:${message}`}       
        
            </div>
          )

    }
  
}
