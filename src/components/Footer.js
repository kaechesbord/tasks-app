import React, { useEffect, useState } from 'react'
import { NavLink} from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath === '/' ? 'home' : 'about');
  }, []);

  return (
    <div className='footer'>
     <NavLink to={"/"} onClick={() => handleLinkClick('home')} className={activeLink === 'home' ? "activeLink" : "inactive"}> <h2 >My shifts</h2></NavLink>
      <NavLink to={"/available-shifts"}  onClick={() => handleLinkClick('about')} className={activeLink === 'about' ? "activeLink" : "inactive"}><h2 >Available shifts</h2></NavLink>
    </div>
  )
}

export default Footer
