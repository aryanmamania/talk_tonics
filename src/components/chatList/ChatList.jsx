import React from 'react'
import { Link } from 'react-router-dom'
import "./chatList.css";

const ChatList = () => {
  return (
  <div className="chatList">
    <span className='title'>Dashboard</span>
    <Link to="/dashboard"> Create a new Chat</Link>
    <Link to="/"> Explore Mamania AI </Link>
    <Link to="/"> Contact </Link>
    <hr/>
    <div className="list">
        <Link to="/">My Chat title </Link>
        <Link to="/">My Chat title </Link>
        <Link to="/">My Chat title </Link>
        <Link to="/">My Chat title </Link>
        <Link to="/">My Chat title </Link>
        <Link to="/">My Chat title </Link>
        <Link to="/">My Chat title </Link>
        <Link to="/">My Chat title </Link>
        
    </div>
<hr/>
<div className="upgrade">
    <img src="/logo.png" alt="" />
    <div className="texts">
        <span>Upgrade</span>
        <span>Unlimited features</span>
    </div>
</div>
  </div>
  )
}

export default ChatList