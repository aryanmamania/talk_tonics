import React from 'react'
import './homepage.css'
import { Link } from 'react-router-dom';

const homepage = () => {
  return (
    <div className="homepage">
      <div className="left">
        <h1>Aryan</h1>
        <h2>HI</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repellat magnam? Ab modi nemo asperiores minima? Deserunt suscipit dolorum nisi voluptatibus ea magni veritatis voluptate, qui aliquam reiciendis. Cum, distinctio!</h3>
      <button>Get Started</button>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default homepage;