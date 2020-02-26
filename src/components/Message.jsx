import React from 'react'
const Message = (props)=>{
    return <div>
              <p className={`alert alert-${props.status}`}> {props.text} </p> 
           </div>
    
}

export default Message