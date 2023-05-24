import React, { useState } from 'react'
import './Footer.css'

const Footer = () => {
    const [active, setActive] = useState(true)
  return (
    <div className='footer'>
      <h2 className={active ? 'active' : 'inactive'}>My shifts</h2>
      <h2 className={active ? 'active' : 'inactive'}>Available shifts</h2>
    </div>
  )
}

export default Footer
