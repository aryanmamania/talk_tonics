import React, { useEffect, useRef } from 'react'
import "./chatpage.css"

const Chatpage = () => {


  const endRef = useRef(null)

  useEffect(()=>{
    endRef.current.scrollIntoView({ behaviour:"smooth" });
  }, []);
  
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test Message</div>
           <div className="message-user">Test message from user</div>
           <div className="message">Test Message from ai</div>
           <div className="message-user">Test message from user</div> 


           <div className="message">Test Message</div>
           <div className="message-user">Test message from user</div>
           <div className="message">Test Message from ai</div>
           <div className="message-user">Test message from user</div> 


           <div className="message">Test Message</div>
           <div className="message-user">Test message from user</div>
           <div className="message">Test Message from ai</div>
           <div className="message-user">Test message from user</div> 


           <div className="message">Test Message</div>
           <div className="message-user">Test message from user</div>
           <div className="message">Test Message from ai</div>
           <div className="message-user">Test message from user</div> 


           <div className="message">Test Message</div>
           <div className="message-user">Test message from user</div>
           <div className="message">Test Message from ai</div>
           <div className="message-user">Test message from user</div> 

<div className={endRef}></div>

        </div>
      </div>
    </div>
  )
}



export default Chatpage