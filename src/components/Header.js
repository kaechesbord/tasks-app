import React from 'react'
import './Header.css'
import { mock_data } from '../App'

const Header = (props) => { 
  return (
    <div className='header'>
      <h2>{props.date}</h2>
      <h4>{props.amnt}</h4>
    </div>
  )
}

export default Header
