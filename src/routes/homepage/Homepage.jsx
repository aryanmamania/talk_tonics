import React from 'react'
import './homepage.css'
import { Link } from 'react-router-dom';

const homepage = () => {
  return (
    <div className="homepage">
      <Link to ="/dashboard">Dashboard</Link>
    </div>
  )
}

export default homepage;