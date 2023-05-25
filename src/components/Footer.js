import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    const [active, setActive] = useState(true)
  return (
    <div className='footer'>
     <Link to={"/"}> <h2 className={active ? 'active' : 'inactive'}>My shifts</h2></Link>
      <Link to={"/available-shifts"}><h2 className={active ? 'active' : 'inactive'}>Available shifts</h2></Link>
    </div>
  )
}

export default Footer
