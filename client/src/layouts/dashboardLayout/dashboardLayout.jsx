import { useAuth } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ChatList from '../../components/chatList/ChatList'
import "./dashboardlayout.css"


const dashboardLayout = () => {

  const {userId, isLoaded} = useAuth()

  const navigate = useNavigate()

  useEffect(()=>{
    if(isLoaded && !userId){
    navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if(!isLoaded) return "Loading...";

  return (
    <div className='dashboardLayout'>
        <div className="menu"><ChatList/></div>
        <div className="content">CONTENT</div>
    </div>
  )
}

export default dashboardLayout;